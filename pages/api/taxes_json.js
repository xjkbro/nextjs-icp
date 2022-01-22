// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const CSVToJSON = require('csvtojson');
export default function handler(req, res) {
    CSVToJSON().fromFile('https://nextjs-icp.vercel.app/TAXRATES.csv')
    .then(taxes => {
        res.status(200).json({
            taxes
          })
    }).catch(err => {
        // log error if any
        res.status(200).json({
            err: "Error"
          })
    });
}
