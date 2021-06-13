const AirplanesView =({airplane, onChangeStatus})=>{
  const onChangeStatusHandler = ()=>{
    onChangeStatus(airplane.id)
  }
  return (
    <div>
      <ul>
        <li>{`Title: ${airplane.title}`}</li>
        <li>{`Start date: ${airplane.startDate}`}</li>
        <li>{`Time in air: ${airplane.timeInAir}`}</li>
        <li>{`Fly: ${airplane.fly}`}</li>
      </ul>
      <button onClick={onChangeStatusHandler}>change fly status</button>
    </div>
  )
}
export default AirplanesView