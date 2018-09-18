import React, {Component} from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Card from "./components/Card/Card";
import Title from "./components/Title";
import CardPiece from "./components/CardPiece/CardPiece";
import cards from "./cards.json";

class App extends Component{
  state = {
    Card, 
    score: 0,
    highScore: 0,
    clicked: [],
    winMessage: ""
  };

  // gameOver = () => {
  //   if(this.state.score > this.state.highScore){
  //     this.setState({highScore: this.state.score}, function(){
  //       console.log(this.state.highScore);        
  //     });
  //   }
  //   this.state.card.forEach(card => {
  //     card.count=0;
  //   });
  //   alert("Game Over:(\nScore: $(this.state.score)");
  //   this.setState({score: 0});
  //   return true;
  // }

  // clicksCount = id =>{
  //   if (this.state.clicked.indexOf(id) === -1){
  //     this.handleIncrement();
  //     this.setState({clicked: this.state.clicked.concat(id)});
  //   }else {
  //     this.clickReset();
  //   }
  // };

  // handleIncrement = () => {
  //   const nScore = this.state.currentScore +1;
  //   this.setState({
  //     score: nScore,
  //     winMessage: ""
  //   });
  //   if(nScore===12){
  //     this.setState({winMessage: "You Won!!!!"});
  //   } else {
  //   this.gameOver();
  // }
  // }

  displayCardPiece = () =>{
    var cardList = [];
    for(var i = 0; i < cards.length; i++){
      cardList.push(<CardPiece name = {cards[i].name} image = {cards[i].image}/>);
    }
    return cardList;
  }

  render(){
    var cardList = this.displayCardPiece();
    return(
      <Wrapper>
        <Header score = {this.state.score} highScore={this.state.highScore} winMessage={this.state.winMessage}>
        Clicky React Game!
        </Header>
        <Title>
        Click on each image and you should not click any repeated image or you will loose this game and the score too!!!
        </Title>
        <Card>
          {cardList}
        </Card>
      </Wrapper>
    );
  }

  
  //   this.state.card.find((one, i) =>{
  //     if(one.id === id){
  //       if(card[i].count = card[i].count + 1);
  //       this.setState({score: this.state.score + 1}), 
  //       function(){
  //         console.log(this.state.score);          
  //       });
  //       this.state.card.sort() => Math.random() - 
  //     }
  //   })
  // }
}
export default App;