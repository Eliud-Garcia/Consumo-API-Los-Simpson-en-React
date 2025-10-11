import { useEffect, useState } from 'react'

import CardCharacter from '../../Components/CardCharacter/CardCharacter.jsx'


const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("https://thesimpsonsapi.com/api/characters")
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch(error => console.log(error));
    }, []);
    
    return (
        <div className='container_characters' >
            {
                characters.length > 0 ?
                    characters.map(item => (
                        <CardCharacter key={item.id} data={item}></CardCharacter>

                    ))
                    : <p> Cargando... </p>
            }

        </div>
    )
}

export default CharactersPage