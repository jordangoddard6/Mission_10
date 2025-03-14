import './App.css';
import BowlerList from './BowlerList';

function Header() {
  return (
    <>
      <h1>Mission 10</h1>
      <h3>This website lists out the bowlers on the Marlins and the Sharks!</h3>
    </>
  );
}

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
