import Container from '../styles/container.styles';
import { NavDesktop } from './desktop';
import { NavMobile } from './mobile';
import { FC } from 'react';

const Navbar: FC = () => (
    <Container width='100vw'>
        <NavDesktop />
        <NavMobile />
    </Container>
);

export default Navbar;
