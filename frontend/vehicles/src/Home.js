import VehicleList from "./VehicleList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: vehicle } = useFetch('http://localhost:5000/api')
  return (
    <div className="home">
      <h1>Welcome to Vroom!</h1>
      <h2>Your one stop shop for registration of vehicles</h2>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { vehicle && <VehicleList vehicles={vehicle} /> }
      <footer>
            <p>Authors:</p>
            <a href="https://github.com/siddarthbhave">Siddarth Bhave</a><br />
            <a href="https://github.com/sammedkamate">Sammed Kamate</a>
      </footer>
    </div>
  );
}
export default Home;