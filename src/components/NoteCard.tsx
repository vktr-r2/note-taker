import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tag } from "../App";


export type SimplifiedNote = {
  tags: Tag[]
  title: string
  id: string
}

export function NoteCard({id, title, tags}: SimplifiedNote) {
  return (
    <Card as={Link} to={`/${id}`} >
      <Card.Body>
        <p>{title}</p>
      </Card.Body>

    </Card>>
  )s
}