import Cards from '~/components/cards/Cards';

import CardsStyles from '~/styles/pages/tutoring/cards.css';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: CardsStyles,
    },
  ];
}

export default function CardsIndex() {
  return <Cards />;
}
