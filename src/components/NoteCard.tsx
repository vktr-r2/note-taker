import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tag } from "../App";
import styles from "../styles/NoteList.module.css"

export type SimplifiedNote = {
  tags: Tag[];
  title: string;
  id: string;
};

export function NoteCard({ id, title, tags }: SimplifiedNote) {
  return (
    <Card as={Link} to={`/${id}`} className={`h-100 text-reset text-decoration-none ${styles.card}`}>
      <Card.Body>
        <h1>{}</h1>
        <p>{title}</p>
      </Card.Body>
    </Card>
  );
}
