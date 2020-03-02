import React, { Component } from "react"
import { Button } from 'antd'

interface Greeting {
    name: string
    firstName?: string
    secondName?: string
}

interface State {
    count: number
}

class HelloClass extends Component<Greeting, State> {
    state: State = {
        count: 0
    }
    static defaultProps = {
        firstName: "",
        secondName: ""
    }
    render() {
        return (
            <>
            <p>You have clicked {this.state.count} times</p>
            <Button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Hello {this.props.name}</Button>
            </>
        )
    }
}

export default HelloClass