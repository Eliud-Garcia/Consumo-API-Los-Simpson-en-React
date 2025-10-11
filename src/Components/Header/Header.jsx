import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useMediaQuery,
    useTheme,
    Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { Link } from 'react-router-dom';

import './Header.css';

const navItems = [
    //un array para la barra de navegacion
    { label: 'Inicio', path: '/' },
    { label: 'Personajes', path: '/Personajes' },
    { label: 'Lugares', path: '/Lugares' },
    { label: 'Episodios', path: '/Episodios' },

];

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Drawer
            anchor="right"
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{ display: { xs: 'block', md: 'none' } }}
        >

            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '16px', textAlign: 'right' }}>
                    <IconButton onClick={handleDrawerToggle}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item.label} disablePadding onClick={handleDrawerToggle}>
                            <ListItemButton
                                //USO de Link para router dom
                                component={Link}
                                to={item.path}
                            >
                            
                            <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
            className="header-root"
        >
            <Toolbar disableGutters>

                {/* Logo/Título del Sitio */}
                <Typography
                    variant="h6"
                    component="a"
                    href="/"
                    sx={{
                        flexGrow: 1,
                        color: theme.palette.primary.main,
                        textDecoration: 'none',
                        fontWeight: 700,
                        letterSpacing: '0.5px'
                    }}
                >
                    <img
                        src="https://64.media.tumblr.com/7201a553a30f24eefba6d6ca32a5fb77/tumblr_omte8wmRaZ1ukhddco2_640.pnj"
                        alt=""
                        className='header_donut'
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b7/The_logo_simpsons_yellow.png"
                        alt=""
                        className='header_logo'
                    />
                </Typography>

                {/* Enlaces de Navegación (Desktop) */}
                {!isMobile && (
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                //USO de Link para router dom
                                component={Link}
                                to={item.path}
                                className="nav-button-desktop"
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                )}

                {/* Botón de Hamburguesa */}
                {isMobile && (
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                )}

            </Toolbar>
            {drawer}
        </AppBar>
    );
};

export default Header;