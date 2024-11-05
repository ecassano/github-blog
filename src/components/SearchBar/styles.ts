import styled from 'styled-components';
import { typography } from '../../styles/typography';

export const Container = styled.div`
  max-width: 864px;
  margin: 4.5rem auto 3rem auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h3 {
      ${typography.fonts.titleS}
      color: ${props => props.theme['base-subtitle']};
    }

    > p {
      ${typography.fonts.textS}
      color: ${props => props.theme['base-span']};
    }
  }

  > input {
    background: ${props => props.theme['base-input']};
    outline: none;
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 0.75rem 1rem;
    box-shadow: none;
    ${typography.fonts.textM}
    color: ${props => props.theme['base-text']};

    ::placeholder {
      color: ${props => props.theme['base-label']};
    }

    &:focus {
      transition: border-color 0.3s;
      border-color: ${props => props.theme.blue};
    }
  }
`;
