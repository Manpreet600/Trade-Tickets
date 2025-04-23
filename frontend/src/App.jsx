
import Home from "./home";
import Layout from "./layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyTickets from "./myTickets";
import TradeTickets from "./tradeTickets";
import Chat from "./chat";
import Profile from "./profile";
import Settings from "./settings";
import InputDesign from "./trade/InputDesign";
import InputDesign2 from "./myTickets/InputDesign";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/home" element={<Layout><Home /></Layout>} />
      <Route path="/myTickets" element={<Layout><InputDesign2 /></Layout>} />
      <Route path="/trade" element={<Layout><InputDesign /></Layout>} />
      <Route path="/chat" element={<Layout><Chat /></Layout>} />
      <Route path="/profile" element={<Layout><Profile /></Layout>} />
      <Route path="/settings" element={<Layout><Settings /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App
