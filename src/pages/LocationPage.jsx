import React from 'react'

function LocationPage() {
    return (
        <>
            <div className='container'>
                <div className='mt-4 text-center'>
                    <h2>Address</h2>
                    <hr className='m-0' />
                </div>
                <div className="row pt-3">
                    <div className='col-lg-6 col-md-6 col-12 border border-secondary px-2'>
                        <div style={{ width: "100%" }}><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Sunrise%20College%20of%20Advanced%20Studies%20SRC%20Campus%20,%20Kuttur%20(P.O)%20Mathamangalam%20,%20Kannur%20-%20670%20306+(Sunrise%20college)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe></div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>


                        <div className='ms-3 d-flex align-items-center text-center mt-3'>
                            <i className="fs-5 fa-solid fa-building-columns me-"></i><h5 className='text-muted'>Sunrise College of Advanced Studies SRC Campus , Kuttur (P.O) Mathamangalam , Kannur - 670 306</h5>
                        </div>
                        <hr />
                        <div className='ms-3 d-flex align-items-center justify-content-center my-4'>
                            <i className="fs-6 fa-solid fa-phone me-2"></i>
                            <h5 className='text-muted text-center'>Office: 8606708333</h5>
                        </div>
                        <hr />
                        <div className='ms-3 d-flex align-items-center justify-content-center my-4'>
                            <i className="fs-6 fa-solid fa-phone me-2"></i>
                            <h5 className='text-muted'>Admission: 8086704111</h5>
                        </div>
                        <hr />
                        <div className='ms-3 d-flex align-items-center justify-content-center my-4'>
                            <i className="fs-6 fa-solid fa-envelope me-2"></i>
                            <h5 className='text-muted'>srckuttur@gmail.com</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LocationPage