import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList/UserList';
import UserInfo from './pages/UserInfo/UserInfo';
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <Router>
            <div className="App">
                <Routes>
                    <Route path="/" Component={UserList}></Route>
                    <Route path="/details" Component={UserInfo}></Route>
                    <Route path="/contact" Component={Contact}></Route>

                </Routes>
            </div>
        </Router>
  );
}

export default App;
