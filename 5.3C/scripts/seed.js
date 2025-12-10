const mongoose = require("mongoose");
const { Decimal128 } = require("mongodb");
const Book = require('../models/books.model');


const uri = "mongodb://localhost:27017/booksdb";

mongoose
  .connect(uri)
  .then(async () => {
    console.log("MongoDB connected. Seeding data...");

    await Book.deleteMany({});

    const books = [
      {
        id: "b1",
        title: "The Three-Body Problem",
        author: "Liu Cixin",
        year: 2008,
        genre: "Science Fiction",
        summary:
          "The Three-Body Problem is the first novel in the Remembrance of Earth's Past trilogy. The series portrays a fictional past, present, and future wherein Earth encounters an alien civilization from a nearby system of three Sun-like stars orbiting one another.",
        price: Decimal128.fromString("29.99"),
      },
      {
        id: "b2",
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        year: 1847,
        genre: "Classic",
        summary:
          "An orphaned governess confronts class, morality, and love at Thornfield Hall, uncovering Mr. Rochester’s secret and forging her own independence.",
        price: Decimal128.fromString("22"),
      },
      {
        id: "b3",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        genre: "Classic",
        summary:
          "Elizabeth Bennet and Mr. Darcy navigate pride, misjudgement, and social expectations in a sharp study of manners and marriage.",
        price: Decimal128.fromString("22"),
      },
      {
        id: "b4",
        title: "The English Patient",
        author: "Michael Ondaatje",
        year: 1992,
        genre: "Historical Fiction",
        summary:
          "In a ruined Italian villa at the end of WWII, four strangers with intersecting pasts confront memory, identity, and loss.",
        price: Decimal128.fromString("25.39"),
      },
      {
        id: "b5",
        title: "Small Gods",
        author: "Terry Pratchett",
        year: 1992,
        genre: "Fantasy",
        summary:
          "In Omnia, the god Om returns as a tortoise, and novice Brutha must confront dogma, empire, and the nature of belief.",
        price: Decimal128.fromString("31.99"),
      },
    ];

    await Book.insertMany(books);
    console.log("Seed data inserted successfully!");

    mongoose.connection.close();
  })
  .catch((err) => console.error("Error seeding data:", err));
