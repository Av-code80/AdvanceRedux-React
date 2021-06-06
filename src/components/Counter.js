import { useSelector, useDispatch } from 'react-redux'; //4)need import data from redux store

import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();          //8)import it up then take no argument but take a func from which dispatch an action against redux-store  
  const Counter = useSelector(state => state.counter); //5*)get acces to data managed in store by useSelector

  const incrementHandler = () => {        //9)So make 2func for dispatch new action
    dispatch({ type: 'increment' });      //must use exact identifier: 'increment' here
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 10 });   //10)payload amount => 11) to index.js reducer
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {};

  return (                             //6)to output useSelector at jsx
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{Counter}</div> 
      <div>
      <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>   //7)need 2buttons to dispatch action
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
