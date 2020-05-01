import React, {Component} from 'react';

class MyCallbackMap extends Component {
    state = {
        names: ['Angular', 'React', 'Vue', 'Ember'],
        name: ''
    };

    handleChange = (event) => { this.setState({name : event.target.value}); };

    handleInsert = () => {
        const {names, name} = this.state;
        this.setState({
            // names: [...names, name],
            names: names.concat(name),
            name: ''
        })
    };
    
    handleKeyPress = (event) => {
        // console.log(`${event.key} = ${event.keyCode}`);
        if(event.key === 'Enter'){
            this.handleInsert();
        }
    };

    handleRemove = (index) => {
        const {names} = this.state;
        this.setState({
            // names: [...names.slice(0, index), ...names.slice(index, names.length)]
            names: names.filter((name, i) => (i !== index))
        })
    };

    render() {
        const nameList = this.state.names.map(
            (name, index) =>{
                return (<li onDoubleClick={() => this.handleRemove(index)} key={index}>{name}</li>);
            }
        );

        return (
            <div>
                <div>{nameList}</div>
                <div>
                    <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onKeyDown={this.handleKeyPress}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleInsert}>추가</button>
                </div>
            </div>
        );
    }
}

export default MyCallbackMap;