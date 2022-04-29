import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const onSubmit = (data) => {
        console.log(data);

        const url = `http://localhost:5000/service`;

        fetch(url, {
            method : 'POST',
            headers : {
                'content-type' :'application/json'
            },
            body: JSON.stringify(data)

        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })


    }

    return (
        <div className='w-50 mx-auto'>
            <h1>This is AddService page</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("name")} />
                <textarea className='mb-2' placeholder='description' {...register("description")} />
                <input className='mb-2' placeholder='price' type = "number" {...register("price")} />
                <input className='mb-2' placeholder='photo url' type = "text" {...register("img")} />
                <input type="submit" value = "submit" />
            </form>
        </div>
    );
};

export default AddService;