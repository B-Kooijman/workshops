import {
  Text,
  Field,
  GetStaticComponentProps,
  GraphQLRequestClient,
  useComponentProps,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';
import {
  EmployerCardsDocument,
  EmployerCardsQuery,
  IEmployer,
} from './EmployerCards.dynamic.graphql';
import { useI18n } from 'next-localization';
import config from 'temp/config';
import { IVacancy, TextField } from 'components/molecules/NavigationBar.dynamic.graphql';
import Card from 'components/molecules/Card';
import CardsContainer from 'components/molecules/CardsContainer';

const titleKey = 'EmployerIntroductionTitle';
const textKey = 'EmployerIntroductionText';

const replacementToken = '{0}';

const replaceDictionaryToken = (
  dictionary: string,
  replacement: TextField,
  token = replacementToken
) => {
  const { t } = useI18n();
  return replacement ? t(dictionary)?.replace(token, String(replacement?.value)) : undefined;
};

interface EmployerCardsProps {
  rendering: ComponentRendering;
}

export default function EmployerCards({ rendering }: EmployerCardsProps): JSX.Element {
  const data = useComponentProps<EmployerCardsQuery>(String(rendering.uid));
  const relatedEmployer = data.relatedEmployer as IEmployer;
  const vacancies = data.search?.vacancies as IVacancy[];
  const vacanciesText = replaceDictionaryToken(titleKey, relatedEmployer?.title as TextField);
  const welcomeText = replaceDictionaryToken(textKey, relatedEmployer?.text as TextField);

  return (
    <section>
      {welcomeText && <Text field={{ value: String(welcomeText) }} tag="h2" />}
      {vacanciesText && <Text field={{ value: String(vacanciesText) }} tag="h3" />}
      <CardsContainer>
        {!!vacancies?.length &&
          vacancies?.map((vacancy: IVacancy) => {
            const { friendlyUrl } = vacancy;
            return (
              <Card
                {...vacancy}
                title={vacancy.title as Field<string>}
                text={vacancy.text as Field<string>}
                image={{ value: { src: String(relatedEmployer?.image?.src) } }}
                url={String(friendlyUrl?.value)}
                key={vacancy?.id}
                bottomLink={{ value: { href: '/', text: 'Bekijk vacature' } }}
              />
            );
          })}
      </CardsContainer>
      <pre style={{ color: 'blue', fontSize: '12px', background: 'lightGrey' }}>
        <code>{JSON.stringify(data, null, 1)}</code>
      </pre>
    </section>
  );
}

export const getStaticProps: GetStaticComponentProps = async (_rendering, _layoutData) => {
  const graphQLClient = new GraphQLRequestClient(config.graphQLEndpoint, {
    apiKey: config.sitecoreApiKey,
  });

  const result = await graphQLClient.request<EmployerCardsQuery>(EmployerCardsDocument, {
    language: 'en',
    relatedEmployer: _layoutData.sitecore.context.relatedEmployer,
  });

  return result;
};
