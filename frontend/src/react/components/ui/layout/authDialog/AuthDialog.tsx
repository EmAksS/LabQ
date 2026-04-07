import { useSearchParams } from 'react-router-dom';
import './AuthDialog.scss';
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { AuthChangeButton } from '../../../controls/buttons/AuthChangeButton';
import { AuthMode } from '../../../../../constants/types';
import LoginGreeting from './authGreeting/LoginGreeting';
import RegisterGreeting from './authGreeting/RegisterGreeting';

interface AuthDialogProps{
  mode: AuthMode;
}

export const AuthDialog : React.FC<AuthDialogProps> = ({ mode }) => {

    const DURATION = 1.2

    const [searchParams, setSearchParams] = useSearchParams();

    const controls = useAnimation();
    const contentControls = useAnimation();

    const blurFadeProps = {
        initial: { filter: "blur(0.5vw)", opacity: 0 },
        animate: { filter: "blur(0)", opacity: 1 },
        exit: { filter: "blur(0.5vw)", opacity: 0 },
        transition: { ease: [0.34, 1.56, 0.64, 1] as const, duration: DURATION / 2 }
    };


    const handleClick = () => {
      const newMode = searchParams.get("mode") === "register" ? "login" : "register";
      setSearchParams({ mode: newMode });
      animateClick(newMode);
    }

    const animateClick : ((targetMode: AuthMode) => void)  = (newMode) => {
        controls.start({
            x: newMode === "login" ? "0%" : "-186%",
            scaleX: [1, 1.6, 1],
            transition: { duration: DURATION, ease: [0.77, 0, 0.175, 1] }
        });

        contentControls.start({
            scaleX: [1, 0.625, 1],
            transition: { ease: [0.77, 0, 0.175, 1], duration: DURATION },
        });
    }

    return (
        <motion.div 
        initial={{x: mode === "login" ? "0%" : "-186%"}}
        animate={controls}
        className="dialog" >
          <motion.div className="dialog__container"
          animate={contentControls}>
            <AnimatePresence mode='wait'>
              <motion.div key={mode} {...blurFadeProps}>
                {mode === "login" ? <LoginGreeting /> : <RegisterGreeting />}
              </motion.div>
            </AnimatePresence>
          
          </motion.div>

          <AuthChangeButton 
          className='button--to-white'
          onClick={handleClick}
          >
            <motion.div
            animate={contentControls}
            className='dialog__change__text'>
              <AnimatePresence mode='wait'>
                <motion.p key={mode} {...blurFadeProps}>
                  {mode === "login" ? "Зарегистрироваться" : "Войти"}
                </motion.p>
              </AnimatePresence>
              
            </motion.div>
            
          </AuthChangeButton >
          
        </motion.div>
    );
}

export default AuthDialog;