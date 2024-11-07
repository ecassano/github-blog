import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IssueData, IssueReturn } from "../../@types/data";
import { api } from "../../lib/axios";
import PostContent from "./components/PostContent";
import PostProfile from "./components/PostProfile";
import { Container } from "./styles";



const Post = () => {
  const [issueData, setIssueData] = useState<IssueData | null>(null);
  const { id } = useParams();

  const handleOpenIssue = async () => {
    const response: IssueReturn = await api.get(`repos/ecassano/github-blog/issues/${id}`);
    const resp = response.data;
    setIssueData(resp);
    console.log(resp);
  }

  useEffect(() => {
    handleOpenIssue();
  }, [])

  return (
    <Container>
      {issueData &&
        <PostProfile
          title={issueData.title}
          username={issueData.user.login}
          date={issueData.updated_at}
          comments={issueData.comments}
          url={issueData.html_url}
        />}
      {issueData && <PostContent content={issueData.body} />}
    </Container>
  )
}

export default Post