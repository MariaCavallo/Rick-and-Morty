import { FaSearch } from 'react-icons/fa';
import { ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { searchLocations } from '../locations/locations.slices';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../language';
import SearchBox from './search-box.styles';
import SearchInput from './search-input.styles';
import IconButton from '../styles/icon-button.styles';

const SearchBar: FC = () => {
  const locationsQuery = useAppSelector((state) => state.locations.query);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchLocations(e.target.value));
    navigate('/');
  };

  const { t } = useLanguage();

  return (
    <SearchBox aria-label="form" onSubmit={(e) => e.preventDefault()}>
      <SearchInput
        aria-label="input"
        placeholder={t('searchBar')}
        value={locationsQuery}
        onChange={onSearch}
      />
      <IconButton type="button" name='Boton busqueda'>
        <FaSearch />
      </IconButton>
    </SearchBox>
  );
};

export default SearchBar;
