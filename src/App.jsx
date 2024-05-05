import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Home, Mars, Notifications, Notification } from "./pages";
import Footer from "./components/common/Footer";
import Nav from "./components/common/Nav";
import ProtectedProvider from "./ctx/ProtectedProvider";

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route
            path="/mars"
            element={
              <ProtectedProvider>
                <Mars />
              </ProtectedProvider>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/notifications"
            element={
              <ProtectedProvider>
                <Notifications />
              </ProtectedProvider>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/notifications/:id"
            element={
              <ProtectedProvider>
                <Notification />
              </ProtectedProvider>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
