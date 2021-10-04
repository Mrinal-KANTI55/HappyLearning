import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const CourseCard = (props) => {
    const { price, picture, name, address } = props.course;
    return (
        <div>
            {/* show here home page courses  */}
            <CardGroup>
                <Card>
                    <Card.Img className='p-3' variant="top" src={picture} height='380px' fluid="true" rounded="true"/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            If you want to do some thing new or creative then welcome to our {name} course at <span className='text-danger'>${price}</span>  in our address: {address} 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            
        </div>
    );
};

export default CourseCard;