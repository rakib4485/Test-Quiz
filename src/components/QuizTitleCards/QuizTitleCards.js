import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { ArrowSmallRightIcon} from '@heroicons/react/24/solid';
import './QuizTitleCard.css'
import { Link } from 'react-router-dom';

const QuizTitleCards = ({data}) => {
    const {id,name, logo} = data;
    return (
        <Col>
          <Card className='card'>
            <Card.Img style={{backgroundColor: 'gray', width: '300px'}} variant="top" src={logo}/>
            <Card.Body className='card-body'>
              <Card.Title>{name}</Card.Title>
                <Link to={`/quiz/${id}`} className='start-quiz-btn'>
                    <p>Start Quiz</p>
                    <ArrowSmallRightIcon className="arrow-icon"/>
                </Link>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default QuizTitleCards;