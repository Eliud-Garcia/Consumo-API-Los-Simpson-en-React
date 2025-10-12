import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('https://thesimpsonsapi.com/clouds-bg.jpg')",
        // background: "linear-gradient(180deg, #fdd835 0%, #fff59d 100%)",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: "white",
          p: 4,
          borderRadius: "20px",
          boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
          animation: "float 3s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-10px)" },
          },
        }}
      >
      
        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "4rem", md: "6rem" },
            color: "#ffb300",
            textShadow: "2px 2px 0 #000",
            mb: 1,
          }}
        >
          404
        </Typography>

        <Typography
          variant="h4"
          sx={{ color: "#f57c00", mb: 2, fontWeight: 600 }}
        >
          D’oh! Página no encontrada
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#444",
            mb: 4,
            lineHeight: 1.6,
            maxWidth: "480px",
            mx: "auto",
          }}
        >
          Parece que te equivocaste de camino en Springfield. La página que buscas no existe. ¿Quizás esté escondida detrás de la Taberna de Moe?
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            backgroundColor: "#fdd835",
            color: "#222",
            fontWeight: 600,
            px: 3,
            py: 1,
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            "&:hover": {
              backgroundColor: "#fbc02d",
              transform: "translateY(-3px)",
              boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
            },
          }}
        >
          Regresar al inicio 🏠
        </Button>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
