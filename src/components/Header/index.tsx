import { HeaderContainer } from './styles';
import Logo from '../../assets/Logo.png';
export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt={'logo'} />
    </HeaderContainer>
  );
};
