import { createStore } from 'redux';

const counterReducer = (state = { counter: 0}, action) => {
        if (action.type === 'increment') {
       
        return {
                counter: state.counter + 1,   //our state, just an object with a counter property
            };
        }

        if (action.type === 'increase') {  //11)
            return {
              counter: state.counter + action.amount, //reducer is dynamic, it extract an action payload
            };
          }

        if (action.type === 'decrement') {

            return {
                counter: state.counter -1,
            };
        }
        return state;
    };

    const store = createStore(counterReducer);

    export default store;