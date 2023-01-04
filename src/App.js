import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './component/Router/Router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
