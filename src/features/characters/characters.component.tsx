import { FC } from 'react';
import { useGetCharactersQuery } from './characters.endpoints';
import { useLanguage } from '../language';
import CharacterCardComponent from './card/character-card.component';
import CharacterGrid from './characters.styles';

export type CharactersComponentProps = {
  rickIDDS: number[];
};

const CharactersComponent: FC<CharactersComponentProps> = ({ rickIDDS }: CharactersComponentProps) => {
  
  const { data: characters, error, isLoading } = useGetCharactersQuery( { ids: rickIDDS } );
  const { t } = useLanguage();

  if (isLoading) return <div>{t('characters.loading')}</div>;
  if (error || !characters) return <div>{t('error')}</div>;
  
  const character = Array.isArray(characters) ? characters : [characters];

  return (
    <CharacterGrid>
      {Array.isArray(character) &&
        character.map((characters) => (
        <CharacterCardComponent key={characters.id} character={characters} />
      ))}
    </CharacterGrid>
  );
};

export default CharactersComponent;
