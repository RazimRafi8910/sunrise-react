import React from 'react';
import { Button, Card } from 'react-bootstrap';

function CourseCard({tittle,description,feature}) {
    return (
        <>
            <div className='col-lg-4'>
                <Card border='primary'>
                    <Card.Header> <h3>{ tittle }</h3> </Card.Header>
                    <Card.Body>
                        <blockquote className=" mb-0">
                            <p className='fs-5'>
                                {' '}
                                { description }{' '}
                            </p>
                            {feature.map(data => (
                                <footer className="blockquote-footer fs-5">{ data }</footer>
                            ))}
                            <Button variant='dark'>Learn more</Button>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default CourseCard