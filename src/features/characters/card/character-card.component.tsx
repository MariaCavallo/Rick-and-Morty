import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Character } from '..';
import { addCharacterToFollowingList, removeCharacterToFollowingList } from '../../following/following.slices';
import { Card } from '../../card';
import { FollowingButtonComponent } from '../../following/button';

export type CharacterCardProps = {
    character: Character;
}

const CharacterCardComponent: FC<CharacterCardProps> = ({ character }: CharacterCardProps) => {

    const dispatch = useAppDispatch();
    const followingIds = useAppSelector((state) => state.following.followingIds);

    const onToggleFavorite = (setFav: boolean) => {
        if (setFav) {
            dispatch(addCharacterToFollowingList(character.id));
        } else {
            dispatch(removeCharacterToFollowingList(character.id));
        }
    };

    return (
        <Card>
            <Card.Picture>
                <img src={character.image} alt={character.name} />
            </Card.Picture>
            <Card.Content>
                <span>{character.name}</span>
                <FollowingButtonComponent 
                    isFav={followingIds.indexOf(character.id) >= 0}
                    onToggleFavorite={onToggleFavorite}
                />
            </Card.Content>
        </Card>
    )
}

export default CharacterCardComponent