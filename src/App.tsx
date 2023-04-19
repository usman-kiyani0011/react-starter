import { useRoutes } from 'react-router-dom';
import './App.css';
import { routes } from './routes/routes';

function App() {
  const pages = useRoutes(routes);
  return <div className="App">
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    {pages}</div>;
}

export default App;
