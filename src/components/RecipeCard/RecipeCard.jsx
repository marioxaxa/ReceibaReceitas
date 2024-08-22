import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Favorite } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/AppContextDiv";

export default function RecipeCard(receita) {

    const { setRecipe } = React.useContext(AppContext);

    const cardRecipe = receita.receita;

    return (
        <Card sx={{ maxWidth: "12rem" }}>
            <NavLink to={'/receita'} onClick={() => {
                setRecipe(cardRecipe)
            }} >
                <CardMedia
                    sx={{ height: "5rem" }}
                    image={cardRecipe.imageUrl}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {cardRecipe.nome}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button startIcon={<Favorite />}>
                        {cardRecipe.curtidas}
                    </Button>
                </CardActions>
            </NavLink>
        </Card>
    );
}
