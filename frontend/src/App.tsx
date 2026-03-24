import { BrowserRouter } from 'react-router-dom';
import './styles/global.scss';
import { AppRoutes } from './react/router/AppRoutes';
import { AuthProvider } from './react/context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes /> 
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
