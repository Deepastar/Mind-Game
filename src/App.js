import React, {Component} from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import CardPiece from "./components/CardPiece/CardPiece";
import cards from "./cards.json";

class App extends Component{
  state = {
    cards: cards, 
    score: 0,
    highScore: 0,
    clicked: []
  };

  gameOver = gameStatus => {
    var statMessage = "";

    if(gameStatus === "WIN"){
      statMessage = "YOU WIN!";
    } else{
      statMessage = "YOU LOSE!"
    }

    alert(`${statMessage} \n Score: ${this.state.score}`);
    
    var hScore = this.state.highScore;

    if(this.state.score > this.state.highScore){
      hScore = this.state.score;
    }

    this.setState({score: 0, clicked: [], highScore: hScore});
    return true;
  }

  checkClicks = id => {
    if(this.state.clicked.indexOf(id) === -1){
      this.state.clicked.push(id);
      this.handleIncrement();
    } else{
      this.gameOver("LOSE");
    }
  }

  handleIncrement = () => {
    const nScore = this.state.score +1;
    this.setState({
      score: nScore
    });

    if(nScore===cards.length){
      this.gameOver("WIN");
      return true;
    }

    this.state.cards.sort(()=>Math.random() - 0.5);
    return true;
  }

  displayCardPiece = () =>{
    var cardList = [];
    for(var i = 0; i < cards.length; i++){
      cardList.push(<CardPiece checkClicks = {this.checkClicks} id = {cards[i].id} name = {cards[i].name} image = {cards[i].image}/>);
    }
    return cardList;
  }

  render(){
    var cardList = this.displayCardPiece();
    return(
      <Wrapper>
        <Header score = {this.state.score} highScore={this.state.highScore}>
        Clicky React Game!
        </Header>
        <Card>
          {cardList}
        </Card>
      </Wrapper>
    );
  }
}
export default App;