import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = ({ onLogin, loading, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onLogin(email, password);
  };

  return (
    <div className="auth-container">
      <div className="auth-card login-animation">
        <div className="auth-header">
          <span className="auth-icon">🔐</span>
          <h2>Login</h2>
          <p className="auth-subtitle">Acesse sua conta</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="forgot-password">
            <a href="#">Esqueceu a senha?</a>
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" disabled={loading} className={`auth-btn ${loading ? 'loading' : ''}`}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        
        <div className="social-login">
          <div className="social-divider">
            <span>ou continue com</span>
          </div>
          <div className="social-buttons">
            <button className="social-btn" type="button">
              📧 Google
            </button>
            <button className="social-btn" type="button">
              📘 Facebook
            </button>
          </div>
        </div>
        
        <div className="auth-footer">
          <p>
            Não tem uma conta?{' '}
            <button type="button" onClick={() => navigate('/register')} className="auth-link">
              Cadastre-se
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;