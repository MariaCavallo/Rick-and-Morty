import { SearchBar } from '../../search';
import { FC } from 'react';
import  NavLinks from '../nav-link.styles';
import { useLanguage } from '../../language';
import Nav from '../nav-container.styles';
import { Container, Logo } from '../../styles/index';

const NavDesktop: FC = () => {

  const { t } = useLanguage();

  return (
    <Nav justifyContent='space-between'>
      <Container style={{ width: 400 }}>
        <NavLinks to="/">
          <Logo src={'/logo-dh.png'} alt={'Logo Digital House'} />
        </NavLinks>
        <NavLinks to="/">
          <h3>{t('navigation.home')}</h3>
        </NavLinks>
        <NavLinks to="/following">
          <h3>{t('navigation.following')}</h3>
        </NavLinks>
      </Container>
      <SearchBar />
    </Nav>
  );
};

export default NavDesktop;
