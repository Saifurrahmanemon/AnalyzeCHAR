import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { Loading } from '../../../components/Loading';
import auth from '../../../firebase.init';

function RequireAuth({ children }: { children: JSX.Element }) {
   const [user, loading, error] = useAuthState(auth);
   const location = useLocation();

   if (loading) {
      return <Loading />;
   }

   if (!user) {
      return <Navigate to='/signup' state={{ from: location }} replace />;
   }

   if (error) {
      console.log(error);
   }

   return children;
}

export default RequireAuth;
