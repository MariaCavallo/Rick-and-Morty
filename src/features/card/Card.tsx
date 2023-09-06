import { FC, PropsWithChildren} from 'react'
import CardPicture from './CardPicture';
import CardContent from './CardContent ';
import CardWrapper from './card.styles';

type CompoundCard = FC<PropsWithChildren<object>> & {
    Picture: FC<PropsWithChildren<object>>
    Content: FC<PropsWithChildren<object>>
}

export const Card: CompoundCard = ({ children }: PropsWithChildren<object>) => (
        <CardWrapper className="card">
            {children}
        </CardWrapper>
    );

Card.Picture = CardPicture;
Card.Content = CardContent;
