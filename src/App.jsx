// src/App.jsx
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Flex>
          <Sidebar />
          <Box flex="1" p="4" ml="200px"> {/* Add ml="200px" to avoid content overlap with Sidebar */}
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;

