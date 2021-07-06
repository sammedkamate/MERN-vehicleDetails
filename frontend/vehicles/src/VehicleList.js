import {Link} from 'react-router-dom';

const VehicleList = ({ vehicles}) => {
    return (
      <div className="blog-list">
        {vehicles.map(vehicle => (
          <div className="blog-preview" key={vehicle._id} >
            <Link to={`/vehicle/${vehicle._id}`}>
              <h2>{ vehicle.model }</h2>
              <p>Owned by { vehicle.ownerName }</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
   
  export default VehicleList;