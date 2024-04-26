/* eslint-disable react/prop-types */
import Card from "./Card";

export const CardList = ({monsters}) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};
