import { FC, PropsWithChildren } from "react"
import { CardBodyWrapper } from "./card.styles";

const CardContent: FC<PropsWithChildren<object>> = ({ children }: PropsWithChildren<object>) => (
    <CardBodyWrapper>
        {children}
    </CardBodyWrapper>
);

export default CardContent