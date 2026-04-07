export const RegisterGreeting = () => {
    return (
        <div  className="greeting">
            <p className="greeting__title">Привет!</p>
            <p className="greeting__text">
                Рад видеть нового пользователя! <br />
                Введи свой ник, почту и пароль, чтобы начать пользоваться <b>LabQ</b>
            </p>
            <p className="greeting__hint">
                Если ты уже зарегистрировался, нажми здесь чтобы перейти на страницу входа
            </p>
        </div>
    )
}

export default RegisterGreeting;