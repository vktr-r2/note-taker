import { NoteData, Tag } from "./App";
import { NoteForm } from "./NoteForm";

// Define prop types
type NewNoteProps = {
  onSubmit: (data: NoteData) => void    // Function to handle note submission
  onAddTag: (tag: Tag) => void          // Function to handle tag addition
  availableTags: Tag[]                  // List of available tags
}

// NewNote component
export function NewNote({onSubmit, onAddTag, availableTags}: NewNoteProps) {
  return (
    <>
      {/* Title */}
      <h1 className="mb-4">New Note, Who Dis?</h1>
      {/* Render NoteForm component, passing in props */}
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags}/>
    </>
  );
}
