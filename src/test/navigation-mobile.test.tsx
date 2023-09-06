import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavMobile from '../features/navigation/mobile/navigation-mobile.component';

describe('NavMobile Component', () => {
  it('should not display child components initially', () => {
    render(<NavMobile />);

    // Verifica que los componentes hijos no se muestren inicialmente
    expect(screen.queryByText('Home')).toBeNull();
    expect(screen.queryByText('Following')).toBeNull();
    expect(screen.queryByLabelText('menu-button')).toBeInTheDocument(); // Verifica que el botón de hamburguesa esté presente
  });

  it('should display child components when hamburger menu is clicked', async () => {
    render(<NavMobile />);

    const hamburgerButton = screen.getByLabelText('menu-button');

    // Haz clic en el botón de hamburguesa para abrir el menú
    userEvent.click(hamburgerButton);

    // Utiliza waitFor para esperar a que los componentes hijos se muestren
    await waitFor(() => {
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Following')).toBeInTheDocument();
    });
  });

  it('should hide child components when hamburger menu is clicked twice', async () => {
    render(<NavMobile />);

    const hamburgerButton = screen.getByLabelText('menu-button');

    // Haz clic en el botón de hamburguesa para abrir el menú
    userEvent.click(hamburgerButton);

    // Utiliza waitFor para esperar a que los componentes hijos se muestren
    await waitFor(() => {
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Following')).toBeInTheDocument();
    });

    // Haz clic en el botón de hamburguesa nuevamente para cerrar el menú
    userEvent.click(hamburgerButton);

    // Utiliza waitFor para esperar a que los componentes hijos se oculten
    await waitFor(() => {
      expect(screen.queryByText('Home')).toBeNull();
      expect(screen.queryByText('Following')).toBeNull();
    });
  });
});
