import { Container } from "./styles"

const SearchBar = () => {
  return (
    <Container>
      <div>
        <h3>Publicações</h3>
        <p>6 publicações</p>
      </div>
      <input type="text" placeholder="Buscar conteúdo" />
    </Container>
  )
}

export default SearchBar