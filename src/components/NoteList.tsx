import { Button, Col, Form, Row, Stack } from "react-bootstrap";
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
              <Button type="button" variant="outline-primary" size="lg">
                Create
              </Button>
            </Link>
            <Button type="button" variant="outline-secondary" size="lg">
              Edit Tags
            </Button>
          </Stack>
        </Col>
      </Row>
      <Form>
        <Row className="mb-4">
          <Col>
            <Form.Group controlId="title"></Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" />
          </Col>
        </Row>
      </Form>
    </>
  );
}
