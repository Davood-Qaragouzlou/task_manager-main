import AuthHeader from "../components/AuthHeader/AuthHeader"
import ForgetPasswordForm from "../components/ForgetPasswordForm/ForgetPasswordForm"; 
import Box from "../components/AuthBox/AuthBox"



const ForgetPassword = () => {
  return (
    <main className="w-screen overflow-hidden flex flex-col content-center justify-center">
      <AuthHeader />
      <ForgetPasswordForm />
      <Box />
    </main>
  );
};

export default ForgetPassword;
