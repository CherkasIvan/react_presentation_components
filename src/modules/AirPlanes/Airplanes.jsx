import {useDispatch} from 'react-redux'
import {airplanesActionTypes} from "modules/AirPlanes/redux/airplanesSlice";
import AirPlanesView from "modules/AirPlanes/AirplanesView/AirplanesView";

function Airplanes({airplanes}) {
  const dispatch = useDispatch()

  const changeFavoriteStatusHandler = (id) => {
    dispatch(airplanesActionTypes.changeFavoriteStatus({id: id}))
  }
  return (
    <div>
      {airplanes.map((airplane, index) => (
          <AirPlanesView
            airplane={airplane}
            key={`${index}-${airplanes.id}`}
            onChangeStatus={changeFavoriteStatusHandler}
          />
        )
      )}
    </div>
  )
}

export default Airplanes;