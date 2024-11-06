import Card from "./components/Card"
import { CardContainer } from "./components/Card/styles"
import Profile from "../../components/Profile"
import SearchBar from "./components/SearchBar"

const Home = () => {
  return (
    <>
      <Profile />
      <SearchBar />
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </>
  )
}

export default Home