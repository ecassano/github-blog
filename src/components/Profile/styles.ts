import styled from 'styled-components';
import { typography } from '../../styles/typography';

export const Box = styled.div`
  width: 54rem;
  margin: 0 auto;
  background: ${props => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2.5rem;
  margin-top: -6rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  isolation: isolate;

  display: flex;
  align-items: flex-start;
  gap: 2rem;

  > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const Info = styled.div`
  flex: 1;
  height: 9.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  color: ${props => props.theme['base-title']};

  > h2 {
    ${typography.fonts.titleL}
  }

  > p {
    ${typography.fonts.textM}
    color: ${props => props.theme['base-text']};
  }
`;

export const InfoTitleContainer = styled.div`
  color: ${props => props.theme['base-title']};
  text-transform: uppercase;
  text-decoration: none;
  ${typography.fonts.link}
  cursor: pointer;

  display: flex;
  justify-content: space-between;
`;

export const InfoBadgesContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${props => props.theme['base-subtitle']};

    > svg {
      color: ${props => props.theme['base-label']};
    }
  }
`;

export const StyledLink = styled.a`
  color: ${props => props.theme.blue};
  text-decoration: none;
  height: fit-content;
  cursor: auto;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: ${props => props.theme.blue};
    transition: width 0.3s;
  }

  &:hover {
    ::after {
      width: 100%;
    }
  }

  &:focus {
    box-shadow: none;
  }

  > div {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > p {
      ${typography.fonts.link}
      text-transform: uppercase;
    }
  }
`;
