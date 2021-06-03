import {useDispatch, useSelector} from 'react-redux'
import {coursesActionTypes} from "modules/Courses/redux/coursesSlice";

function Courses() {
  const courses = useSelector(state => state.courses.directions)
  console.log(courses)
  const dispatch = useDispatch()

  const changeFavoriteStatusHandler = (id) => {
    dispatch(coursesActionTypes.changeFavoriteStatus({id: id}))
  }

  return (
    <div>
      {courses.map((courses, index) =>
        <div key={`${index}-${courses.id}`}>
          <ul>
            <li>{`title: ${courses.title}`}</li>
            <li>{`start date: ${courses.startDate}`}</li>
            <li>{`duration: ${courses.duration}`}</li>
            <li>{`favorite: ${courses.favorite}`}</li>
          </ul>
          <button onClick={() => changeFavoriteStatusHandler(courses.id)}>change favorite status</button>
        </div>
      )}
    </div>
  )
}

export default Courses;