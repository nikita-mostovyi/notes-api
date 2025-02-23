import { PrismaClient } from '@prisma/client';
import { Note } from '../models/note';

const prisma = new PrismaClient();

export class NotesDAO {
  static async createNote(data: { title: string, content: string }) {
    return prisma.note.create({
      data: {
        ...data,
      },
    });
  }

  static async getAllNotes(): Promise<Note[]> {
    return prisma.note.findMany();
  }

  static async getNoteById(id: string): Promise<Note | null> {
    return prisma.note.findUnique({ where: { id } });
  }

  static async updateNote(id: string, data: Partial<Omit<Note, 'id'>>): Promise<Note | null> {
    return prisma.note.update({ where: { id }, data });
  }

  static async deleteNote(id: string): Promise<void> {
    await prisma.note.delete({ where: { id } });
  }

  static async getPaginatedNotes(page: number, pageSize: number): Promise<Note[]> {
    return await prisma.note.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
  }

  // Method to get the count of notes
  static async countNotes(): Promise<number> {
    return await prisma.note.count();
  }
}