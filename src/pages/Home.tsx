import '../styles/forms.css';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const auth = useAuth();

  return (
    <header>
      <button onClick={() => auth.logout()}>Logout</button>
    </header>
  );
};




export {};