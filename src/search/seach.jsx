import React, { useState } from 'react';
import './search.css'; 
import Input from '@mui/material/Input';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { TextField, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

// Datos de personas predeterminadas
const personasPredeterminadas = [
  { id: 1, nombre: 'John Doe', avatar: 'https://via.placeholder.com/50', },
  { id: 2, nombre: 'Jane Smith', avatar: 'https://via.placeholder.com/50', },
  { id: 3, nombre: 'Michael Johnson', avatar: 'https://via.placeholder.com/50', },
  { id: 4, nombre: 'Emily Williams', avatar: 'https://via.placeholder.com/50', },
  { id: 5, nombre: 'David Brown', avatar: 'https://via.placeholder.com/50', },
];

const SearchBox = () => {
  // Estado para almacenar el término de búsqueda y los resultados filtrados
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(personasPredeterminadas);

  // Función para manejar cambios en el input de búsqueda
  const handleChange = (event) => {
    const searchTerm = event.target.value.toLowerCase(); // Convertir a minúsculas para una búsqueda insensible a mayúsculas
    setQuery(searchTerm); // Actualizar el término de búsqueda en el estado

    // Filtrar personas basadas en el término de búsqueda
    const filteredResults = personasPredeterminadas.filter(persona =>
      persona.nombre.toLowerCase().includes(searchTerm)
    );
    setResults(filteredResults); // Actualizar los resultados filtrados en el estado
  };

  return (
    <div className='search-wrapper'>
    <div className='search-container'>
        <div className='search-header'>
        <h4>Search</h4>
        <PersonSearchIcon style={{ color:"#ffffff",margin: "5px" }}/>
        </div>
        <Input 
  placeholder="Buscar persona"
  inputProps={{ 'aria-label': 'Buscar' }}
  value={query}
  onChange={handleChange}
  fullWidth
  sx={{
    mb: 1,
    '& .MuiInput-underline:after': { // Establece el color de la línea cuando está enfocado
      borderBottomColor: '#f5620d', // Cambia el color de la línea inferior al dar clic
    },
  }}
  style={{ color:"#ffffff"}}
  className="search-input"
/>
      <List style={{ color:"#ffffff"}}>
        {/* Mapear los resultados filtrados y mostrar avatares y nombres */}
        {results.map(persona => (
          <ListItem key={persona.id}  className='hola'>
            <ListItemAvatar>
              <Avatar alt={persona.nombre} src={persona.avatar} />
            </ListItemAvatar>
            <ListItemText primary={persona.nombre} />
          </ListItem>
        ))}
      </List>
    </div>
    </div>
  );
};

export default SearchBox;

