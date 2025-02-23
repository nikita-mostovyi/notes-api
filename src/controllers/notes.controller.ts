import { Request, Response, RequestHandler } from 'express';
import NotesService from '../services/notes.service';

class NotesController {
  static getAllNotes: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    const { page = 1, pageSize = 10 } = req.query;
    try {
      const { notes, pageInfo } = await NotesService.getAllNotes(Number(page), Number(pageSize));
      res.json({
        data: notes,
        pageInfo,
      });
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch notes' });
    }
  };

  static getNoteById: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const note = await NotesService.getNoteById(id);
      if (!note) {
        res.status(404).json({ message: 'Note not found' });
      } else {
        res.json(note);
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch note' });
    }
  };

  static createNote: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
      const { title, content } = req.body;
      if (!title || !content) {
        res.status(400).json({ message: 'Title and content are required' });
      } else {
        const newNote = await NotesService.createNote(title, content);
        res.status(201).json(newNote);
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to create note' });
    }
  };

  static updateNote: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const { title, content } = req.body;
      const updatedNote = await NotesService.updateNote(id, title, content);
      if (!updatedNote) {
        res.status(404).json({ message: 'Note not found' });
      } else {
        res.json(updatedNote);
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to update note' });
    }
  };

  static deleteNote: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      await NotesService.deleteNote(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete note' });
    }
  };
}

export default NotesController;