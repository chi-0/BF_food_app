import Image from "next/image";
import { LoginForm } from "./_compornents/LoginForm";
import baboLogo from "../../../../public/assets/icons/baboLogo.png";

const LoginPage = () => {
  return (
    <div className="p-4 rounded-md flex justify-center items-center flex-col shadow-md flex-[0.2]">
      <Image src={baboLogo} alt="logo" className="w-[60%]" priority />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
