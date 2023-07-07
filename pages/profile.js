import BaseLayout from '@/layout/BaseLayout';
import axios from 'axios';
import React, { useEffect } from 'react';

const profile = () => {
    async function getData() {
        const result = await axios.post('http://localhost:5000/login', {
            email: 'soumya@gmail.com',
            password: 'Shibu@891',
        });

        console.log(result.data);

    }

    useEffect(()=>{
        getData()
    }, [])

    return (
        <BaseLayout>
            <h3>Profile</h3>
        </BaseLayout>
    );
};

export default profile;
