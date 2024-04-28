import React, { useState } from 'react';

export default function WeirdCounter() {
    class Counter extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
            this.setCount = this.setCount.bind(this);
        }

        setCount(newValue) {
            this.setState({ count: newValue });
        }

        render() {
            return (
                <div>
                    <p>Count: {this.state.count}</p>
                    <button onClick={() => this.setCount(this.state.count + 1)}>Increase</button>
                </div>
            );
        }
    }

    return <Counter />;
}