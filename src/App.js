import "./App.css";
import TreePage from "./pages/TreePage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <TreePage />
      </div>
    </ChakraProvider>
  );
}

export default App;
