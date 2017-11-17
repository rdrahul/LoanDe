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
	

});