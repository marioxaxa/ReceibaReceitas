import React, { useEffect, useState } from "react";
import { getFirestore, collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from "../../services/firebaseapp";
import { Box, Grid, Card, CardMedia, CardContent, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import "./ranking.css";

const db = getFirestore(app);
const storage = getStorage(app);

const Ranking = () => {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    const fetchReceitas = async () => {
      try {
        const q = query(collection(db, "receitas"), orderBy("curtidas", "desc"), limit(6));
        const querySnapshot = await getDocs(q);
        const receitasData = [];

        for (const doc of querySnapshot.docs) {
          const receita = doc.data();
          const pathReference = ref(storage, receita.imagemReceita);
          const url = await getDownloadURL(pathReference);
          receitasData.push({ id: doc.id, ...receita, imageUrl: url });
        }

        setReceitas(receitasData);
      } catch (error) {
        console.error("Erro ao obter receitas: ", error);
      }
    };

    fetchReceitas();
  }, [db, storage]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#9fa86b",
          padding: 3,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: 4,
            borderRadius: 3,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            maxWidth: "80%",
            width: "100%",
          }}
        >
          <Typography variant="h3" align="center" gutterBottom>
            Melhores Receitas da Semana
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {receitas.map((receita) => (
              <Grid item xs={12} sm={6} md={4} key={receita.id}>
                <Card
                  onClick={() => {
                    document.cookie = `receita=${receita.id};path=/`;
                    window.location.href = "/p_receita";
                  }}
                  sx={{
                    cursor: "pointer",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={receita.imageUrl}
                    alt={receita.nome}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ padding: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {receita.nome}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                      {receita.tipo || "Tipo não especificado"}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton aria-label="curtidas" disableRipple>
                        <FavoriteIcon sx={{ color: "#de702b" }} />
                      </IconButton>
                      <Typography variant="body2">
                        {receita.curtidas || 0} pessoas curtiram
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Ranking;