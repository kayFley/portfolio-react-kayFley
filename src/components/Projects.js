import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projects from "./listProjects";

export const Projects = () => {
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            Here are my projects and the projects I have
                            participated in.
                        </p>
                        <Row>
                            {projects.map((project, index) => {
                                return <ProjectCard key={index} {...project} />;
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
