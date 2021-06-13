import {useDispatch, useSelector} from 'react-redux'
import {coursesActionTypes} from "modules/Courses/redux/coursesSlice";
import CourseView from "modules/Courses/CourseView/CourseView";

function Courses() {
  const courses = useSelector(state => state.courses.directions)
  console.log(courses)
  const dispatch = useDispatch()

  const changeFavoriteStatusHandler = (id) => {
    dispatch(coursesActionTypes.changeFavoriteStatus({id: id}))
  }

  return (
    <div>
      {courses.map((course, index) =>(
          <CourseView course={course}
                      key={`${index}-${course.id}`}
                      onChangeStatus={changeFavoriteStatusHandler}
          />
        )
      )}
    </div>
  )
}

export default Courses;