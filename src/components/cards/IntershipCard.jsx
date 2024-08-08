import React from 'react';
import { Card } from 'react-bootstrap';

function IntershipCard({name,image,position}) {
  return (
      <>
          <div className='col-lg-3 col-md-3 col-12 mt-2 d-flex justify-content-center'>
          <Card text='center' className='px-0 border-bottom ' style={{ width: '18rem'}}>
      <Card.Img variant="top" src={image} />
      <Card.Body style={{backgroundColor:"#f1f1f1"}} >
            <Card.Title className='m-0 fw-bold'>{ name }</Card.Title>
            <Card.Text className='m-0 text-muted'>{ position }</Card.Text>
            <Card.Text className='m-0'>director.sunrisecollege@gmail.com</Card.Text>
      </Card.Body>
    </Card>
          </div>
      </>
  )
}

export default IntershipCard