import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/apiStore';

const Page1 = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.api.status);

    const handleClick = () => {
        dispatch(fetchData());
    };

    return (
        <div className="container">
            <h1>Page 1</h1>
            <button onClick={handleClick} className="btn btn-primary">Получить данные</button>
            {status === 'loading' && <p>Загрузка...</p>}
            {status === 'succeeded' && <p>Данные успешно получены!</p>}
            {status === 'failed' && <p>Не удалось получить данные.</p>}
        </div>
    );
};

export default Page1;
