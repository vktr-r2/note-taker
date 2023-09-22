import { Col, Row, Stack } from "react-bootstrap";
import  Button  from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// NoteList component
export function NoteList() {
  return (
    <>
      <Row>
        <Col>
          <h1> Notes</h1>
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to="/new">
              <Button variant="primary" size="lg">Create</Button>
            </Link>
            <Button variant="outline-secondary" size="lg">Edit Tags</Button>
          </Stack>
        </Col>
      </Row>
    </>
  );
}
