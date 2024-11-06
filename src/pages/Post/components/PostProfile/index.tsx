import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare, faComment, faChevronLeft, faCalendarDay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"
import { InfoBadgesContainer, StyledLink } from "../../../../components/Profile/styles"
import { BackButton, ButtonsContainer, InfoContainer, PostBox } from "./styles"

const PostProfile = () => {
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
        <StyledLink href="https://github.com/" target="_blank">
          <div>
            <p>Ver no github</p>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </div>
        </StyledLink>
      </ButtonsContainer>
      <InfoContainer>
        <h2>JavaScript data types and data structures</h2>
        <InfoBadgesContainer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            <p>cameronwll</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            <p>Rocketseat</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            <p>32 seguidores</p>
          </span>
        </InfoBadgesContainer>
      </InfoContainer>
    </PostBox>
  )
}

export default PostProfile