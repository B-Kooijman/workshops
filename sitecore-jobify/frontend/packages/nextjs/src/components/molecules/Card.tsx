import { Text, Image, Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import NextLink from 'next/link';

type CardProps = {
  title: Field<string>;
  bottomLink?: LinkField;
  text: Field<string>;
  image: ImageField;
  url?: string;
};

const Card = (props: CardProps): JSX.Element => (
  <NextLink href={props.url || ''}>
    <a className="col-md-4 col-6">
      <div className="card">
        <Image media={props?.image} />
        <div className="card-body">
          <Text className="card-title" tag="h5" field={props?.title} />
          <Text className="card-text" tag="p" field={props?.text} />
          {props.bottomLink && (
            <NextLink href={props.bottomLink.value.href || ''}>
              <div className="card-text-bottom">{props?.bottomLink.value.text}</div>
            </NextLink>
          )}
        </div>
      </div>
    </a>
  </NextLink>
);

export default Card;
