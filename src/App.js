
import './App.css';
import React from 'react'
import Child from './Components/Child'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      count:1
    }

   

  }
  increment = () =>{
    if(this.state.count>= 0){

    
    this.setState({
      count : this.state.count+1
    })
  }
}

  decrement = () =>{
    if(this.state.count > 0){
      this.setState({
        count : this.state.count-1
      })
    }
    }
   

  static getDerivedStateFromProps(props,state)
  {
    console.log("getDerivedStateFromProps :",state)
    return null
  }

  // shouldComponentUpdate(){
  //   if(this.state.count >0){
  //     return true
  //   }
  //   else{
  //     return false
  //   }
  // }

 
  render(){
    return (
      <div className="App">
        <h1> Muhammad zubair Minhas</h1>
       <Child count={this.state.count}/>
       <button onClick={this.increment}>
      Increment
       </button>
       <button onClick={this.decrement}>
      Decrement
       </button>
      </div>
    );
  }

  }
 

export default App;
