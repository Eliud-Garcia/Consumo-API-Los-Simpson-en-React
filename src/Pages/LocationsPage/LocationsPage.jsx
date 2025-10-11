import { useEffect, useState } from 'react'

import CardLocation from '../../Components/CardLocation/CardLocation'


const LocationPage = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch("https://thesimpsonsapi.com/api/locations")
            .then(response => response.json())
            .then(data => setLocations(data.results))
            .catch(error => console.log(error));
    }, []);
    

    return (
        <div className='container_characters' >
            {
                locations.length > 0 ?
                    locations.map(item => (
                        <CardLocation key={item.id} data={item}></CardLocation>
                    ))
                    : <p> Cargando... </p>
            }
        </div>
    )
}

export default LocationPage