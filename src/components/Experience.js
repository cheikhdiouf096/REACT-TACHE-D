import { Container, Row, Col } from "react-bootstrap"




export const Experience = () => {
    return(
        <section id="experience" className="experience bg-light">
            <Container className="py-4">
            <h2 className="text-start text-dark h1 fw-bold my-5">MES EXPERIENCES</h2>

                <Row>
                    <div className="div-shadow my-4">
                        <h3 className="text-start text-dark">Developpeur front-End en Alternance</h3>
                        <p className="text-start fw-bold" style={{color: "orange"}}>Janvier 2021</p>
                        <p className="text-start text-dark">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium vero, 
                        nulla voluptates quam sint labore repellendus animi natus, cupiditate modi 
                        dolorum excepturi porro vel deserunt tempore. Optio voluptates delectus nulla.
                        Vitae modi accusamus illum, veniam delectus cumque. Doloribus quos maxime amet
                         neque, officiis in cupiditate ut iste nisi id velit architecto exercitationem
                          ipsum unde inventore? Hic ex reprehenderit nobis rem?
                        </p>
                    </div>
                    <div className="div-shadow my-4">
                        <h3 className="text-start text-dark">CS50, Harvard</h3>
                        <p className="text-start fw-bold" style={{color: "orange"}}>Aout-Octobre 2020</p>
                        <p className="text-start text-dark">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium vero, 
                        nulla voluptates quam sint labore repellendus animi natus, cupiditate modi 
                        dolorum excepturi porro vel deserunt tempore. Optio voluptates delectus nulla.
                        Vitae modi accusamus illum, veniam delectus cumque. Doloribus quos maxime amet
                         neque, officiis in cupiditate ut iste nisi id velit architecto exercitationem
                          ipsum unde inventore? Hic ex reprehenderit nobis rem?
                        </p>
                    </div>

                    <div className="div-shadow my-4">
                        <h3 className="text-start text-dark">Developpeur junior, M21 formation</h3>
                        <p className="text-start fw-bold" style={{color: "orange"}}>Mars-Juillet 2020</p>
                        <p className="text-start text-dark">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium vero, 
                        nulla voluptates quam sint labore repellendus animi natus, cupiditate modi 
                        dolorum excepturi porro vel deserunt tempore. Optio voluptates delectus nulla.
                        Vitae modi accusamus illum, veniam delectus cumque. Doloribus quos maxime amet
                         neque, officiis in cupiditate ut iste nisi id velit architecto exercitationem
                          ipsum unde inventore? Hic ex reprehenderit nobis rem?
                        </p>
                    </div>

                </Row>
            </Container>
        </section>
    )
}