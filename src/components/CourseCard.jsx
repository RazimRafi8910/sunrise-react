import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './cards/style.css';

function CourseCard({tittle,description,feature}) {
    return (
        <>
            <div className='col-lg-4 col-md-6 col-12 my-1'>
                <Card id='courseCard' border='dark' style={{height:"100%",width:"100%"}}>
                    <Card.Header> <h3>{ tittle }</h3> </Card.Header>
                    <Card.Body>
                        <blockquote className=" mb-0">
                            <p className='' id='courseDescription'>
                                {' '}{description}{' '}
                            </p>
                            {feature.map(data => (
                                <p className="text-muted fw-bold my-2" id='courseFeature' ><i class="mx-2 fa-regular fa-circle-check"></i>{ data }</p>
                            ))}
                        </blockquote>
                    </Card.Body>
                    <Card.Footer>
                        <Button className='mt-2' variant='dark'>Learn more</Button>
                        </Card.Footer>
                </Card>
            </div>
        </>
    )
}

export default CourseCard