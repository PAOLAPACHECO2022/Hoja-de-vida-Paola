/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import "./css/style.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default class Portafolio extends Component {
  render() {
    return (
      <Row xs={1} md={2} className="g-4  mt-5">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card
              style={{
                backgroundImage: `url("./alas.PNG")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "1px solid #565555",
              }}
            >
              <Card.Img
                variant="top"
                src="./laplaza.PNG"
                className="img-thumbnail"
              />
              <Card.Img
                variant="top"
                src="./laplaza2.PNG"
                className="img-thumbnail"
              />

              <Card.Body>
                <Card.Title className="text-center bold h3 bg-success">
                  La Plaza Campesina
                </Card.Title>
                <Card.Text>
                  <p>Desarrollo de aplicación Web</p>
                  <p>Proyecto Ciclo 4 (front end y Back end)</p>
                  <p>Presentado a Misión Tic 2022 UTP</p>
                  <p> 28 de Noviembre 2022</p>
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://la-plaza-campesina-2022-qkbcxrtnl-paolapachecomoreno-gmailcom.vercel.app/"
                  variant="success"
                >
                  Ver Página
                </Button>{" "}
                <Button
                  target="_blank"
                  href="https://github.com/PAOLAPACHECO2022/LA--PLAZA--CAMPESINA--2022.git"
                  variant="warning"
                >
                  Ver Código
                </Button>
                <Button
                  target="_blank"
                  href="https://www.youtube.com/watch?v=NEpJmuFagwE"
                  variant="success"
                >
                  Ver Video
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card
              style={{
                backgroundImage: `url("./alas.PNG")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "1px solid #565555",
              }}
            >
              <Card.Img
                variant="top"
                src="./lafinca.PNG"
                className="img-thumbnail"
              />
              <Card.Img
                variant="top"
                src="./crearp.PNG"
                className="img-thumbnail"
              />
              <Card.Body>
                <Card.Title className="text-center bold h3 bg-success ">
                  CRUD de La Plaza Campesina
                </Card.Title>
                <Card.Text>
                  <p>Desarrollo de Software (CRUD de productos Agricolas)</p>
                  <p>Proyecto Ciclo 3 (front end y Back end)</p>
                  <p>Presentado a Misión Tic 2022 UTP</p>
                  <p>4 de octubre del 2022</p>
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://github.com/PAOLAPACHECO2022/LA-PLAZA.git"
                  variant="warning"
                >
                  Ver Código
                </Button>
                <Button
                  target="_blank"
                  href="https://youtu.be/prNclF8s5nU"
                  variant="success"
                >
                  Ver Video
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card
              style={{
                backgroundImage: `url("./alas.PNG")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "1px solid #565555",
              }}
            >
              <Card.Img
                variant="top"
                src="./lengua.PNG"
                className="img-thumbnail"
              />
              <Card.Body>
                <Card.Title className="text-center bold h3 bg-success">
                  Otros Proyectos
                </Card.Title>
                <Card.Text>
                  Proyectos realizados con lenguajes tales como: Python, Js,
                  Java, React-Boostrap, Sql, Css, entre otros.
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://github.com/PAOLAPACHECO2022"
                  variant="warning"
                >
                  Ver Repositorio
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card
              style={{
                backgroundImage: `url("./alas.PNG")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "1px solid #565555",
              }}
            >
              <Card.Img
                variant="top"
                src="./lengua.PNG"
                className="img-thumbnail"
              />
              <Card.Body>
                <Card.Title className="text-center bold h3 bg-success">
                  Proyecto grupal(La plaza)
                </Card.Title>
                <Card.Text>
                  Proyectos realizados con lenguajes tales como: Python, Js,
                  Java, React-Boostrap, Sql, Css, entre otros.
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://github.com/La-plaza"
                  variant="warning"
                >
                  Ver Repositorio Grupal
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}
