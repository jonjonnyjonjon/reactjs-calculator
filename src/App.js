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

    evaluateExpression(num1, num2, operator) {
        var total = 0
        if (operator === "+") {
            total = parseInt(num1) + parseInt(num2)
        } else if (operator === "-") {
            total = parseInt(num1) - parseInt(num2)
        } else if (operator === "x") {
            total = parseInt(num1) * parseInt(num2)
        } else {
            total = parseInt(num1) / parseInt(num2)
        }

        return total
    }

    handleClick(value) {
        var operator = this.state.operator

        // if value is a number
        if (!isNaN(value)) {
            if (operator === "=") {
                this.setState(prevState => {
                    return {
                        num1: "" + prevState.num1 + value,
                        toDisplay: "" + prevState.num1 + value
                    }
                })

            // num1
            } else if (operator === "") {
                this.setState(prevState => {
                    return {
                        num1: "" + prevState.num1 + value,
                        toDisplay: "" + prevState.num1 + value
                    }
                })

            // num2
            } else if (operator !== "") {
                this.setState(prevState => {
                    return {
                        num2: "" + prevState.num2 + value,
                        toDisplay: "" + prevState.num2 + value
                    }
                })
            }            

        // value is an operator
        } else if ("+-x/".includes(value)) {

            // operator clicked after clicking "="
            if (operator === "=") {
                this.setState(prevState => {
                    return {
                        num1: prevState.toDisplay,
                        operator: value
                    }
                })

            // very first operator clicked
            } else if (this.state.num2 === "") {
                this.setState({
                    operator: value
                })
                
            // subsequent operators clicked, i.e. 1+1+1
            } else {
                this.setState(prevState => {
                    var total = this.evaluateExpression(prevState.num1, prevState.num2, operator)

                    return {
                        num1: total,
                        num2: "",
                        toDisplay: total,
                        operator: value
                    }
                })
            }

        // value is "="
        } else if (value === "=") {
            if (this.state.num1 !== "" && this.state.num2 !== "") {
                this.setState(prevState => {
                    var total = this.evaluateExpression(prevState.num1, prevState.num2, operator)

                    return {
                        num1: "",
                        num2: "",
                        toDisplay: total,
                        operator: "="
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

        }
    }

    render() {
        const buttonStyle = {
            backgroundColor: "grey",
            width: "20%"
        }

        const displayBox = {
            display: "block",
            backgroundColor: "lightblue",
        }

        return (
            <div>
                <div style={displayBox}>
                    Current total: {this.state.toDisplay}
                    <br />
                    Current operator: {this.state.operator}
                    &nbsp;
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
                    <br />
                        
                    <Button style={buttonStyle} value="clear" handleClick={this.handleClick} />
                            

                </div>
            </div>
        )
    }
    
}

export default App;