import { Tag } from "../App";


export type SimplifiedNote = {
  tags: Tag[]
  title: string
  id: string
}

export function NoteCard({id, title, tags}: SimplifiedNote) {
  return (
    <h4>Note Card here</h4>
  )
}