import React from 'react';
import {render} from 'react-dom';
import {Provider, createStore} from '../../src';

function App() {

    return (
        <div>app</div>
    )
}

render(
    <Provider store={createStore()}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
