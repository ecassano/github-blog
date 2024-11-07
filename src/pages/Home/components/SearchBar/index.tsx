import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Container } from "./styles";

interface Props {
  handleQuery: (query: string) => void;
}

const SearchBar = ({ handleQuery }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const [query] = useDebounce(searchValue, 500);

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    handleQuery(query);
  }, [query]);

  return (
    <Container>
      <div>
        <h3>Publicações</h3>
        <p>6 publicações</p>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleSearchValue}
      />
      <h1>{query}</h1>
    </Container>
  )
}

export default SearchBar