import React from 'react'
import useFetch from './useFetch'

const App = () => {
    const [data, loading] = useFetch('/api');

    if (loading) {
        return <div>loading...</div>
    }

    return data.message;
};

export default App;