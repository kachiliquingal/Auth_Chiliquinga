import { useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  Alert,
  Chip,
  Divider,
  AppBar,
  Toolbar,
  Paper,
  Grid,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  ExitToApp as LogoutIcon,
  Payment as PaymentIcon,
  Refresh as RefreshIcon,
  Code as CodeIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
} from "@mui/icons-material";

export default function Dashboard({ session }) {
  const [pagoExitoso, setPagoExitoso] = useState(false);

  const STRIPE_LINK = "https://buy.stripe.com/test_28EfZh2zp1FS9277k1bwk00";

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("pagado") === "exito") {
      setPagoExitoso(true);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleRefreshToken = async () => {
    const { data, error } = await supabase.auth.refreshSession();
    if (error) alert("Error: " + error.message);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#f5f5f5", minHeight: "100vh", pb: 5 }}>
      <AppBar position="static" sx={{ bgcolor: "#24292e" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button
            color="inherit"
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
          >
            Salir
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <GitHubIcon fontSize="large" />
            </Grid>
            <Grid item xs>
              <Typography variant="h5">Hola, {session.user.email}</Typography>
              <Typography variant="body2" color="text.secondary">
                Sesión activa vía OAuth
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {pagoExitoso ? (
          <Alert
            icon={<CheckCircleIcon fontSize="inherit" />}
            severity="success"
            variant="filled"
            sx={{ mb: 4, borderRadius: 2 }}
          >
            <strong>¡Pago Realizado con Éxito!</strong> Suscripción Premium
            activada.
          </Alert>
        ) : (
          <Card sx={{ mb: 4, borderLeft: "6px solid #ff9800" }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <WarningIcon color="warning" sx={{ mr: 1 }} />
                <Typography variant="h5">Cuenta Gratuita</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <Typography variant="h6">
                  Para desbloquear las funciones Premium, realiza el pago seguro
                  a través de nuestra pasarela.
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                startIcon={<PaymentIcon />}
                href={STRIPE_LINK}
              >
                Pagar $10.00 con Stripe
              </Button>
            </CardContent>
          </Card>
        )}

        <Divider sx={{ my: 4 }}>
          <Chip label="ZONA TÉCNICA" />
        </Divider>

        <Card variant="outlined" sx={{ bgcolor: "#fff" }}>
          <CardContent>
            <Typography
              variant="h6"
              gutterBottom
              display="flex"
              alignItems="center"
            >
              <CodeIcon sx={{ mr: 1 }} /> Credenciales JWT
            </Typography>

            <Box sx={{ mb: 3, display: "flex", gap: 1 }}>
              <Chip
                label={`Rol: ${session.user.role}`}
                color="success"
                variant="outlined"
              />
              <Chip
                label={`Provider: ${session.user.app_metadata.provider}`}
                color="info"
                variant="outlined"
              />
            </Box>

            <Typography variant="caption" fontWeight="bold">
              ACCESS TOKEN (Postman)
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={3}
              value={session.access_token}
              variant="filled"
              InputProps={{
                readOnly: true,
                sx: { fontFamily: "monospace", fontSize: 12 },
              }}
              sx={{ mb: 2 }}
            />

            <Typography variant="caption" fontWeight="bold">
              REFRESH TOKEN
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={2}
              value={session.refresh_token}
              variant="filled"
              InputProps={{
                readOnly: true,
                sx: {
                  fontFamily: "monospace",
                  fontSize: 12,
                  bgcolor: "#e3f2fd",
                },
              }}
              sx={{ mb: 3 }}
            />

            <Button
              variant="outlined"
              color="success"
              fullWidth
              startIcon={<RefreshIcon />}
              onClick={handleRefreshToken}
            >
              Refrescar Token
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
