import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import {useParams} from 'react-router-dom';

const EditVehicle = () => {
  const { id } = useParams();

  const [model, setModel] = useState('');
  const [chassisNumber, setChassisNumber] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [state, setState] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:5000/api/' + id)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setModel(data.data.model);
      setChassisNumber(data.data.chassisNumber);
      setOwnerName(data.data.ownerName);
      setState(data.data.state);
      setVehicleNumber(data.data.vehicleNumber);
    })
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const vehicle = { model, chassisNumber, ownerName, state, vehicleNumber};
    fetch('http://localhost:5000/api/edit/'+id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(vehicle)
    }).then(() => {
      history.push("/");
    })
}

  return (
    <div className="create">
      <h2>Add a New Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <label>Model:</label>
        <input 
          type="text" 
          required 
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <label>Vehicle Number:</label>
        <input 
          type="text" 
          required 
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
        />
        <label>Chassis Number:</label>
        <input 
          type="text" 
          required 
          value={chassisNumber}
          onChange={(e) => setChassisNumber(e.target.value)}
        />
        <label>Owner Name:</label>
        <input 
          type="text" 
          required 
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
        />
        <label>State:</label>
        <input 
          type="text" 
          required 
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button>Edit Vehicle</button>
      </form>
    </div>
  );
}
 
export default EditVehicle;