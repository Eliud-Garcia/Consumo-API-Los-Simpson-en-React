import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';



import { Link } from 'react-router-dom';

const CardEpisodie = ({ data }) => {
    const url = 'https://cdn.thesimpsonsapi.com/500';

    return (
        <Card
            sx={{
                width: 345,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '100%', // asegura igual altura
                borderRadius: '16px',
                boxShadow: 'black'
            }}
        >
            <CardMedia
                component="img"
                alt={data.name}
                image={url + data.portrait_path}
                sx={{
                    objectFit: 'contain',
                    width: '90%',
                    borderRadius: '16px',
                    margin: '5%',
                    background: 'linear-gradient(180deg, #35a6fdff 0%, #9de2ffff 100%)',
                    boxShadow: '1px black'
                    // background: 'linear-gradient(180deg, #fdd835ff 0%, #fff79dff 100%)',
                }}
            />

            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ mt: 'auto', fontWeight: '700'}} className='title-card'>
                    {data.name ? data.name : "unknown"}
                </Typography>
                <Divider />
                <br />
                <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'start', mt: 'auto' }}>
                    {"ocuppation: "}
                    {data.occupation ? data.occupation : "unknown"}
                </Typography>
            </CardContent>
            <CardActions >
                <Button 
                    size="small"
                    component={Link}
                    to={`/Personaje/${data.id}`} //
                >Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default CardEpisodie;
