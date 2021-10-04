import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const Help = () => {
    return (
        <div>
            {/* add another section for help  */}
            <h3 className='my-3'>For  Help Contact Us</h3>
            <div >
            <Form className='w-50 mt-5'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Allegations</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button className='btn btn-primary'>Submit</Button>
            </Form>
            </div>
           
        </div>
    );
};

export default Help;