import React, { Component } from "react";
import "./Pokecard.css";

const POK_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

//when number less than 999, add two zeros up front, and get last three digits
//1, 001 => 001; 23, 0023 => 023;
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    const Imgsrc = `${POK_API}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
          <img src={Imgsrc} alt={this.props.name} />
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp} </div>
      </div>
    );
  }
}

export default Pokecard;
