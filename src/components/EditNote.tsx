import { NoteData, Tag } from "../App";
import { NoteForm } from "./NoteForm";
import { useNote } from "./NoteLayout";


// Define prop types
type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void; // Function to handle note submission
  onAddTag: (tag: Tag) => void; // Function to handle tag addition
  availableTags: Tag[]; // List of available tags
};

// EditNote component
export function EditNote({ onSubmit, onAddTag, availableTags }: EditNoteProps) {
  const note = useNote();

  return (
    <>
      {/* Title */}
      <h1 className="mb-4">Edit Note, Who Dis?</h1>
      {/* Render NoteForm component, passing in props */}
      <NoteForm
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}
