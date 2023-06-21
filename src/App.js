import PersonalDetailsPage from './component/PersonalDetailsPage';
import GamePage from './component/GamePage';
import ReviewDetails from './component/ReviewDetails';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PersonalDetailsPage />} />
        <Route path="/startGame" element={<GamePage />} />
        <Route path="/review-detail" element={<ReviewDetails />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
