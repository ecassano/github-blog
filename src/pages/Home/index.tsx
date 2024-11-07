import Card from "./components/Card"
import { CardContainer } from "./components/Card/styles"
import Profile from "../../components/Profile"
import SearchBar from "./components/SearchBar"
import { api } from "../../lib/axios"
import { useEffect, useState } from "react"
import { CardData, IssuesReturn, UserData } from "../../@types/data"

const Home = () => {
  const [userData, setUserData] = useState<UserData>();
  const [issues, setIssues] = useState<CardData[]>([]);

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

  const handleFetchIssues = async (query: string) => {
    const response = await api.get(`search/issues?q=${query}%20repo:ecassano/github-blog`, {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    const resp: IssuesReturn = response.data;
    console.log(resp)
    setIssues(resp.items);
  }

  useEffect(() => {
    fetchUserData();
    handleFetchIssues("");
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
      <SearchBar handleQuery={handleFetchIssues} />
      <CardContainer>
        {issues.map(issue => (
          <Card
            key={issue.id}
            number={issue.number}
            title={issue.title}
            created_at={issue.created_at}
            body={issue.body}
          />
        )
        )}
      </CardContainer>
    </>
  )
}

export default Home