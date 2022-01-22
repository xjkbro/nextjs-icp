// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { fetchAPI } from "../../utils/api"

// export default function handler(req, res) {
//     let data = fetchAPI('http://localhost:3000/api/taxes_json');
//     console.log(data)

//     let taxes
//   // console.log(getJson)
//   if (req.method === "POST") {
//     // Process a POST request
//     console.log(req.body)
//     if{}
//     let data = {
//       name: req.body.content.shippingAddress.postalCode,
//       postalCodeMatchingRegex: req.body.content.shippingAddress.postalCode,
//       rate: 0.05,
//     }
//     taxes = data
//   } else {
//     // Handle any other HTTP method
//   }
//   // taxes[0].rate = 0.3;
//   res.status(200).json({
//     taxes,
//   })
//   //   res.status(200).json({
//   //     "taxes": [
//   //       {
//   //         "name": "Tax1",
//   //         "amount": 10.00,
//   //         "numberForInvoice": "TAX-001",
//   //         "rate": 0.05
//   //       },
//   //       {
//   //         "name": "Tax2",
//   //         "amount": 20.00,
//   //         "numberForInvoice": "TAX-002",
//   //         "rate": 0.10
//   //       }
//   //     ]
//   //   })
// }
