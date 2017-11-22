'use strict';
const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    _ = require('lodash');

let BillSchema = new Schema({
    
    amount: {
        type: String,
        trim: true,
        required: true
	},
	
	created_at : {
		type : Date,
		default  : Date.now
	},

	added_by : {
		type : Schema.Types.ObjectId,
		ref : 'User'
	}
});

module.exports  = mongoose.model( 'bill' , BillSchema);

