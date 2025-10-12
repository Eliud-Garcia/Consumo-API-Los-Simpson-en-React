import { useEffect, useState } from 'react';
import CardEpisodie from '../../Components/CardEpisodie/CardEpisodie';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './EpisodiesPage.css';

const EpisodiesPages = () => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchEpisodes = async (pageNum) => {
    setLoading(true);
    try {
      const response = await fetch(`https://thesimpsonsapi.com/api/episodes?page=${pageNum}`);
      const data = await response.json();
      setEpisodes(data.results);
      setTotalPages(data.pages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEpisodes(page);
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="episodies-container">
      <h1 className="episodies-title">Episodes</h1>
      <p className="episodies-subtitle">
        Discover the funniest and most iconic moments of The Simpsons.
      </p>

      {loading ? (
        <p className="loading">Loading episodes...</p>
      ) : (
        <>
          <div className="episodies-flex">
            {episodes.map((ep) => (
              <CardEpisodie key={ep.id} data={ep} />
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

export default EpisodiesPages;
