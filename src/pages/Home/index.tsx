import Card from "./components/Card"
import { CardContainer } from "./components/Card/styles"
import Profile from "../../components/Profile"
import SearchBar from "./components/SearchBar"
import { api } from "../../lib/axios"
import { useEffect, useState } from "react"
import { UserData } from "../../@types/data"

const Home = () => {
  const [userData, setUserData] = useState<UserData>();

  const fetchUserData = async (): Promise<void> => {
    const response = await api.get(`users/ecassano`, {
      params: {
        username: 'ecasssano',
      },
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    const resp = await response.data;
    setUserData(resp);
  }

  useEffect(() => {
    fetchUserData();
  }, [])

  return (
    <>
      <Profile
        avatar_url={userData?.avatar_url}
        bio={userData?.bio}
        name={userData?.name}
        username={userData?.login}
        company={userData?.company}
        followers={userData?.followers}
      />
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