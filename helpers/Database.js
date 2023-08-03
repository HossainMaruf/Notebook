const mongoose = require("mongoose");

class DB {
  static Connect() {
    const db_url = "mongodb://127.0.0.1:27017/NoteBook"
    mongoose.connect(db_url)
    .then(() => console.log("DB Connected!"))
    .catch((error) => console.log("DB Connection Error!"));
  }
}

module.exports = { DB };