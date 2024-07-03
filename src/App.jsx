import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registered, setRegistered] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = () => {
        if (!username || !password || !confirmPassword) {
            setError('');
            alert('Все поля должны быть заполнены')
            return;
        }

        if (password !== confirmPassword ) {
            setError('');
            alert('Пароли не совпадают')
            return;
        }

        if (registered) {
            setError('');
            alert('Такой пользователь уже существует')
            return;
        }

        setRegistered(true);
        setError('');
        alert('Регистрация успешна!');
    };

    return (
        <div>
            <h2>Регистрация</h2>
            <div>
                <input
                    type="text"
                    placeholder="Имя пользователя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Подтвердите пароль"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <button onClick={handleRegister}>Зарегистрироваться</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};


export default RegistrationForm;



