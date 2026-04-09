import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Loading from './components/Loading';
import './App.css';

function App() {
  const { user, loading, error, login, register, logout } = useAuth();

  console.log("Estado do usuário:", user);
  console.log("Loading:", loading);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
        <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login onLogin={login} loading={loading} error={error} />} />
        <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register onRegister={register} loading={loading} error={error} />} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} onLogout={logout} loading={loading} /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;