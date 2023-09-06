import { FC } from 'react'
import LoadingComponent from './loading.component'

interface WithLoadingProps {
    loading: boolean
}

export const WithLoading = <T,>(WithLoadingProps: FC<T>) => function (props: T & WithLoadingProps) {
        <>{props.loading ? <LoadingComponent /> :  <WithLoadingProps {...props} />}</>
    }