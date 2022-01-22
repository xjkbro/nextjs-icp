// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import Papa from "papaparse"
// // import csv from "../../public/tax_rates/TAXRATES.csv"
// // var data = Papa.parse(csv);
// // const reader = new FileReader()
// var data = Papa.parse("http://localhost:3000/tax_rates/TAXRATES.csv", {
// 	download: true,
// 	complete: function(results) {
// 		console.log(results);
// 	}
// });
// console.log(data);
// require csvtojson module
const CSVToJSON = require('csvtojson');

// convert users.csv file to JSON array

const getJson = async () => {
    CSVToJSON().fromFile('TAXRATES.csv')
    .then(taxes => {

        // users is a JSON array
        // log the JSON array
         return taxes;
    }).catch(err => {
        // log error if any
        console.log(err);
    });
}

export default function handler(req, res) {
    let taxes;
    // console.log(getJson)
    if (req.method === 'POST') {
    // Process a POST request
        console.log(req.body)
        let data = {
            name: req.body.content.shippingAddress.postalCode,
            postalCodeMatchingRegex: req.body.content.shippingAddress.postalCode,
            rate: 0.05
        }
        taxes = data;
    } else {
    // Handle any other HTTP method
    }
    // taxes[0].rate = 0.3;
    res.status(200).json({
    taxes
  })
  res.status(200).json({
    "taxes": [
      {
        "name": "Tax1",
        "amount": 10.00,
        "numberForInvoice": "TAX-001",
        "rate": 0.05
      },
      {
        "name": "Tax2",
        "amount": 20.00,
        "numberForInvoice": "TAX-002",
        "rate": 0.10
      }
    ]
  })
}
