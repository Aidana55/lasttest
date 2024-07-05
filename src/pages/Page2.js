import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
    const status = useSelector((state) => state.api.status);
    const navigate = useNavigate();

    if (status !== 'succeeded') {
        alert('Прежде чем продолжить, получите данные на странице 1');
        navigate('/page1');
    }

    return (
        <div className="container">
            <h1>Page 2</h1>
            <p>Добро пожаловать на страницу 2</p>
        </div>
    );
};

export default Page2;
