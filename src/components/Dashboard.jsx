import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ user, onLogout, loading }) => {
  const navigate = useNavigate();
  
  const currentHour = new Date().getHours();
  const getGreeting = () => {
    if (currentHour < 12) return 'Bom dia';
    if (currentHour < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  const handleLogout = async () => {
    await onLogout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card dashboard-animation">
        <div className="dashboard-header">
          <span className="dashboard-icon">👤</span>
          <h2>{getGreeting()}!</h2>
          <p className="dashboard-subtitle">Painel de Controle</p>
        </div>
        
        <div className="user-profile">
          <div className="avatar">
            {user?.email?.[0]?.toUpperCase() || 'U'}
          </div>
          <div className="user-info">
            <h3>{user?.email?.split('@')[0] || 'Usuário'}</h3>
            <p>{user?.email}</p>
          </div>
        </div>
        
        <div className="stats-container">
          <div className="stat-card">
            <span className="stat-icon">✓</span>
            <div className="stat-info">
              <span className="stat-number">1</span>
              <span className="stat-label">Status</span>
            </div>
            <span className="stat-badge">Autenticado</span>
          </div>
          
          <div className="stat-card">
            <span className="stat-icon">🔒</span>
            <div className="stat-info">
              <span className="stat-number">Ativa</span>
              <span className="stat-label">Sessão</span>
            </div>
            <span className="stat-badge">Protegida</span>
          </div>
          
          <div className="stat-card">
            <span className="stat-icon">📅</span>
            <div className="stat-info">
              <span className="stat-number">Hoje</span>
              <span className="stat-label">Data</span>
            </div>
            <span className="stat-badge">{new Date().toLocaleDateString('pt-BR')}</span>
          </div>
        </div>
        
        <div className="dashboard-actions">
          <button onClick={handleLogout} disabled={loading} className={`logout-btn ${loading ? 'loading' : ''}`}>
            {loading ? 'Saindo...' : 'Sair da Conta'}
          </button>
        </div>
        
        <div className="dashboard-footer">
          <p>Sistema de Autenticação Firebase</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;