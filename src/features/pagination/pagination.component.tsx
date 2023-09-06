import { FC } from 'react';
import PaginationInfo from './pagination.types';
import { useLanguage } from '../language';
import PaginationWrapper from './pagination.styles';
import Button from '../styles/button.styles';

type PaginationProps = {
  p: PaginationInfo;
  onP: () => void;
  onN: () => void;
};

const Pagination: FC<PaginationProps> = ({
  p,
  onP,
  onN
}: PaginationProps) => {
  const onPrev = () => {
    onP();
  };

  const onNext = () => {
    onN();
  };

  const { t } = useLanguage();

  return (
    <PaginationWrapper>
      <Button disabled={!p.prev} onClick={() => onPrev()}>
        {t('pagination.BtnPrev')}
      </Button>
      <Button disabled={!p.next} onClick={() => onNext()}>
      {t('pagination.BtnNext')}
      </Button>
    </PaginationWrapper>
  );
};

export default Pagination;
