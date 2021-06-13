const CourseView =({course, onChangeStatus})=>{
  return (
    <div>
      <ul>
        <li>{`title: ${course.title}`}</li>
        <li>{`start date: ${course.startDate}`}</li>
        <li>{`duration: ${course.duration}`}</li>
        <li>{`favorite: ${course.favorite}`}</li>
      </ul>
      <button onClick={() => onChangeStatus(course.id)}>change favorite status</button>
    </div>
  )
}
export default CourseView