export default function createStore(reducer) {

    if (typeof reducer !== 'function') {
        throw Error('reducer should be a function');
    }
    let currentState = undefined;
    let currentReducer = reducer;
    let currentListeners = [];
    let nextListeners = currentListeners;

    function dispatch(action) {
        currentState = currentReducer(currentState, action);

        const listeners = nextListeners;
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }

        return action;
    }

    function subscribe(listener) {
        nextListeners.push(listener);

        return function unsubscribe() {
            nextListeners.splice(nextListeners.indexOf(listener), 1);
        }
    }

    function getState() {
        return currentState;
    }

    return {
        dispatch,
        subscribe,
        getState
    }
}
