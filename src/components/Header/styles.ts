import styled from 'styled-components';

export const Container = styled.header`
  padding: 0 2rem;
  height: 18.5rem;
  position: relative;
`;

export const BackgroundLight = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export const Content = styled.div`
  max-width: 864px;
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
    color: ${props => props.theme.blue};
    text-transform: uppercase;
    line-height: 1.6;
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

const baseStripes = styled.img`
  position: absolute;
  z-index: -2;
`;

export const StripesLeft = styled(baseStripes)`
  left: 0;
  height: 11.75rem;
  margin-top: calc((18.5rem - 11.75rem) / 2);
`;

export const StripesRight = styled(baseStripes)`
  right: 0;
  height: 14.75rem;
  margin-top: calc((18.5rem - 14.75rem) / 2);
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
