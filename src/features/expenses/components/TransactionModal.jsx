import { useEffect, useState } from "react";

import { getCategories } from "../../categories/services/categoryService";

const INITIAL_FORM = {
  title: "",
  amount: "",
  categoryId: "",
  date: new Date().toISOString().split("T")[0],
  note: "",
};

function TransactionModal({ isOpen, type, transaction, onClose, onSave }) {
  const [formData, setFormData] = useState(INITIAL_FORM);

  const categories = getCategories().filter((category) =>
    type === "income" ? category.id === "salary" : category.id !== "salary",
  );

  useEffect(() => {
    if (!isOpen) return;

    if (transaction) {
      setFormData({
        title: transaction.title,
        amount: transaction.amount,
        categoryId: transaction.categoryId,
        date: transaction.date,
        note: transaction.note,
      });
    } else {
      setFormData({
        ...INITIAL_FORM,
        date: new Date().toISOString().split("T")[0],
      });
    }
  }, [isOpen, transaction]);

  if (!isOpen) return null;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function resetForm() {
    setFormData({
      ...INITIAL_FORM,
      date: new Date().toISOString().split("T")[0],
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.title.trim() || !formData.amount || !formData.categoryId) {
      alert("Please fill all required fields.");
      return;
    }

    const updatedTransaction = {
      id: transaction ? transaction.id : crypto.randomUUID(),

      title: formData.title.trim(),
      amount: Number(formData.amount),
      type,
      categoryId: formData.categoryId,
      date: formData.date,
      note: formData.note.trim(),
    };

    onSave(updatedTransaction);

    resetForm();
  }

  function handleClose() {
    resetForm();
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-xl bg-[#151617] p-6">
        <h2 className="mb-6 text-2xl font-semibold">
          {transaction ? "Edit" : "Add"}{" "}
          {type === "income" ? "Income" : "Expense"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full rounded border border-neutral-700 bg-transparent p-3 outline-none focus:border-[#5e69d1]"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />

          <input
            className="w-full rounded border border-neutral-700 bg-transparent p-3 outline-none focus:border-[#5e69d1]"
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
          />

          <select
            className="w-full rounded border border-neutral-700 bg-[#151617] p-3 outline-none focus:border-[#5e69d1]"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
          >
            <option value="">Select Category</option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.icon} {category.name}
              </option>
            ))}
          </select>

          <input
            className="w-full rounded border border-neutral-700 bg-transparent p-3 outline-none focus:border-[#5e69d1]"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />

          <textarea
            className="w-full rounded border border-neutral-700 bg-transparent p-3 outline-none focus:border-[#5e69d1]"
            rows={3}
            name="note"
            placeholder="Note (optional)"
            value={formData.note}
            onChange={handleChange}
          />

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="rounded bg-neutral-700 px-4 py-2 transition hover:bg-neutral-600"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded bg-[#5e69d1] px-4 py-2 transition hover:bg-[#6974e1]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TransactionModal;
