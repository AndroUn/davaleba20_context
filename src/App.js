import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes/routes';
import './App.css';

function App() {
  return <RouterProvider router = {createBrowserRouter(routes)} />
}

export default App;
