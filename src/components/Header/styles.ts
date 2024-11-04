import styled from "styled-components";

export const Container = styled.header`
  padding: 0 2rem;
  height: 18.5rem;
  background-image: url("../../../public/images/headerBG.png");
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

export const Content = styled.div`
  max-width: 1160px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding-top: 4rem;

  > img {
    height: 2.5rem;
  }

  > span {
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    line-height: 1.6;
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

const baseStripes = styled.img`
  position: absolute;
`;

export const StripesLeft = styled(baseStripes)`
  left: 0;
  height: 11.75rem;
  margin-top: calc((18.5rem - 11.75rem) / 2);
  z-index: 999;
`;

export const StripesRight = styled(baseStripes)`
  right: 0;
  height: 14.75rem;
  margin-top: calc((18.5rem - 14.75rem) / 2);
  z-index: 999;
`;

export const EllipseLeft = styled(baseStripes)`
  height: 14.75rem;
  left: -2.875rem;
  top: -7.625rem;
  filter: blur(400px);
`;

export const EllipseRight = styled(baseStripes)`
  height: 9.7rem;
  width: 9.7rem;
  transform: rotate(-15deg);
  right: 0;
  top: -2.78rem;
  filter: blur(370px);
`;
