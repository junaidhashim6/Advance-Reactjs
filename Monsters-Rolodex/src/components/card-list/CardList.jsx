/* eslint-disable react/prop-types */
import { Component } from "react";
import "../card-list/card-list.css";
import Card from "../card/Card";
class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { email, name, id } = monster;
          return (
            <Card key={id} name={name} email={email} id={id}/>
          );
        })}
      </div>
    );
  }
}

export default CardList;
