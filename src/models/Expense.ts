import mongoose, { Schema, Document } from 'mongoose';

export interface IExpense extends Document {
  title: string;
  amount: number;
  category: string;
  date: Date;
  notes?: string;
}

const ExpenseSchema: Schema = new Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true },
  notes: { type: String },
});

const Expense = mongoose.model<IExpense>('Expense', ExpenseSchema);
export default Expense;
