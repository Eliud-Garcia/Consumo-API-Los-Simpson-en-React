import { useEffect, useState, useRef } from "react";
import CardCharacter from "../../Components/CardCharacter/CardCharacter";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";
import "./CharactersPage.css";

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const cacheRef = useRef({}); // Cache local de páginas

  // 🔹 Obtener personajes paginados normales
  const fetchCharacters = async (pageNum) => {
    setLoading(true);
    try {
      if (cacheRef.current[pageNum]) {
        setCharacters(cacheRef.current[pageNum].results);
        setTotalPages(cacheRef.current[pageNum].pages);
        setLoading(false);
        return;
      }

      const response = await fetch(
        `https://thesimpsonsapi.com/api/characters?page=${pageNum}`
      );
      const data = await response.json();

      cacheRef.current[pageNum] = data;
      setCharacters(data.results);
      setTotalPages(data.pages);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isSearching) {
      fetchCharacters(page);
    }
  }, [page, isSearching]);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 🔍 Buscar solo cuando se presiona el botón
  const handleSearch = async () => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    setLoading(true);

    try {
      let allResults = [];
      const firstPage = await fetch(
        `https://thesimpsonsapi.com/api/characters?page=1`
      );
      const firstData = await firstPage.json();
      allResults = [...firstData.results];

      const maxPages = Math.max(3, firstData.pages); //lento

      for (let i = 2; i <= maxPages; i++) {
        const res = await fetch(
          `https://thesimpsonsapi.com/api/characters?page=${i}`
        );
        const data = await res.json();
        allResults = [...allResults, ...data.results];
      }

      // ✅ Filtrar solo por nombre
      const filtered = allResults.filter((char) =>
        char.name.toLowerCase().includes(term)
      );

      setSearchResults(filtered);
    } catch (error) {
      console.error("Error searching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  const displayedCharacters = isSearching ? searchResults : characters;

  return (
    <div className="characters-container">
      <h1 className="characters-title">Personajes</h1>
      <p className="characters-subtitle">
        Conoce a los personajes más queridos y divertidos de Los Simpson.
      </p>

      {/* 🔎 Campo de búsqueda con botón */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
        }}
      >
        <TextField
          label="Buscar por nombre..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            width: "300px",
            backgroundColor: "white",
            borderRadius: 2,
          }}
        />
        <Button
          variant="contained"
          color="warning"
          onClick={handleSearch}
          startIcon={<SearchIcon />}
          sx={{
            fontWeight: "bold",
            color: "black",
            "&:hover": {
              backgroundColor: "#fdd835",
            },
          }}
        >
          Buscar
        </Button>
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <CircularProgress color="warning" />
        </Box>
      ) : (
        <>
          <div className="characters-flex">
            {displayedCharacters.length > 0 ? (
              displayedCharacters.map((character) => (
                <CardCharacter key={character.id} data={character} />
              ))
            ) : (
              <p className="loading">
                {isSearching
                  ? "No se encontraron personajes con ese nombre."
                  : "Cargando personajes..."}
              </p>
            )}
          </div>

          {/* 🔹 Paginación solo cuando no hay búsqueda */}
          {!isSearching && (
            <Stack spacing={2} alignItems="center" sx={{ marginTop: 4 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handleChange}
                color="primary"
                shape="rounded"
                size="large"
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "#ffca28",
                    fontWeight: "bold",
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#fdd835 !important",
                    color: "#000 !important",
                    border: "1px solid #fbc02d",
                  },
                }}
              />
            </Stack>
          )}
        </>
      )}
    </div>
  );
};

export default CharactersPage;
