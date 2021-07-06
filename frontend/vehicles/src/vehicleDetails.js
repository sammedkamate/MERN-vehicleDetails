import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router";


const VehicleDetails = () => {
  const { id } = useParams();
  const { data: vehicle, error, isPending } = useFetch('http://localhost:5000/api/' + id);
  const history = useHistory();
  
  
  const handleDelete = () => {
    fetch('http://localhost:5000/api/delete/' + vehicle._id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }
 

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { vehicle && (
        <article>
          <h2>{ vehicle.model }</h2>
          <p>Owned by { vehicle.ownerName }</p>
          <p>Vehicle Number { vehicle.vehicleNumber }</p>
          <p>Chassis Number { vehicle.chassisNumber }</p>
          <p>Insurance Number { vehicle.insuranceNumber }</p>
          <p>Registered State { vehicle.state }</p>
          <Link to={`/edit/${vehicle._id}`}><button>Edit</button></Link>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default VehicleDetails;