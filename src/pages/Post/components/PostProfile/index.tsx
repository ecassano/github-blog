import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare, faComment, faChevronLeft, faCalendarDay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"
import { useNavigate } from "react-router-dom"
import { InfoBadgesContainer, StyledLink } from "../../../../components/Profile/styles"
import { BackButton, ButtonsContainer, InfoContainer, PostBox } from "./styles"

interface Props {
  title: string;
  username: string;
  date: string;
  comments: number;
  url: string;
}

const PostProfile = ({ title, username, date, comments, url }: Props) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <PostBox>
      <ButtonsContainer>
        <BackButton onClick={handleGoBack}>
          <div>
            <FontAwesomeIcon icon={faChevronLeft} size="xs" />
            <p>Voltar</p>
          </div>
        </BackButton>
        <StyledLink href={url} target="_blank">
          <div>
            <p>Ver no github</p>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </div>
        </StyledLink>
      </ButtonsContainer>
      <InfoContainer>
        <h2>{title}</h2>
        <InfoBadgesContainer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            <p>{username}</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            <p>{formatDistanceToNow(new Date(date), {
              addSuffix: true,
              locale: ptBR
            })}</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            <p>{comments} comentários</p>
          </span>
        </InfoBadgesContainer>
      </InfoContainer>
    </PostBox>
  )
}

export default PostProfile