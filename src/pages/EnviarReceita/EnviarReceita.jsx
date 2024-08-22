import React, { useState } from "react";
import Header from "../../components/Header/Header";
import './EnviarReceita.css'
import {
  Grid,
  Box,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Typography,
  Button
} from "@mui/material";

export default function EnviarReceita() {
  // Estado para armazenar os valores dos campos do formulário
  const [formData, setFormData] = useState({
    nome_receita: '',
    tipo: '',
    tempo: '',
    porções: '',
    imagem: null,
    ingredientes: '',
    como_fazer: ''
  });

  // Função para lidar com a mudança dos campos do formulário
  const handleChange = (event) => {
    const { id, value, type, files } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: type === 'file' ? files[0] : value
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Criação do objeto JSON com os dados do formulário
    const dataToLog = {
      nome_receita: formData.nome_receita,
      tipo: formData.tipo,
      tempo: formData.tempo,
      porções: formData.porções,
      imagem: formData.imagem ? formData.imagem.name : null, // Apenas o nome do arquivo
      ingredientes: formData.ingredientes,
      como_fazer: formData.como_fazer
    };
    
    // Log do JSON no console
    console.log("Dados do Formulário:", JSON.stringify(dataToLog, null, 2));
  };

  return (
    <div>
      <Header />
      <main>
        <section>
          <div id="nos-mande">
            <h1>Nos mande sua receita</h1>
          </div>
          <div id="form-receita">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} sx={{ mb: 1 }}>
                {/* Primeira Coluna: Nome da Receita */}
                <Grid item xs={8}>
                  <Box sx={{ mb: 2, width: "100%" }}>
                    <InputLabel htmlFor="nome_receita" sx={{ mb: 1 }}>
                      Nome da Receita
                    </InputLabel>
                    <TextField
                      id="nome_receita"
                      variant="outlined"
                      fullWidth
                      value={formData.nome_receita}
                      onChange={handleChange}
                    />
                  </Box>
                </Grid>

                {/* Segunda Coluna: Tipo */}
                <Grid item xs={4}>
                  <Box 
                    sx={{  
                      width: "100%", 
                      display: 'flex', 
                      justifyContent: 'center' // Centraliza horizontalmente
                    }}
                  >
                    <FormControl fullWidth>
                      <InputLabel htmlFor="tipo" sx={{ mb: 1 }}>
                        Tipo
                      </InputLabel>
                      <Select
                        id="tipo"
                        value={formData.tipo || ''}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          height: "56px", // Ajustando a altura para form-control-lg
                        }}
                      >
                        <MenuItem value="">
                          <em>Escolha o tipo</em>
                        </MenuItem>
                        <MenuItem value="Ave">Ave</MenuItem>
                        <MenuItem value="Bebida">Bebida</MenuItem>
                        <MenuItem value="Carne">Carne</MenuItem>
                        <MenuItem value="Fruto do Mar">Fruto do Mar</MenuItem>
                        <MenuItem value="Lanche">Lanche</MenuItem>
                        <MenuItem value="Massa">Massa</MenuItem>
                        <MenuItem value="Salada">Salada</MenuItem>
                        <MenuItem value="Sobremesa">Sobremesa</MenuItem>
                        <MenuItem value="Sopa">Sopa</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mb: 1 }}>
                {/* Primeira Coluna: Erro Nome */}
                <Grid item xs={8}>
                  <Box sx={{ mb: 3 }}>
                    <Typography id="erro_nome" variant="body2" color="error">
                      {/* Mensagem de erro para Nome da Receita */}
                    </Typography>
                  </Box>
                </Grid>

                {/* Segunda Coluna: Erro Tipo */}
                <Grid item xs={4}>
                  <Box sx={{ mb: 3 }}>
                    <Typography id="erro_tipo" variant="body2" color="error">
                      {/* Mensagem de erro para Tipo */}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={2} id="detalhes-receita">
                {/* Tempo de Preparo */}
                <Grid item xs={4}>
                  <Box sx={{ mb: 3 }}>
                    <InputLabel htmlFor="tempo">
                      Tempo de Preparo
                    </InputLabel>
                    <TextField
                      id="tempo"
                      variant="outlined"
                      fullWidth
                      value={formData.tempo}
                      onChange={handleChange}
                      InputProps={{
                        sx: {
                          borderRadius: 1,
                        },
                      }}
                    />
                  </Box>
                </Grid>

                {/* Número de Porções */}
                <Grid item xs={4}>
                  <Box sx={{ mb: 3 }}>
                    <InputLabel htmlFor="porções">
                      Número de Porções
                    </InputLabel>
                    <TextField
                      id="porções"
                      variant="outlined"
                      fullWidth
                      value={formData.porções}
                      onChange={handleChange}
                      InputProps={{
                        sx: {
                          borderRadius: 1,
                        },
                      }}
                    />
                  </Box>
                </Grid>

                {/* Imagem */}
                <Grid item xs={4}>
                  <Box sx={{ mb: 3 }}>
                    <InputLabel htmlFor="imagem">
                      Imagem
                    </InputLabel>
                    <TextField
                      id="imagem"
                      type="file"
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                      InputProps={{
                        sx: {
                          borderRadius: 1,
                        },
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mb: 1 }}>
                {/* Erro Tempo */}
                <Grid item xs={4}>
                  <Box>
                    <Typography id="erro_tempo" variant="body2" color="error">
                      {/* Mensagem de erro para Tempo de Preparo */}
                    </Typography>
                  </Box>
                </Grid>

                {/* Erro Porção */}
                <Grid item xs={4}>
                  <Box>
                    <Typography id="erro_porção" variant="body2" color="error">
                      {/* Mensagem de erro para Número de Porções */}
                    </Typography>
                  </Box>
                </Grid>

                {/* Erro Imagem */}
                <Grid item xs={4}>
                  <Box>
                    <Typography id="erro_imagem" variant="body2" color="error">
                      {/* Mensagem de erro para Imagem */}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={2} id="preparo-receita">
                {/* Ingredientes */}
                <Grid item xs={4}>
                  <Box>
                    <InputLabel htmlFor="ingredientes">
                      Ingredientes
                    </InputLabel>
                    <TextField
                      id="ingredientes"
                      variant="outlined"
                      multiline
                      rows={7}
                      fullWidth
                      value={formData.ingredientes}
                      onChange={handleChange}
                      InputProps={{
                        sx: {
                          borderRadius: 1,
                        },
                      }}
                    />
                  </Box>
                </Grid>

                {/* Como fazer */}
                <Grid item xs={8}>
                  <Box>
                    <InputLabel htmlFor="como_fazer">
                      Como fazer
                    </InputLabel>
                    <TextField
                      id="como_fazer"
                      variant="outlined"
                      multiline
                      rows={7}
                      fullWidth
                      value={formData.como_fazer}
                      onChange={handleChange}
                      InputProps={{
                        sx: {
                          borderRadius: 1,
                        },
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                {/* Erro Ingredientes */}
                <Grid item xs={4}>
                  <Box>
                    <Typography id="erro_ingredientes" variant="body2" color="error">
                      {/* Mensagem de erro para Ingredientes */}
                    </Typography>
                  </Box>
                </Grid>

                {/* Erro Como Fazer */}
                <Grid item xs={8}>
                  <Box>
                    <Typography id="erro_como_fazer" variant="body2" color="error">
                      {/* Mensagem de erro para Como fazer */}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Box sx={{ textAlign: 'center', mt: 2 }}>
                {/* Botão Enviar */}
                <Button
                  id="botão_enviar_receita"
                  variant="contained"
                  color="success"
                  type="submit"
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    m: 'auto' 
                  }}
                >
                  Enviar
                </Button>

                {/* Mensagem de Receita Enviada */}
                <Typography id="receita_enviada" variant="body2" sx={{ mt: 2 }}>
                  {/* Mensagem sobre receita enviada */}
                </Typography>
              </Box>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
