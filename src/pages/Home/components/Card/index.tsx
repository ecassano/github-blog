import { Box } from "./styles";

import { CardData } from "../../../../@types/data";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { useNavigate } from "react-router-dom";

const Card = ({ number, title, body, created_at }: Omit<CardData, 'id'>) => {
  const navigate = useNavigate();

  const handleOpenIssue = async () => {
    navigate(`/posts/${number}`);
  }

  return (
    <Box onClick={handleOpenIssue}>
      <div>
        <h4>{title}</h4>
        <p>{formatDistanceToNow(new Date(created_at), {
          addSuffix: true,
          locale: ptBR
        })}</p>
      </div>
      <p>{body}</p>
    </Box>
  )
}

export default Card