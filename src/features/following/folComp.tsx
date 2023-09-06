import { FC } from 'react';
import CharactersComponent from '../characters/characters.component';
import { useAppSelector } from '../../store/hooks';
import { useLanguage } from '../language/context/language.context';

const FolComp: FC = () => {
  const { t } = useLanguage();
  const { followingIds } = useAppSelector((state) => state.following);
  return (
      <div>
          {
            followingIds.length > 0 ? 
            <CharactersComponent rickIDDS={followingIds} /> : 
            <p>{t('folComp.notFound')}</p>  
          }
      </div>
    )
};

export default FolComp;
