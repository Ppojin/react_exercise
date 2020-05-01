import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyRcc extends Component {
    static defaultProps = {
        name: '리액트 default',
    };
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired,
    };
    render() {
        const {name, age} = this.props;
        return (
            <div>RCC {name} / {age}</div>
        );
    }
}
// == class ==
// MyRcc.defaultProps = {
//     name: "리액트 Default name"
// };
// MyRcc.propTypes = {
//     name: PropTypes.string
// };
export default MyRcc;