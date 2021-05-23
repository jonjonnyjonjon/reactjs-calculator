import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            num1: "",
            num2: "",
            operator: "",
            toDisplay: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(value) {
        var operator = this.state.operator

        // num1
        if (operator === "" && !isNaN(value)) {
            this.setState(prevState => {
                return {
                    num1: "" + prevState.num1 + value,
                    toDisplay: "" + prevState.num1 + value
                }
            })

        // num2
        } else if (operator !== "" && !isNaN(value)) {
            this.setState(prevState => {
                console.log(this.state.toDisplay)
                return {
                    num2: "" + prevState.num2 + value,
                    toDisplay: "" + prevState.num2 + value
                }
            })            

        // value is "="
        } else if (value === "=") {
            var total = 0
            if (operator !== "") {
                this.setState(prevState => {
                    if (operator === "+") {
                        total = parseInt(prevState.num1) + parseInt(prevState.num2)
                    } else if (operator === "-") {
                        total = parseInt(prevState.num1) - parseInt(prevState.num2)
                    } else if (operator === "x") {
                        total = parseInt(prevState.num1) * parseInt(prevState.num2)
                    } else {
                        total = parseInt(prevState.num1) / parseInt(prevState.num2)
                    }

                    return {
                        num1: total,
                        num2: "",
                        toDisplay: total,
                        operator: ""
                    }
                })
            }
        
        // value is "clear"
        } else if (value === "clear") {
            this.setState({
                num1: "",
                num2: "",
                operator: "",
                toDisplay: ""
            })

        // value is other operators
        } else {
            this.setState({
                operator: value
            })
        }
    }

    render() {
        const buttonStyle = {
            width: "20%"
        }
        return (
            <div>
                <div>
                    {this.state.toDisplay}
                    <br />
                    Current operator: 
                    {this.state.operator}
                </div>

                <div>
                    <Button style={buttonStyle} value="1" handleClick={this.handleClick} />
                    <Button style={buttonStyle} value="2" handleClick={this.handleClick} />
                    <Button style={buttonStyle} value="3" handleClick={this.handleClick} />
                    <Button style={buttonStyle} value="+" handleClick={this.handleClick} />
                    <br />

                    <Button style={buttonStyle} value="4" handleClick={this.handleClick} />
                    <Button style={buttonStyle} value="5" handleClick={this.handleClick} />
                    <Button style={buttonStyle} value="6" handleClick={this.handleClick} />
                    <Button style={buttonStyle} value="-" handleClick={this.handleClick} />
                    <br />

                    <Button style={buttonStyle} value="7" handleClick={this.handleClick} />
                    <Button style={buttonStyle} value="8" handleClick={this.handleClick} />
                    <Button style={buttonStyle} value="9" handleClick={this.handleClick} />
                    <Button style={buttonStyle} value="x" handleClick={this.handleClick} />
                    <br />

                    <Button style={buttonStyle} value="0" handleClick={this.handleClick} />
                    <Button style={buttonStyle} value="/" handleClick={this.handleClick} />
                    <Button style={buttonStyle} value="=" handleClick={this.handleClick} />
                    <br/>

                    <Button style={buttonStyle} value="clear" handleClick={this.handleClick} />

                </div>
            </div>
        )
    }
    
}

export default App;