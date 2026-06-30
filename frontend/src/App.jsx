import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import OpportunityDetailsPage from "./pages/OpportunityDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BookmarksPage from "./pages/BookmarksPage";
import DashboardPage from "./pages/DashboardPage";
import CreateOpportunityPage from "./pages/CreateOpportunityPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/opportunity/:id" element={<OpportunityDetailsPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-opportunity" element={<CreateOpportunityPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
