import { FC } from 'react';

const CardsContainer: FC = ({ children }) => (
  <div className="container">
    <div className="row">{children}</div>
  </div>
);

export default CardsContainer;
