import './AuthView.scss';

import { LoginForm } from "../../components/forms/login/LoginForm";
import { RegisterForm } from "../../components/forms/register/RegisterForm";
import AuthDialog from '../../components/ui/layout/authDialog/AuthDialog';
import { useLocation, useNavigationType, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const AuthView = () => {
  const [searchParams] = useSearchParams();
  
  const mode = searchParams.get("mode") === "register" ? "register" : "login";

  const location = useLocation();

  const navType = useNavigationType();

  const [resetCounter, setResetCounter] = useState(0);

  useEffect(() => {
      if (navType === "POP") {
          setResetCounter(prev => prev + 1);
      }
  }, [location.pathname, location.search, navType]);

  return (
    <main className="auth">
      <div key={`auth-dialog-${resetCounter}`} className={`auth__box ${mode === "register" ? "active" : ""}`}>
        <div className="auth__container">

          <div className="form register">
            <h1>Регистрация</h1>
            <RegisterForm />
          </div>

          <div className="form login">
            <h1>Вход</h1>
            <LoginForm />
          </div>
        </div>

        <AuthDialog mode={mode}  />
      </div>
    </main>
  );
};

export default AuthView;