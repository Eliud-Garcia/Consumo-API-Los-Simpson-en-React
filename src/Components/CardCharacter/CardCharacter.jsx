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
                image={url + data.portrait_path}
                sx={{ height: 190, objectFit: 'contain' }}
            />

            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ mt: 'auto' }}>
                    {data.name ? data.name : "unknown"}
                </Typography>
                <Divider/>
                <br />
                <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'start', mt: 'auto' }}>
                    {"ocuppation: "}
                    {data.occupation ? data.occupation : "unknown"}
                </Typography>
            </CardContent>
            <CardActions >
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default CardEpisodie;
