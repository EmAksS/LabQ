import { motion } from "framer-motion";

interface AuthChangeButtonProps {
    children: React.ReactNode; 
    onClick: () => void; 
    className?: string; 
}

export const AuthChangeButton : React.FC<AuthChangeButtonProps> = ({children, onClick, className}) => {

    return (
        <motion.button
        onClick={onClick}
        className={ className ? "dialog__change button " + className : "dialog__change button"}>
            {children}
        </motion.button>
    )
}

export default AuthChangeButton;