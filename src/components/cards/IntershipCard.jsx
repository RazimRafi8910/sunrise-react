import React from 'react';
import { Card } from 'react-bootstrap';
import PrincipleImage from '../../assets/PrincipleImage.jpg';

function IntershipCard({name}) {
  return (
      <>
          <div className='col-lg-3 col-md-3 col-12 d-flex justify-content-center'>
          <Card text='center' className='px-0 border-bottom ' style={{ width: '18rem'}}>
      <Card.Img variant="top" src={PrincipleImage} />
      <Card.Body style={{backgroundColor:"#f1f1f1"}} >
            <Card.Title className='m-0 fw-bold'>{ name }</Card.Title>
        <Card.Text className='m-0 text-muted'>Principle</Card.Text>
      </Card.Body>
    </Card>
          </div>
      </>
  )
}

export default IntershipCard