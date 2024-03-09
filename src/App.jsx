import { AuthProvider } from './context/authContext';
import LoginPage from './pages/Login';
import MainPage from './pages/Main';

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <MainPage />
                <LoginPage />
            </div>
        </AuthProvider>
    );
}

export default App;
