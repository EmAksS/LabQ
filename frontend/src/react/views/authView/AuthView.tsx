import { LoginForm } from "../../components/forms/login/LoginForm";
import { RegisterForm } from "../../components/forms/register/RegisterForm";

type AuthViewProps = {
  mode: "login" | "register";
};

export const AuthView = ({ mode }: AuthViewProps) => {
  return (
    <div>
      <h1>
        {mode === "login" ? "Вход" : "Регистрация"}
      </h1>

      {mode === "login" ? (
        <LoginForm />
      ) : (
        <RegisterForm />
      )}
    </div>
  );
};