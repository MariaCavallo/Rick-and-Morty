import { SearchBar } from '../../search';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../language';
import Nav from '../nav-container.styles';
import { Container, Logo } from '../../styles/index';

const NavDesktop: FC = () => {

  const { t } = useLanguage();

  return (
    <Nav justifyContent='space-between'>
      <Container className={'container'} style={{ width: 400 }}>
        <NavLink to="/" className={'nav-link'}>
          <Logo className={'logo'} src={'/images/logo-dh.png'} alt={'Logo Digital House'} />
        </NavLink>
        <NavLink to="/" className={'nav-link'}>
          <h3>{t('navigation.home')}</h3>
        </NavLink>
        <NavLink to="/following" className={'nav-link'}>
          <h3>{t('navigation.following')}</h3>
        </NavLink>
      </Container>
      <SearchBar />
    </Nav>
  );
};

export default NavDesktop;
