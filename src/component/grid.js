import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";

const Grid = ({ rows }) => {
  return (
    <div>
      <Container>
        <Row>
          {rows.map((rw) => (
            <Col
              key={rw.id}
              className="pallete"
              style={{ backgroundColor: rw.selectColor }}
            >
              {rw.number}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Grid;
