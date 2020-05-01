import React, {Component} from 'react';

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            number: 0
        })
    }

    handleNumDecrease = (event) => {
        const {number} = this.state;
        // console.log(event.target);
        this.setState({number: number-1})
    };

    render() {
        let {handleNumDecrease} = this;
        let {number} = this.state;
        return (
            <div>
                <button onClick={ () => this.setState({number: number+1}) }>증가</button>
                <button onClick={handleNumDecrease}>감소</button>
                <span>: {number}</span>
            </div>
        );
    }
}

export default MyButton;