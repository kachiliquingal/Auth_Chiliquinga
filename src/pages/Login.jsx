import { supabase } from "../services/supabaseClient";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  AppBar,
  Toolbar,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  Security as SecurityIcon,
} from "@mui/icons-material";

export default function Login() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({ provider: "github" });
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <AppBar position="static" sx={{ bgcolor: "#24292e" }}>
        <Toolbar>
          <SecurityIcon sx={{ mr: 2 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Auth_Chiliquinga
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <Card elevation={6} sx={{ textAlign: "center", p: 5, borderRadius: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            color="primary"
            fontWeight="bold"
          >
            Iniciar Sesión
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            Acceso seguro al Dashboard con OAuth y JWT.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<GitHubIcon />}
              onClick={handleLogin}
              sx={{
                bgcolor: "#24292e",
                "&:hover": { bgcolor: "#000" },
                px: 4,
                py: 1.5,
              }}
            >
              Entrar con GitHub
            </Button>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
