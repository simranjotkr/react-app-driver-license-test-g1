import './App.css';
import userState from 'react'
import StartingPage from './components/starting-page/StartingPage';
import Navbar from './components/navbar/Navbar' 

function App() {
  return (
    <div className="App grid">
      <Navbar />
      <StartingPage />
    </div>
  );
}

export default App;
