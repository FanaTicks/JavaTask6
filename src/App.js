import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import Exapmles from './pages';
import {combineReducers, createStore} from 'redux';
import {Provider} from "react-redux";
import exaplesReducer from './pages/reducers/example';
import calcul from './Calc/calculator';


const resultReducer = combineReducers({

  exaples: exaplesReducer,

});

const store = createStore(resultReducer);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      result: "",
      history: [],
    };
  }


  render() {

    let {
      result,
      history,
    } = this.state

    const listItems = history.map((number) =>
        <li  key={number}>{number}</li>
    );

    const clear = () => {
      this.setState({result: ""});
    };

    const updateData = (value) => {
      this.setState({ result: value })
    }

    const updateHistory = (value) => {
      if(history.length>7){
        history.shift();
        this.setState({history: [...history,value]});
      }else { this.setState({history: [...history,value]});
      }
    }

    const updateHistoryExamples = (value) => {

      for (let i = 0; i < value.length; i++) {

        if(history.length>3){
          history.shift();
          this.setState({history: Array.prototype.concat(history,value)});
        }else {
          this.setState({history: Array.prototype.concat(history,value)});
        }
      }

    }

    const doubleSign = (sign) => {
      if(result.includes("+") || result.includes("-") || result.includes("*") || result.includes("/")){
        calcul.calcul({
          updateData: updateData,
          updateHistory: updateHistory,
          ress: result,
          doubleSigns: sign,
        });

      }else {
        this.setState({result: result + sign});
        }

      }

    return (
        <div>
          <h2>Calculator</h2>
          <div>
            <input type={"text"} value={result} readOnly/>
            <div>
              <Button variant="text" onClick={() => this.setState({result: result + "7"})}>7</Button>
              <Button variant="text" onClick={() => this.setState({result: result + "8"})}>8</Button>
              <Button variant="text" onClick={() => this.setState({result: result + "9"})}>9</Button>
              <Button variant="text" onClick={() => doubleSign("*")}>*</Button>
            </div>
            <div>
              <Button variant="text" onClick={() => this.setState({result: result + "4"})}>4</Button>
              <Button variant="text" onClick={() => this.setState({result: result + "5"})}>5</Button>
              <Button variant="text" onClick={() => this.setState({result: result + "6"})}>6</Button>
              <Button variant="text" onClick={() => doubleSign("-")}>-</Button>
            </div>
            <div>
              <Button variant="text" onClick={() => this.setState({result: result + "1"})}>1</Button>
              <Button variant="text" onClick={() => this.setState({result: result + "2"})}>2</Button>
              <Button variant="text" onClick={() => this.setState({result: result + "3"})}>3</Button>
              <Button variant="text" onClick={() => doubleSign("+")}>+</Button>
            </div>
            <div>
              <Button variant="text" onClick={() => this.setState({result: result + "0"})}>0</Button>
              <Button variant="text" onClick={() =>

                    calcul.calcul({
                      updateData: updateData,
                      updateHistory: updateHistory,
                      ress: result,
                      })
              }>=</Button>
              <Button variant="text" onClick={clear}>C</Button>
              <Button variant="text" onClick={() => doubleSign("/")}>&divide;</Button>
            </div>
            <div>
              <Provider store={store}>
                <Exapmles updateData={updateData} updateHistoryExamples={updateHistoryExamples}/>
              </Provider >
              <ul>{listItems}</ul>
            </div>
          </div>
        </div>
    );
  }
}

export default App;

