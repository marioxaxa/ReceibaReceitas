import React, { useState, useEffect } from "react";
import { db, collection, getDocs, storage, ref, getDownloadURL } from "./firebase";
import {
  Grid,
  Box,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Card,
  CardContent,
  CardMedia,
  IconButton
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";

// Estiliza o botão do ícone
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  fontSize: 40, // Aumenta o tamanho do ícone
}));

// Estiliza o texto para garantir tamanho consistente
const InfoText = styled(Typography)(({ theme }) => ({
  fontSize: 'body1.fontSize', // Tamanho do texto
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(0.5),
}));

export default function BuscarReceita() {
  const [searchText, setSearchText] = useState("");
  const [checkedCategories, setCheckedCategories] = useState({});
  const [allReceitas, setAllReceitas] = useState([]);
  const [filteredReceitas, setFilteredReceitas] = useState([]);

  useEffect(() => {
    const fetchReceitas = async () => {
      try {
        const receitasCollection = collection(db, "receitas");
        const receitasSnapshot = await getDocs(receitasCollection);

        if (receitasSnapshot.empty) {
          console.log("Coleção 'receitas' está vazia.");
        } else {
          const receitasList = await Promise.all(
            receitasSnapshot.docs.map(async (doc) => {
              const data = doc.data();
              let imagemUrl = null;

              if (data.imagemReceita) {
                const imgRef = ref(storage, `${data.imagemReceita}`);
                try {
                  imagemUrl = await getDownloadURL(imgRef);
                } catch (error) {
                  console.error("Erro ao obter URL da imagem: ", error);
                }
              }

              return {
                id: doc.id,
                ...data,
                imagemReceita: imagemUrl
              };
            })
          );

          console.log("Receitas encontradas:", receitasList);
          setAllReceitas(receitasList);
          setFilteredReceitas(receitasList); // Inicialmente, mostrar todas as receitas
        }
      } catch (error) {
        console.error("Erro ao buscar receitas: ", error);
      }
    };

    fetchReceitas();
  }, []);

  useEffect(() => {
    const filterReceitas = () => {
      let filtered = allReceitas;

      if (searchText) {
        filtered = filtered.filter(receita =>
          receita.nome.toLowerCase().includes(searchText.toLowerCase())
        );
      }

      if (Object.keys(checkedCategories).length > 0) {
        filtered = filtered.filter(receita =>
          checkedCategories[receita.categoria] // Verifique se `receita.categoria` corresponde às categorias selecionadas
        );
      }

      setFilteredReceitas(filtered);
    };

    filterReceitas();
  }, [searchText, checkedCategories, allReceitas]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedCategories(prevCategories => ({
      ...prevCategories,
      [name]: checked,
    }));
  };

  return (
    <>
      <Header />

      <main>
        <section>
          <Box
            id="ache-aqui"
            padding={2}
            sx={{
              backgroundColor: 'orange',
              color: 'white',
              borderRadius: '12px'
            }}
          >
            <Typography variant="h4">Ache aqui sua receita</Typography>
          </Box>
          <Box
            id="encontre-receita"
            padding={2}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Box id="lista-receita">
                  <Box id="receita_listada" className="lista-categoria">
                    {filteredReceitas.length > 0 ? (
                      filteredReceitas.map((receita) => (
                        <Card key={receita.id} sx={{ marginBottom: 2, width: '100%' }}>
                          {receita.imagemReceita && (
                            <CardMedia
                              component="img"
                              height="200"
                              image={receita.imagemReceita}
                              alt={receita.nome}
                              sx={{ objectFit: 'cover' }} // Faz com que a imagem se ajuste bem ao tamanho
                            />
                          )}
                          <CardContent>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                              {receita.nome}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                              <InfoText color="textSecondary">
                                <strong>Porções:</strong> {receita.porcoes}
                              </InfoText>
                              <InfoText color="textSecondary">
                                <strong>Tempo:</strong> {receita.tempo}
                              </InfoText>
                              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                <StyledIconButton color="primary">
                                  <FavoriteIcon />
                                </StyledIconButton>
                                <Typography variant="body1" color="textSecondary" sx={{ ml: 1 }}>
                                  {receita.curtidas}
                                </Typography>
                              </Box>
                            </Box>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
                          Nenhuma receita encontrada com esses filtros.
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  id="filtro"
                  padding={2}
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: 1,
                  }}
                >
                  <Typography variant="h6" id="filtrar-por-tipo">
                    Filtrar por tipo
                  </Typography>
                  <TextField
                    id="pesquisar-input"
                    fullWidth
                    type="text"
                    placeholder="Pesquisar nome"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    variant="outlined"
                  />
                  <Box
                    id="marcadores"
                    marginTop={2}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '8px',
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          className="checkbox-tipo"
                          name="Ave"
                          checked={checkedCategories["Ave"] || false}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="Aves"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          className="checkbox-tipo"
                          name="Bebida"
                          checked={checkedCategories["Bebida"] || false}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="Bebidas"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          className="checkbox-tipo"
                          name="Carne"
                          checked={checkedCategories["Carne"] || false}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="Carnes"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          className="checkbox-tipo"
                          name="Sobremesa"
                          checked={checkedCategories["Sobremesa"] || false}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="Sobremesas"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          className="checkbox-tipo"
                          name="Lanche"
                          checked={checkedCategories["Lanche"] || false}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="Lanches"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          className="checkbox-tipo"
                          name="Massa"
                          checked={checkedCategories["Massa"] || false}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="Massas"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          className="checkbox-tipo"
                          name="Fruto do mar"
                          checked={checkedCategories["Fruto do mar"] || false}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="Frutos do mar"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          className="checkbox-tipo"
                          name="Salada"
                          checked={checkedCategories["Salada"] || false}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="Saladas"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          className="checkbox-tipo"
                          name="Vegana"
                          checked={checkedCategories["Vegana"] || false}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="Veganas"
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </section>
      </main>
    </>
  );
}
