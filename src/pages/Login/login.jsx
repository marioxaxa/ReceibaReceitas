import React, { useState } from "react";
import {
    Container,
    TextField,
    Button,
    Typography,
    Card,
    CardContent,
    IconButton,
    InputAdornment,
    Grid,
    Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import { registerUser, loginUser } from "./firebase"; // Atualize o caminho conforme necessário
import "./login.css";
import { AppContext } from "../../context/AppContextDiv";

const Login = () => {

    const { user, setUser } = React.useContext(AppContext);

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [userRegister, setUserRegister] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Estados separados para mensagens de erro e sucesso
    const [loginError, setLoginError] = useState("");
    const [loginSuccess, setLoginSuccess] = useState("");
    const [registerError, setRegisterError] = useState("");
    const [registerSuccess, setRegisterSuccess] = useState("");

    const handleClickShowPassword1 = () => setShowPassword1(!showPassword1);
    const handleClickShowPassword2 = () => setShowPassword2(!showPassword2);

    const handleRegister = async (e) => {
        e.preventDefault();
        setRegisterError("");
        setRegisterSuccess("");

        if (!registerEmail.includes("@")) {
            setRegisterError("O e-mail fornecido é inválido.");
            return;
        }

        if (registerPassword != confirmPassword) {
            setRegisterError("As senhas não coincidem.");
            return;
        }

        try {
            await registerUser(registerEmail, registerPassword, userRegister);
            setRegisterSuccess("Usuário registrado com sucesso!");
            console.log("Usuário registrado com sucesso");
        } catch (error) {
            setRegisterError(error.message);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginError("");
        setLoginSuccess("");

        // Validação básica do formato do e-mail
        if (!loginEmail.includes("@")) {
            setLoginError("O e-mail fornecido é inválido.");
            return;
        }

        try {
            const userId = await loginUser(loginEmail, loginPassword);
            setLoginSuccess("Usuário logado com sucesso!");
            console.log("Usuário logado com sucesso, ID:", userId);
            setUser(userId)
        } catch (error) {
            setLoginError(error.message);
        }
    };

    return (
        <div>
            <Header />
            <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography
                                    variant="h4"
                                    align="center"
                                    gutterBottom
                                >
                                    Conecte-se
                                </Typography>
                                {loginError && (
                                    <Alert severity="error">{loginError}</Alert>
                                )}
                                {loginSuccess && (
                                    <Alert severity="success">
                                        {loginSuccess}
                                    </Alert>
                                )}
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Email"
                                    variant="outlined"
                                    value={loginEmail}
                                    onChange={(e) =>
                                        setLoginEmail(e.target.value)
                                    }
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Senha"
                                    type={showPassword1 ? "text" : "password"}
                                    variant="outlined"
                                    value={loginPassword}
                                    onChange={(e) =>
                                        setLoginPassword(e.target.value)
                                    }
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={
                                                        handleClickShowPassword1
                                                    }
                                                >
                                                    {showPassword1 ? (
                                                        <Visibility />
                                                    ) : (
                                                        <VisibilityOff />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    style={{ marginTop: "1rem" }}
                                    onClick={handleLogin}
                                >
                                    Login
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography
                                    variant="h4"
                                    align="center"
                                    gutterBottom
                                >
                                    Crie sua conta
                                </Typography>
                                {registerError && (
                                    <Alert severity="error">
                                        {registerError}
                                    </Alert>
                                )}
                                {registerSuccess && (
                                    <Alert severity="success">
                                        {registerSuccess}
                                    </Alert>
                                )}
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Usuário"
                                    variant="outlined"
                                    value={userRegister}
                                    onChange={(e) =>
                                        setUserRegister(e.target.value)
                                    }
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Email"
                                    variant="outlined"
                                    value={registerEmail}
                                    onChange={(e) =>
                                        setRegisterEmail(e.target.value)
                                    }
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Senha"
                                    type={showPassword2 ? "text" : "password"}
                                    variant="outlined"
                                    value={registerPassword}
                                    onChange={(e) =>
                                        setRegisterPassword(e.target.value)
                                    }
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={
                                                        handleClickShowPassword2
                                                    }
                                                >
                                                    {showPassword2 ? (
                                                        <Visibility />
                                                    ) : (
                                                        <VisibilityOff />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Confirme a senha"
                                    type={showPassword2 ? "text" : "password"}
                                    variant="outlined"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={
                                                        handleClickShowPassword2
                                                    }
                                                >
                                                    {showPassword2 ? (
                                                        <Visibility />
                                                    ) : (
                                                        <VisibilityOff />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    style={{ marginTop: "1rem" }}
                                    onClick={handleRegister}
                                >
                                    Registrar
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    );
};

export default Login;
