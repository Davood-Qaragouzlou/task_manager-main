import AuthHeader from "../components/AuthHeader/AuthHeader" 
import Box from "../components/AuthBox/AuthBox"
import RegisterForm from "../components/RegisterForm/RegisterForm";

const register = () => {
  return (
    <main className="w-screen overflow-hidden">
      <AuthHeader />
      <RegisterForm />
      <Box />
    </main>
  );
};

export default register;
