import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap"



export const Presentation = () => {
    return(
        <section id="presentation" className="presentation">
            <Container>
                <h2 className="text-start text-dark h1 fw-bold my-5">PRESENTATION</h2>
                <Row>
                    <Col lg={6}>
                        <div className="text-start my-4">
                            <div className="mb-2">
                                <ButtonGroup>
                                <Button className="rounded-circle" style={{backgroundColor: "orange"}}><span className="fw-bold text-white"> 1 </span></Button> <span className="fw-bold my-2 mx-2">Capacité d'apprentissage</span>
                                </ButtonGroup>
                            </div>
                            <div className="mb-2">
                                <ButtonGroup>
                                <Button className="rounded-circle" style={{backgroundColor: "orange"}}><span className="fw-bold text-white"> 2 </span></Button> <span className="fw-bold my-2 mx-2">Collaboration</span>
                                </ButtonGroup>
                            </div>
                            <div className="mb-2">
                                <ButtonGroup>
                                <Button className="rounded-circle" style={{backgroundColor: "orange"}}><span className="fw-bold text-white"> 3 </span></Button> <span className="fw-bold my-2 mx-2">Responsabilité</span>
                                </ButtonGroup>
                            </div>
                            <div className="mb-2">
                                <ButtonGroup>
                                <Button className="rounded-circle" style={{backgroundColor: "orange"}}><span className="fw-bold text-white"> 4 </span></Button> <span className="fw-bold my-2 mx-2">Prise de décision</span>
                                </ButtonGroup>
                            </div>
                            <div className="mb-2">
                                <ButtonGroup>
                                <Button className="rounded-circle" style={{backgroundColor: "orange"}}><span className="fw-bold text-white"> 5 </span></Button> <span className="fw-bold my-2 mx-2">Gestion du temps</span>
                                </ButtonGroup>
                            </div>
                        </div>
                    </Col >
                    <Col lg={6}>
                            <h2 className="text-success">Triforce !</h2>
                        	<p className="text-dark text-start">A l ecoute, je suis FORCE de proposition, j aime chercher des solutions et ainsi 
                                  rendre services.Passionne par l apprentissage et la decouverte intellectuelle, j'ai developpe 
                                  une FORCE de travail afin de toujours progresser au quotidien. FORCE tranquille, j'ai toujours su 
                                  collaborer pleinement m integrer au sein du collectif.
                            </p>
                            <p className="text-dark text-start">
                            Besoin d'un collaborateur flexible et perseverant? je vous propose mes services par le biais d'une alternance
                             avec 4 jours dans votre societe et 1 jours en formation , le tout modulable comme vous le souhaitez, je pourrais 
                             facilement repondre a vos besoin
                            </p>
                    </Col >
                </Row>
            </Container>
        </section>
    )
}