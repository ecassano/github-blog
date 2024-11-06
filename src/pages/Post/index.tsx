import { useParams } from "react-router-dom";
import Profile from "../../components/Profile";

type PostParams = {
  id: string;
}

// interface PostProps{

// }

const Post = () => {
  const { id } = useParams<PostParams>();

  return (
    <>
      <Profile />
      <h1>Post {id}</h1>
    </>
  )
}

export default Post