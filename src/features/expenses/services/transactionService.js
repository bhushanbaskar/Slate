import { getData, saveData } from "../../../services/storage";

export function getTransactions() {
  const data = getData();

  if (data === null) {
    return [];
  }

  return data.transactions;
}

export function addTransaction(transaction) {
  const data = getData();

  if (data === null) {
    return false;
  }

  // data.transactions.push(transaction);
  data.transactions = [...data.transactions, transaction];
  saveData(data);

  return true;
}

export function updateTransaction(updatedTransaction) {
  const data = getData();

  if (data === null) {
    return false;
  }

  const index = data.transactions.findIndex(
    (transaction) => transaction.id === updatedTransaction.id,
  );

  if (index === -1) {
    return false;
  }

  data.transactions[index] = updatedTransaction;

  saveData(data);

  return true;
}

export function deleteTransaction(id) {
  const data = getData();

  if (data === null) {
    return false;
  }

  data.transactions = data.transactions.filter(
    (transaction) => transaction.id !== id,
  );

  saveData(data);

  return true;
}
