import React from 'react';
import Card from './Card';

const CardList = ({ cats }) => {
  const renderCard = cats.map((cat, i) => {
    return (
      <Card id={cat.id} name={cat.name} email={cat.email} key={`cat-${i}`} />
    );
  });
  return (
    <div className="row">
      {renderCard}
      {renderCard}
    </div>
  );
};

export default CardList;
