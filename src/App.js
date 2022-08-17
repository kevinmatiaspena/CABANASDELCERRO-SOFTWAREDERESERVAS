import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
//import backgoundLogin from "./components/imgBackground/logo.jpg"

function App() {
  return (
    <div className='App' style={{ width:'auto',height:'auto'}}>
      {/* <img src="https://image.jimcdn.com/app/cms/image/transf/none/path/s64257ea22a7431f1/backgroundarea/i666014df4a6eaca9/version/1516926887/image.jpg" alt="" srcset="" /> */}
      <Login />
    </div>
  );
}

export default App;
