import { Button, Col, Form, Modal, Row, Stack } from "react-bootstrap"

export function EditTagsModal ({ availableTags }) {
  return (
    <Modal>
      <Modal.Header closeButton>
        <Modal.Title>Edit Tags</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={2}>
            {availableTags.map(tag => {
              <Row key={tag.id}>
                <Col>
                </Col>
                <Col>
                  <Button variant="outline-danger">
                    &times;
                  </Button>
                </Col>
              </Row>
            })}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  )
}