import { ChangeEvent, useState } from "react";
import { useDebounce } from "use-debounce";
import { Container } from "./styles";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query] = useDebounce(searchValue, 500);

  const handleQuerySearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <Container>
      <div>
        <h3>Publicações</h3>
        <p>6 publicações</p>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleQuerySearch}
      />
      <h1>{query}</h1>
    </Container>
  )
}

export default SearchBar