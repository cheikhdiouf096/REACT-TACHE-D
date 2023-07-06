import { Container, Row, Col, ProgressBar } from "react-bootstrap"



export const Competence = () => {
    return(
        <section id="competence" className="competence"> 
            <Container className="container my-4">
            <h2 className="text-start text-dark h1 fw-bold my-5">MES COMPETENCES</h2>
                    <Row>
                    <Col lg={6} className="">
                        <div className="text-success text-start bg-light p-2 m-4"> 
                             <h4>OUTILS</h4>
                        </div>
                        <Row className="text-start">
                            <Col lg={5}><h3>HTML / CSS </h3></Col>
                            <Col lg={5} striped><ProgressBar variant="success" now={70} /></Col>
                        </Row>
                        <Row className="text-start">
                            <Col lg={5}><h3>JAVASCRIPT</h3></Col>
                            <Col lg={5}><ProgressBar variant="success" now={40} /></Col>
                        </Row>
                    </Col>
                    <Col lg={6}>

                        <div className="text-success text-start bg-light p-2  m-4"> 
                            <h4>LANGUAGES</h4>
                        </div>

                        <Row className="text-start">
                            <Col lg={5}><h3>BOOTSTRAP</h3></Col>
                            <Col lg={5}><ProgressBar variant="success" now={70} /></Col>
                        </Row>
                        <Row className="text-start">
                            <Col lg={5}><h3>REACT</h3></Col>
                            <Col lg={5}><ProgressBar variant="success" now={40} /></Col>
                        </Row>
                    </Col>
                    </Row>
                <Row className="my-4">
                    <Col lg={6}>
                        <div className=""> 
                             <h4 className=" text-start text-success my-4">LANGUES</h4>
                             <h3 className="text-start">FRANCAIS</h3>
                             <h3 className="text-start">ANGLAIS</h3>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className=""> 
                        <h4 className=" text-start text-success my-4">HOBBIES</h4>
                        <h3 className="text-start">SPORT</h3>
                        <h3 className="text-start">GEOPOLITIQUE</h3> 
                        </div>
                    </Col>
                    </Row>
            </Container>
        </section>
    )
}