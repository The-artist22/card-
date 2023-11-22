import { AppRouter } from "./config/AppRouter";
import login from "./screens/loginup";

function App() {
  return (
    <>
      <AppRouter />;
      <login />
    </>
  );
}

export default App;
