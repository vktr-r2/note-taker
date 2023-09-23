import { useState, useMemo } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import { Tag } from "../App";
import { NoteCard, SimplifiedNote } from "./NoteCard";

// prop types for NoteList component
type NoteListProps = {
  availableTags: Tag[];
  notes: SimplifiedNote[];
};

// NoteList component
export function NoteList({ availableTags, notes }: NoteListProps) {
  // Init state for selected tags
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  // Init state for title search form
  const [title, setTitle] = useState("");

  // useMemo to reduce unnecissary renders
  const filteredNotes = useMemo(() => {
    // filter method on 'notes' array to make new array of notes
    return notes.filter((note) => {
      // Note returned in filtered array if it meets BOTH criteria:
      // 1. 'title' search string is empty OR note's title (case sensitive) includes the 'title' search string
      const titleCondition =
        title === "" || note.title.toLowerCase().includes(title.toLowerCase());
      // 2. no tags are selected OR every tag in 'selectedTags' must exist in 'tags' array of the note
      const tagCondition =
        selectedTags.length === 0 ||
        selectedTags.every((tag) =>
          note.tags.some((noteTag) => noteTag.id === tag.id)
        );

      // Return TRUE if titleCondition and tagCondition are met, including that note in filtered results
      return titleCondition && tagCondition;
    });
  }, [title, selectedTags, notes]);

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
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
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
        {filteredNotes.map((note) => (
          <Col key={note.id}>
            <NoteCard id={note.id} title={note.title} tags={note.tags}/>
          </Col>
        ))}
      </Row>
    </>
  );
}
