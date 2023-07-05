import mongoose, { Document, Schema } from 'mongoose';

interface ITodo extends Document {
  checked: boolean;
  content: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

const TodoSchema: Schema = new Schema(
  {
    checked: { type: Boolean, default: false },
    content: { type: String, required: true },
    id: { type: String, required: true, unique: true },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

const TodoModel = mongoose.models.Todo || mongoose.model<ITodo>('Todo', TodoSchema);

export default TodoModel;
