import React from 'react';
import { graphql } from 'gatsby';

const HomePage = ({ data }) => {
  const cards = data.allContentfulCard.nodes;

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {cards.map(card => (
          <div key={card.id}>
            <h2>{card.nameOfCard}</h2>
            <img src={card.imageForCard.fluid.src} alt={card.nameOfCard} />
            <p>{card.stats}</p>
            <p>{card.cardDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allContentfulCard {
      nodes {
        nameOfCard
        imageForCard {
          fluid(maxWidth: 400) {
            ...GatsbyContentfulFluid
          }
        }
        stats
        cardDescription
      }
    }
  }
`;

export default HomePage;