import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from './Course/Course';

const Courses = () => {
    const [courses,setCourse]=useState([]);
    useEffect(()=>{
        fetch(`./generated.json`)
        .then(res=>res.json())
        .then(data=>setCourse(data));

    },[]);
    return (
        <div >
            <Row xs={1} sm={2} md={3} className="g-4 mt-5">
            {
              courses.map(course=> <Course 
                key={course._id}
                course={course}
                ></Course>)  
            }
            </Row>
        </div>
    );
};

export default Courses;