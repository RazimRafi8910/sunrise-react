import React from 'react';
import FeatureVideo from '../components/video/FeatureVideo';
import FeatureCard from '../components/FeatureCard';
import { collageFeatures,collageCourse } from '../data';
import AboutCard from '../components/AboutCard';
import CourseCard from '../components/CourseCard';

function Home() {
  return (
    <>
      <div>
        <FeatureVideo />
      </div>
    {/* feature section */}
      <div className='container my-3'>
        <div className="text-center">
          <h2 className="fw-bold my-3">Our Special Features</h2>
        </div>
        <div className='row d-flex justify-content-center'>
          {collageFeatures.map(data => (
            <FeatureCard image={data.image} tittle={data.tittle} description={data.description} />
          ))}
        </div>
      </div>

      {/* about section */}
      <div className='my-5' style={{ backgroundColor: "#e2e9ed" }}>
        <div className='container'>
          <div className='row d-flex justify-content-center py-2'>
            <AboutCard />
          </div>
        </div>
      </div>

      <div className='container'>
        <div>
          <h1 className='fw-bold'>Academic Programs</h1>
          <hr />
        </div>
        <div className="row my-2">
          {collageCourse.map(data => (
            <CourseCard tittle={data.tittle} description={data.description} feature={data.features} />
          ))}
        </div>
      </div>
      
    </>
  )
}

export default Home