import { FC } from 'react';
import { Container } from '../features/styles';
import { useNavigate, useParams } from 'react-router-dom';
import { LocationDetailContainer } from '../features/locations/detail';

/**
 * Location page
 *
 * Usage:
 * ``` <LocationPage /> ```
 *
 * @returns location page
 */
const LocationPage: FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  if (!params.id) {
    navigate('/');
    return <></>;
  }
  return (
    <div>
      <Container>
        <LocationDetailContainer id={parseInt(params.id, 10)} />
      </Container>
    </div>
  );
};

export default LocationPage;
