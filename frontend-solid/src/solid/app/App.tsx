import '../../styles/global.scss';
import { AuthProvider } from '../features/auth/context/AuthContext';

function App() {

  return (
    <div class='App'>
      <AuthProvider>
        <h1>Привет мир!</h1>
      </AuthProvider>
    </div>
  )
}

export default App
