
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import SaleOrders from './component/SaleOrders';
import ThemeToggle from './component/ThemeToggle';

const App = () => {


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Router>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Login /> } />
          <Route path="/sale" element={<SaleOrders />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
