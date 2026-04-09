import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = ({ onRegister, loading, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!acceptTerms) {
      setPasswordError('Você precisa aceitar os termos');
      return;
    }
    
    if (password !== confirmPassword) {
      setPasswordError('As senhas não coincidem');
      return;
    }
    
    if (password.length < 6) {
      setPasswordError('A senha deve ter no mínimo 6 caracteres');
      return;
    }
    
    setPasswordError('');
    await onRegister(email, password);
  };

  return (
    <div className="auth-container">
      <div className="auth-card register-animation">
        <div className="auth-header">
          <span className="auth-icon">📝</span>
          <h2>Cadastro</h2>
          <p className="auth-subtitle">Crie sua conta gratuitamente</p>
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
              placeholder="Senha (mínimo 6 caracteres)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirmar Senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          
          <div className="terms">
            <input
              type="checkbox"
              id="terms"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
            />
            <label htmlFor="terms">
              Eu aceito os Termos de Serviço e Política de Privacidade
            </label>
          </div>
          
          {(error || passwordError) && (
            <div className="error-message">{error || passwordError}</div>
          )}
          
          <button type="submit" disabled={loading} className={`auth-btn ${loading ? 'loading' : ''}`}>
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </form>
        
        <div className="social-login">
          <div className="social-divider">
            <span>ou cadastre-se com</span>
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
            Já tem uma conta?{' '}
            <button type="button" onClick={() => navigate('/login')} className="auth-link">
              Faça login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;