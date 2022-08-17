import axios from 'axios';
import { useEffect, useState } from 'react';

const AgeRequester = ({ name }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(false);

        axios.get('https://api.agify.io/', {
            params: {
                name: name,
                country_id: 'be'
            }
        }).then(response => {
            setData({
                name: response.data.name,
                age: response.data.age
            });
        }).catch(e => {
            setError(true);
        }).finally(() => {
            setLoading(false);
        });

    }, [name]);

    if (isLoading) {
        return (
            <p>Loading...</p>
        );
    }

    if (error) {
        return (
            <p>Erreur !!!</p>
        );
    }

    return (
        <p>{data.name} est potentiellement agé de {data.age} ans !</p>
    );
};

export default AgeRequester;