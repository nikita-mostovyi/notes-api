import { Router } from 'express';
import NotesController from '../controllers/notes.controller';

const router = Router();

router.post('/notes', NotesController.createNote);
router.get('/notes', NotesController.getAllNotes);
router.get('/notes/:id', NotesController.getNoteById);
router.put('/notes/:id', NotesController.updateNote);
router.delete('/notes/:id', NotesController.deleteNote);

export default router;