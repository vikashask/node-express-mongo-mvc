var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String },
  address: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
