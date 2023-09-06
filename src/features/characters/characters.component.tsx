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
  
  const character = !Array.isArray(characters) ? characters : undefined;

  return (
    <CharacterGrid>
      {Array.isArray(characters) &&
        characters.map((character) => (
        <CharacterCardComponent key={character.id} character={character} />
      ))}
      {character && <CharacterCardComponent character={character} />}
    </CharacterGrid>
  );
};

export default CharactersComponent;
