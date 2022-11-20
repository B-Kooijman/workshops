import { ImageField } from '@sitecore-jss/sitecore-jss-react';
import Card from 'components/molecules/Card';
import CardsContainer from 'components/molecules/CardsContainer';
import { useI18n } from 'next-localization';
import { CompanyCardsQuery, IEmployer } from './CompanyCards.dynamic.graphql';

const CompanyCards = (props: CompanyCardsQuery): JSX.Element => {
  const { t } = useI18n();
  const companies = props.item?.children.results as IEmployer[];

  return (
    <div>
      <br />
      <h2>{t('CompaniesText')}</h2>
      <br />

      <CardsContainer>
        {companies?.map(({ title, image, friendlyUrl, id }) => {
          return (
            <Card
              title={{ value: String(title?.value) }}
              text={{ value: '' }}
              image={image as ImageField}
              url={String(friendlyUrl?.value)}
              key={id}
            />
          );
        })}
      </CardsContainer>
    </div>
  );
};

export default CompanyCards;
