import { NoteData, Tag } from "../App";
import { NoteForm } from "./NoteForm";

// Define prop types
type EditNoteProps = {
  onSubmit: (data: NoteData) => void    // Function to handle note submission
  onAddTag: (tag: Tag) => void          // Function to handle tag addition
  availableTags: Tag[]                  // List of available tags
}

// EditNote component
export function EditNote({onSubmit, onAddTag, availableTags}: EditNoteProps) {
  return (
    <>
      {/* Title */}
      <h1 className="mb-4">Edit Note, Who Dis?</h1>
      {/* Render NoteForm component, passing in props */}
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags}/>
    </>
  );
}
