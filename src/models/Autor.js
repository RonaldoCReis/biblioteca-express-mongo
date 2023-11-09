import mongoose from 'mongoose';

const AutorSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    nacionalidade: { type: String },
  },
  { versionKey: false }
);

const autor = mongoose.model('Autores', AutorSchema);

export { autor, AutorSchema };
