import './App.css';
import BowlerList from './BowlerList';

// Header component, describes purpose of web app
function Header() {
  return (
    <>
      <h1>Mission 10</h1>
      <h3>This website lists out the bowlers on the Marlins and the Sharks!</h3>
    </>
  );
}

// Main component
function App() {
  return (
    <>
      <Header />
      <br />
      <BowlerList />
    </>
  );
}

export default App;
