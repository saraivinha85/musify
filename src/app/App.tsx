import React, { Component } from "react"

import { Card } from 'antd'

import "./App.css"

export class App extends Component {
  constructor(props: {}) {
    super(props);
  }

    render() {
        return (
            <div className="App">
                        <Card title="Card title" extra={<a href="#">More</a>} >
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                        <Card title="Card title" extra={<a href="#">More</a>} >
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>

            </div>
        );
    }
}
