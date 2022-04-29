import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {

    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId : serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
        .then(response => {
            const {data} = response;

            if(data.insertedId) {
                toast('Your order is booked!');

                event.target.rest();
            }
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please order : {service.name}</h2>
            <form onSubmit = {handlePlaceOrder}>
                <input className='w-100 mb-2 rounded-pill' type="text" value = {user?.displayName} name="name" placeholder='name' id="" required  readOnly disabled />
                <br />
                <input className='w-100 mb-2 rounded-pill' type="email" value = {user?.email} name="email" placeholder='email' id="" required  readOnly disabled />
                <br />
                <input className='w-100 mb-2 rounded-pill' type="text" value 
                 = {service.name} name="service" placeholder='service' id="" readOnly required />
                <br />
                <input className='w-100 mb-2 rounded-pill'  type="text" name="address" autoComplete='off' placeholder='address' id="" required />
                <br />
                <input className='w-100 mb-2 rounded-pill' type="text" name="phone" placeholder='phone' id="" required />
                <br />
                <input className='bgn btn-primary' type="submit" value="Place Order" />

            </form>
        </div>
    );
};

export default Checkout;