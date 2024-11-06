import { Box, Info, InfoBadgesContainer, InfoTitleContainer, StyledLink } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { UserData } from "../../@types/data";
interface Props extends Partial<Omit<UserData, 'login'>> {
  username?: string;
}

const Profile = ({ avatar_url, name, bio, username, company, followers }: Props) => {
  return (
    <Box>
      <img src={avatar_url} alt="Foto de perfil" />
      <Info>
        <InfoTitleContainer>
          <h2>{name}</h2>
          <StyledLink href="https://github.com/" target="_blank">
            <div>
              <p>github</p>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
            </div>
          </StyledLink>
        </InfoTitleContainer>
        <p>{bio}</p>
        <InfoBadgesContainer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            <p>{username}</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            <p>{company ? company : "Nenhuma"}</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            <p>{followers} seguidores</p>
          </span>
        </InfoBadgesContainer>
      </Info>
    </Box>
  );
};

export default Profile;
