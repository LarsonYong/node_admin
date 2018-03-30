//models/Expense.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SIMDetails = new Schema({
  Carrier: String,
  APN: String,
  IP_address: String
})
var CameraDetails = new Schema ({
  Type: String,
  Lenth: String
})
var SSDDetails = new Schema({
  Type: String,
  Size: String
})
var TestDetails = new Schema ({
  Who: String,
  What: String,
  When: String
})
var nodeSchema = new Schema({
  UnitID: String,
  Platform: String,
  SensorBoard: String,
  WiFiModule: String,
  FourGMoudle: String,
  SIM: SIMDetails,
  ResetBoard: String,
  Battery: String,
  Camera: CameraDetails,
  SSD: SSDDetails,
  Test: TestDetails
});
module.exports = mongoose.model('NodeDetails', nodeSchema);
