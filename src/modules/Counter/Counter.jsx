import { useContext } from 'react';
import Context from 'pages/PresenationPage/context'

import { useSelector, useDispatch } from 'react-redux'
import { counterActionTypes } from './redux/CounterSlice'
import { counterValueSelector } from './redux/selectors';

function Counter() {
  const  contextFunc = useContext(Context);
  console.log(contextFunc)

  const count = useSelector(counterValueSelector);
  const dispatch = useDispatch();

  const incrementHandler = () => dispatch(counterActionTypes.increment());

  const decrementHandler = () => dispatch(counterActionTypes.decrement());

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={incrementHandler}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={decrementHandler}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter;