import './App.css';
import React from 'react'
import Child from './Components/Child'
import Image from './Image/counter.png'

import Button from 'react-bootstrap/Button';

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

    Reset = () =>{
      this.setState({
        count:0
      })
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
        <div className="container-fluid" >
          <div className="row" style={{backgroundColor:'#F4360D'}}>
            <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
              <img src={Image} width='80px'/>

            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
            <Child count={this.state.count}/>

            </div>
          </div>

          <div className="row">
            <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
            <Button variant="primary" onClick={this.increment}> Increment</Button>&emsp;&emsp;
            <Button variant="danger" onClick={this.decrement}>Decrement</Button>&emsp;&emsp;
            <Button variant="primary"  onClick={this.Reset}>Reset</Button>

            </div>
          </div>


        </div>
        
     
      
     
      </div>
    );
  }

  }
 

export default App;
