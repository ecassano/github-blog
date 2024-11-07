import styled from 'styled-components';
import { typography } from '../../../../styles/typography';

export const Content = styled.div`
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > p {
    color: ${props => props.theme['base-text']};
    ${typography.fonts.textM}
  }

  > pre {
    background: ${props => props.theme['base-post']};
    color: ${props => props.theme['base-text']};
    border-radius: 2px;
  }

  > h3 {
    color: ${props => props.theme.blue};
    ${typography.fonts.titleS}
  }
`;
