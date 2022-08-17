import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { SignUpContainer } from './SignUp.styles';
function SignUp() {
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

   const handleGoogleSignIn = () => {
      signInWithGoogle();
   };

   if (error) {
      console.log(error);
   }
   if (loading) {
      console.log(loading);
   }
   if (user) {
      console.log(user);
   }

   return (
      <SignUpContainer>
         <h1>singpup</h1>

         <button onClick={handleGoogleSignIn}>Google</button>
      </SignUpContainer>
   );
}

export default SignUp;
