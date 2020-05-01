import React, {Component} from 'react';

class MyRefDom extends Component {
    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={(ref) => {
                            this.myRefTarget=ref
                        }
                    }
                />
                <button
                    onClick={()=> {
                            this.myRefTarget.focus()
                        }
                    }
                >포커스주기</button>
            </div>
        );
    }
}

export default MyRefDom;