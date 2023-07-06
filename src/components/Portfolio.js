import { Container, Row, Col, Card , Button} from "react-bootstrap"
import responsive from "../img/responsive.png"
import apps from "../img/apps.jpg"
import testi from "../img/testimonials.jpg"




export const Portfolio = () => {
    return(
        <section id="portfolio" className="portfolio bg-light py-4">
            <Container className="container">
                <h2 className="text-start text-dark h1 fw-bold my-5">MON PORTFOLIO</h2>
                <Row className="row">
                <Col lg={4} xs={12} sm={12} className="">
                        <Card className="m-3 p-4 " >
                            <Card.Img variant="top" src={apps} />
                            <Card.Body className="card-body">
                                <Card.Title className="text-center text-success"><h5 className="fw-bold">Volkeno</h5></Card.Title>
                                <Card.Text className="text-center text-dark  fs-5">
                                    We focus in ergonomic <br/> and meet you...
                                </Card.Text>
                                <Button className="button btn-sm " variant="outline-success" >Voir le projet github</Button>
                            </Card.Body>
                        </Card>
                </Col>
                <Col lg={4} className="">
                        <Card className="card m-3 p-4" >
                            <Card.Img variant="top" src={testi} />
                            <Card.Body className="card-body">
                                <Card.Title className="text-center text-success fw-bold"><h5 className="fw-bold">Volkeno</h5></Card.Title>
                                <Card.Text className="text-center text-dark  fs-5">
                                    We focus in ergonomic <br/> and meet you...
                                </Card.Text>
                                <Button className="button btn-sm " variant="outline-success" >Voir le projet github</Button>
                            </Card.Body>
                        </Card>
                </Col>
                <Col lg={4} className="">
                        <Card className="card m-3 p-4" >
                            <Card.Img variant="top" src={apps} />
                            <Card.Body className="card-body">
                                <Card.Title className="text-center text-success fw-bold"><h5 className="fw-bold">Volkeno</h5></Card.Title>
                                <Card.Text className="text-center text-dark  fs-5">
                                    We focus in ergonomic <br/> and meet you...
                                </Card.Text>
                                <Button className="button btn-sm " variant="outline-success" >Voir le projet github</Button>
                            </Card.Body>
                        </Card>
                </Col>
                <Col lg={4} className="">
                        <Card className="card m-3 p-4" >
                            <Card.Img variant="top" src={testi} />
                            <Card.Body className="card-body">
                                <Card.Title className="text-center text-success fw-bold"><h5 className="fw-bold">Volkeno</h5></Card.Title>
                                <Card.Text className="text-center text-dark  fs-5">
                                    We focus in ergonomic <br/> and meet you...
                                </Card.Text>
                                <Button className="button btn-sm " variant="outline-success" >Voir le projet github</Button>
                            </Card.Body>
                        </Card>
                </Col>
                <Col lg={4} className="">
                        <Card className="card m-3 p-4" >
                            <Card.Img variant="top" src={apps} />
                            <Card.Body className="card-body">
                                <Card.Title className="text-center text-success fw-bold"><h5 className="fw-bold">Volkeno</h5></Card.Title>
                                <Card.Text className="text-center text-dark  fs-5">
                                    We focus in ergonomic <br/> and meet you...
                                </Card.Text>
                                <Button className="button btn-sm " variant="outline-success" >Voir le projet github</Button>
                            </Card.Body>
                        </Card>
                </Col>
                <Col lg={4} className="">
                        <Card className="card m-3 p-4">
                            <Card.Img variant="top" src={testi} />
                            <Card.Body className="card-body">
                                <Card.Title className="text-center text-success fw-bold"><h5 className="fw-bold">Volkeno</h5></Card.Title>
                                <Card.Text className="text-center text-dark  fs-5">
                                    We focus in ergonomic <br/> and meet you...
                                </Card.Text>
                                <Button className="button btn-sm " variant="outline-success" >Voir le projet github</Button>
                            </Card.Body>
                        </Card>
                </Col>
                </Row>
            </Container>
        </section>
    )
}