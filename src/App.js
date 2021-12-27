
import './App.css';
import Search from './components/Search';
import Books from './components/Books';

function App() {
  return (
    <>
    <div className="App">
      <h1 className="title">Google Books Search</h1>
      <Search className="card"/>
    </div>
    <Books />
    </>
    
  );
}

export default App;
