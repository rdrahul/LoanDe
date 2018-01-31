'use strict';
const
    mongoose = require('mongoose'),
	Schema = mongoose.Schema;

let MessageSchema = new Schema( {
	message : {
		type : String ,
		required : true
	},
	from : {
		type : Schema.Types.ObjectId,
		ref : 'User'
	},
	to : {
		type : Schema.Types.ObjectId,
		ref : 'User'
	},
	sent_on : {
		type: Date,
		default : Date.now
	}
});

module.exports =  mongoose.model( 'Message' , MessageSchema);
