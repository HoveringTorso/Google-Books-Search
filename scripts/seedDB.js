const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

const bookSeed = [
  {
    title: "2001: A Space Odyssey",
    authors: ["Arthur C. Clarke"],
    description:
      "The classic science fiction novel that captures and expands on the vision of Stanley Kubrick’s immortal film—and changed the way we look at the stars and ourselves.",
    image:
      "https://books.google.com/books/content?id=s-RRCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70qoP3cL_PS5F746HijHL32CG9Mt2KhyLB_EObh3-pUEqc5uX48p99ftwadrXbDTrxh7bioYyyN9UkYMWDA9Uh8d3Ly1yefyXa9SgbksyhuAIm5iao_qsvlyi96agWrxkk461ri",
    link:
      "https://books.google.com/books?id=s-RRCwAAQBAJ&dq=2001+a+space+odyssey&ppis=_c"
  }
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
