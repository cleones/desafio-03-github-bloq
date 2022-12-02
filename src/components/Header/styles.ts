import styled from 'styled-components';
import HeaderLogo from '../../assets/header-bacground.svg';
export const HeaderContainer = styled.header`
  width: 100%;
  height: 296px;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding-top: 64px;

  background-color: ${(props) => props.theme['base-post']};

  background-image: url(${HeaderLogo});
  background-repeat: round;
}
`;
