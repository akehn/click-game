import React, { Component } from "react";
import Navbar from "./components/Navbar/index.js";
import Jumbotron from "./components/Jumbotron/Jumbotron.js"
import Footer from "./components/Footer/footer.js"
import symbol from "./Symbols.json";
import SymbolCard from "./components/Body/symbol.js";
import Wrapper from "./components/Wrapper/index.js"
import "./app.css"

class App extends Component {

  state = {
    score: 0,
    topscore: 0,
    clicks: [],
    quote: "",
    symbol
  };

  componentDidMount = () => {
    this.quote("Egyptian symbols")
  }

  quote = quote => {
    this.setState({quote: quote})
  }

  shuffleArray = array => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  checkClick = id => {
    if(this.state.clicks.includes(id)){
      this.setState({ score: 0, clicks: []});

    } else {
        if (this.state.score + 1 > this.state.topscore) {
          this.setState({
              topscore: this.state.score + 1
          })
        }
      this.state.clicks.push(id)
      this.setState({ score: this.state.score + 1});
    }
  };

  handleOnchange = (id, definition) => {
    this.checkClick(id)
    this.shuffleArray(this.state.symbol)
    this.setState({quote: definition})
  };


  render() {
    return (
      <div>
        <Navbar quote = {this.state.quote} score = {this.state.score} topscore={this.state.topscore}/>
        <Jumbotron/>
          <Wrapper >
            {this.state.symbol.map(symbol => (
              <span key={symbol.id}>
                <SymbolCard
                  handleOnchange={this.handleOnchange}
                  id={symbol.id}
                  name={symbol.name}
                  image={symbol.image}
                  definition={symbol.catchdefinition}
                />
                </span>
            ))}
          </Wrapper>
        <Footer />
    </div>
    );
  }
}

export default App;
