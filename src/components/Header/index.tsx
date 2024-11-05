import {
  BackgroundLight,
  Container,
  Content,
  EllipseLeft,
  EllipseRight,
  Logo,
  StripesLeft,
  StripesRight,
} from "./styles";
import logo from "../../assets/logoImage.svg";
import stripesLeft from "../../assets/stripesEsq.svg";
import stripesRight from "../../assets/stripesDir.svg";
import ellipseLeft from "../../assets/ellipseEsq.png";
import backgroundLight from "../../../public/images/headerBG.png";

const Header = () => {
  return (
    <Container>
      <StripesLeft src={stripesLeft} />
      <EllipseLeft src={ellipseLeft} />
      <StripesRight src={stripesRight} />
      <EllipseRight src={ellipseLeft} />
      <BackgroundLight src={backgroundLight} />
      <Content>
        <Logo>
          <img src={logo} />
          <span>github blog</span>
        </Logo>
      </Content>
    </Container>
  );
};

export default Header;
