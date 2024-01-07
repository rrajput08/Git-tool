import React from "react"


class Calculator extends React.Component{

    constructor(props){
        super(props);
        this.number1 =0;
        this.number2 =0;
        this.state={result:0};
    }
    getNumber1=function(event){
        this.number1 = Number(event.target.value);
    }
    getNumber2=function(event){
        this.number2 = Number(event.target.value);
    }
    render(){
        return (
            <div style={{backgroundColor:"pink", fontSize:"32px"}}>
            Hi I am a Calculator
            <div>
            <label>Nmuber 1</label>
            <input onChange={(event)=>(this.getNumber1(event))}/> 
            <br/>
            <label>Nmuber 2</label>
            <input onChange={(event)=>(this.getNumber2(event))}/>
            </div>
            <button onClick={()=>{
                console.log(this.number1);
                console.log(this.number2);
                this.setState({...this.state,result:(this.number1+this.number2)})
            }}>+</button>
            <button onClick={()=>{
                console.log(this.number1);
                console.log(this.number2);
                this.setState({...this.state,result:(this.number1*this.number2)})
            }}>*</button>
            <button onClick={()=>{
                console.log(this.number1);
                console.log(this.number2);
                this.setState({...this.state,result:(this.number1-this.number2)})
            }}>-</button>
            <button onClick={()=>{
                console.log(this.number1);
                console.log(this.number2);
                this.setState({...this.state,result:(this.number1/this.number2)})
            }}>/</button>
            <div>
                <h3> Sum = </h3>
                <p>{this.state.result}</p>
            </div>
            </div>
        )
    }
}

export default Calculator