const 
	Message = require('../models/bill.model'),
	Operators = require ('../utilities/operator')	;

let GetMessages = (req , res) => {

	let id = req.user.id ; 
	let contacts_id = Operators.getQueryParams( 'contact' );
	
	Message.find( { $or : [{   
								from : { $in : [ id , contacts_id] } 
							},
							{
								to : { $in : [ id , contacts_id] }
							}
	] } , ( err , messages  ) => {
		if ( err) 
			return res.status(500).json( err );
		return res.status(200).json(messages);
	} );

}

let CreateMessage = ( req , res) => {

	let  id = req.user.id
	let message_to =  req.body.to ;
	let message = req.body.message;

	let messageIns = new Message( { from : id , to : message_to , message : message  } );

	Message.create( messageIns  , (err , created) => {
		if( err) 
			return res.status(500).json(err);
		return res.status(200).json(created);
	});

}

let DeleteMessage  = ( req , res) =>{

}


module.exports = {
	getMessages : GetMessages , 
	create : CreateMessage 
}