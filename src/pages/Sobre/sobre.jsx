import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia, Grid, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper } from '@mui/material';

import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";

export default function Sobre() {
  return (
    <>
      <Header />
    <Container>
      {/* Título */}
      <Box mt={5} textAlign="center" borderRadius={2} bgcolor="var(--accent)" p={4} mb={4}>
        <Typography variant="h3">Sobre a equipe</Typography>
      </Box>

      {/* Conteúdo */}
      <Box p={4} mb={4} bgcolor="var(--background)" borderRadius={2}>
        <Typography paragraph>
          Essa plataforma foi produzida como parte integral da nota da matéria de desenvolvimento web 1 na formação da equipe, sendo o objetivo construir um site fazendo uso apenas de HTML e CSS.
        </Typography>

        {/* Cards da equipe */}
        <Grid container spacing={4} direction="column"> {/* Alinhamento vertical */}
          {/* Cartão 1 */}
          <Grid item xs={12}>
            <a href="https://www.linkedin.com/in/kermany-josé-20764611a" style={{ textDecoration: 'none' }}>
              <Card sx={{ cursor: 'pointer' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={2} style={{ margin: 'auto' }}>
                    <CardMedia
                      component="img"
                      image="https://cdn-icons-png.flaticon.com/512/1373/1373255.png"
                      alt="José Kermany"
                      style={{ width: 100, height: 100 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <CardContent>
                      <Typography variant="h5" color="textPrimary">Jose Kermany</Typography>
                      <Typography paragraph color="textSecondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti inventore minima consequatur, ducimus, dolorem alias nisi ipsa magni, ea distinctio est? Vitae pariatur repellat dolores ullam officia ex incidunt quia?
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </a>
          </Grid>

          {/* Cartão 2 */}
          <Grid item xs={12}>
            <a href="https://www.linkedin.com/in/marcos-noberto-63739b303/" style={{ textDecoration: 'none' }}>
              <Card sx={{ cursor: 'pointer' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={2} style={{ margin: 'auto' }}>
                    <CardMedia
                      component="img"
                      image="https://cdn-icons-png.flaticon.com/512/1373/1373255.png"
                      alt="Marcos Noberto"
                      style={{ width: 100, height: 100 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <CardContent>
                      <Typography variant="h5" color="textPrimary">Marcos Noberto</Typography>
                      <Typography paragraph color="textSecondary">
                        Formado como técnico de nível médio em Informática para Internet pelo IFRN em 2022, e atualmente estudante de Tecnologia da Informação na UFRN...
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </a>
          </Grid>

          {/* Cartão 3 */}
          <Grid item xs={12}>
            <a href="https://www.linkedin.com/in/mário-xaxá-32922920a/" style={{ textDecoration: 'none' }}>
              <Card sx={{ cursor: 'pointer' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={2} style={{ margin: 'auto' }}>
                    <CardMedia
                      component="img"
                      image="https://cdn-icons-png.flaticon.com/512/1373/1373255.png"
                      alt="Mario Luiz"
                      style={{ width: 100, height: 100 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <CardContent>
                      <Typography variant="h5" color="textPrimary">Mario Luiz</Typography>
                      <Typography paragraph color="textSecondary">
                        Sou apenas um estudante de programação que gosta de soluções criativas...
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </a>
          </Grid>
        </Grid>

        {/* Tabela */}
        <Box mt={5}>
          <Typography variant="h4" mb={3}>Comidas favoritas da equipe</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Lanche</TableCell>
                  <TableCell>Sobremesa</TableCell>
                  <TableCell>Bebida</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>José K.</TableCell>
                  <TableCell>Hamburguer</TableCell>
                  <TableCell>Sorvete</TableCell>
                  <TableCell>Café</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Marcos N.</TableCell>
                  <TableCell>Esfiha</TableCell>
                  <TableCell>Mousse</TableCell>
                  <TableCell>Nevada</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mario L.</TableCell>
                  <TableCell>Pastel</TableCell>
                  <TableCell>Açai</TableCell>
                  <TableCell>Grapete</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Container>
    <Footer />
    </>
  );
}