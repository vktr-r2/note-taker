import { Navigate, Outlet, useParams } from "react-router-dom";
import { Note } from "../App"

type NoteLayoutProps = {
  notes: Note[]
}

export function NoteLayout ({ notes }: NoteLayoutProps) {

  // Hook to retrieve note id from URL
  const { id } = useParams()
  // Find associated note
  const note = notes.find(note => note.id === id)
  
  // If note doesn't exist, navigate to home
  if (note == null) return <Navigate to="/" replace />

  return (
    <Outlet context={note} />
  )
}

// Custom hook returns context passed through Outlet
export function useNote() {
  return useOutletContext<Note>()
}