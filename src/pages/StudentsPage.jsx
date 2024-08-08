import React from 'react';
import StudentVideo1 from '../assets/students/studentVideo1.mp4'
import StudentVideo2 from '../assets/students/studentVideo2.mp4'
import StudentVideo3 from '../assets/students/studentVideo3.mp4'

function StudentsPage() {
  return (
      <>
          <div className='container'>
              <div className='mt-2'>
                  <h2>Students Life</h2>
                  <hr />
              </div>
              <div className='row'>
              <div className='col-lg-3 d-flex justify-content-center mt-1'>
                        <video style={{ objectFit: 'cover', maxHeight: "70vh" }} autoPlay playsInline loop muted>
                            <source src={StudentVideo1} type="video/mp4" />
                        </video>
                  </div>
                  <div className='col-lg-3 d-flex justify-content-center mt-1'>
                        <video style={{ objectFit: 'cover', maxHeight: "70vh" }} autoPlay playsInline loop muted>
                            <source src={StudentVideo2} type="video/mp4" />
                        </video>
                  </div>
                  <div className='col-lg-3 d-flex justify-content-center mt-1'>
                        <video style={{ objectFit: 'cover', maxHeight: "70vh" }} autoPlay playsInline loop muted>
                            <source src={StudentVideo3} type="video/mp4" />
                        </video>
                    </div>
              </div>
          </div>
      </>
  )
}

export default StudentsPage