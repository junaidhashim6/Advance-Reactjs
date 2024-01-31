/* eslint-disable react/prop-types */
import { Component } from 'react'
import '../card/card.css'
export default class Card extends Component {
  render() {
    const {email, id, name} = this.props;
    return (
        <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}
