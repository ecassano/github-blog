import styled from 'styled-components';
import { typography } from '../../styles/typography';

export const CardContainer = styled.div`
  max-width: 864px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

export const Box = styled.div`
  background: ${props => props.theme['base-post']};
  color: ${props => props.theme['base-text']};
  padding: 2rem;
  border-radius: 10px;
  height: 16.25rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  ${typography.fonts.textM}

  > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    > h4 {
      ${typography.fonts.titleM}
      color: ${props => props.theme['base-title']};
    }

    > p {
      ${typography.fonts.textS}
      color: ${props => props.theme['base-span']};
      white-space: nowrap;
    }
  }

  > p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* Limita o texto a 5 linhas */
    -webkit-box-orient: vertical;
  }
`;
