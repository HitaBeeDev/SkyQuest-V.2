import Container from "./Components/Container";
import { FlightProvider } from "./ContextAPI/FlightContext";

function App() {
  return (
    <div>
      <FlightProvider>
        <Container />
      </FlightProvider>
    </div>
  );
}

export default App;
