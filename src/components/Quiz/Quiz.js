import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { useLoaderData } from "react-router-dom";
import QuizTitleCards from "../QuizTitleCards/QuizTitleCards";

const Quiz = () => {
  const quizes = useLoaderData();
  const datas = quizes.data;
  return (
    <div>
      <h1>This is Quiz Component</h1>
      <Container style={{marginTop: '80px'}}>
      <Row xs={1} md={2} className="g-4">
          {
            datas.map(data => <QuizTitleCards
                key={data.id}
                data = {data}
            ></QuizTitleCards>)
          }
      </Row>
      </Container>
    </div>
  );
};

export default Quiz;
