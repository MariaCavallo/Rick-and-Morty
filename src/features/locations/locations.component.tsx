import { FC } from 'react';
import { LocationsTable } from './table';
import { useGetLocationsQuery } from './locations.endpoints';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Pagination } from '../pagination';
import { nextLocations, previousLocations } from './locations.slices';
import { useLanguage } from '../language';

const LocationsComponent: FC = () => {
  const dispatch = useAppDispatch();
  const { query: locationsQuery, page } = useAppSelector((state) => state.locations);
  const {
    data: locations,
    error,
    isLoading
  } = useGetLocationsQuery({ name: locationsQuery, page });
  const { t } = useLanguage();

  if (isLoading) return <div>{t('loading')}</div>;
  if (error || !locations || locations.results.length === 0)
    return <div>{t('error')}</div>;

  const onPreviousPage = () => {
    dispatch(previousLocations());
  };

  const onNextPage = () => {
    dispatch(nextLocations());
  };

  return (
    <div>
      <Pagination
        p={locations.info}
        onP={onPreviousPage}
        onN={onNextPage}
      />
      <LocationsTable locations={locations.results} />
      <Pagination
        p={locations.info}
        onP={onPreviousPage}
        onN={onNextPage}
      />
    </div>
  );
};

export default LocationsComponent;
