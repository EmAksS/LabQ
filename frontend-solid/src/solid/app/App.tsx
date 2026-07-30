import { Router } from '@solidjs/router';
import { AuthProvider } from '../features/auth/context/AuthContext';
import { AppRoutes } from './router/AppRoutes';

import '../../styles/global.scss';

function App() {

  return (
    <div class='App'>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
