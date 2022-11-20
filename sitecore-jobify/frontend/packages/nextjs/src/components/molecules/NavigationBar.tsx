import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import NextLink from 'next/link';

interface DataSource {
  heading: Field<string>;
  name: string;
  id: string;
}

interface Item {
  id: string;
  url: {
    path: string;
  };
  pageTitle: {
    value: string;
    jsonValue: {
      value: string;
    };
  };
}

interface ItemSearchResults {
  results: Item[];
}

type MenuItem = Item;

interface Menu {
  id: string;
  children: ItemSearchResults;
  pageTitle: {
    value: string;
  };
}

interface GraphQlIntegratedDemoProps {
  fields: {
    data: {
      datasource: DataSource;
      menu: Menu;
    };
  };
}

type NavigationBarProps = GraphQlIntegratedDemoProps;

const MenuItem = (item: Item) => (
  <li>
    <NextLink href={item.url.path || ''}>
      <a>{item.pageTitle.value}</a>
    </NextLink>
  </li>
);

const Menu = (menu: Menu) => (
  <ul>
    {menu?.children?.results?.map((item: Item) => (
      <MenuItem key={item.id} {...item} />
    ))}
  </ul>
);

const NavigationBar = (props: NavigationBarProps): JSX.Element => {
  const { datasource, menu } = props.fields.data || {};
  return (
    <nav className="navbar">
      {datasource && (
        <NextLink href="/">
          <a>{datasource.heading?.value}</a>
        </NextLink>
      )}
      <Menu {...menu} />
    </nav>
  );
};

export default NavigationBar;
