import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Button, CircularProgress, Card, CardMedia, CardContent } from '@mui/material';
import Divider from '@mui/material/Divider';

import FondoNubes from './../../assets/clouds.png'

const CharacterDetailPage = () => {
    const { id } = useParams(); //obtener el ID desde la URL
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    const url = 'https://cdn.thesimpsonsapi.com/500';

    useEffect(() => {
        fetch(`https://thesimpsonsapi.com/api/characters/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCharacter(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error loading character:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh'
                }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!character) {
        return (
            <Typography variant="h5" textAlign="center" mt={4}>
                Character not found
            </Typography>
        );
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${FondoNubes})`,
                // background: 'linear-gradient(180deg, #35a6fdff 0%, #9de2ffff 100%)',
                p: 3,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: '20px',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
            >
                <Card
                    sx={{
                        maxWidth: 400,
                        boxShadow: 4,
                        borderRadius: '16px',
                        // background: 'linear-gradient(180deg, #35c8fdff 0%, #9de2ffff 100%)',
                        //background: 'linear-gradient(180deg, #fdf335ff 0%, #fffa9dff 100%)',
                    }}>
                    <CardMedia
                        component="img"
                        alt={character.name}
                        image={url + character.portrait_path}
                        sx={{
                            height: 350,
                            objectFit: 'contain',
                            padding: '10%',
                            borderRadius: '16px',
                        }}
                    />
                </Card>

                <Card
                    sx={{
                        maxWidth: 400,
                        boxShadow: 4,
                        borderRadius: 3,
                    }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ mt: 'auto', fontWeight: '700' }} className='title-card'>
                            {character.name}
                        </Typography>
                        <Divider />
                        <br />
                        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'start', mt: 'auto' }}>
                            {"gender: "}
                            {character.gender}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'start', mt: 'auto' }}>
                            {"ocuppation: "}
                            {character.occupation}
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'start', mt: 'auto' }}>
                            {"status: "}
                            {character.status}
                            {character.status === "Alive" ? " 🟢" : " 🔴"}
                        </Typography>
                         <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'start', mt: 'auto' }}>
                            {"age: "}
                            {character.age ? character.age : "unknown"}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'start', mt: 'auto' }}>
                            {"phrase: "}
                            {character.phrases ? character.phrases[0] : "no phrase"}
                        </Typography>
                        <br />
                        <Divider></Divider>
                        <br />
                         <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'start', mt: 'auto' }}>
                            {"description: "}
                            {character.description}
                        </Typography>


                    </CardContent>
                </Card>

            </Box>

            <Button
                component={Link}
                to="/Personajes"
                variant="contained"
                sx={{
                    mt: 3,
                    bgcolor: '#ffef3dff',
                    color: '#000',
                    fontWeight: 'bold',
                    '&:hover': { bgcolor: '#ffea00ff' },
                }}
            >
                Back to Characters
            </Button>
        </Box>
    );
};

export default CharacterDetailPage;
