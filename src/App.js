import React from 'react';
import './App.css';
import Data from './quotes.json';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import{faQuoteLeft} from '@fortawesome/free-solid-svg-icons'


function TwitterFontAwesome() {
  return(    
    <FontAwesomeIcon icon={faTwitter} />
  );
}

function QuoteLeftFontAwesome() {
  return(
    <FontAwesomeIcon icon={faQuoteLeft}/>
  );
}


function Quote(props){
  return(
    <div>
      <p>{props.quote}</p>
      <p className="row justify-content-end">-{props.author}</p>
    </div>
  );
}


class QuoteBox extends React.Component{
  constructor(props){
    super(props);
    this.state={
      quote: "sin mas, ni mas, por mas",
      author: "emiro campo vergel",
    }
    this.handleChangeQuote = this.handleChangeQuote.bind(this)
  }

  componentDidMount(){    
    const i = Math.trunc(Math.random()*102);
    console.log(i);
    this.setState({quote: Data.quotes[i].quote});
    this.setState({author: Data.quotes[i].author});
  }

  handleChangeQuote(){    
    const i = Math.trunc(Math.random()*102);
    console.log(i);
    this.setState({quote: Data.quotes[i].quote});
    this.setState({author: Data.quotes[i].author});
  }

  render(){
    return(
        <div className="Container">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                <QuoteLeftFontAwesome/>
                <Quote quote={this.state.quote} author={this.state.author}/>
                <div className="row justify-content-between">
                  <div style={{fontSize:"2em"}}><TwitterFontAwesome /></div>                  
                  <button className="btn btn-primary col-md-4" onClick={this.handleChangeQuote}>next</button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}


function App() {
  return (
    <div className="App">    
      <QuoteBox />
    </div>
  );
}

export default App;
