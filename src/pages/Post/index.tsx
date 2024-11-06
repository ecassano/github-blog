import { useParams } from "react-router-dom";
import PostContent from "./components/PostContent";
import PostProfile from "./components/PostProfile";
import { Container } from "./styles";

type PostParams = {
  id: string;
}

// interface PostProps{

// }

const Post = () => {
  // const { id } = useParams<PostParams>();

  return (
    <Container>
      <PostProfile />
      <PostContent />
    </Container>
  )
}

export default Post