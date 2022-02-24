import './App.css';
import Login from './components/Login/Login'
import Register from './components/Register/Register'

function App() {
  return (
    <div className="App">
        <h1> Agenda telefonica </h1>
      <main>
        <section>
          <Login />
        </section>
        <section>
          <Register />
        </section>
      </main>
    </div>
  );
}

export default App;
