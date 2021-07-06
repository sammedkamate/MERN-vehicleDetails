import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
  const [model, setModel] = useState('');
  const [chassisNumber, setChassisNumber] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [state, setState] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [insuranceNumber, setInsuranceNumber] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const vehicle = { model, chassisNumber, ownerName, state, vehicleNumber, insuranceNumber};

    fetch('http://localhost:5000/api/create', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(vehicle)
    }).then(() => {
      console.log('new vehicle added');
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
        <label>Insurance Number:</label>
        <input 
          type="text" 
          required 
          value={insuranceNumber}
          onChange={(e) => setInsuranceNumber(e.target.value)}
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
        <button>Add Vehicle</button>
      </form>
    </div>
  );
}
 
export default Create;