import { FC } from 'react';
import { useGetLocationQuery } from '../locations.endpoints';
import { LocationDetailComponent } from './index';
import { useLanguage } from '../../language';

export type LocationDetailContainerProps = {
  id: number;
};

const LocationDetailContainer: FC<LocationDetailContainerProps> = ({
  id
}: LocationDetailContainerProps) => {
  const { data: location, error, isLoading } = useGetLocationQuery({ id });
  const { t } = useLanguage();

  if (error) return <div>{t('error')}</div>;

  return (
    <>
      {
        isLoading ? <div>{t('loading')}</div> : 
        <LocationDetailComponent location={location} />
      }
    </>);
};

export default LocationDetailContainer;
