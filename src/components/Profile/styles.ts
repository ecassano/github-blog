import styled from 'styled-components';
import { typography } from '../../styles/typography';

export const Box = styled.div`
  width: 54rem;
  margin: -5.5rem auto 0 auto;
  background: ${props => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2.5rem;
  margin-top: -6rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: flex-start;
  gap: 2rem;

  > img {
    width: 9.25rem;
    height: 9.25rem;
  }

  > a {
    color: ${props => props.theme.blue};
    text-transform: uppercase;
    text-decoration: none;
    ${typography.fonts.link}
    cursor: pointer;

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  color: ${props => props.theme['base-title']};

  > h2 {
    ${typography.fonts.titleL}
  }

  > p {
    ${typography.fonts.textM}
    color: ${props => props.theme['base-text']};
  }

  > div {
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
  }
`;
