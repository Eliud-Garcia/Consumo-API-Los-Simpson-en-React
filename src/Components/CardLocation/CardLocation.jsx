import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CardLocation = ({ data }) => {
    const path_img = "https://cdn.thesimpsonsapi.com/500"
    
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    
                    image={path_img + data.image_path}
                    sx={{ objectFit: 'contain', height: 300 }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.id ? data.id + ". " : "sin id"}
                        {data.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', overflowY: 'auto', maxHeight: 100, fontSize: 18 }}>
                        
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardLocation