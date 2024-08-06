import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password:yup.string().min(6).required(),
})

function Signin() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver:yupResolver(schema)
    });

    const onSubmit = async (data) => {
        setIsLoading(true)
        try {
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
      <>
          <div className='container' style={{ height: "100vh",zIndex:'1' }}>
                <div className="row d-flex justify-content-center h-50 pt-5 align-items-center">
                    <div className='col-lg-4 col-md-5 col-9 border border-dark rounded-3 shadow-lg px-3 pt-3' style={{backgroundColor:"#fff"}}>
                        <div className='text-center mb-5'>
                            <h1>Login</h1>
                            <p className='text-muted'>Do login to best expirence</p>
                        </div>
                        <Form className='text-center' onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" {...register("email")} style={{backgroundColor:"#f0f0f0"}} placeholder="Enter email" />
                                {errors.email && <p className='text-danger'>{errors.email?.message }</p>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" {...register("password")} style={{ backgroundColor: "#f0f0f0" }} placeholder="Password" />
                                {errors.password && <p className='text-danger'>{errors.password?.message }</p>}
                            </Form.Group>
                            <div>
                                <Button variant='' type='submit' style={{backgroundColor:"#10203F"}} className='px-3 text-light px-3'>Login</Button>
                            </div>
                        </Form>
                        <div className='text-center mt-5'>
                        <p>Dont have Account?<Link to={'/signin'}>Sign in</Link></p>
                        </div>
                    </div>
                </div>
            </div>
      </>
  )
}

export default Signin