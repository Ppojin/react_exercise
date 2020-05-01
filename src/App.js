import React, {Component, Fragment} from 'react';
import MyRcc from "./components/MyRcc";
import MyRsf from "./components/MyRsf";
import MyButton from "./components/MyButton";
import MyEvent from "./components/MyEvent";
import MyRefDom from "./components/MyRefDom";
import MyCallbackMap from "./components/MyCallbackMap";

class App extends Component {
    render() {
        return (
            <Fragment>
                <h1>Hello React</h1>
                <h2>Hello React2</h2>
                <MyRcc name={`"클래스 컴포넌트"`} age={10}/>
                {/*<MyRcc age={`"asdf"`}/>*/}
                {/*<MyRcc name={300}/>*/}
                <MyRsf name={`"함수형 컴포넌트"`} age={15}/>
                <MyButton/>
                <MyEvent/>
                <MyRefDom/>
                <MyCallbackMap/>
            </Fragment>
        );
    }
}

export default App;