
import Layout from "./layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputDesign from "./trade/InputDesign";
import InputDesign2 from "./myTickets/InputDesign";
import InputDesignHome from "./home/InputDesign";
import Profile2 from "./profile/InputDesign";
import SettingsPage from "./settings/InputDesign";
import ChatInterface from "./chat/ChatInterface";
import Auth2 from "./auth/ChatInterface";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/home" element={<Layout><InputDesignHome /></Layout>} />
      <Route path="/myTickets" element={<Layout><InputDesign2 /></Layout>} />
      <Route path="/trade" element={<Layout><InputDesign /></Layout>} />
      <Route path="/chat" element={<Layout><ChatInterface /></Layout>} />
      <Route path="/profile" element={<Layout><Profile2 /></Layout>} />
      <Route path="/settings" element={<Layout><SettingsPage /></Layout>} />
      <Route path="/auth" element={<Auth2/>} />
      </Routes>
    </Router>
  );
}

export default App
