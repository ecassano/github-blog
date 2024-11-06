import styled from 'styled-components';
import { Box } from '../../../../components/Profile/styles';
import { typography } from '../../../../styles/typography';

export const PostBox = styled(Box)`
  flex-direction: column;
  gap: 1.25rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const BackButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  line-height: 0;
  color: ${props => props.theme.blue};
  position: relative;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 0.5rem;

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

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > h2 {
    ${typography.fonts.titleL}
    color: ${props => props.theme['base-title']};
  }
`;
