import { FaBars, FaTimes } from 'react-icons/fa';
import { SearchBar } from '../../search';
import { FC } from 'react';
import NavLinks from '../nav-link.styles';
import { useLanguage } from '../../language';
import { useToggle } from '../../modal';
import MobileNav from './mobile-nav.styles';
import { Container, IconButton, Logo } from '../../styles/index';

const NavMobile: FC = () => {
  
  const { t } = useLanguage();
  const {isOpen, toggle} = useToggle();

  return (
    <MobileNav>
      <Container>
        <NavLinks to="/">
          <Logo src={'/images/logo-dh.png'} alt={'Logo Digital House'}/>
        </NavLinks>
        <IconButton aria-label="menu-button" onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </IconButton>
      </Container>
      {isOpen && (
        <Container style={{ flexDirection: 'column' }}>
          <Container style={{ width: 400, flexDirection: 'column' }}>
            <NavLinks to="/">
              <h3>{t('navigation.home')}</h3>
            </NavLinks>
            <NavLinks to="/following">
              <h3>{t('navigation.following')}</h3>
            </NavLinks>
          </Container>
          <SearchBar />
        </Container>
      )}
    </MobileNav>
  );
};
export default NavMobile;
