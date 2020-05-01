import React, {Component} from 'react';

class MyEvent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            message: "",
            username: ""
        });
    }

    handlerMessageChange = (event)=>{
        // console.log(event.target.value);
        this.setState({[event.target.name] : event.target.value});
    };

    render() {
        return (
            <div>
                <div>
                    <input
                        type = "text"
                        name = "message"
                        placeholder={`이벤트(messageChange) 테스트`}
                        value={this.state.message}
                        onChange={this.handlerMessageChange}
                    />
                </div>
                <div>
                    <input
                        type = "text"
                        name = "username"
                        placeholder={`이벤트(usernameChange) 테스트`}
                        value={this.state.username}
                        onChange={this.handlerMessageChange}
                    />
                </div>
                <div>
                    <button onClick={() => this.setState({message: ""})}>초기화</button>
                </div>
            </div>
        );
    }
}

export default MyEvent;