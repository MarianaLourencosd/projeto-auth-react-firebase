import { useState, useEffect } from 'react';
import { auth } from '../services/firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    setError(null);
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      return { success: true };
    } catch (err) {
      let errorMessage = 'Erro ao fazer login. ';
      switch (err.code) {
        case 'auth/invalid-email':
          errorMessage += 'Email inválido.';
          break;
        case 'auth/user-disabled':
          errorMessage += 'Usuário desabilitado.';
          break;
        case 'auth/user-not-found':
          errorMessage += 'Usuário não encontrado.';
          break;
        case 'auth/wrong-password':
          errorMessage += 'Senha incorreta.';
          break;
        default:
          errorMessage += err.message;
      }
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const register = async (email, password) => {
    setError(null);
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      return { success: true };
    } catch (err) {
      let errorMessage = 'Erro ao cadastrar. ';
      switch (err.code) {
        case 'auth/email-already-in-use':
          errorMessage += 'Email já está em uso.';
          break;
        case 'auth/invalid-email':
          errorMessage += 'Email inválido.';
          break;
        case 'auth/weak-password':
          errorMessage += 'Senha muito fraca (mínimo 6 caracteres).';
          break;
        default:
          errorMessage += err.message;
      }
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      return { success: true };
    } catch (err) {
      setError('Erro ao fazer logout: ' + err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, login, register, logout };
};