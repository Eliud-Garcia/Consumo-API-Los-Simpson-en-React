import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                background: "linear-gradient(180deg, #8ad5ff 0%, #1976d2 100%)",
                color: "white",
                textAlign: "center",
                py: 3,
                
                boxShadow: "0 -2px 10px rgba(0,0,0,0.2)",
            }}
        >
            <Stack spacing={1} alignItems="center">
                <Typography variant="h6" sx={{ fontWeight: "bold", letterSpacing: 1 }}>
                    The Simpsons app explorer
                </Typography>

                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Desarrollado con ❤️ por{" "}
                    <b>Jhonnier Eliud García</b>
                </Typography>

                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    sx={{ mt: 1 }}
                >
                    <Link
                        href="https://github.com/eliud-garcia/ApiSimpsons_2025IIg1_Garcia_Jhonnier"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: "white",
                            "&:hover": { color: "#ffeb3b" },
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                        }}
                    >
                        <GitHubIcon />
                        GitHub
                    </Link>

                    <Link
                        href="https://thesimpsonsapi.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: "white",
                            "&:hover": { color: "#ffeb3b" },
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                        }}
                    >
                        <LanguageIcon />
                        API Original
                    </Link>
                </Stack>

                <Typography
                    variant="caption"
                    sx={{ mt: 2, fontSize: "0.8rem", opacity: 0.7 }}
                >
                    © {new Date().getFullYear()} Todos los derechos reservados ·
                    Inspirado en <FavoriteIcon sx={{ fontSize: 14, color: "#f44336" }} />{" "}
                    Springfield
                </Typography>
            </Stack>
        </Box>
    );
};

export default Footer;
