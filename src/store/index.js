import { configureStore } from '@reduxjs/toolkit';  //16)toolkit-configureStore is more easier and useful than createSlice//22)
//configureStore like createStore a store, merge multiple reducers in one
//100)remove createSlice

//101)creating main store & mergin all sice reducers together
import counterReducer from './counter';
import authReducer from './auth';     //106) import




//29)for ath state, must create a new brand slice by changing name initialCounterState
// const initialCounterState  = { counter: 0, showCounter: true };   //12) 
// //19)to use our slice we need to use return value of calling createSlice by const counterSlice
// const counterSlice = createSlice({//17*)call it below initial object. with createSlice, we're preparing a slice of our global state
//   name: 'counter',                             //18)counter can be any name
//   initialState: initialCounterState,    //: initialState,  //initial state equal to our object --30)initialCounterState
//   reducers: {                                //an object of all the reducers this slice needs
//       increment(state) {                   //every method receive latest state automatically
//         state.counter++;
//       },                      
//       decrement(state) {
//         state.counter--;
//       },
//       increase(state, action)  {                         //here need a payload, extra data
//         state.counter = state.counter + action.payload;  //it's mutating state-- 27+)Paylod replaced instead of amount
//       },                       
//       toggleCounter(state) {
//         state.showCounter = !state.showCounter;
//       },
//   },
// }); 

// const initialAuthState = {
//   isAuthenticated: false,
// };

// const authSlice = createSlice({         //31)then call createSlice to create another slice and it needs an object
//   name: 'authentication',
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

    const store = configureStore({ //21**) point toolkit content in createStore //23(configureStore), so how dispatch action ?
      reducer: { counter: counterReducer,  //104) counterReducer instead of counterSlice.reducer
      // auth: authSlice.reducer                     //32)objet act as a map reducers
        auth: authReducer
    },
    });
                                                    //=>25)with this go to component where need actions: Counter.js
    //export const counterActions = counterSlice.actions; //24)to hold all identifiers can use action, it's an object and export it, 
    //counter action should be export in counter.js
    // export const authActions = authSlice.actions;       //33***)expose it as Action, now can use it in differents components,
   //to auth
    export default store;                               //34)=> to Counter.js


    //47)now wanna splitout slices in smaller code so create counter.js, so grap initialCounterState


    //* when having pieces of state which aren't directly related, can do an authentification status
    //and the counter status, can create different slices potentially also in different files
    //to make our code maintainable

  //**we can alternatively make a map of reducer and this map set as a value for main reducer or whatever we wanna

  //*** store sate is changed now, so must fixe it in Counter.js => 34)







//     //20) const counterReducer = (state = initialState, action) => {
//   //if (action.type === 'increment') {
       // return {
//             counter: state.counter + 1,   //our state, just an object with a counter property
//             showCounter: state.showCounter  //13)we're returning overall state object; overall state object
//           };
//     }

//     if (action.type === 'increase') {  //11)
//         return {
//           counter: state.counter + action.amount, //reducer is dynamic, it extract an action payload
//           showCounter: state.showCounter
//         };
//       }

//     if (action.type === 'decrement') {

//         return {
//             counter: state.counter -1,
//             showCounter: state.showCounter
//           };
//     }

//     if (action.type === 'toggle') {
//       return {
//         showCounter: !state.showCounter,      //13)change to oposit state => 14) counter.js
//         counter: state.counter
//       };
//     }      

//     return state;
// };