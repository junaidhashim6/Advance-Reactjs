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
          
          return (
            <Card key={monster.id} monster={monster}/>
          );
        })}
      </div>
    );
  }
}

export default CardList;
