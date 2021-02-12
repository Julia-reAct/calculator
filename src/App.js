import React from 'react'
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={value:'',result:'',check:[]}
        this.calculate=this.calculate.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
    handleChange(event){
        this.setState({value: event.target.value});

    }
    handleClick(event){
        let example=['30/2+2-6*7','70*2-4/2','25+5*7-9','34*4/8-7+2']
        let result =['-25','138','51','12']
        let all=[]
        for (let i =0;i<4;i++){
           let result1= this.calculate(example[i])==result[i]
           all[i]=(`${example[i]}= ${result[i]} ${result1?'правильный результат':'неправильный результат  '}`)
        }
        this.setState({check:all})
    }
    handleSubmit(event){
        event.preventDefault()
        this.setState({result:this.calculate(this.state.value)})
    }

    calculate (value)  {
        return eval(value)
    }
    render() {
        let result= this.state.check.map(c=><p>{c}</p>)
        return (
            <div className="App">
                <form  onSubmit={this.handleSubmit}>
                    <div>
                        <input className='input' type='text' value={this.state.value}
                        onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button className='button'>Send</button>
                    </div>
                </form>
                <div>{this.state.result}</div>
                    <button className='button' onClick={this.handleClick}>Check</button>
                <div>{result}</div>
            </div>
        )
    }
}


export default App;
