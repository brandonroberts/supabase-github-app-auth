import { supabase } from "../../lib/utils/supabase"

const LoginPage = () => {
  function login() {
    supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000'
      }
    });
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default LoginPage;
