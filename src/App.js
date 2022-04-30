import './App.css';
import Read from './components/read/read';

function App() {
  return (
    <div className='main'>
      <div>
        Employee Details
      </div>
      <div style={{marginTop: 20}}>
        <Read/>
      </div>
    </div>
  );
}

export default App;
