import type { ExpenseData } from "./allInterface";
import { prisma } from "./prisma.server";

export const createExpense = async (expense: ExpenseData) => {
  try {
    return await prisma.expenses.create({
      data: {
        title: expense.title,
        amount: +expense.amount,
        date: new Date(expense.date),
      },
    });
  } catch (error) {
    console.log(error);
  }
};
