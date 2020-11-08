import { Button } from '@material-ui/core';
import './App.scss';
import NotFoundView from './pages/errors/NotFoundView';
function App() {
  return (
    <div className="App">
      <NotFoundView />
      {/* <button className="btn btn-danger">
        Welcome to React js boilerplate
      </button>
      <Button variant="outlined" >hello</Button> */}

    </div>
  );
}

export default App;
