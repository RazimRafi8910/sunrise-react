import React from 'react';
import FeatureVideo from '../components/video/FeatureVideo';
import FeatureCard from '../components/FeatureCard';
import { collageFeatures, collageCourse } from '../data';
import AboutCard from '../components/AboutCard';
import CourseCard from '../components/CourseCard';
import IntershipCard from '../components/cards/IntershipCard';
import PrincipleImage from '../assets/PrincipleImage.jpg';
import VicePrinciple from '../assets/VicePrinciple.jpg';

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
          {collageFeatures.map((data,index) => (
            <FeatureCard key={index} image={index} tittle={data.tittle} description={data.description} />
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

      <div className='container mb-4'>
        <div>
          <h1 className='fw-bold'>Academic Programs</h1>
          <hr />
        </div>
        <div className="row d-flex justify-content-center my-2">
          {collageCourse.map((data,index) => (
            <CourseCard key={index} tittle={data.tittle} description={data.description} feature={data.features} />
          ))}
        </div>
      </div>

      <div className="container my-5">
        <div>
          <h1 className='fw-bold mb-4'>Faculties</h1>
          <hr />
        </div>
        <div className='row justify-content-center'>
          <IntershipCard name={"Mr. Muhammed Jouhar KK"} image={ PrincipleImage } position={"Principle"} />
          <IntershipCard name={'Mr. Muhammed Jabir KK'} image={VicePrinciple} position={"Vice Principle"} />
        </div>
      </div>

    </>
  )
}

export default Home