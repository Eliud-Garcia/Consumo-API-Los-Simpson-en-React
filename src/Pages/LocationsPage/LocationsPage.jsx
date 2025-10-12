import { useEffect, useState } from 'react';
import CardLocation from '../../Components/CardLocation/CardLocation';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './LocationsPage.css';

const LocationsPage = () => {
    const [locations, setLocations] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);

    const fetchLocations = async (pageNum) => {
        setLoading(true);
        try {
            const response = await fetch(`https://thesimpsonsapi.com/api/locations?page=${pageNum}`);
            const data = await response.json();
            setLocations(data.results);
            setTotalPages(data.pages);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLocations(page);
    }, [page]);

    const handleChange = (event, value) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="locations-container">
            <h1 className="locations-title">Lugares</h1>
            <p className="locations-subtitle">
                Descubre los lugares más divertidos e icónicos de Los Simpson.
            </p>

            {loading ? (
                <p className="loading">Loading locations...</p>
            ) : (
                <>
                    <div className="locations-flex">
                        {locations.map((loc) => (
                            <CardLocation key={loc.id} data={loc} />
                        ))}
                    </div>
 
                    {/* 🔹 PAGINACIÓN DE MATERIAL UI */}
                    <Stack spacing={2} alignItems="center" sx={{ marginTop: 4 }}>
                        <Pagination
                            count={totalPages}
                            page={page}
                            onChange={handleChange}
                            color="primary"
                            shape="rounded"
                            size="large"
                            sx={{
                                '& .MuiPaginationItem-root': {
                                    color: '#ffca28',
                                    fontWeight: 'bold',
                                },
                                '& .Mui-selected': {
                                    backgroundColor: '#fdd835 !important',
                                    color: '#000 !important',
                                    border: '1px solid #fbc02d',
                                },
                            }}
                        />
                    </Stack>
                </>
            )}
        </div>
    );
};

export default LocationsPage;
