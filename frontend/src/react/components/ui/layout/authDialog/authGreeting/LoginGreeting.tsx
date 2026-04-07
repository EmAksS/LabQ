export const LoginGreeting = () => {
    return (
        <div  className="greeting">
            <p className="greeting__title">Добро пожаловать!</p>
            <p className="greeting__text">
                Рад снова видеть! <br />
                Введи свою почту и пароль, чтобы просмотреть, что изменилось за сегодня
            </p>
            <p className="greeting__hint">
                Если ты в первый раз, нажми здесь, чтобы авторизоваться
            </p>
        </div>
    )
}

export default LoginGreeting;