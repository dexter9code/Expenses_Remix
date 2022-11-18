import type {ExpenseData} from '~/utils/allInterface'
import { prisma } from "./prisma.server";

export const createExpense = async (expense: any) => {
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


export const getExpenses=async()=>{
  try {
    const expenses=await prisma.expenses.findMany({
      orderBy:{date:'desc'}
    })
    return expenses
  } catch (error) {
    console.log(error)
  }
}


export const updateExpenses=async(id:string,expensesData:ExpenseData)=>{
  try {
    const updatedExpense=await prisma.expenses.update({
      where:{id},
      data:{
        title:expensesData.title,
        amount:+expensesData.amount,
        date:new Date(expensesData.date),
        isEdit:true
      }
    })
    return updatedExpense
  } catch (error) {
    console.log(error)
  }
}

export const deleteExpense=async (id:string) => {
  try {
    await prisma.expenses.delete({where:{id}})
  } catch (error) {
    console.log(error)
  }
}