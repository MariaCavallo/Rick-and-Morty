import { FC } from 'react';
import { useLanguage } from './context/language.context';
import LanguageWrapper, { LanguageButton } from './language.styles';


const LanguageComponent: FC = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <LanguageWrapper className={'language'}>
      <LanguageButton
        onClick={() => setLanguage('SPANISH')}
        className={language === 'SPANISH' ? 'language-button active' : 'language-button'}>
          <div>
            <img src="/images/espana.png" alt="bandera-españa" height={'auto'} width={'auto'}/>
            {t('language.spanish')}
          </div>
      </LanguageButton>
      <LanguageButton
        onClick={() => setLanguage('ENGLISH')}
        className={language === 'ENGLISH' ? 'language-button active' : 'language-button'}>
          <div>
            <img src="/images/reino-unido.png" alt="bandera-reino-unido" height={'auto'} width={'auto'}/>
            {t('language.english')}
          </div>
      </LanguageButton>
      <LanguageButton
        onClick={() => setLanguage('PORTUGUESE')}
        className={language === 'PORTUGUESE' ? 'language-button active' : 'language-button'}>
          <div>
            <img src="/images/portugal.png" alt="bandera-portugal" height={'auto'} width={'auto'}/>
            {t('language.portuguese')}
          </div>
      </LanguageButton>
    </LanguageWrapper>
  );
};
export default LanguageComponent;
