import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const CardEpisodie = ({ data }) => {
    const url = 'https://cdn.thesimpsonsapi.com/500';

    return (
        <Card
            sx={{
                width: 345,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%', // asegura igual altura
            }}
        >
            <CardMedia
                component="img"
                alt={data.name}
                image={url + data.image_path}
                sx={{ height: 190, objectFit: 'contain' }}
            />

            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ mt: 'auto' }}>
                    {data.name}
                </Typography>
                <Divider/>
                <br />
                <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'start', mt: 'auto' }}>
                    📺 season: {data.season ? data.season : "unknown"}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'start', mt: 'auto' }}>
                    🎬 episode: {data.episode_number ? data.episode_number : "unknown"}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'start', mt: 'auto' }}>
                    📅 airdate: {data.airdate ? data.airdate : 'unknown'}
                </Typography>
                
            </CardContent>
        </Card>
    );
};

export default CardEpisodie;
