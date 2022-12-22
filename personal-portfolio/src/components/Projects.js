import 'animate.css';
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

  const projects = [
    {
      title: "Metaverse Website",
      description: "Design & Development",
      imgUrl: "https://camo.githubusercontent.com/1b7b54dfd3e999dd845d83144d1fe5c71c8aac3247bfe8c6fcd4ffed308cba74/68747470733a2f2f692e6962622e636f2f736253485748302f5468756d626e61696c2d312e706e67",
    },
    {
      title: "Real Time Chat Application",
      description: "Design & Development",
      imgUrl: "https://camo.githubusercontent.com/ffcc11f9f8375f688d430e6010fc0837cb2dded4d84fa59cd7c44e3e1553b4ab/68747470733a2f2f692e7974696d672e636f6d2f76692f5a77464133594d666b6f632f6d617872657364656661756c742e6a7067",
    },
    {
      title: "Crypto Cotation",
      description: "Design & Development",
      imgUrl: "https://user-images.githubusercontent.com/100500192/208546914-5024c871-3e19-42a5-9412-3c64980dfb67.png",
    },
    {
      title: "FlyByCockPits",
      description: "Design & Development",
      imgUrl: "https://user-images.githubusercontent.com/100500192/208547327-f92ecf83-f44a-44c1-8e74-6fa70198da07.png",
    },
    {
      title: "ShareME",
      description: "Design & Development",
      imgUrl: "https://camo.githubusercontent.com/1ea25d0720f48438d0f6b498e75fd220181e989c695311fa0686162ef5cb20ff/68747470733a2f2f692e6962622e636f2f38634c666a33582f696d6167652e706e67",
    },
    {
      title: "This Portifolio",
      description: "Design & Development",
      imgUrl: "https://user-images.githubusercontent.com/100500192/208547995-e6bdc72e-8f20-4e01-8399-10834fc86b61.png",
    },
  ];

  const Languages = [
    { name: "Portuguese", level: "Fluente" },
    { name: "English", level: "Intermediary" },
    { name: "German", level: "Basic" },
  ]


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>About Me</h2>
                  <p>
                    Some of my projects that were developed during my journey of learning and working as a FullStack developer!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects Develop</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Languages</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Experience</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                          {Languages.map((item, index) => (
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10vw', marginLeft: '15vw' }}>
                              <h1>
                                {item.name}
                              </h1>
                              <p>{item.level}</p>

                            </div>
                          ))}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Missing!</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
