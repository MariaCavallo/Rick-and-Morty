import { FaBars, FaTimes } from 'react-icons/fa';
import { SearchBar } from '../../search';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink to="/" className={'nav-link'}>
          <Logo className={'logo'} src={'/images/logo-dh.png'} alt={'Logo Digital House'}/>
        </NavLink>
        <IconButton aria-label="menu-button" onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </IconButton>
      </Container>
      {isOpen && (
        <Container style={{ flexDirection: 'column' }}>
          <Container style={{ width: 400, flexDirection: 'column' }}>
            <NavLink to="/" className={'nav-link'}>
              <h3>{t('navigation.home')}</h3>
            </NavLink>
            <NavLink to="/following" className={'nav-link'}>
              <h3>{t('navigation.following')}</h3>
            </NavLink>
          </Container>
          <SearchBar />
        </Container>
      )}
    </MobileNav>
  );
};
export default NavMobile;
