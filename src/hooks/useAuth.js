import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider.js/AuthProvider';


const useAuth = () => {
     const auth = useContext(AuthContext)
     return auth;
}

export default useAuth;