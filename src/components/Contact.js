import { Container, Row, Col } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import banimg from "../img/img-banner.png"




export const Contact = () => {
    return(
        <section id="contact" className="contact"> 
            <Container className="container1">
                <Row>
                    <Col lg={3}>
                        <div className="py-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                            </svg>
                        </div>
                        <div>
                            <p className="text-white fw-bold">18 projet</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="py-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" className="bi bi-share" viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                            </svg>
                        </div>
                        <div>
                            <p className="text-white fw-bold">30 algorithmes</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="py-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" className="bi bi-calendar2-day" viewBox="0 0 16 16">
                            <path d="M4.684 12.523v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V8.418h-.672v4.105z"/>
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
                            </svg>
                        </div>
                        <div>
                            <p className="text-white fw-bold">10 console.log();</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="py-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" className="bi bi-fire" viewBox="0 0 16 16">
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
                            </svg>
                        </div>
                        <div>
                            <p className="text-white fw-bold">16 border: solid red 1px</p>
                        </div>
                    </Col>
                </Row>
            </Container>
           <Container className="container2 my-4">
            <h2 className="text-start text-dark h1 fw-bold my-5">RESTONS EN CONTACT</h2>
                <Row>
                    <Col lg={6}>
                        <Form>
                            <Form.Group className=" mb-3 mt-4" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Entrez votre Prenom" className="border-0 border-bottom" />
                                    <Form.Text className="text-muted"> </Form.Text> 
                                </Form.Group>

                                <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Entrez votre Nom" className="border-0 border-bottom" />
                                    <Form.Text className="text-muted"> </Form.Text>
                                </Form.Group>

                            <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Entrez votre email" className="border-0 border-bottom" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                <Form.Label> </Form.Label>
                                <Form.Control as="textarea" rows={10} placeholder="Votre message"/>
                            </Form.Group>

                            <div className="text-end">
                                <Button variant="" type="submit" className="btn-orange fw-bold">
                                    Envoyer
                                </Button>
                            </div>
                        </Form>

                    </Col>
                    <Col lg={6}>
                        <img src={banimg} alt="" width={350} height={550}/> 
                    </Col>
                </Row>
            </Container> 
            <Container fluid={true} className="container3">
                <p className="fw-bold">&#169; cheikh DIOUF 2023</p>
            </Container>
        </section>
    )
}