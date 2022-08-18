import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import googleIcon from '../../../assets/googleIcon.svg';
import { Loading } from '../../../components/Loading';
import auth from '../../../firebase.init';

import { GoogleButton, SignUpContainer } from './SignUp.styles';

type SignUpProps = {
   children: React.ReactNode;
};

interface CustomizedState {
   from: { pathname: string };
   myState: string;
}
function SignUp({ children }: SignUpProps) {
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   const myState = useLocation().state as CustomizedState;
   const from = myState?.from?.pathname || '/';

   const navigate = useNavigate();

   const handleGoogleSignIn = () => {
      signInWithGoogle();
   };

   if (user) {
      navigate(from, { replace: true });
   }
   if (loading) {
      console.log(loading);
   }
   if (error) {
      console.log(error);
   }

   return (
      <SignUpContainer>
         <h1>{children} Here</h1>
         <GoogleButton onClick={handleGoogleSignIn}>
            {loading ? (
               <Loading />
            ) : (
               <>
                  <img src={googleIcon} alt='google icon' />
                  <span>{children} With Google</span>
               </>
            )}
         </GoogleButton>
      </SignUpContainer>
   );
}

export default SignUp;
