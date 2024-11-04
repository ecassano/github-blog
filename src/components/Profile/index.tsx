import { Box } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
  return (
    <Box>
      <img src="" alt="" />
      <h2>Cameron Williamson</h2>
      <p>
        Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra
        massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar
        vel mass.
      </p>
      <span>
        <FontAwesomeIcon icon={faGithub} />
        <p>cameronwll</p>
      </span>
      <span>
        <FontAwesomeIcon icon={faGithub} />
        <p>cameronwll</p>
      </span>
      <span>
        <FontAwesomeIcon icon={faGithub} />
        <p>cameronwll</p>
      </span>
    </Box>
  );
};

export default Profile;
