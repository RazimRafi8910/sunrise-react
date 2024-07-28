import React from 'react';
import './style.css';

function Footer() {
  return (
      <>
          <div className='border-secondary border-5 border-top mt-5' style={{backgroundColor:"#f3f3f3"}}>
              <div className="container">
                  <div className="row mx-auto ps-5 pt-5">
                      <div className='col-lg-3 footerDisplay'>
                          <h4>Examination</h4>
                          <div className='fw-bold' style={{color:"#747373"}}>
                              <p>Time Table</p>
                              <p>Certificate Verification</p>
                              <p>Exam Result</p>
                              <p>Notifications</p>
                              <p>Office of Examination</p>
                          </div>
                      </div>
                      <div className='col-lg-3 footerDisplay'>
                          <h4>Academics</h4>
                          <div className='fw-bold' style={{color:"#747373"}}>
                              <p>Time Table</p>
                              <p>Certificate Verification</p>
                              <p>Exam Result</p>
                              <p>Notifications</p>
                              <p>Office of Examination</p>
                          </div>
                      </div>
                      <div className='col-lg-3 footerDisplay'>
                          <h4>Universities</h4>
                          <div className='fw-bold' style={{color:"#747373"}}>
                              <p>Time Table</p>
                              <p>Certificate Verification</p>
                              <p>Exam Result</p>
                              <p>Notifications</p>
                              <p>Office of Examination</p>
                          </div>
                      </div>
                      <div className='col-lg-3 p-0' id='footerLogo' style={{color:"#747373",fontWeight:"600"}}>
                          <img src="http://exesunrise.com/public/img/logo/logo-blue.png" width={"250px"} alt="" />
                          <hr />
                          <div className='d-flex align-items-center detailsDiv w-100'>
                          <i class="fa-solid fa-building-columns me-2"></i>
                          <p>Sunrise College of Advanced Studies SRC Campus , Kuttur (P.O) Mathamangalam , Kannur - 670 306</p>
                          </div>
                          <div className='d-flex align-items-center px-3 detailsDiv mb-3'>
                          <i class="fa-solid fa-phone mt-1 me-2"></i>
                              <p className='m-0'>Office: 8606708333</p>
                          </div>
                          <div className='d-flex align-items-center px-3 detailsDiv mb-3'>
                          <i class="fa-solid fa-phone mt-1 me-2"></i>
                          <p className='m-0'>Admission: 8086704111</p>
                          </div>
                          <div className='d-flex align-items-center px-3 detailsDiv mb-3'>
                          <i class="fa-solid fa-envelope mt-1 me-2"></i>
                            <p className='m-0'>srckuttur@gmail.com</p>
                          </div>
                      </div>
                  </div>
              </div>
              <hr />
          </div>
      </>
  )
}

export default Footer