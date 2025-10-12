import { useEffect, useState } from 'react';
import CardCharacter from '../../Components/CardCharacter/CardCharacter';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './CharactersPage.css';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async (pageNum) => {
    setLoading(true);
    try {
      const response = await fetch(`https://thesimpsonsapi.com/api/characters?page=${pageNum}`);
      const data = await response.json();
      setCharacters(data.results);
      setTotalPages(data.pages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="episodies-container">
      <h1 className="episodies-title">Characters</h1>
      <p className="episodies-subtitle">
        Meet the most beloved and funniest characters from The Simpsons.
      </p>

      {loading ? (
        <p className="loading">Loading characters...</p>
      ) : (
        <>
          <div className="episodies-grid">
            {characters.map((character) => (
              <CardCharacter key={character.id} data={character} />
            ))}
          </div>

          {/* 🔹 PAGINACIÓN MATERIAL UI */}
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

export default CharactersPage;
