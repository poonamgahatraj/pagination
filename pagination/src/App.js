
import './App.css';
import { Pagination } from 'antd';

function App() {
  return (
    <div className="App">
      <Pagination defaultCurrent={1} total={50} />; 
    </div>
  );
}

export default App;
