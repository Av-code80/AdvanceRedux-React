import { useSelector, useDispatch } from 'react-redux'; //4)need import data from redux store

import { counterActions } from '../store/counter';    //25)import counterCtion here, { counterActions } is an object contain reducer names
import classes from './Counter.module.css';

const Counter = () => {           //useSelector for Auth is created in App.js
  const dispatch = useDispatch();          //8)import it up then take no argument but take a func from which dispatch an action against redux-store  
  const counter = useSelector((state) => state.counter.counter); //5*)get acces to data managed in store by useSelector
  const show = useSelector((state) => state.counter.showCounter);     //34add counter to useSelector => 35)App.js

  const incrementHandler = () => {        //9)So make 2func for dispatch new action
    dispatch(counterActions.increment());      //must use exact identifier: 'increment' here
  };                                   //26)then instead of ({ type: 'increment' }), put counterAction.increment(), bcz it's a method

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));   //10)payload amount => 11) to index.js reducer
  };                                            //27) for payload: instead of ({ type: 'increase', amount: 10 }); put...
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());       //14)dispatch action of index.js
  };


  return (                             //6)to output useSelector at jsx
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>} 
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>   //7)need 2buttons to dispatch action  //15) hide button by show &&... => 16) go index.js
  );
};

export default Counter;


//* now need to pass function in it which ll be executed by react-redux &
//dertermine which piece of data wanna extract from our store


// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
