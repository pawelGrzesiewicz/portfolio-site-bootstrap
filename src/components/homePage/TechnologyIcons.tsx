import { Col, Image, Row } from 'react-bootstrap';
import { technologyStack } from "../../constants/constants";

export default function TechnologyIcons() {
    return (
        <Row>
            {technologyStack.map((tech) => (
                <Col
                    key={tech.id}
                    xs={4} sm={1} md={1}
                    className="text-center mx-1 mt-5 d-none d-sm-block"
                >
                    <Image
                        src={tech.icon}
                        alt={tech.name}
                        title={tech.name}
                        className="tech-icon"
                    />
                </Col>
            ))}
        </Row>
    )
};