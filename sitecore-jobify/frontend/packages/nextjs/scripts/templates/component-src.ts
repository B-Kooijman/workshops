/**
 * Generates React boilerplate for a component under `src/components`
 * @param componentName - the component name
 * @returns component src boilerplate as a string
 */
function generateComponentSrc(componentName: string): string {
  return `import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { IComponentProps } from 'lib/component-props';

type ${componentName}Props = IComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const ${componentName} = (props: ${componentName}Props): JSX.Element => (
  <div>
    <p>${componentName} Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default ${componentName};
`;
}

export default generateComponentSrc;
