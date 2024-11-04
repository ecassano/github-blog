import {
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

const Header = () => {
  return (
    <Container>
      <StripesLeft src={stripesLeft} />
      <EllipseLeft src={ellipseLeft} />
      <StripesRight src={stripesRight} />
      <EllipseRight src={ellipseLeft} />
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
