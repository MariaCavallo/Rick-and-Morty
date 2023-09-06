import { FC, PropsWithChildren } from 'react'
import { CardImageWrapper } from './card.styles';

const CardPicture: FC<PropsWithChildren<object>> = ({ children }: PropsWithChildren<object>) => (
    <CardImageWrapper>
        {children}
    </CardImageWrapper>
);

export default CardPicture;