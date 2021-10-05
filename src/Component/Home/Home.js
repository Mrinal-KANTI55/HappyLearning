import React, { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import CourseCard from './CourseCard/CourseCard';
import NoCourse from './CourseCard/NoCourse';

const Home = () => {
    // fetch the fack data 
    const imgUrl = `https://indieseducation.b-cdn.net/wp-content/uploads/2020/05/Full-stack-1.jpg`;
    const [courses, setCourse] = useState([]);
    useEffect(() => {
        fetch(`./generated.json`)
            .then(res => res.json())
            .then(data => setCourse(data));

    }, []);
    let count = 0;
    return (
        <div>
            {/* add a section  */}
            <Row className='mt-5 d-flex justify-content-center align-items-center'>
                <Col xs={12} md={6}>
                    <Image src={imgUrl} fluid rounded />
                </Col>
                <Col xs={12} md={6} className='text-center'>
                    <h2 className='text-info'>Full Stack Web Developer</h2>
                    <p>
                        The goal of the Full Stack Web Developer Nanodegree program is to equip learners with the unique skills they need to build database-backed APIs and web applications. A graduate of this program will be able to design and build databases for software applications, create and deploy database-backed web APIs, and secure and manage user authentication and access control for an application backend. Students will also learn how to deploy a Flask-based web application to the cloud using Docker and Kubernetes.</p>
                </Col>
            </Row>
            {/* show here 4 courses  */}
            <Row xs={1} sm={1} md={2} lg={3} className="g-4 mt-5">
            {
                courses.map(course => {
                    count++;
                    if (count <= 4) {
                        return <CourseCard
                            key={course._id}
                            course={course}
                        ></CourseCard>
                    }else{
                        return <NoCourse key={course._id}></NoCourse>
                    }

                })
            }
            </Row>

        </div>
    );
};

export default Home;