import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();

    // console.log(services)

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure');

        if(proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)

                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            })
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h1>manage your services</h1>
            {
                services?.map((service) => <div key = {service._id}>
                    <h1>{service.name} <button onClick = {() => handleDelete(service._id)}>X</button></h1>
                </div>)
            }
            
        </div>
    );
};

export default ManageServices;