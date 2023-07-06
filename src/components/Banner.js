import { Container, Row, Col } from "react-bootstrap"
import banimg from "../img/img-banner.png"
import wave2 from "../img/wave2.png"


export const Banner = () => {
    return(
        <section id="home" className="banner">
            <Container className="container"> 
                <Row className="row"> 
                    <Col lg={9}>
                        <Row >
                            <p className="text-start text-white fw-bold h3">Hello, je suis <span className="text-warning fw-bold">Cheikh DIOUF</span> <br/>
                                developpeur front-end junior à Bakeli 
                            </p>
                        </Row>
                        <Row className="">
                            <Col lg={3} className="text-start" >
                                <span className="text-white fw-bold">
                                    <svg  xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="orange" className="bi bi-phone-fill m-2" viewBox="0 0 16 16">
                                    <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
                                    </svg>78 206 96 26
                                </span>
                            </Col>
                            <Col lg={4} className="text-start">
                                <span className="text-white fw-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="orange" className="bi bi-envelope-fill m-2" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                    </svg>cheikhdiouf096@gmail.com  
                                </span>
                            </Col>
                            <Col lg={3} className="text-start">
                                <span className="text-white fw-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="orange" className="bi bi-geo-alt-fill m-2" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                    </svg>Grand Mbour 2
                                </span>
                            </Col>
                            <Col lg={2}className="text-start">
                                <span className="text-white fw-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="orange" className="bi bi-bank2 m-2" viewBox="0 0 16 16">
                                    <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"/>
                                    </svg>Bakeli
                                </span>

                            </Col>
                        </Row>
                    </Col>
                    <Col lg={3}>
                    </Col>
                </Row>
            </Container>
            <img src={wave2} alt="image wave" className="wave2"/>
        </section>
    )
}