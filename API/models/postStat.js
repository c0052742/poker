const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const StatSchema = new Schema({
  playerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required:true
},
  playerName:{type: String, required:true},
  gameDate:{type: Date, required: true},
  place:{type: Number, required: true},
  amountWon: {type: Number, required: true},
  buyin:{type: Number, required: true},
  rebuy:{type: Boolean, required: true},
  rebuyAmount:{type: Number, required: false},
});

const StatModel = model('Stats', StatSchema);

module.exports = StatModel;