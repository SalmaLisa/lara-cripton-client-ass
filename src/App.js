
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Router';

function App() {
  return (
    <div style={{maxWidth:"1400px", margin:"auto"}} className='border border-emerald-800'>
      <RouterProvider router= {router}>
     
     </RouterProvider>
    </div>
  );
}

export default App;
