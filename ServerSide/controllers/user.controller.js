const 
	User = require('../models/user.model');

let GetUsers = (req, res) => {

	User.find( {} , ( err , users ) => {
		if ( err )
			return res.status( 500 ).json( err );
		return res.status( 200 ).json( { users : users }); 
	})
	
}

let CreateUser = ( req , res ) =>{
	let name = req.body["name"];
	
	let user = new User( { name : name });
	
	User.create( user , ( err , status) =>{
		if( err) 
			return res.status(500).json( err );
		return res.status( 200 ).json( status );
	});

}  


module.exports = {
	getUsers : GetUsers,
	createUser : CreateUser
}