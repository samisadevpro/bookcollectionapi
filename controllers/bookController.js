import Book from "../models/bookModel.js";

export const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({
      message: "📚 Book added successfully!",
      data: book,
    });
  } catch (err) {
    res.status(400).json({
      message: "❌ Failed to create book",
      error: err.message,
    });
  }
};
