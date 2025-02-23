import { NotesDAO } from '../dao/notes.dao';
import { Note } from '../models/note';

class NotesService {
  static async getAllNotes(page: number, pageSize: number): Promise<{ notes: Note[]; pageInfo: { page: number, pageSize: number, total: number, totalPages: number } }> {
    const totalNotes = await NotesDAO.countNotes();
    const notes = await NotesDAO.getPaginatedNotes(page, pageSize);
    
    const totalPages = Math.ceil(totalNotes / pageSize);
    
    const pageInfo = {
      page,
      pageSize,
      total: totalNotes,
      totalPages,
    };

    return { notes, pageInfo };
  }

  static async getNoteById(id: string): Promise<Note | null> {
    return await NotesDAO.getNoteById(id);
  }

  static async createNote(title: string, content: string): Promise<Note> {
    const newNoteData = { title, content };
    return await NotesDAO.createNote(newNoteData);
  }

  static async updateNote(id: string, title: string, content: string): Promise<Note | null> {
    const updatedNoteData = { title, content };
    return await NotesDAO.updateNote(id, updatedNoteData);
  }

  static async deleteNote(id: string): Promise<void> {
    return await NotesDAO.deleteNote(id);
  }
}

export default NotesService;