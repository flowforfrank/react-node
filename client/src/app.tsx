import React from 'react'
import useFetch from './useFetch'

const App = () => {
    const [data, loading] = useFetch('http://localhost:8080/api');

    if (loading) {
        return <div>loading...</div>
    }

    return data.message;
};

export default App;