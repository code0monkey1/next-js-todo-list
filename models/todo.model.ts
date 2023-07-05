import mongoose, { Document, Schema } from 'mongoose';

interface ITodo extends Document {
  checked: boolean;
  content: string;
  id: string;
}

const TodoSchema: Schema = new Schema({
  checked: { type: Boolean, default: false },
  content: { type: String, required: true },
  id: { type: String, required: true, unique: true },
});

const TodoModel =mongoose.model<ITodo>('Todo', TodoSchema);

export default TodoModel;
