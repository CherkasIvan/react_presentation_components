import {useDispatch, useSelector} from 'react-redux'
import {counterActionTypes} from 'modules/Courses/redux/coursesSlice'

function Courses() {
  const count = useSelector(state => state.counter.value);
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

export default Courses;