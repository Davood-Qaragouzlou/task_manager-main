import AuthHeader from "../components/AuthHeader/AuthHeader"
import LoginForm from "../components/LoginForm/LoginForm"; 
import Box from "../components/AuthBox/AuthBox"



const Login = () => {
  return (
    <main className="w-screen overflow-hidden">
      <AuthHeader />
      <LoginForm />
      <Box />
    </main>
  );
};

export default Login;
