import './App.css'

function App() {
    const currDate = new Date();

  return (
      <div>
        <h1>Hello Word</h1>
        <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
        <h2>The date now is {currDate.toLocaleDateString()}.</h2>
      </div>
  );
}

export default App
