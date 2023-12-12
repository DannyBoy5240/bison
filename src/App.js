import { Routes, Route, Navigate } from "react-router-dom";
import { WalletProvider } from "./WalletContext.js";
import Header from "./layouts/Herder.jsx";
import Footer from "./layouts/Footer.jsx";
import Dashboard from "./pages/Dashboard";
import LabbClaim from "./pages/LabbClaim";
import SwapBridge from "./pages/BitmapBridge/SwapBride/SwapBride";
import Bridge from "./pages/Bridge";
import SwapAndSend from "./pages/SwapAndSend";
import NetworkOverview from "./pages/NetworkOverview";
import BitmapBridge from "./pages/BitmapBridge";
import PipeBridge from "./pages/PipeBridge/PipeBridge";

function App() {
  return (
    <WalletProvider>
      <div className="App  bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard to="/" />} />
          <Route path="/bridge" element={<Bridge />} />
          <Route path="/swap-and-send" element={<SwapAndSend />} />
          <Route path="/bitmap-bridge" element={<BitmapBridge />} />
          <Route path="/bitmap-bridge/bridiging" element={<SwapBridge />} />
          <Route path="/network-overview" element={<NetworkOverview />} />
          <Route path="/pipe-bridge" element={<PipeBridge />} />
          <Route path="/claim" element={<LabbClaim />} />
        </Routes>
        <Footer />
      </div>
    </WalletProvider>
  );
}

export default App;
