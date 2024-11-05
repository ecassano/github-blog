import { Box, Info } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import avatar from "../../assets/avatar.png";


const Profile = () => {
  return (
    <Box>
      <img src={avatar} alt="Foto de perfil" />
      <Info>
        <h2>Cameron Williamson</h2>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra
          massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar
          vel mass.
        </p>
        <div>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            <p>cameronwll</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            <p>Rocketseat</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            <p>32 seguidores</p>
          </span>
        </div>
      </Info>
      <a href="">
        <div>
          <p>github</p>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
      </a>
    </Box>
  );
};

export default Profile;
