import { useState, useMemo } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import { Tag, Note } from "../App";

// prop types for NoteList component
type NoteListProps = {
  availableTags: Tag[]
  notes: Note[]
}

// NoteList component
export function NoteList({ availableTags, notes }: NoteListProps) {

// Init state for selected tags
const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

// Init state for title search form
const [title, setTitle] = useState("");

const filteredNotes = useMemo(() => {
  return notes.filter(note => {
    return (title === "" || note.title.toLowerCase().includes(title.toLowerCase()))
  })
}, [title, selectedTags, notes])

return (
    <>
      <Row className="align-items-center mb-4">
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
            <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)}/>
          </Col>
          <Col>
          <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <ReactSelect
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                options={availableTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => {
                      return { label: tag.label, id: tag.value };
                    })
                  );
                }}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
        {filteredNotes.map(note => (
          <Col key={note.id}>
            <NoteCard />
          </Col>
        ))}
      </Row>
    </>
  );
}
