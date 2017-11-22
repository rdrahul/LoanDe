import { start } from 'repl';

const 
	Bill = require('../models/bill.model'),
	Operators = require ('../utilities/operator')	;



/**
 * Create
 */
let CreateBill = (req , res ) => {
	let user_adding = req.body.userId;
	let amount = req.body.amount;

	let bill = new Bill( { amount : amount , added_by : user_adding });

	Bill.create( bill )
		.exec( (err , response ) => {
			if ( err )
				return  res.status(500).json( {err : err} );
			return res.status(201).json( response );

		})

}

/**
 * GET
*/
let GetBill = (req , res ) => {
	let billId = Operators.getQueryParams( req , 'billId' );

	Bill.findById( billId  , (err , bill) => {
		if (err) 
			return  res.status(500).json( {err : err} );
		return res.status(200).json(bill);

	});

}

/**
 * Get all the bills
 */
let GetBills = ( req , res ) => {

	Bill.find( {} , ( err , bills ) => {
		if ( err )
			return res.status(500).json( { err :err });
		return res.status(200).json( { bills : bills });
	});
}


let DeleteBill = (req , res) => {
	let id = Operators.getQueryParams( req  , 'billId' );
	Bill.findByIdAndRemove( id  , (err , response) => {
		if (err) 
			return res.status(500).json({err : err });
		return res.status(200).json( { response});
	})
}


let UpdateBill = (req, res) => {
	let Id = Operators.getBody( req , 'billId');
	let amount = Operators.getBody( req , 'amount');

	Bill.findByIdAndUpdate( Id  , { $set : {  amount : amount } } , { new :true} ,  (err , updateBill) => {
		if ( err )
			return res.status(500).json({ err : err })

		return res.status(200).json({updateBill} );
	});
}

module.exports = {
	create : CreateBill,
	read : GetBill,
	update : UpdateBill,
	del : DeleteBill,
	getAll : GetBills
}