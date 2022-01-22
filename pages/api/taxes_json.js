// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  //   console.log(taxes)
  if (req.method === "POST") {
    // Process a POST request
    // console.log(req.body)
    let { country, province, postalCode } = req.body.content.shippingAddress
    if (country != "US") {
      res.status(200).json({
        taxes: [
          {
            name: "No Tax",
            amount: 0,
            numberForInvoice: "NO-TAX",
          },
        ],
      })
    } else {
      if (province === "CA") {
        console.log("here")
        res.status(200).json({
          taxes: [
            {
              name: "California Tax",
              //   amount: 10.0,
              numberForInvoice: "CA-TAX",
              rate: getRate(postalCode),
            },
          ],
        })
      } else {
        res.status(200).json({
          taxes: [
            {
              name: "No Tax",
              amount: 0,
              numberForInvoice: "NO-TAX",
            },
          ],
        })
      }
    }
  } else {
    // Handle any other HTTP method
    res.status(200).json({
      // taxes: taxes,
      err: "ERROR",
    })
  }
}

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  const mid = Math.floor((start + end) / 2)
  //   console.log(arr[mid].ZipCode)
  if (val === arr[mid].ZipCode) {
    return mid
  }

  if (start >= end) {
    return start
  }

  return val < arr[mid].ZipCode
    ? binarySearch(arr, val, start, mid - 1)
    : binarySearch(arr, val, mid + 1, end)
}
const getRate = (zip) => {
  let index = binarySearch(taxes, zip)
  //   console.log(index)
  return taxes[index].EstimatedCombinedRate
}

const taxes = [
  {
    ZipCode: 90001,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90002,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90003,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90004,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90005,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90006,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90007,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90008,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90009,
    TaxRegionName: "LOS ANGELES TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90010,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90011,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90012,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90013,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90014,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90015,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90016,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90017,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90018,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90019,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90020,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90021,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90022,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90023,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90024,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90025,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90026,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90027,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90028,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90029,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90030,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90031,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90032,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90033,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90034,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90035,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90036,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90037,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90038,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90039,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90040,
    TaxRegionName: "COMMERCE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90041,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90042,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90043,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90044,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90045,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90046,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90047,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90048,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90049,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90050,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90051,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90052,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90053,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90054,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90055,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90056,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90057,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90058,
    TaxRegionName: "VERNON",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90059,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90060,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90061,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90062,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90063,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90064,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90065,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90066,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90067,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90068,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90069,
    TaxRegionName: "WEST HOLLYWOOD BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90070,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90071,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90072,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90073,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90074,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90075,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90076,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90077,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90078,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90079,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90081,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90082,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90083,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90084,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90086,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90087,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90088,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90089,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90091,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90093,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90094,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90095,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90096,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90099,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90201,
    TaxRegionName: "BELL GARDENS",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90202,
    TaxRegionName: "BELL GARDENS",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90209,
    TaxRegionName: "BEVERLY HILLS",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90210,
    TaxRegionName: "BEVERLY HILLS",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90211,
    TaxRegionName: "BEVERLY HILLS",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90212,
    TaxRegionName: "BEVERLY HILLS",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90213,
    TaxRegionName: "BEVERLY HILLS",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90220,
    TaxRegionName: "COMPTON",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90221,
    TaxRegionName: "COMPTON",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90222,
    TaxRegionName: "COMPTON",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90223,
    TaxRegionName: "COMPTON",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90224,
    TaxRegionName: "COMPTON",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90230,
    TaxRegionName: "CULVER CITY",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90231,
    TaxRegionName: "CULVER CITY",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90232,
    TaxRegionName: "CULVER CITY",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90233,
    TaxRegionName: "CULVER CITY",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90239,
    TaxRegionName: "DOWNEY",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 90240,
    TaxRegionName: "DOWNEY",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 90241,
    TaxRegionName: "DOWNEY",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 90242,
    TaxRegionName: "DOWNEY",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 90245,
    TaxRegionName: "EL SEGUNDO",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90247,
    TaxRegionName: "GARDENA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90248,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90249,
    TaxRegionName: "GARDENA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90250,
    TaxRegionName: "LOS ANGELES COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90251,
    TaxRegionName: "LOS ANGELES COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90254,
    TaxRegionName: "HERMOSA BEACH",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90255,
    TaxRegionName: "HUNTINGTON PARK",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90260,
    TaxRegionName: "LAWNDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90262,
    TaxRegionName: "LYNWOOD",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90263,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90264,
    TaxRegionName: "MALIBU",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90265,
    TaxRegionName: "MALIBU",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90266,
    TaxRegionName: "MANHATTAN BEACH",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90267,
    TaxRegionName: "MANHATTAN BEACH",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90270,
    TaxRegionName: "MAYWOOD",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90272,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90274,
    TaxRegionName: "ROLLING HILLS ESTATES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90275,
    TaxRegionName: "RANCHO PALOS VERDES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90277,
    TaxRegionName: "REDONDO BEACH",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90278,
    TaxRegionName: "REDONDO BEACH",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90280,
    TaxRegionName: "SOUTH GATE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90290,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90291,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90292,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90293,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90294,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90295,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90296,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90301,
    TaxRegionName: "INGLEWOOD",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 90302,
    TaxRegionName: "INGLEWOOD",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 90303,
    TaxRegionName: "INGLEWOOD",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 90304,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90305,
    TaxRegionName: "INGLEWOOD",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 90306,
    TaxRegionName: "INGLEWOOD",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 90307,
    TaxRegionName: "INGLEWOOD",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 90308,
    TaxRegionName: "INGLEWOOD",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 90309,
    TaxRegionName: "INGLEWOOD",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 90310,
    TaxRegionName: "INGLEWOOD",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 90311,
    TaxRegionName: "INGLEWOOD",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 90401,
    TaxRegionName: "SANTA MONICA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90402,
    TaxRegionName: "SANTA MONICA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90403,
    TaxRegionName: "SANTA MONICA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90404,
    TaxRegionName: "SANTA MONICA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90405,
    TaxRegionName: "SANTA MONICA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90406,
    TaxRegionName: "SANTA MONICA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90408,
    TaxRegionName: "SANTA MONICA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90409,
    TaxRegionName: "SANTA MONICA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90501,
    TaxRegionName: "TORRANCE TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90502,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90503,
    TaxRegionName: "TORRANCE TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90504,
    TaxRegionName: "TORRANCE TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90505,
    TaxRegionName: "TORRANCE TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90506,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90507,
    TaxRegionName: "TORRANCE TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90508,
    TaxRegionName: "TORRANCE TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90510,
    TaxRegionName: "TORRANCE TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90601,
    TaxRegionName: "WHITTIER",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90602,
    TaxRegionName: "WHITTIER",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90603,
    TaxRegionName: "WHITTIER",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90604,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90605,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90606,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90607,
    TaxRegionName: "WHITTIER",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90608,
    TaxRegionName: "WHITTIER",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90609,
    TaxRegionName: "WHITTIER",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90620,
    TaxRegionName: "BUENA PARK",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 90621,
    TaxRegionName: "BUENA PARK",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 90622,
    TaxRegionName: "BUENA PARK",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 90623,
    TaxRegionName: "LA PALMA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 90630,
    TaxRegionName: "CYPRESS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 90631,
    TaxRegionName: "LA HABRA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 90632,
    TaxRegionName: "LA HABRA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 90633,
    TaxRegionName: "LA HABRA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 90637,
    TaxRegionName: "LA MIRADA",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90638,
    TaxRegionName: "LA MIRADA",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90639,
    TaxRegionName: "LA MIRADA",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90640,
    TaxRegionName: "MONTEBELLO",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90650,
    TaxRegionName: "NORWALK",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90651,
    TaxRegionName: "NORWALK",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90652,
    TaxRegionName: "NORWALK",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90660,
    TaxRegionName: "PICO RIVERA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90662,
    TaxRegionName: "PICO RIVERA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90670,
    TaxRegionName: "SANTA FE SPRINGS",
    EstimatedCombinedRate: 0.105,
  },
  {
    ZipCode: 90671,
    TaxRegionName: "SANTA FE SPRINGS",
    EstimatedCombinedRate: 0.105,
  },
  {
    ZipCode: 90680,
    TaxRegionName: "STANTON",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 90701,
    TaxRegionName: "ARTESIA",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90702,
    TaxRegionName: "ARTESIA",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90703,
    TaxRegionName: "CERRITOS",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90704,
    TaxRegionName: "AVALON",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 90706,
    TaxRegionName: "BELLFLOWER",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90707,
    TaxRegionName: "BELLFLOWER",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90710,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90711,
    TaxRegionName: "LAKEWOOD",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90712,
    TaxRegionName: "LAKEWOOD",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90713,
    TaxRegionName: "LAKEWOOD",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90714,
    TaxRegionName: "LAKEWOOD",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90715,
    TaxRegionName: "LAKEWOOD",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90716,
    TaxRegionName: "HAWAIIAN GARDENS",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90717,
    TaxRegionName: "LOMITA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90720,
    TaxRegionName: "LOS ALAMITOS",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 90721,
    TaxRegionName: "LOS ALAMITOS",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 90723,
    TaxRegionName: "PARAMOUNT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90731,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90732,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90733,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90734,
    TaxRegionName: "RANCHO PALOS VERDES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90740,
    TaxRegionName: "SEAL BEACH",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 90742,
    TaxRegionName: "HUNTINGTON BEACH TOURISM BID",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 90743,
    TaxRegionName: "SEAL BEACH",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 90744,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90745,
    TaxRegionName: "CARSON",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90746,
    TaxRegionName: "CARSON",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90747,
    TaxRegionName: "CARSON",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90748,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 90749,
    TaxRegionName: "CARSON",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90755,
    TaxRegionName: "SIGNAL HILL",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90801,
    TaxRegionName: "LONG BEACH",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90802,
    TaxRegionName: "LONG BEACH",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90803,
    TaxRegionName: "LONG BEACH",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90804,
    TaxRegionName: "LONG BEACH",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90805,
    TaxRegionName: "LONG BEACH",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90806,
    TaxRegionName: "LONG BEACH",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90807,
    TaxRegionName: "LONG BEACH",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90808,
    TaxRegionName: "LONG BEACH",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90809,
    TaxRegionName: "LONG BEACH TOURISM BIA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90810,
    TaxRegionName: "LONG BEACH",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90813,
    TaxRegionName: "LONG BEACH",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90814,
    TaxRegionName: "LONG BEACH",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90815,
    TaxRegionName: "LONG BEACH",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90822,
    TaxRegionName: "LONG BEACH",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90831,
    TaxRegionName: "LONG BEACH TOURISM BIA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90832,
    TaxRegionName: "LONG BEACH TOURISM BIA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90833,
    TaxRegionName: "LONG BEACH TOURISM BIA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90840,
    TaxRegionName: "LONG BEACH",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90844,
    TaxRegionName: "LONG BEACH",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90846,
    TaxRegionName: "LONG BEACH",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90853,
    TaxRegionName: "LONG BEACH",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 90895,
    TaxRegionName: "CARSON",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91001,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91003,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91006,
    TaxRegionName: "ARCADIA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91007,
    TaxRegionName: "ARCADIA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91008,
    TaxRegionName: "BRADBURY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91009,
    TaxRegionName: "DUARTE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91010,
    TaxRegionName: "DUARTE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91011,
    TaxRegionName: "LA CANADA FLINTRIDGE",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91012,
    TaxRegionName: "LA CANADA FLINTRIDGE",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91016,
    TaxRegionName: "MONROVIA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91017,
    TaxRegionName: "MONROVIA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91020,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91021,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91023,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91024,
    TaxRegionName: "SIERRA MADRE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91025,
    TaxRegionName: "SIERRA MADRE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91030,
    TaxRegionName: "SOUTH PASADENA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91031,
    TaxRegionName: "SOUTH PASADENA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91040,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91041,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91042,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91043,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91046,
    TaxRegionName: "GLENDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91066,
    TaxRegionName: "ARCADIA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91077,
    TaxRegionName: "ARCADIA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91101,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91102,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91103,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91104,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91105,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91106,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91107,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91108,
    TaxRegionName: "SAN MARINO",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91109,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91114,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91115,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91116,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91117,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91118,
    TaxRegionName: "SAN MARINO",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91121,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91123,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91124,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91125,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91126,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91129,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91182,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91184,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91185,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91188,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91189,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91199,
    TaxRegionName: "PASADENA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91201,
    TaxRegionName: "GLENDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91202,
    TaxRegionName: "GLENDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91203,
    TaxRegionName: "GLENDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91204,
    TaxRegionName: "GLENDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91205,
    TaxRegionName: "GLENDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91206,
    TaxRegionName: "GLENDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91207,
    TaxRegionName: "GLENDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91208,
    TaxRegionName: "GLENDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91209,
    TaxRegionName: "GLENDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91210,
    TaxRegionName: "GLENDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91214,
    TaxRegionName: "GLENDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91221,
    TaxRegionName: "GLENDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91222,
    TaxRegionName: "GLENDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91224,
    TaxRegionName: "GLENDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91225,
    TaxRegionName: "GLENDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91226,
    TaxRegionName: "GLENDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91301,
    TaxRegionName: "AGOURA HILLS",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91302,
    TaxRegionName: "CALABASAS",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91303,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91304,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91305,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91306,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91307,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91308,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91309,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91310,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91311,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91313,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91316,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91319,
    TaxRegionName: "THOUSAND OAKS",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 91320,
    TaxRegionName: "THOUSAND OAKS",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 91321,
    TaxRegionName: "SANTA CLARITA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91322,
    TaxRegionName: "SANTA CLARITA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91324,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91325,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91326,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91327,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91328,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91329,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91330,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91331,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91333,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91334,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91335,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91337,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91340,
    TaxRegionName: "SAN FERNANDO",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91341,
    TaxRegionName: "SAN FERNANDO",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91342,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91343,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91344,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91345,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91346,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91350,
    TaxRegionName: "SANTA CLARITA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91351,
    TaxRegionName: "SANTA CLARITA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91352,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91353,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91354,
    TaxRegionName: "SANTA CLARITA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91355,
    TaxRegionName: "SANTA CLARITA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91356,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91357,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91358,
    TaxRegionName: "THOUSAND OAKS",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 91359,
    TaxRegionName: "THOUSAND OAKS",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 91360,
    TaxRegionName: "THOUSAND OAKS",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 91361,
    TaxRegionName: "THOUSAND OAKS",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 91362,
    TaxRegionName: "THOUSAND OAKS",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 91364,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91365,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91367,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91371,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91372,
    TaxRegionName: "CALABASAS",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91376,
    TaxRegionName: "AGOURA HILLS",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91377,
    TaxRegionName: "VENTURA CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 91380,
    TaxRegionName: "SANTA CLARITA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91381,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91382,
    TaxRegionName: "SANTA CLARITA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91383,
    TaxRegionName: "SANTA CLARITA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91384,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91385,
    TaxRegionName: "SANTA CLARITA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91386,
    TaxRegionName: "SANTA CLARITA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91387,
    TaxRegionName: "SANTA CLARITA TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91390,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91392,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91393,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91394,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91395,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91396,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91401,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91402,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91403,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91404,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91405,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91406,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91407,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91408,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91409,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91411,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91412,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91413,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91416,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91423,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91426,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91436,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91470,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91482,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91495,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91496,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91501,
    TaxRegionName: "BURBANK",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91502,
    TaxRegionName: "BURBANK",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91503,
    TaxRegionName: "BURBANK",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91504,
    TaxRegionName: "BURBANK",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91505,
    TaxRegionName: "BURBANK",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91506,
    TaxRegionName: "BURBANK",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91507,
    TaxRegionName: "BURBANK",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91508,
    TaxRegionName: "BURBANK",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91510,
    TaxRegionName: "BURBANK",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91521,
    TaxRegionName: "BURBANK",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91522,
    TaxRegionName: "BURBANK",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91523,
    TaxRegionName: "BURBANK",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91526,
    TaxRegionName: "BURBANK",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91601,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91602,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91603,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91604,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91605,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91606,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91607,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91608,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91609,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91610,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91611,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91612,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91614,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91615,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91617,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91618,
    TaxRegionName: "LOS ANGELES",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91701,
    TaxRegionName: "RANCHO CUCAMONGA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91702,
    TaxRegionName: "AZUSA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91706,
    TaxRegionName: "BALDWIN PARK",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91708,
    TaxRegionName: "CHINO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91709,
    TaxRegionName: "CHINO HILLS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91710,
    TaxRegionName: "CHINO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91711,
    TaxRegionName: "CLAREMONT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91714,
    TaxRegionName: "INDUSTRY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91715,
    TaxRegionName: "INDUSTRY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91722,
    TaxRegionName: "COVINA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91723,
    TaxRegionName: "COVINA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91724,
    TaxRegionName: "COVINA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91729,
    TaxRegionName: "RANCHO CUCAMONGA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91730,
    TaxRegionName: "RANCHO CUCAMONGA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91731,
    TaxRegionName: "EL MONTE",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 91732,
    TaxRegionName: "EL MONTE",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 91733,
    TaxRegionName: "SOUTH EL MONTE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91734,
    TaxRegionName: "EL MONTE",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 91737,
    TaxRegionName: "RANCHO CUCAMONGA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91739,
    TaxRegionName: "RANCHO CUCAMONGA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91740,
    TaxRegionName: "GLENDORA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91741,
    TaxRegionName: "GLENDORA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91743,
    TaxRegionName: "ONTARIO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91744,
    TaxRegionName: "LA PUENTE",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 91745,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91746,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91747,
    TaxRegionName: "LA PUENTE",
    EstimatedCombinedRate: 0.1,
  },
  {
    ZipCode: 91748,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91750,
    TaxRegionName: "LA VERNE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91752,
    TaxRegionName: "JURUPA VALLEY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91754,
    TaxRegionName: "MONTEREY PARK",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91755,
    TaxRegionName: "MONTEREY PARK",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91756,
    TaxRegionName: "MONTEREY PARK",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91759,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91761,
    TaxRegionName: "ONTARIO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91762,
    TaxRegionName: "ONTARIO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91763,
    TaxRegionName: "MONTCLAIR",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 91764,
    TaxRegionName: "ONTARIO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91765,
    TaxRegionName: "DIAMOND BAR",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91766,
    TaxRegionName: "POMONA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91767,
    TaxRegionName: "POMONA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91768,
    TaxRegionName: "POMONA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91769,
    TaxRegionName: "POMONA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91770,
    TaxRegionName: "ROSEMEAD",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91771,
    TaxRegionName: "ROSEMEAD",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91772,
    TaxRegionName: "ROSEMEAD",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91773,
    TaxRegionName: "SAN DIMAS",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91775,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91776,
    TaxRegionName: "SAN GABRIEL",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91778,
    TaxRegionName: "SAN GABRIEL",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91780,
    TaxRegionName: "TEMPLE CITY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91784,
    TaxRegionName: "UPLAND",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91785,
    TaxRegionName: "UPLAND",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91786,
    TaxRegionName: "UPLAND",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91788,
    TaxRegionName: "WALNUT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91789,
    TaxRegionName: "WALNUT",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91790,
    TaxRegionName: "WEST COVINA",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91791,
    TaxRegionName: "WEST COVINA",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91792,
    TaxRegionName: "WEST COVINA",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91793,
    TaxRegionName: "WEST COVINA",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 91801,
    TaxRegionName: "ALHAMBRA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91802,
    TaxRegionName: "ALHAMBRA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91803,
    TaxRegionName: "ALHAMBRA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91804,
    TaxRegionName: "ALHAMBRA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91896,
    TaxRegionName: "ALHAMBRA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91899,
    TaxRegionName: "ALHAMBRA",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 91901,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91902,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91903,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91905,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91906,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91908,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91910,
    TaxRegionName: "CHULA VISTA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 91911,
    TaxRegionName: "CHULA VISTA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 91912,
    TaxRegionName: "CHULA VISTA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 91913,
    TaxRegionName: "CHULA VISTA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 91914,
    TaxRegionName: "CHULA VISTA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 91915,
    TaxRegionName: "CHULA VISTA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 91916,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91917,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91921,
    TaxRegionName: "CHULA VISTA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 91931,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91932,
    TaxRegionName: "IMPERIAL BEACH",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 91933,
    TaxRegionName: "IMPERIAL BEACH",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 91934,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91935,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91941,
    TaxRegionName: "LA MESA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 91942,
    TaxRegionName: "LA MESA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 91943,
    TaxRegionName: "LA MESA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 91944,
    TaxRegionName: "LA MESA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 91945,
    TaxRegionName: "LEMON GROVE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91946,
    TaxRegionName: "LEMON GROVE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91948,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91950,
    TaxRegionName: "NATIONAL CITY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 91951,
    TaxRegionName: "NATIONAL CITY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 91962,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91963,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91976,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91977,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91978,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91979,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 91980,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92003,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92004,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92007,
    TaxRegionName: "ENCINITAS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92008,
    TaxRegionName: "CARLSBAD GOLF LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92009,
    TaxRegionName: "CARLSBAD GOLF LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92010,
    TaxRegionName: "CARLSBAD GOLF LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92011,
    TaxRegionName: "CARLSBAD GOLF LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92013,
    TaxRegionName: "CARLSBAD GOLF LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92014,
    TaxRegionName: "DEL MAR",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92018,
    TaxRegionName: "CARLSBAD GOLF LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92019,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92020,
    TaxRegionName: "EL CAJON",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 92021,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92022,
    TaxRegionName: "EL CAJON",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 92023,
    TaxRegionName: "ENCINITAS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92024,
    TaxRegionName: "ENCINITAS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92025,
    TaxRegionName: "ESCONDIDO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92026,
    TaxRegionName: "ESCONDIDO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92027,
    TaxRegionName: "ESCONDIDO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92028,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92029,
    TaxRegionName: "ESCONDIDO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92030,
    TaxRegionName: "ESCONDIDO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92033,
    TaxRegionName: "ESCONDIDO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92036,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92037,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92038,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92039,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92040,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92046,
    TaxRegionName: "ESCONDIDO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92049,
    TaxRegionName: "OCEANSIDE TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 92051,
    TaxRegionName: "OCEANSIDE TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 92052,
    TaxRegionName: "OCEANSIDE TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 92054,
    TaxRegionName: "OCEANSIDE TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 92055,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92056,
    TaxRegionName: "OCEANSIDE TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 92057,
    TaxRegionName: "OCEANSIDE TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 92058,
    TaxRegionName: "OCEANSIDE TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 92059,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92060,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92061,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92064,
    TaxRegionName: "POWAY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92065,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92066,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92067,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92068,
    TaxRegionName: "OCEANSIDE TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 92069,
    TaxRegionName: "SAN MARCOS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92070,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92071,
    TaxRegionName: "SANTEE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92072,
    TaxRegionName: "SANTEE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92074,
    TaxRegionName: "POWAY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92075,
    TaxRegionName: "SOLANA BEACH",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92078,
    TaxRegionName: "SAN MARCOS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92079,
    TaxRegionName: "SAN MARCOS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92081,
    TaxRegionName: "VISTA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 92082,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92083,
    TaxRegionName: "VISTA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 92084,
    TaxRegionName: "VISTA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 92085,
    TaxRegionName: "VISTA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 92086,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92088,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92091,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92092,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92093,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92096,
    TaxRegionName: "SAN MARCOS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92101,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92102,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92103,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92104,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92105,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92106,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92107,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92108,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92109,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92110,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92111,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92112,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92113,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92114,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92115,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92116,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92117,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92118,
    TaxRegionName: "CORONADO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92119,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92120,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92121,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92122,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92123,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92124,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92126,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92127,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92128,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92129,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92130,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92131,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92132,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92134,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92135,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92136,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92137,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92138,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92139,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92140,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92142,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92143,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92145,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92147,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92149,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92150,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92152,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92153,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92154,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92155,
    TaxRegionName: "CORONADO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92158,
    TaxRegionName: "SAN DIEGO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92159,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92160,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92161,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92163,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92165,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92166,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92167,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92168,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92169,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92170,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92171,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92172,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92173,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92174,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92175,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92176,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92177,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92178,
    TaxRegionName: "CORONADO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92179,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92182,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92187,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92191,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92192,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92193,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92195,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92196,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92197,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92198,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92199,
    TaxRegionName: "SAN DIEGO CITY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92201,
    TaxRegionName: "INDIO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92202,
    TaxRegionName: "INDIO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92203,
    TaxRegionName: "INDIO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92210,
    TaxRegionName: "INDIAN WELLS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92211,
    TaxRegionName: "PALM DESERT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92220,
    TaxRegionName: "BANNING",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92222,
    TaxRegionName: "IMPERIAL COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92223,
    TaxRegionName: "BEAUMONT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92225,
    TaxRegionName: "BLYTHE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92226,
    TaxRegionName: "BLYTHE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92227,
    TaxRegionName: "BRAWLEY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92230,
    TaxRegionName: "RIVERSIDE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92231,
    TaxRegionName: "CALEXICO",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 92232,
    TaxRegionName: "CALEXICO",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 92233,
    TaxRegionName: "IMPERIAL COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92234,
    TaxRegionName: "CATHEDRAL CITY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92235,
    TaxRegionName: "CATHEDRAL CITY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92236,
    TaxRegionName: "COACHELLA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92239,
    TaxRegionName: "RIVERSIDE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92240,
    TaxRegionName: "DESERT HOT SPRINGS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92241,
    TaxRegionName: "GREATER PALM SPRINGS TOURISM BID",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92242,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92243,
    TaxRegionName: "EL CENTRO",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 92244,
    TaxRegionName: "EL CENTRO",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 92247,
    TaxRegionName: "LA QUINTA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92248,
    TaxRegionName: "LA QUINTA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92249,
    TaxRegionName: "IMPERIAL COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92250,
    TaxRegionName: "HOLTVILLE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92251,
    TaxRegionName: "IMPERIAL",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92252,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92253,
    TaxRegionName: "LA QUINTA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92254,
    TaxRegionName: "RIVERSIDE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92255,
    TaxRegionName: "PALM DESERT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92256,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92257,
    TaxRegionName: "IMPERIAL COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92258,
    TaxRegionName: "GREATER PALM SPRINGS TOURISM BID",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92259,
    TaxRegionName: "IMPERIAL COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92260,
    TaxRegionName: "PALM DESERT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92261,
    TaxRegionName: "PALM DESERT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92262,
    TaxRegionName: "PALM SPRINGS",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 92263,
    TaxRegionName: "PALM SPRINGS",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 92264,
    TaxRegionName: "PALM SPRINGS",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 92266,
    TaxRegionName: "IMPERIAL COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92267,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92268,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92270,
    TaxRegionName: "RANCHO MIRAGE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92273,
    TaxRegionName: "IMPERIAL COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92274,
    TaxRegionName: "RIVERSIDE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92275,
    TaxRegionName: "IMPERIAL COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92276,
    TaxRegionName: "GREATER PALM SPRINGS TOURISM BID",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92277,
    TaxRegionName: "TWENTYNINE PALMS TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92278,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92280,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92281,
    TaxRegionName: "WESTMORLAND",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92282,
    TaxRegionName: "GREATER PALM SPRINGS TOURISM BID",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92283,
    TaxRegionName: "IMPERIAL COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92284,
    TaxRegionName: "YUCCA VALLEY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92285,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92286,
    TaxRegionName: "YUCCA VALLEY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92301,
    TaxRegionName: "ADELANTO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92304,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92305,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92307,
    TaxRegionName: "APPLE VALLEY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92308,
    TaxRegionName: "APPLE VALLEY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92309,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92310,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92311,
    TaxRegionName: "BARSTOW",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92312,
    TaxRegionName: "BARSTOW",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92313,
    TaxRegionName: "SAN BERNARDINO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92314,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92315,
    TaxRegionName: "BIG BEAR LAKE TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92316,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92317,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92318,
    TaxRegionName: "LOMA LINDA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92320,
    TaxRegionName: "CALIMESA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92321,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92322,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92323,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92324,
    TaxRegionName: "COLTON",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92325,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92327,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92328,
    TaxRegionName: "INYO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92329,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92331,
    TaxRegionName: "FONTANA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92332,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92333,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92334,
    TaxRegionName: "FONTANA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92335,
    TaxRegionName: "FONTANA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92336,
    TaxRegionName: "FONTANA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92337,
    TaxRegionName: "FONTANA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92338,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92339,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92340,
    TaxRegionName: "HESPERIA, CA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92341,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92342,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92344,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92345,
    TaxRegionName: "HESPERIA, CA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92346,
    TaxRegionName: "HIGHLAND",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92347,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92350,
    TaxRegionName: "LOMA LINDA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92352,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92354,
    TaxRegionName: "LOMA LINDA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92356,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92357,
    TaxRegionName: "LOMA LINDA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92358,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92359,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92363,
    TaxRegionName: "NEEDLES",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92364,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92365,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92366,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92368,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92369,
    TaxRegionName: "SAN BERNARDINO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92371,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92372,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92373,
    TaxRegionName: "REDLANDS",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92374,
    TaxRegionName: "REDLANDS",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92375,
    TaxRegionName: "REDLANDS",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92376,
    TaxRegionName: "RIALTO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92377,
    TaxRegionName: "RIALTO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92378,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92382,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92384,
    TaxRegionName: "INYO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92385,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92386,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92389,
    TaxRegionName: "INYO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92391,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92392,
    TaxRegionName: "VICTORVILLE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92393,
    TaxRegionName: "VICTORVILLE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92394,
    TaxRegionName: "VICTORVILLE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92395,
    TaxRegionName: "VICTORVILLE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92397,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92398,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92399,
    TaxRegionName: "YUCAIPA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92401,
    TaxRegionName: "SAN BERNARDINO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92402,
    TaxRegionName: "SAN BERNARDINO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92403,
    TaxRegionName: "SAN BERNARDINO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92404,
    TaxRegionName: "SAN BERNARDINO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92405,
    TaxRegionName: "SAN BERNARDINO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92406,
    TaxRegionName: "SAN BERNARDINO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92407,
    TaxRegionName: "SAN BERNARDINO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92408,
    TaxRegionName: "SAN BERNARDINO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92410,
    TaxRegionName: "SAN BERNARDINO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92411,
    TaxRegionName: "SAN BERNARDINO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92413,
    TaxRegionName: "SAN BERNARDINO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92415,
    TaxRegionName: "SAN BERNARDINO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92418,
    TaxRegionName: "SAN BERNARDINO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92423,
    TaxRegionName: "REDLANDS",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92427,
    TaxRegionName: "SAN BERNARDINO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92501,
    TaxRegionName: "RIVERSIDE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92502,
    TaxRegionName: "RIVERSIDE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92503,
    TaxRegionName: "RIVERSIDE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92504,
    TaxRegionName: "RIVERSIDE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92505,
    TaxRegionName: "RIVERSIDE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92506,
    TaxRegionName: "RIVERSIDE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92507,
    TaxRegionName: "RIVERSIDE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92508,
    TaxRegionName: "RIVERSIDE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92509,
    TaxRegionName: "JURUPA VALLEY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92513,
    TaxRegionName: "RIVERSIDE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92514,
    TaxRegionName: "RIVERSIDE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92516,
    TaxRegionName: "RIVERSIDE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92517,
    TaxRegionName: "RIVERSIDE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92518,
    TaxRegionName: "RIVERSIDE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92519,
    TaxRegionName: "JURUPA VALLEY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92521,
    TaxRegionName: "RIVERSIDE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92522,
    TaxRegionName: "RIVERSIDE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92530,
    TaxRegionName: "LAKE ELSINORE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92531,
    TaxRegionName: "LAKE ELSINORE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92532,
    TaxRegionName: "LAKE ELSINORE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92536,
    TaxRegionName: "RIVERSIDE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92539,
    TaxRegionName: "RIVERSIDE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92543,
    TaxRegionName: "HEMET",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92544,
    TaxRegionName: "RIVERSIDE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92545,
    TaxRegionName: "HEMET",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92546,
    TaxRegionName: "HEMET",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92548,
    TaxRegionName: "RIVERSIDE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92549,
    TaxRegionName: "RIVERSIDE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92551,
    TaxRegionName: "MORENO VALLEY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92552,
    TaxRegionName: "MORENO VALLEY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92553,
    TaxRegionName: "MORENO VALLEY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92555,
    TaxRegionName: "MORENO VALLEY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92556,
    TaxRegionName: "MORENO VALLEY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92557,
    TaxRegionName: "MORENO VALLEY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92561,
    TaxRegionName: "RIVERSIDE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92562,
    TaxRegionName: "MURRIETA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92563,
    TaxRegionName: "MURRIETA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92564,
    TaxRegionName: "MURRIETA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92567,
    TaxRegionName: "RIVERSIDE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92570,
    TaxRegionName: "RIVERSIDE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92571,
    TaxRegionName: "PERRIS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92572,
    TaxRegionName: "PERRIS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92581,
    TaxRegionName: "SAN JACINTO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92582,
    TaxRegionName: "SAN JACINTO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92583,
    TaxRegionName: "SAN JACINTO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92584,
    TaxRegionName: "MENIFEE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92585,
    TaxRegionName: "MENIFEE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92586,
    TaxRegionName: "MENIFEE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92587,
    TaxRegionName: "CANYON LAKE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92589,
    TaxRegionName: "TEMECULA WINE COUNTRY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92590,
    TaxRegionName: "TEMECULA WINE COUNTRY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92591,
    TaxRegionName: "TEMECULA WINE COUNTRY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92592,
    TaxRegionName: "TEMECULA WINE COUNTRY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92593,
    TaxRegionName: "TEMECULA WINE COUNTRY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92595,
    TaxRegionName: "WILDOMAR",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92596,
    TaxRegionName: "RIVERSIDE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92599,
    TaxRegionName: "PERRIS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92602,
    TaxRegionName: "IRVINE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92603,
    TaxRegionName: "IRVINE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92604,
    TaxRegionName: "IRVINE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92605,
    TaxRegionName: "HUNTINGTON BEACH TOURISM BID",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92606,
    TaxRegionName: "IRVINE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92607,
    TaxRegionName: "LAGUNA NIGUEL",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92609,
    TaxRegionName: "LAKE FOREST",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92610,
    TaxRegionName: "LAKE FOREST",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92612,
    TaxRegionName: "IRVINE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92614,
    TaxRegionName: "IRVINE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92615,
    TaxRegionName: "HUNTINGTON BEACH TOURISM BID",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92616,
    TaxRegionName: "IRVINE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92617,
    TaxRegionName: "IRVINE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92618,
    TaxRegionName: "IRVINE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92619,
    TaxRegionName: "IRVINE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92620,
    TaxRegionName: "IRVINE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92623,
    TaxRegionName: "IRVINE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92624,
    TaxRegionName: "DANA POINT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92625,
    TaxRegionName: "NEWPORT BEACH",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92626,
    TaxRegionName: "COSTA MESA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92627,
    TaxRegionName: "COSTA MESA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92628,
    TaxRegionName: "COSTA MESA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92629,
    TaxRegionName: "DANA POINT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92630,
    TaxRegionName: "LAKE FOREST",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92637,
    TaxRegionName: "LAGUNA WOODS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92646,
    TaxRegionName: "HUNTINGTON BEACH TOURISM BID",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92647,
    TaxRegionName: "HUNTINGTON BEACH TOURISM BID",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92648,
    TaxRegionName: "HUNTINGTON BEACH TOURISM BID",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92649,
    TaxRegionName: "HUNTINGTON BEACH TOURISM BID",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92650,
    TaxRegionName: "IRVINE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92651,
    TaxRegionName: "LAGUNA BEACH",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92652,
    TaxRegionName: "LAGUNA BEACH",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92653,
    TaxRegionName: "LAGUNA HILLS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92654,
    TaxRegionName: "LAGUNA HILLS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92655,
    TaxRegionName: "ORANGE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92656,
    TaxRegionName: "ALISO VIEJO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92657,
    TaxRegionName: "NEWPORT BEACH",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92658,
    TaxRegionName: "NEWPORT BEACH",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92659,
    TaxRegionName: "NEWPORT BEACH",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92660,
    TaxRegionName: "NEWPORT BEACH",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92661,
    TaxRegionName: "NEWPORT BEACH",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92662,
    TaxRegionName: "NEWPORT BEACH",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92663,
    TaxRegionName: "NEWPORT BEACH",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92672,
    TaxRegionName: "SAN CLEMENTE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92673,
    TaxRegionName: "SAN CLEMENTE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92674,
    TaxRegionName: "SAN CLEMENTE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92675,
    TaxRegionName: "SAN JUAN CAPISTRANO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92676,
    TaxRegionName: "ORANGE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92677,
    TaxRegionName: "LAGUNA NIGUEL",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92678,
    TaxRegionName: "ORANGE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92679,
    TaxRegionName: "ORANGE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92683,
    TaxRegionName: "WESTMINSTER",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92684,
    TaxRegionName: "WESTMINSTER",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92685,
    TaxRegionName: "WESTMINSTER",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92688,
    TaxRegionName: "ORANGE COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92690,
    TaxRegionName: "MISSION VIEJO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92691,
    TaxRegionName: "MISSION VIEJO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92692,
    TaxRegionName: "MISSION VIEJO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92693,
    TaxRegionName: "SAN JUAN CAPISTRANO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92694,
    TaxRegionName: "ORANGE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92697,
    TaxRegionName: "IRVINE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92698,
    TaxRegionName: "ALISO VIEJO",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92701,
    TaxRegionName: "SANTA ANA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 92702,
    TaxRegionName: "SANTA ANA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 92703,
    TaxRegionName: "SANTA ANA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 92704,
    TaxRegionName: "SANTA ANA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 92705,
    TaxRegionName: "SANTA ANA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 92706,
    TaxRegionName: "SANTA ANA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 92707,
    TaxRegionName: "SANTA ANA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 92708,
    TaxRegionName: "FOUNTAIN VALLEY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92711,
    TaxRegionName: "SANTA ANA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 92712,
    TaxRegionName: "SANTA ANA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 92728,
    TaxRegionName: "FOUNTAIN VALLEY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92735,
    TaxRegionName: "SANTA ANA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 92780,
    TaxRegionName: "TUSTIN",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92781,
    TaxRegionName: "TUSTIN",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92782,
    TaxRegionName: "TUSTIN",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92799,
    TaxRegionName: "SANTA ANA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 92801,
    TaxRegionName: "ANAHEIM",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92802,
    TaxRegionName: "ANAHEIM",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92803,
    TaxRegionName: "ANAHEIM",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92804,
    TaxRegionName: "ANAHEIM",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92805,
    TaxRegionName: "ANAHEIM",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92806,
    TaxRegionName: "ANAHEIM",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92807,
    TaxRegionName: "ANAHEIM",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92808,
    TaxRegionName: "ANAHEIM",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92809,
    TaxRegionName: "ANAHEIM",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92811,
    TaxRegionName: "FULLERTON",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92812,
    TaxRegionName: "ANAHEIM TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92814,
    TaxRegionName: "ANAHEIM",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92815,
    TaxRegionName: "ANAHEIM",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92816,
    TaxRegionName: "ANAHEIM",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92817,
    TaxRegionName: "ANAHEIM",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92821,
    TaxRegionName: "BREA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92822,
    TaxRegionName: "BREA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92823,
    TaxRegionName: "BREA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92825,
    TaxRegionName: "ANAHEIM",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92831,
    TaxRegionName: "FULLERTON",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92832,
    TaxRegionName: "FULLERTON",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92833,
    TaxRegionName: "FULLERTON",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92834,
    TaxRegionName: "FULLERTON",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92835,
    TaxRegionName: "FULLERTON",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92836,
    TaxRegionName: "FULLERTON",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92837,
    TaxRegionName: "FULLERTON",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92838,
    TaxRegionName: "FULLERTON",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92840,
    TaxRegionName: "GARDEN GROVE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92841,
    TaxRegionName: "GARDEN GROVE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92842,
    TaxRegionName: "GARDEN GROVE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92843,
    TaxRegionName: "GARDEN GROVE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92844,
    TaxRegionName: "GARDEN GROVE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92845,
    TaxRegionName: "GARDEN GROVE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92846,
    TaxRegionName: "GARDEN GROVE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92856,
    TaxRegionName: "ORANGE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92857,
    TaxRegionName: "ORANGE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92859,
    TaxRegionName: "ORANGE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92860,
    TaxRegionName: "NORCO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92861,
    TaxRegionName: "ORANGE COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92862,
    TaxRegionName: "ORANGE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92863,
    TaxRegionName: "ORANGE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92864,
    TaxRegionName: "ORANGE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92865,
    TaxRegionName: "ORANGE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92866,
    TaxRegionName: "ORANGE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92867,
    TaxRegionName: "ORANGE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92868,
    TaxRegionName: "ORANGE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92869,
    TaxRegionName: "ORANGE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92870,
    TaxRegionName: "PLACENTIA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92871,
    TaxRegionName: "PLACENTIA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92877,
    TaxRegionName: "CORONA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92878,
    TaxRegionName: "CORONA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92879,
    TaxRegionName: "CORONA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92880,
    TaxRegionName: "EASTVALE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92881,
    TaxRegionName: "CORONA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92882,
    TaxRegionName: "CORONA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 92883,
    TaxRegionName: "RIVERSIDE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92885,
    TaxRegionName: "YORBA LINDA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92886,
    TaxRegionName: "YORBA LINDA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92887,
    TaxRegionName: "YORBA LINDA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 92899,
    TaxRegionName: "ANAHEIM",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93001,
    TaxRegionName: "SAN BUENAVENTURA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93002,
    TaxRegionName: "SAN BUENAVENTURA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93003,
    TaxRegionName: "SAN BUENAVENTURA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93004,
    TaxRegionName: "SAN BUENAVENTURA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93005,
    TaxRegionName: "SAN BUENAVENTURA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93006,
    TaxRegionName: "SAN BUENAVENTURA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93007,
    TaxRegionName: "SAN BUENAVENTURA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93009,
    TaxRegionName: "SAN BUENAVENTURA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93010,
    TaxRegionName: "CAMARILLO",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93011,
    TaxRegionName: "CAMARILLO",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93012,
    TaxRegionName: "CAMARILLO",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93013,
    TaxRegionName: "CARPINTERIA",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 93014,
    TaxRegionName: "CARPINTERIA",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 93015,
    TaxRegionName: "FILLMORE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93016,
    TaxRegionName: "FILLMORE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93020,
    TaxRegionName: "MOORPARK",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93021,
    TaxRegionName: "MOORPARK",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93022,
    TaxRegionName: "OJAI TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93023,
    TaxRegionName: "OJAI TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93024,
    TaxRegionName: "OJAI",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93030,
    TaxRegionName: "OXNARD",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93031,
    TaxRegionName: "OXNARD",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93032,
    TaxRegionName: "OXNARD",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93033,
    TaxRegionName: "OXNARD",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93034,
    TaxRegionName: "OXNARD",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93035,
    TaxRegionName: "OXNARD",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93036,
    TaxRegionName: "OXNARD",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93040,
    TaxRegionName: "VENTURA CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93041,
    TaxRegionName: "PORT HUENEME",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93042,
    TaxRegionName: "VENTURA CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93043,
    TaxRegionName: "PORT HUENEME",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93044,
    TaxRegionName: "PORT HUENEME",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93060,
    TaxRegionName: "SANTA PAULA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93061,
    TaxRegionName: "SANTA PAULA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93062,
    TaxRegionName: "SIMI VALLEY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93063,
    TaxRegionName: "SIMI VALLEY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93064,
    TaxRegionName: "SIMI VALLEY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93065,
    TaxRegionName: "SIMI VALLEY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93066,
    TaxRegionName: "VENTURA CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93067,
    TaxRegionName:
      "SANTA BARBARA SOUTH COAST TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93094,
    TaxRegionName: "SIMI VALLEY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93099,
    TaxRegionName: "SIMI VALLEY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93101,
    TaxRegionName: "SANTA BARBARA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93102,
    TaxRegionName: "SANTA BARBARA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93103,
    TaxRegionName: "SANTA BARBARA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93105,
    TaxRegionName: "SANTA BARBARA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93106,
    TaxRegionName:
      "SANTA BARBARA SOUTH COAST TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93108,
    TaxRegionName:
      "SANTA BARBARA SOUTH COAST TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93109,
    TaxRegionName: "SANTA BARBARA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93110,
    TaxRegionName:
      "SANTA BARBARA SOUTH COAST TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93111,
    TaxRegionName:
      "SANTA BARBARA SOUTH COAST TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93116,
    TaxRegionName: "GOLETA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93117,
    TaxRegionName: "GOLETA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93118,
    TaxRegionName: "GOLETA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93120,
    TaxRegionName: "SANTA BARBARA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93121,
    TaxRegionName: "SANTA BARBARA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93130,
    TaxRegionName: "SANTA BARBARA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93140,
    TaxRegionName: "SANTA BARBARA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93150,
    TaxRegionName:
      "SANTA BARBARA SOUTH COAST TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93160,
    TaxRegionName: "GOLETA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93190,
    TaxRegionName: "SANTA BARBARA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93199,
    TaxRegionName: "GOLETA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93201,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93202,
    TaxRegionName: "KINGS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93203,
    TaxRegionName: "ARVIN",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93204,
    TaxRegionName: "AVENAL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93205,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93206,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93207,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93208,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93210,
    TaxRegionName: "COALINGA",
    EstimatedCombinedRate: 0.08975,
  },
  {
    ZipCode: 93212,
    TaxRegionName: "CORCORAN",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93215,
    TaxRegionName: "DELANO",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93218,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93219,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93220,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93221,
    TaxRegionName: "EXETER",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93222,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93223,
    TaxRegionName: "FARMERSVILLE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93224,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93225,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93226,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93227,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93230,
    TaxRegionName: "HANFORD",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93232,
    TaxRegionName: "HANFORD",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93234,
    TaxRegionName: "HURON",
    EstimatedCombinedRate: 0.08975,
  },
  {
    ZipCode: 93235,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93237,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93238,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93239,
    TaxRegionName: "KINGS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93240,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93241,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93242,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93243,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93244,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93245,
    TaxRegionName: "LEMOORE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93246,
    TaxRegionName: "LEMOORE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93247,
    TaxRegionName: "LINDSAY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93249,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93250,
    TaxRegionName: "MCFARLAND",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93251,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93252,
    TaxRegionName: "MARICOPA",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93254,
    TaxRegionName: "SANTA BARBARA COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93255,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93256,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93257,
    TaxRegionName: "PORTERVILLE",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93258,
    TaxRegionName: "PORTERVILLE",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93260,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93261,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93262,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93263,
    TaxRegionName: "KERN CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93265,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93266,
    TaxRegionName: "KINGS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93267,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93268,
    TaxRegionName: "TAFT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93270,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93271,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93272,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93274,
    TaxRegionName: "TULARE",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93275,
    TaxRegionName: "TULARE",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93276,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93277,
    TaxRegionName: "VISALIA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 93278,
    TaxRegionName: "VISALIA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 93279,
    TaxRegionName: "VISALIA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 93280,
    TaxRegionName: "WASCO",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93282,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93283,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93285,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93286,
    TaxRegionName: "TULARE COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93287,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93290,
    TaxRegionName: "VISALIA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 93291,
    TaxRegionName: "VISALIA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 93292,
    TaxRegionName: "VISALIA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 93301,
    TaxRegionName: "BAKERSFIELD",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93302,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93303,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93304,
    TaxRegionName: "BAKERSFIELD",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93305,
    TaxRegionName: "BAKERSFIELD",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93306,
    TaxRegionName: "BAKERSFIELD",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93307,
    TaxRegionName: "BAKERSFIELD",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93308,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93309,
    TaxRegionName: "BAKERSFIELD",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93311,
    TaxRegionName: "BAKERSFIELD",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93312,
    TaxRegionName: "BAKERSFIELD",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93313,
    TaxRegionName: "BAKERSFIELD",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93314,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93380,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93384,
    TaxRegionName: "BAKERSFIELD",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93385,
    TaxRegionName: "BAKERSFIELD",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93386,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93387,
    TaxRegionName: "BAKERSFIELD",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93388,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93389,
    TaxRegionName: "BAKERSFIELD",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93390,
    TaxRegionName: "BAKERSFIELD",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93401,
    TaxRegionName: "SAN LUIS OBISPO CITY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93402,
    TaxRegionName:
      "SAN LUIS OBISPO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93403,
    TaxRegionName: "SAN LUIS OBISPO CITY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93405,
    TaxRegionName: "SAN LUIS OBISPO CITY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93406,
    TaxRegionName: "SAN LUIS OBISPO CITY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93407,
    TaxRegionName:
      "SAN LUIS OBISPO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93408,
    TaxRegionName: "SAN LUIS OBISPO CITY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93409,
    TaxRegionName: "SAN LUIS OBISPO CITY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93410,
    TaxRegionName:
      "SAN LUIS OBISPO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93412,
    TaxRegionName:
      "SAN LUIS OBISPO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93420,
    TaxRegionName: "ARROYO GRANDE TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93421,
    TaxRegionName:
      "SAN LUIS OBISPO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93422,
    TaxRegionName: "ATASCADERO TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93423,
    TaxRegionName: "ATASCADERO TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93424,
    TaxRegionName:
      "SAN LUIS OBISPO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93426,
    TaxRegionName: "MONTEREY COUNTY TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93427,
    TaxRegionName: "BUELLTON",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93428,
    TaxRegionName:
      "SAN LUIS OBISPO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93429,
    TaxRegionName: "SANTA BARBARA COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93430,
    TaxRegionName:
      "SAN LUIS OBISPO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93432,
    TaxRegionName: "SAN LUIS OBISPO CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93433,
    TaxRegionName: "GROVER BEACH",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93434,
    TaxRegionName: "GUADALUPE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93435,
    TaxRegionName:
      "SAN LUIS OBISPO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93436,
    TaxRegionName: "LOMPOC TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93437,
    TaxRegionName: "SANTA BARBARA COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93438,
    TaxRegionName: "LOMPOC TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93440,
    TaxRegionName: "SANTA BARBARA COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93441,
    TaxRegionName: "SANTA BARBARA COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93442,
    TaxRegionName: "MORRO BAY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93443,
    TaxRegionName: "MORRO BAY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93444,
    TaxRegionName:
      "SAN LUIS OBISPO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93445,
    TaxRegionName:
      "SAN LUIS OBISPO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93446,
    TaxRegionName: "PASO ROBLES TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93447,
    TaxRegionName: "PASO ROBLES TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93448,
    TaxRegionName: "PISMO BEACH LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93449,
    TaxRegionName: "PISMO BEACH LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93450,
    TaxRegionName: "MONTEREY COUNTY TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93451,
    TaxRegionName: "SAN LUIS OBISPO CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93452,
    TaxRegionName:
      "SAN LUIS OBISPO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93453,
    TaxRegionName: "SAN LUIS OBISPO CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93454,
    TaxRegionName: "SANTA MARIA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93455,
    TaxRegionName: "SANTA BARBARA COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93456,
    TaxRegionName: "SANTA MARIA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93457,
    TaxRegionName: "SANTA BARBARA COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93458,
    TaxRegionName: "SANTA MARIA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93460,
    TaxRegionName: "SANTA BARBARA COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93461,
    TaxRegionName: "SAN LUIS OBISPO CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93463,
    TaxRegionName: "SOLVANG",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93464,
    TaxRegionName: "SOLVANG",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93465,
    TaxRegionName: "SAN LUIS OBISPO CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93475,
    TaxRegionName:
      "SAN LUIS OBISPO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93483,
    TaxRegionName: "GROVER BEACH",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93501,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93502,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93504,
    TaxRegionName: "CALIFORNIA CITY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93505,
    TaxRegionName: "CALIFORNIA CITY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93510,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 93512,
    TaxRegionName: "MONO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93513,
    TaxRegionName: "INYO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93514,
    TaxRegionName: "BISHOP TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93515,
    TaxRegionName: "BISHOP TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93516,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93517,
    TaxRegionName: "MONO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93518,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93522,
    TaxRegionName: "INYO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93523,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93524,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93526,
    TaxRegionName: "INYO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93527,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93528,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93529,
    TaxRegionName: "MONO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93530,
    TaxRegionName: "INYO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93531,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93532,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 93534,
    TaxRegionName: "LANCASTER TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 93535,
    TaxRegionName: "LANCASTER TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 93536,
    TaxRegionName: "LANCASTER TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 93539,
    TaxRegionName: "LANCASTER TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 93541,
    TaxRegionName: "MONO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93543,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 93544,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 93545,
    TaxRegionName: "INYO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93546,
    TaxRegionName: "MAMMOTH LAKES TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93549,
    TaxRegionName: "INYO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93550,
    TaxRegionName: "PALMDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 93551,
    TaxRegionName: "PALMDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 93552,
    TaxRegionName: "PALMDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 93553,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 93554,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93555,
    TaxRegionName: "RIDGECREST",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93556,
    TaxRegionName: "RIDGECREST",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93560,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93561,
    TaxRegionName: "KERN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93562,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93563,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 93581,
    TaxRegionName: "TEHACHAPI",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 93584,
    TaxRegionName: "LANCASTER TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 93586,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 93590,
    TaxRegionName: "PALMDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 93591,
    TaxRegionName: "LOS ANGELES COUNTY",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 93592,
    TaxRegionName: "SAN BERNARDINO COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93599,
    TaxRegionName: "PALMDALE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 93601,
    TaxRegionName: "MADERA COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93602,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93603,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93604,
    TaxRegionName: "MADERA COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93605,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93606,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93608,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93609,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93610,
    TaxRegionName: "CHOWCHILLA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93611,
    TaxRegionName: "CLOVIS",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93612,
    TaxRegionName: "CLOVIS",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93613,
    TaxRegionName: "CLOVIS",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93614,
    TaxRegionName: "MADERA COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93615,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93616,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93618,
    TaxRegionName: "DINUBA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 93619,
    TaxRegionName: "CLOVIS",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93620,
    TaxRegionName: "MERCED",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93621,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93622,
    TaxRegionName: "FIREBAUGH",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93623,
    TaxRegionName: "MARIPOSA COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93624,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93625,
    TaxRegionName: "FOWLER",
    EstimatedCombinedRate: 0.08975,
  },
  {
    ZipCode: 93626,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93627,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93628,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93630,
    TaxRegionName: "KERMAN",
    EstimatedCombinedRate: 0.08975,
  },
  {
    ZipCode: 93631,
    TaxRegionName: "KINGSBURG",
    EstimatedCombinedRate: 0.08975,
  },
  {
    ZipCode: 93633,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93634,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93635,
    TaxRegionName: "LOS BANOS",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93636,
    TaxRegionName: "MADERA COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93637,
    TaxRegionName: "MADERA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93638,
    TaxRegionName: "MADERA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93639,
    TaxRegionName: "MADERA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 93640,
    TaxRegionName: "MENDOTA",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93641,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93642,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93643,
    TaxRegionName: "MADERA COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93644,
    TaxRegionName: "MADERA COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93645,
    TaxRegionName: "MADERA COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93646,
    TaxRegionName: "ORANGE COVE",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93647,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93648,
    TaxRegionName: "PARLIER",
    EstimatedCombinedRate: 0.08975,
  },
  {
    ZipCode: 93649,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93650,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93651,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93652,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93653,
    TaxRegionName: "MADERA COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93654,
    TaxRegionName: "REEDLEY",
    EstimatedCombinedRate: 0.09225,
  },
  {
    ZipCode: 93656,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93657,
    TaxRegionName: "SANGER",
    EstimatedCombinedRate: 0.08725,
  },
  {
    ZipCode: 93660,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93661,
    TaxRegionName: "MERCED COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93662,
    TaxRegionName: "SELMA",
    EstimatedCombinedRate: 0.08475,
  },
  {
    ZipCode: 93664,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93665,
    TaxRegionName: "MERCED COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93666,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93667,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93668,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93669,
    TaxRegionName: "MADERA COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93670,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93673,
    TaxRegionName: "TULARE COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93675,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93701,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93702,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93703,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93704,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93705,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93706,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93707,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93708,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93709,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93710,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93711,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93712,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93714,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93715,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93716,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93717,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93718,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93720,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93721,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93722,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93723,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93724,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93725,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93726,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93727,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93728,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93729,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93730,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93737,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93740,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93741,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93744,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93745,
    TaxRegionName: "FRESNO COUNTY",
    EstimatedCombinedRate: 0.07975,
  },
  {
    ZipCode: 93747,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93750,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93755,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93760,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93761,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93764,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93765,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93771,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93772,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93773,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93774,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93775,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93776,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93777,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93778,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93779,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93786,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93790,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93791,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93792,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93793,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93794,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93844,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93888,
    TaxRegionName: "FRESNO",
    EstimatedCombinedRate: 0.0835,
  },
  {
    ZipCode: 93901,
    TaxRegionName: "SALINAS",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93902,
    TaxRegionName: "SALINAS",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93905,
    TaxRegionName: "SALINAS",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93906,
    TaxRegionName: "SALINAS",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93907,
    TaxRegionName: "MONTEREY COUNTY TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93908,
    TaxRegionName: "MONTEREY COUNTY TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93912,
    TaxRegionName: "SALINAS",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93915,
    TaxRegionName: "SALINAS",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93920,
    TaxRegionName: "MONTEREY COUNTY TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93921,
    TaxRegionName: "CARMEL BY THE SEA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93922,
    TaxRegionName: "MONTEREY COUNTY TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93923,
    TaxRegionName: "MONTEREY COUNTY TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93924,
    TaxRegionName: "MONTEREY COUNTY TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93925,
    TaxRegionName: "MONTEREY COUNTY TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93926,
    TaxRegionName: "GONZALES",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93927,
    TaxRegionName: "GREENFIELD",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 93928,
    TaxRegionName: "MONTEREY COUNTY TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93930,
    TaxRegionName: "KING CITY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93932,
    TaxRegionName: "MONTEREY COUNTY TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93933,
    TaxRegionName: "MARINA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93940,
    TaxRegionName: "MONTEREY CONFERENCE CENTER FACILITIES DISTRICT",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93942,
    TaxRegionName: "MONTEREY CONFERENCE CENTER FACILITIES DISTRICT",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93943,
    TaxRegionName: "MONTEREY CONFERENCE CENTER FACILITIES DISTRICT",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93944,
    TaxRegionName: "MONTEREY CONFERENCE CENTER FACILITIES DISTRICT",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93950,
    TaxRegionName: "PACIFIC GROVE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 93953,
    TaxRegionName: "MONTEREY COUNTY TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93954,
    TaxRegionName: "MONTEREY COUNTY TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 93955,
    TaxRegionName: "SEASIDE",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93960,
    TaxRegionName: "SOLEDAD",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 93962,
    TaxRegionName: "MONTEREY COUNTY TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 94002,
    TaxRegionName: "BELMONT",
    EstimatedCombinedRate: 0.09875,
  },
  {
    ZipCode: 94005,
    TaxRegionName: "BRISBANE",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 94010,
    TaxRegionName: "SAN MATEO COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.09625,
  },
  {
    ZipCode: 94011,
    TaxRegionName: "SAN MATEO COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.09625,
  },
  {
    ZipCode: 94014,
    TaxRegionName: "DALY CITY",
    EstimatedCombinedRate: 0.09875,
  },
  {
    ZipCode: 94015,
    TaxRegionName: "DALY CITY",
    EstimatedCombinedRate: 0.09875,
  },
  {
    ZipCode: 94017,
    TaxRegionName: "DALY CITY",
    EstimatedCombinedRate: 0.09875,
  },
  {
    ZipCode: 94018,
    TaxRegionName: "SAN MATEO COUNTY",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 94019,
    TaxRegionName: "HALF MOON BAY",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 94020,
    TaxRegionName: "SAN MATEO COUNTY",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 94021,
    TaxRegionName: "SAN MATEO COUNTY",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 94022,
    TaxRegionName: "LOS ALTOS",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94023,
    TaxRegionName: "LOS ALTOS",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94024,
    TaxRegionName: "LOS ALTOS",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94025,
    TaxRegionName: "MENLO PARK",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 94026,
    TaxRegionName: "MENLO PARK",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 94027,
    TaxRegionName: "SAN MATEO",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 94028,
    TaxRegionName: "SAN MATEO",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 94030,
    TaxRegionName: "MILLBRAE",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 94035,
    TaxRegionName: "SANTA CLARA COUNTY",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94037,
    TaxRegionName: "SAN MATEO COUNTY",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 94038,
    TaxRegionName: "SAN MATEO COUNTY",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 94039,
    TaxRegionName: "MOUNTAIN VIEW",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94040,
    TaxRegionName: "MOUNTAIN VIEW",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94041,
    TaxRegionName: "MOUNTAIN VIEW",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94042,
    TaxRegionName: "MOUNTAIN VIEW",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94043,
    TaxRegionName: "MOUNTAIN VIEW",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94044,
    TaxRegionName: "PACIFICA",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 94060,
    TaxRegionName: "SAN MATEO COUNTY",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 94061,
    TaxRegionName: "REDWOOD CITY",
    EstimatedCombinedRate: 0.09875,
  },
  {
    ZipCode: 94062,
    TaxRegionName: "REDWOOD CITY",
    EstimatedCombinedRate: 0.09875,
  },
  {
    ZipCode: 94063,
    TaxRegionName: "REDWOOD CITY",
    EstimatedCombinedRate: 0.09875,
  },
  {
    ZipCode: 94064,
    TaxRegionName: "REDWOOD CITY",
    EstimatedCombinedRate: 0.09875,
  },
  {
    ZipCode: 94065,
    TaxRegionName: "REDWOOD CITY",
    EstimatedCombinedRate: 0.09875,
  },
  {
    ZipCode: 94066,
    TaxRegionName: "SAN BRUNO",
    EstimatedCombinedRate: 0.09875,
  },
  {
    ZipCode: 94070,
    TaxRegionName: "SAN CARLOS",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 94074,
    TaxRegionName: "SAN MATEO COUNTY",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 94080,
    TaxRegionName: "SOUTH SAN FRANCISCO",
    EstimatedCombinedRate: 0.09875,
  },
  {
    ZipCode: 94083,
    TaxRegionName: "SOUTH SAN FRANCISCO",
    EstimatedCombinedRate: 0.09875,
  },
  {
    ZipCode: 94085,
    TaxRegionName: "SUNNYVALE",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94086,
    TaxRegionName: "SUNNYVALE",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94087,
    TaxRegionName: "SUNNYVALE",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94088,
    TaxRegionName: "SUNNYVALE",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94089,
    TaxRegionName: "SUNNYVALE",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94102,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94103,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94104,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94105,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94107,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94108,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94109,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94110,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94111,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94112,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94114,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94115,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94116,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94117,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94118,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94119,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94121,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94122,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94123,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94124,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94125,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94126,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94127,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94128,
    TaxRegionName: "SAN MATEO CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 94129,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94130,
    TaxRegionName: "MOSCONE EXPANSION DISTRICT ZONE 1",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94131,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94132,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94133,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94134,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94140,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94141,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94143,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94146,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94147,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94158,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94159,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94164,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94188,
    TaxRegionName: "SAN FRANCISCO TOURISM IMPROVEMENT DISTRICT (ZONE 2)",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 94207,
    TaxRegionName: "SACRAMENTO TMD ZONE 1",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94208,
    TaxRegionName: "SACRAMENTO TMD ZONE 1",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94211,
    TaxRegionName: "SACRAMENTO TMD ZONE 1",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94234,
    TaxRegionName: "SACRAMENTO TMD ZONE 1",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94245,
    TaxRegionName: "SACRAMENTO TMD ZONE 1",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94282,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 94291,
    TaxRegionName: "SACRAMENTO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94299,
    TaxRegionName: "SACRAMENTO TMD ZONE 1",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94301,
    TaxRegionName: "PALO ALTO",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94302,
    TaxRegionName: "PALO ALTO",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94303,
    TaxRegionName: "PALO ALTO",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94304,
    TaxRegionName: "PALO ALTO",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94305,
    TaxRegionName: "SANTA CLARA COUNTY",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94306,
    TaxRegionName: "PALO ALTO",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94309,
    TaxRegionName: "PALO ALTO",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 94401,
    TaxRegionName: "SAN MATEO",
    EstimatedCombinedRate: 0.09625,
  },
  {
    ZipCode: 94402,
    TaxRegionName: "SAN MATEO",
    EstimatedCombinedRate: 0.09625,
  },
  {
    ZipCode: 94403,
    TaxRegionName: "SAN MATEO",
    EstimatedCombinedRate: 0.09625,
  },
  {
    ZipCode: 94404,
    TaxRegionName: "FOSTER CITY",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 94497,
    TaxRegionName: "SAN MATEO",
    EstimatedCombinedRate: 0.09625,
  },
  {
    ZipCode: 94501,
    TaxRegionName: "ALAMEDA",
    EstimatedCombinedRate: 0.1075,
  },
  {
    ZipCode: 94502,
    TaxRegionName: "ALAMEDA",
    EstimatedCombinedRate: 0.1075,
  },
  {
    ZipCode: 94503,
    TaxRegionName: "AMERICAN CANYON",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 94505,
    TaxRegionName: "CONTRA COSTA COUNTY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94506,
    TaxRegionName: "TRI VALLEY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94507,
    TaxRegionName: "TRI VALLEY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94508,
    TaxRegionName: "NAPA CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 94509,
    TaxRegionName: "ANTIOCH",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94510,
    TaxRegionName: "BENICIA",
    EstimatedCombinedRate: 0.08375,
  },
  {
    ZipCode: 94511,
    TaxRegionName: "CONTRA COSTA COUNTY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94512,
    TaxRegionName: "SOLANO COUNTY",
    EstimatedCombinedRate: 0.07375,
  },
  {
    ZipCode: 94513,
    TaxRegionName: "BRENTWOOD",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94514,
    TaxRegionName: "CONTRA COSTA COUNTY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94515,
    TaxRegionName: "CALISTOGA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 94516,
    TaxRegionName: "CONTRA COSTA COUNTY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94517,
    TaxRegionName: "CLAYTON",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94518,
    TaxRegionName: "CONCORD",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94519,
    TaxRegionName: "CONCORD",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94520,
    TaxRegionName: "CONCORD",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94521,
    TaxRegionName: "CONCORD",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94522,
    TaxRegionName: "CONCORD",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94523,
    TaxRegionName: "PLEASANT HILL",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 94524,
    TaxRegionName: "CONCORD",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94525,
    TaxRegionName: "CONTRA COSTA COUNTY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94526,
    TaxRegionName: "DANVILLE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94528,
    TaxRegionName: "CONTRA COSTA COUNTY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94530,
    TaxRegionName: "EL CERRITO",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94531,
    TaxRegionName: "ANTIOCH",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94533,
    TaxRegionName: "FAIRFIELD",
    EstimatedCombinedRate: 0.08375,
  },
  {
    ZipCode: 94534,
    TaxRegionName: "FAIRFIELD",
    EstimatedCombinedRate: 0.08375,
  },
  {
    ZipCode: 94535,
    TaxRegionName: "FAIRFIELD",
    EstimatedCombinedRate: 0.08375,
  },
  {
    ZipCode: 94536,
    TaxRegionName: "FREMONT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94537,
    TaxRegionName: "FREMONT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94538,
    TaxRegionName: "FREMONT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94539,
    TaxRegionName: "FREMONT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94540,
    TaxRegionName: "HAYWARD",
    EstimatedCombinedRate: 0.1075,
  },
  {
    ZipCode: 94541,
    TaxRegionName: "HAYWARD",
    EstimatedCombinedRate: 0.1075,
  },
  {
    ZipCode: 94542,
    TaxRegionName: "HAYWARD",
    EstimatedCombinedRate: 0.1075,
  },
  {
    ZipCode: 94543,
    TaxRegionName: "HAYWARD",
    EstimatedCombinedRate: 0.1075,
  },
  {
    ZipCode: 94544,
    TaxRegionName: "HAYWARD",
    EstimatedCombinedRate: 0.1075,
  },
  {
    ZipCode: 94545,
    TaxRegionName: "HAYWARD",
    EstimatedCombinedRate: 0.1075,
  },
  {
    ZipCode: 94546,
    TaxRegionName: "ALAMEDA COUNTY",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94547,
    TaxRegionName: "HERCULES",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 94548,
    TaxRegionName: "CONTRA COSTA COUNTY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94549,
    TaxRegionName: "LAFAYETTE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94550,
    TaxRegionName: "LIVERMORE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94551,
    TaxRegionName: "LIVERMORE",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94552,
    TaxRegionName: "ALAMEDA COUNTY",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94553,
    TaxRegionName: "MARTINEZ",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94555,
    TaxRegionName: "FREMONT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94556,
    TaxRegionName: "MORAGA",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94557,
    TaxRegionName: "HAYWARD",
    EstimatedCombinedRate: 0.1075,
  },
  {
    ZipCode: 94558,
    TaxRegionName: "NAPA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 94559,
    TaxRegionName: "NAPA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 94560,
    TaxRegionName: "NEWARK",
    EstimatedCombinedRate: 0.1075,
  },
  {
    ZipCode: 94561,
    TaxRegionName: "OAKLEY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94562,
    TaxRegionName: "NAPA CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 94563,
    TaxRegionName: "ORINDA",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94564,
    TaxRegionName: "PINOLE",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94565,
    TaxRegionName: "PITTSBURG",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 94566,
    TaxRegionName: "PLEASANTON",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94567,
    TaxRegionName: "NAPA CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 94568,
    TaxRegionName: "DUBLIN",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94569,
    TaxRegionName: "CONTRA COSTA COUNTY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94570,
    TaxRegionName: "MORAGA",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94571,
    TaxRegionName: "RIO VISTA",
    EstimatedCombinedRate: 0.08125,
  },
  {
    ZipCode: 94572,
    TaxRegionName: "CONTRA COSTA COUNTY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94573,
    TaxRegionName: "NAPA CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 94574,
    TaxRegionName: "SAINT HELENA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94575,
    TaxRegionName: "MORAGA",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94576,
    TaxRegionName: "NAPA CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 94577,
    TaxRegionName: "SAN LEANDRO",
    EstimatedCombinedRate: 0.1075,
  },
  {
    ZipCode: 94578,
    TaxRegionName: "SAN LEANDRO",
    EstimatedCombinedRate: 0.1075,
  },
  {
    ZipCode: 94579,
    TaxRegionName: "SAN LEANDRO",
    EstimatedCombinedRate: 0.1075,
  },
  {
    ZipCode: 94580,
    TaxRegionName: "ALAMEDA COUNTY",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94581,
    TaxRegionName: "NAPA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 94582,
    TaxRegionName: "SAN RAMON",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94583,
    TaxRegionName: "SAN RAMON",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94585,
    TaxRegionName: "SUISUN CITY",
    EstimatedCombinedRate: 0.08375,
  },
  {
    ZipCode: 94586,
    TaxRegionName: "TRI VALLEY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94587,
    TaxRegionName: "UNION CITY",
    EstimatedCombinedRate: 0.1075,
  },
  {
    ZipCode: 94588,
    TaxRegionName: "PLEASANTON",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94589,
    TaxRegionName: "VALLEJO HOTEL BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08375,
  },
  {
    ZipCode: 94590,
    TaxRegionName: "VALLEJO HOTEL BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08375,
  },
  {
    ZipCode: 94591,
    TaxRegionName: "VALLEJO HOTEL BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08375,
  },
  {
    ZipCode: 94592,
    TaxRegionName: "VALLEJO HOTEL BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.08375,
  },
  {
    ZipCode: 94595,
    TaxRegionName: "WALNUT CREEK",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94596,
    TaxRegionName: "WALNUT CREEK",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94597,
    TaxRegionName: "WALNUT CREEK",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94598,
    TaxRegionName: "WALNUT CREEK",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94599,
    TaxRegionName: "YOUNTVILLE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 94601,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94602,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94603,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94604,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94605,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94606,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94607,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94608,
    TaxRegionName: "EMERYVILLE",
    EstimatedCombinedRate: 0.105,
  },
  {
    ZipCode: 94609,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94610,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94611,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94612,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94613,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94614,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94615,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94618,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94619,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94620,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94621,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94622,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94623,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94624,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94661,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94662,
    TaxRegionName: "EMERYVILLE",
    EstimatedCombinedRate: 0.105,
  },
  {
    ZipCode: 94666,
    TaxRegionName: "OAKLAND",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94701,
    TaxRegionName: "BERKELEY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94702,
    TaxRegionName: "BERKELEY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94703,
    TaxRegionName: "BERKELEY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94704,
    TaxRegionName: "BERKELEY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94705,
    TaxRegionName: "BERKELEY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94706,
    TaxRegionName: "ALBANY",
    EstimatedCombinedRate: 0.1075,
  },
  {
    ZipCode: 94707,
    TaxRegionName: "BERKELEY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94708,
    TaxRegionName: "BERKELEY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94709,
    TaxRegionName: "BERKELEY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94710,
    TaxRegionName: "BERKELEY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94712,
    TaxRegionName: "BERKELEY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94720,
    TaxRegionName: "BERKELEY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.1025,
  },
  {
    ZipCode: 94801,
    TaxRegionName: "RICHMOND",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94802,
    TaxRegionName: "RICHMOND",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94803,
    TaxRegionName: "CONTRA COSTA COUNTY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94804,
    TaxRegionName: "RICHMOND",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94805,
    TaxRegionName: "RICHMOND",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94806,
    TaxRegionName: "SAN PABLO",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 94807,
    TaxRegionName: "RICHMOND",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94820,
    TaxRegionName: "CONTRA COSTA COUNTY",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94850,
    TaxRegionName: "RICHMOND",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 94901,
    TaxRegionName: "SAN RAFAEL",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 94903,
    TaxRegionName: "SAN RAFAEL",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 94904,
    TaxRegionName: "LARKSPUR",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 94912,
    TaxRegionName: "SAN RAFAEL",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 94913,
    TaxRegionName: "MARIN COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94914,
    TaxRegionName: "MARIN COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94915,
    TaxRegionName: "SAN RAFAEL",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 94920,
    TaxRegionName: "TIBURON",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94922,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 94923,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 94924,
    TaxRegionName: "MARIN COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94925,
    TaxRegionName: "CORTE MADERA",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 94926,
    TaxRegionName: "COTATI",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 94927,
    TaxRegionName: "ROHNERT PARK",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 94928,
    TaxRegionName: "ROHNERT PARK",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 94929,
    TaxRegionName: "MARIN COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94930,
    TaxRegionName: "FAIRFAX",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 94931,
    TaxRegionName: "COTATI",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 94933,
    TaxRegionName: "MARIN COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94937,
    TaxRegionName: "MARIN COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94938,
    TaxRegionName: "MARIN COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94939,
    TaxRegionName: "LARKSPUR",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 94940,
    TaxRegionName: "MARIN COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94941,
    TaxRegionName: "MILL VALLEY",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94942,
    TaxRegionName: "MILL VALLEY",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94945,
    TaxRegionName: "NOVATO",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 94946,
    TaxRegionName: "MARIN COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94947,
    TaxRegionName: "NOVATO",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 94948,
    TaxRegionName: "NOVATO",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 94949,
    TaxRegionName: "NOVATO",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 94950,
    TaxRegionName: "MARIN COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94951,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 94952,
    TaxRegionName: "PETALUMA",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 94953,
    TaxRegionName: "PETALUMA",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 94954,
    TaxRegionName: "PETALUMA",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 94955,
    TaxRegionName: "PETALUMA",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 94956,
    TaxRegionName: "MARIN COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94957,
    TaxRegionName: "MARIN COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94960,
    TaxRegionName: "SAN ANSELMO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94963,
    TaxRegionName: "MARIN COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94964,
    TaxRegionName: "MARIN COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94965,
    TaxRegionName: "SAUSALITO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94966,
    TaxRegionName: "SAUSALITO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94970,
    TaxRegionName: "MARIN COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94971,
    TaxRegionName: "MARIN COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94972,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 94973,
    TaxRegionName: "MARIN COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94974,
    TaxRegionName: "MARIN COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 94975,
    TaxRegionName: "PETALUMA",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 94976,
    TaxRegionName: "CORTE MADERA",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 94977,
    TaxRegionName: "LARKSPUR",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 94978,
    TaxRegionName: "FAIRFAX",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 94979,
    TaxRegionName: "SAN ANSELMO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 94998,
    TaxRegionName: "NOVATO",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 94999,
    TaxRegionName: "PETALUMA",
    EstimatedCombinedRate: 0.095,
  },
  {
    ZipCode: 95001,
    TaxRegionName: "SANTA CRUZ COUNTY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95002,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95003,
    TaxRegionName: "SANTA CRUZ COUNTY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95004,
    TaxRegionName: "MONTEREY COUNTY TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95005,
    TaxRegionName: "SANTA CRUZ COUNTY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95006,
    TaxRegionName: "SANTA CRUZ COUNTY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95007,
    TaxRegionName: "SANTA CRUZ COUNTY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95008,
    TaxRegionName: "CAMPBELL",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95009,
    TaxRegionName: "CAMPBELL",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95010,
    TaxRegionName: "CAPITOLA",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95011,
    TaxRegionName: "CAMPBELL",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95012,
    TaxRegionName: "MONTEREY COUNTY TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95013,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95014,
    TaxRegionName: "CUPERTINO",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 95015,
    TaxRegionName: "CUPERTINO",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 95017,
    TaxRegionName: "SANTA CRUZ COUNTY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95018,
    TaxRegionName: "SANTA CRUZ COUNTY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95019,
    TaxRegionName: "WATSONVILLE",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95020,
    TaxRegionName: "GILROY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 95021,
    TaxRegionName: "GILROY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 95023,
    TaxRegionName: "HOLLISTER",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95024,
    TaxRegionName: "HOLLISTER",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95026,
    TaxRegionName: "SANTA CLARA COUNTY",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 95030,
    TaxRegionName: "LOS GATOS",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95031,
    TaxRegionName: "LOS GATOS",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95032,
    TaxRegionName: "LOS GATOS",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95033,
    TaxRegionName: "SANTA CRUZ COUNTY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95035,
    TaxRegionName: "MILPITAS",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95036,
    TaxRegionName: "MILPITAS",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95037,
    TaxRegionName: "MORGAN HILL TBID",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 95038,
    TaxRegionName: "MORGAN HILL TBID",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 95039,
    TaxRegionName: "MONTEREY COUNTY TOURISM IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95041,
    TaxRegionName: "SANTA CRUZ COUNTY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95043,
    TaxRegionName: "SAN BENITO COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95044,
    TaxRegionName: "SANTA CLARA COUNTY",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 95045,
    TaxRegionName: "SAN BENITO COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95046,
    TaxRegionName: "SANTA CLARA COUNTY",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 95050,
    TaxRegionName: "SANTA CLARA",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 95051,
    TaxRegionName: "SANTA CLARA",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 95052,
    TaxRegionName: "SANTA CLARA",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 95053,
    TaxRegionName: "SANTA CLARA",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 95054,
    TaxRegionName: "SANTA CLARA COMMUNITY FACILITIES DISTRICT STJ",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 95055,
    TaxRegionName: "SANTA CLARA",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 95056,
    TaxRegionName: "SANTA CLARA COMMUNITY FACILITIES DISTRICT STJ",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 95060,
    TaxRegionName: "SANTA CRUZ",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95061,
    TaxRegionName: "SANTA CRUZ",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95062,
    TaxRegionName: "SANTA CRUZ COUNTY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95063,
    TaxRegionName: "SANTA CRUZ",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95064,
    TaxRegionName: "SANTA CRUZ",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95065,
    TaxRegionName: "SANTA CRUZ COUNTY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95066,
    TaxRegionName: "SCOTTS VALLEY",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 95067,
    TaxRegionName: "SCOTTS VALLEY",
    EstimatedCombinedRate: 0.0975,
  },
  {
    ZipCode: 95070,
    TaxRegionName: "SARATOGA",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 95071,
    TaxRegionName: "SARATOGA",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 95073,
    TaxRegionName: "SANTA CRUZ COUNTY TOURISM MARKETING DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95075,
    TaxRegionName: "SAN BENITO COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95076,
    TaxRegionName: "WATSONVILLE",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95077,
    TaxRegionName: "WATSONVILLE",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95101,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95103,
    TaxRegionName: "SAN JOSE HOTEL BUSINESS IMPROVEMENT DISTRICT  (ZONE A)",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95106,
    TaxRegionName: "SAN JOSE HOTEL BUSINESS IMPROVEMENT DISTRICT  (ZONE A)",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95108,
    TaxRegionName: "SAN JOSE HOTEL BUSINESS IMPROVEMENT DISTRICT  (ZONE A)",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95109,
    TaxRegionName: "SAN JOSE HOTEL BUSINESS IMPROVEMENT DISTRICT  (ZONE A)",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95110,
    TaxRegionName: "SAN JOSE HOTEL BUSINESS IMPROVEMENT DISTRICT  (ZONE A)",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95111,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95112,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 1",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95113,
    TaxRegionName: "SAN JOSE HOTEL BUSINESS IMPROVEMENT DISTRICT  (ZONE A)",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95116,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95117,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95118,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95119,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95120,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95121,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95122,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95123,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95124,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95125,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95126,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 1",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95127,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95128,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95129,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95130,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95131,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95132,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95133,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95134,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95135,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95136,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95138,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95139,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95140,
    TaxRegionName: "SANTA CLARA COUNTY",
    EstimatedCombinedRate: 0.09125,
  },
  {
    ZipCode: 95141,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95148,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95150,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95151,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95152,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95153,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95154,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95155,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 1",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95156,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95157,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95158,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95159,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 1",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95160,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95161,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95164,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95170,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95172,
    TaxRegionName: "SAN JOSE HOTEL BUSINESS IMPROVEMENT DISTRICT  (ZONE A)",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95173,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 2",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95191,
    TaxRegionName: "SAN JOSE CONVENTION CENTER FACILITY DISTRICT ZONE 1",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95192,
    TaxRegionName: "SAN JOSE HOTEL BUSINESS IMPROVEMENT DISTRICT  (ZONE A)",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95193,
    TaxRegionName: "SAN JOSE HOTEL BUSINESS IMPROVEMENT DISTRICT  (ZONE A)",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95196,
    TaxRegionName: "SAN JOSE HOTEL BUSINESS IMPROVEMENT DISTRICT  (ZONE A)",
    EstimatedCombinedRate: 0.09375,
  },
  {
    ZipCode: 95201,
    TaxRegionName: "STOCKTON TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95202,
    TaxRegionName: "STOCKTON TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95203,
    TaxRegionName: "STOCKTON TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95204,
    TaxRegionName: "STOCKTON TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95205,
    TaxRegionName: "STOCKTON TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95206,
    TaxRegionName: "STOCKTON TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95207,
    TaxRegionName: "STOCKTON TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95208,
    TaxRegionName: "STOCKTON TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95209,
    TaxRegionName: "STOCKTON TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95210,
    TaxRegionName: "STOCKTON TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95211,
    TaxRegionName: "STOCKTON TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95212,
    TaxRegionName: "SAN JOAQUIN COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95213,
    TaxRegionName: "STOCKTON TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95215,
    TaxRegionName: "SAN JOAQUIN COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95219,
    TaxRegionName: "STOCKTON TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95220,
    TaxRegionName: "SAN JOAQUIN COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95221,
    TaxRegionName: "ANGELS CAMP",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95222,
    TaxRegionName: "ANGELS CAMP",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95223,
    TaxRegionName: "CALAVERAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95224,
    TaxRegionName: "CALAVERAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95225,
    TaxRegionName: "CALAVERAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95226,
    TaxRegionName: "CALAVERAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95227,
    TaxRegionName: "SAN JOAQUIN COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95228,
    TaxRegionName: "CALAVERAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95229,
    TaxRegionName: "CALAVERAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95230,
    TaxRegionName: "SAN JOAQUIN COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95231,
    TaxRegionName: "SAN JOAQUIN COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95232,
    TaxRegionName: "CALAVERAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95233,
    TaxRegionName: "CALAVERAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95234,
    TaxRegionName: "SAN JOAQUIN COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95236,
    TaxRegionName: "SAN JOAQUIN COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95237,
    TaxRegionName: "SAN JOAQUIN COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95240,
    TaxRegionName: "LODI",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95241,
    TaxRegionName: "LODI",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95242,
    TaxRegionName: "LODI",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95245,
    TaxRegionName: "CALAVERAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95246,
    TaxRegionName: "CALAVERAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95247,
    TaxRegionName: "CALAVERAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95248,
    TaxRegionName: "CALAVERAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95249,
    TaxRegionName: "CALAVERAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95251,
    TaxRegionName: "CALAVERAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95252,
    TaxRegionName: "CALAVERAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95253,
    TaxRegionName: "SAN JOAQUIN COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95254,
    TaxRegionName: "CALAVERAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95255,
    TaxRegionName: "CALAVERAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95257,
    TaxRegionName: "CALAVERAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95258,
    TaxRegionName: "SAN JOAQUIN COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95267,
    TaxRegionName: "STOCKTON TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95269,
    TaxRegionName: "STOCKTON TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95297,
    TaxRegionName: "STOCKTON TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95301,
    TaxRegionName: "ATWATER",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95303,
    TaxRegionName: "MERCED COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95304,
    TaxRegionName: "SAN JOAQUIN COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95305,
    TaxRegionName: "TUOLUMNE COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95306,
    TaxRegionName: "MARIPOSA COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95307,
    TaxRegionName: "CERES",
    EstimatedCombinedRate: 0.08375,
  },
  {
    ZipCode: 95309,
    TaxRegionName: "TUOLUMNE COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95310,
    TaxRegionName: "TUOLUMNE COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95311,
    TaxRegionName: "MARIPOSA COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95312,
    TaxRegionName: "MERCED COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95313,
    TaxRegionName: "STANISLAUS COUNTY",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95315,
    TaxRegionName: "MERCED COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95316,
    TaxRegionName: "STANISLAUS COUNTY",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95317,
    TaxRegionName: "MERCED COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95318,
    TaxRegionName: "MARIPOSA COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95319,
    TaxRegionName: "STANISLAUS COUNTY",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95320,
    TaxRegionName: "ESCALON",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95321,
    TaxRegionName: "TUOLUMNE COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95322,
    TaxRegionName: "GUSTINE",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95323,
    TaxRegionName: "STANISLAUS COUNTY",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95324,
    TaxRegionName: "MERCED COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95325,
    TaxRegionName: "MARIPOSA COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95326,
    TaxRegionName: "HUGHSON",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95327,
    TaxRegionName: "TUOLUMNE COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95328,
    TaxRegionName: "STANISLAUS COUNTY",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95329,
    TaxRegionName: "TUOLUMNE COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95330,
    TaxRegionName: "LATHROP",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95333,
    TaxRegionName: "MERCED COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95334,
    TaxRegionName: "LIVINGSTON",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95335,
    TaxRegionName: "TUOLUMNE COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95336,
    TaxRegionName: "MANTECA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95337,
    TaxRegionName: "MANTECA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95338,
    TaxRegionName: "MARIPOSA COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95340,
    TaxRegionName: "MERCED",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95341,
    TaxRegionName: "MERCED",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95343,
    TaxRegionName: "MERCED COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95344,
    TaxRegionName: "MERCED",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95345,
    TaxRegionName: "MARIPOSA COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95346,
    TaxRegionName: "TUOLUMNE COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95347,
    TaxRegionName: "TUOLUMNE COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95348,
    TaxRegionName: "MERCED",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95350,
    TaxRegionName: "MODESTO",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95351,
    TaxRegionName: "MODESTO",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95352,
    TaxRegionName: "MODESTO",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95353,
    TaxRegionName: "MODESTO",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95354,
    TaxRegionName: "MODESTO",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95355,
    TaxRegionName: "MODESTO",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95356,
    TaxRegionName: "MODESTO",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95357,
    TaxRegionName: "STANISLAUS COUNTY",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95358,
    TaxRegionName: "STANISLAUS COUNTY",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95360,
    TaxRegionName: "NEWMAN",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95361,
    TaxRegionName: "OAKDALE",
    EstimatedCombinedRate: 0.08375,
  },
  {
    ZipCode: 95363,
    TaxRegionName: "PATTERSON",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95364,
    TaxRegionName: "TUOLUMNE COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95365,
    TaxRegionName: "MERCED COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95366,
    TaxRegionName: "RIPON",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95367,
    TaxRegionName: "RIVERBANK",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95368,
    TaxRegionName: "STANISLAUS COUNTY",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95369,
    TaxRegionName: "MERCED COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95370,
    TaxRegionName: "TUOLUMNE COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95372,
    TaxRegionName: "TUOLUMNE COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95373,
    TaxRegionName: "TUOLUMNE COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95374,
    TaxRegionName: "MERCED COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95375,
    TaxRegionName: "TUOLUMNE COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95376,
    TaxRegionName: "TRACY",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95377,
    TaxRegionName: "TRACY",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95378,
    TaxRegionName: "TRACY",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95379,
    TaxRegionName: "TUOLUMNE COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95380,
    TaxRegionName: "TURLOCK",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 95381,
    TaxRegionName: "TURLOCK",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 95382,
    TaxRegionName: "TURLOCK",
    EstimatedCombinedRate: 0.08625,
  },
  {
    ZipCode: 95383,
    TaxRegionName: "TUOLUMNE COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95385,
    TaxRegionName: "STANISLAUS COUNTY",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95386,
    TaxRegionName: "WATERFORD",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95387,
    TaxRegionName: "STANISLAUS COUNTY",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95388,
    TaxRegionName: "MERCED COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95389,
    TaxRegionName: "MARIPOSA COUNTY DISTRICT TAX SP",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95391,
    TaxRegionName: "SAN JOAQUIN COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95397,
    TaxRegionName: "MODESTO",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95401,
    TaxRegionName: "SANTA ROSA TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95402,
    TaxRegionName: "SANTA ROSA TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95403,
    TaxRegionName: "SANTA ROSA TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95404,
    TaxRegionName: "SANTA ROSA TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95405,
    TaxRegionName: "SANTA ROSA TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95406,
    TaxRegionName: "SANTA ROSA TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95407,
    TaxRegionName: "SANTA ROSA TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95409,
    TaxRegionName: "SANTA ROSA TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95410,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95412,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95415,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95416,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95417,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95418,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95419,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95420,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95421,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95422,
    TaxRegionName: "CLEARLAKE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95423,
    TaxRegionName: "LAKE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95424,
    TaxRegionName: "CLEARLAKE",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95425,
    TaxRegionName: "CLOVERDALE",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95426,
    TaxRegionName: "LAKE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95427,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95428,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95429,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95430,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95431,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95432,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95433,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95435,
    TaxRegionName: "LAKE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95436,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95437,
    TaxRegionName: "FORT BRAGG",
    EstimatedCombinedRate: 0.08875,
  },
  {
    ZipCode: 95439,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95441,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95442,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95443,
    TaxRegionName: "LAKE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95444,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95445,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95446,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95448,
    TaxRegionName: "HEALDSBURG",
    EstimatedCombinedRate: 0.09,
  },
  {
    ZipCode: 95449,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95450,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95451,
    TaxRegionName: "LAKE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95452,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95453,
    TaxRegionName: "LAKEPORT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95454,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95456,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95457,
    TaxRegionName: "LAKE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95458,
    TaxRegionName: "LAKE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95459,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95460,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95461,
    TaxRegionName: "LAKE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95462,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95463,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95464,
    TaxRegionName: "LAKE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95465,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95466,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95467,
    TaxRegionName: "LAKE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95468,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95469,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95470,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95471,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95472,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95473,
    TaxRegionName: "SEBASTOPOL",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95476,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95480,
    TaxRegionName: "THE SEA RANCH",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95481,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95482,
    TaxRegionName: "UKIAH",
    EstimatedCombinedRate: 0.08875,
  },
  {
    ZipCode: 95485,
    TaxRegionName: "LAKE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95486,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95487,
    TaxRegionName: "SONOMA COUNTY TOURISM BUSINESS IMPROVEMENT AREA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95488,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95490,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95492,
    TaxRegionName: "WINDSOR",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95493,
    TaxRegionName: "LAKE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95494,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95497,
    TaxRegionName: "THE SEA RANCH",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95501,
    TaxRegionName: "EUREKA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95502,
    TaxRegionName: "EUREKA",
    EstimatedCombinedRate: 0.0925,
  },
  {
    ZipCode: 95503,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95511,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95514,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95518,
    TaxRegionName: "ARCATA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95519,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95521,
    TaxRegionName: "ARCATA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95524,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95525,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95526,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95527,
    TaxRegionName: "TRINITY COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95528,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95531,
    TaxRegionName: "DEL NORTE COUNTY",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95532,
    TaxRegionName: "CRESCENT CITY",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95534,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95536,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95537,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95540,
    TaxRegionName: "FORTUNA",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95542,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95543,
    TaxRegionName: "DEL NORTE COUNTY",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95545,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95546,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95547,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95548,
    TaxRegionName: "DEL NORTE COUNTY",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95549,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95550,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95551,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95552,
    TaxRegionName: "TRINITY COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95553,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95554,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95555,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95556,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95558,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95559,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95560,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95562,
    TaxRegionName: "RIO DELL",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95563,
    TaxRegionName: "TRINITY COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95564,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95565,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95567,
    TaxRegionName: "DEL NORTE COUNTY",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95568,
    TaxRegionName: "SISKIYOU CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95569,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95570,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95571,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95573,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95585,
    TaxRegionName: "MENDOCINO COUNTY LODGING BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.07875,
  },
  {
    ZipCode: 95587,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95589,
    TaxRegionName: "HUMBOLDT COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95595,
    TaxRegionName: "TRINITY COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95601,
    TaxRegionName: "AMADOR",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95602,
    TaxRegionName: "PLACER COUNTY WESTERN SLOPE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95603,
    TaxRegionName: "AUBURN",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95604,
    TaxRegionName: "AUBURN",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95605,
    TaxRegionName: "WEST SACRAMENTO",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95606,
    TaxRegionName: "YOLO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95607,
    TaxRegionName: "YOLO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95608,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95609,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95610,
    TaxRegionName: "CITRUS HEIGHTS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95611,
    TaxRegionName: "CITRUS HEIGHTS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95612,
    TaxRegionName: "YOLO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95613,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95614,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95615,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95616,
    TaxRegionName: "DAVIS",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95617,
    TaxRegionName: "DAVIS",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95618,
    TaxRegionName: "DAVIS",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95619,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95620,
    TaxRegionName: "DIXON",
    EstimatedCombinedRate: 0.07375,
  },
  {
    ZipCode: 95621,
    TaxRegionName: "CITRUS HEIGHTS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95623,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95624,
    TaxRegionName: "ELK GROVE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95625,
    TaxRegionName: "SOLANO COUNTY",
    EstimatedCombinedRate: 0.07375,
  },
  {
    ZipCode: 95626,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95627,
    TaxRegionName: "YOLO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95628,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95629,
    TaxRegionName: "AMADOR COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95630,
    TaxRegionName: "FOLSOM TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95631,
    TaxRegionName: "PLACER COUNTY WESTERN SLOPE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95632,
    TaxRegionName: "GALT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95633,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95634,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95635,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95636,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95637,
    TaxRegionName: "YOLO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95638,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95639,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95640,
    TaxRegionName: "AMADOR COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95641,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95642,
    TaxRegionName: "JACKSON",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95645,
    TaxRegionName: "YOLO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95646,
    TaxRegionName: "ALPINE COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95648,
    TaxRegionName: "LINCOLN",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95650,
    TaxRegionName: "LOOMIS",
    EstimatedCombinedRate: 0.075,
  },
  {
    ZipCode: 95651,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95652,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95653,
    TaxRegionName: "YOLO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95654,
    TaxRegionName: "JACKSON",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95655,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95656,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95658,
    TaxRegionName: "PLACER COUNTY WESTERN SLOPE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95659,
    TaxRegionName: "SUTTER CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95660,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95661,
    TaxRegionName: "ROSEVILLE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95662,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95663,
    TaxRegionName: "PLACER COUNTY WESTERN SLOPE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95664,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95665,
    TaxRegionName: "AMADOR COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95666,
    TaxRegionName: "AMADOR COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95667,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95668,
    TaxRegionName: "SUTTER CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95669,
    TaxRegionName: "AMADOR COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95670,
    TaxRegionName: "RANCHO CORDOVA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95671,
    TaxRegionName: "FOLSOM TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95672,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95673,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95674,
    TaxRegionName: "SUTTER CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95675,
    TaxRegionName: "AMADOR COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95676,
    TaxRegionName: "SUTTER CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95677,
    TaxRegionName: "ROCKLIN",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95678,
    TaxRegionName: "ROSEVILLE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95679,
    TaxRegionName: "YOLO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95680,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95681,
    TaxRegionName: "PLACER COUNTY WESTERN SLOPE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95682,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95683,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95684,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95685,
    TaxRegionName: "SUTTER CREEK",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95686,
    TaxRegionName: "SAN JOAQUIN COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95687,
    TaxRegionName: "VACAVILLE",
    EstimatedCombinedRate: 0.08125,
  },
  {
    ZipCode: 95688,
    TaxRegionName: "VACAVILLE",
    EstimatedCombinedRate: 0.08125,
  },
  {
    ZipCode: 95689,
    TaxRegionName: "AMADOR COUNTY",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95690,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95691,
    TaxRegionName: "WEST SACRAMENTO",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95692,
    TaxRegionName: "WHEATLAND",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95693,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95694,
    TaxRegionName: "WINTERS",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95695,
    TaxRegionName: "WOODLAND",
    EstimatedCombinedRate: 0.08,
  },
  {
    ZipCode: 95696,
    TaxRegionName: "VACAVILLE",
    EstimatedCombinedRate: 0.08125,
  },
  {
    ZipCode: 95697,
    TaxRegionName: "YOLO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95698,
    TaxRegionName: "YOLO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95699,
    TaxRegionName: "SUTTER CREEK",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95701,
    TaxRegionName: "PLACER COUNTY WESTERN SLOPE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95703,
    TaxRegionName: "PLACER COUNTY WESTERN SLOPE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95709,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95712,
    TaxRegionName: "NEVADA COUNTY",
    EstimatedCombinedRate: 0.075,
  },
  {
    ZipCode: 95713,
    TaxRegionName: "PLACER COUNTY WESTERN SLOPE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95714,
    TaxRegionName: "PLACER COUNTY WESTERN SLOPE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95715,
    TaxRegionName: "PLACER COUNTY WESTERN SLOPE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95717,
    TaxRegionName: "PLACER COUNTY WESTERN SLOPE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95720,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95721,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95722,
    TaxRegionName: "PLACER COUNTY WESTERN SLOPE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95724,
    TaxRegionName: "NEVADA COUNTY",
    EstimatedCombinedRate: 0.075,
  },
  {
    ZipCode: 95726,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95728,
    TaxRegionName: "NEVADA COUNTY",
    EstimatedCombinedRate: 0.075,
  },
  {
    ZipCode: 95735,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95736,
    TaxRegionName: "PLACER COUNTY WESTERN SLOPE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95741,
    TaxRegionName: "RANCHO CORDOVA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95742,
    TaxRegionName: "RANCHO CORDOVA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95746,
    TaxRegionName: "PLACER COUNTY WESTERN SLOPE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95747,
    TaxRegionName: "ROSEVILLE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95757,
    TaxRegionName: "ELK GROVE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95758,
    TaxRegionName: "ELK GROVE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95759,
    TaxRegionName: "ELK GROVE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95762,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95763,
    TaxRegionName: "FOLSOM TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95765,
    TaxRegionName: "ROCKLIN",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95776,
    TaxRegionName: "WOODLAND",
    EstimatedCombinedRate: 0.08,
  },
  {
    ZipCode: 95798,
    TaxRegionName: "WEST SACRAMENTO",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95799,
    TaxRegionName: "WEST SACRAMENTO",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95811,
    TaxRegionName: "SACRAMENTO TMD ZONE 1",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95812,
    TaxRegionName: "SACRAMENTO TMD ZONE 1",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95813,
    TaxRegionName: "SACRAMENTO TMD ZONE 2",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95814,
    TaxRegionName: "SACRAMENTO TMD ZONE 1",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95815,
    TaxRegionName: "SACRAMENTO TMD ZONE 2",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95816,
    TaxRegionName: "SACRAMENTO TMD ZONE 1",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95817,
    TaxRegionName: "SACRAMENTO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95818,
    TaxRegionName: "SACRAMENTO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95819,
    TaxRegionName: "SACRAMENTO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95820,
    TaxRegionName: "SACRAMENTO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95821,
    TaxRegionName: "SACRAMENTO TMD ZONE 2",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95822,
    TaxRegionName: "SACRAMENTO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95823,
    TaxRegionName: "SACRAMENTO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95824,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95825,
    TaxRegionName: "SACRAMENTO TMD ZONE 2",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95826,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95827,
    TaxRegionName: "RANCHO CORDOVA TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95828,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95829,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95830,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95831,
    TaxRegionName: "SACRAMENTO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95832,
    TaxRegionName: "SACRAMENTO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95833,
    TaxRegionName: "SACRAMENTO TMD ZONE 3",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95834,
    TaxRegionName: "SACRAMENTO TMD ZONE 3",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95835,
    TaxRegionName: "SACRAMENTO TMD ZONE 3",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95836,
    TaxRegionName: "SUTTER CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95837,
    TaxRegionName: "SACRAMENTO TMD ZONE 3",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95838,
    TaxRegionName: "SACRAMENTO TMD ZONE 2",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95840,
    TaxRegionName: "SACRAMENTO TMD ZONE 1",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95841,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95842,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95843,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95851,
    TaxRegionName: "SACRAMENTO TMD ZONE 2",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95852,
    TaxRegionName: "SACRAMENTO TMD ZONE 2",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95853,
    TaxRegionName: "SACRAMENTO TMD ZONE 2",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95860,
    TaxRegionName: "SACRAMENTO TMD ZONE 2",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95864,
    TaxRegionName: "SACRAMENTO TMD ZONE 4",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95865,
    TaxRegionName: "SACRAMENTO TMD ZONE 2",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95866,
    TaxRegionName: "SACRAMENTO TMD ZONE 2",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95867,
    TaxRegionName: "SACRAMENTO TMD ZONE 1",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95894,
    TaxRegionName: "SACRAMENTO",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 95901,
    TaxRegionName: "MARYSVILLE",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95903,
    TaxRegionName: "YUBA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95910,
    TaxRegionName: "SIERRA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95912,
    TaxRegionName: "COLUSA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95913,
    TaxRegionName: "GLENN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95914,
    TaxRegionName: "BUTTE COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95915,
    TaxRegionName: "PLUMAS CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95916,
    TaxRegionName: "BUTTE COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95917,
    TaxRegionName: "BUTTE COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95918,
    TaxRegionName: "YUBA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95919,
    TaxRegionName: "YUBA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95920,
    TaxRegionName: "GLENN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95922,
    TaxRegionName: "YUBA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95923,
    TaxRegionName: "PLUMAS CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95924,
    TaxRegionName: "NEVADA COUNTY",
    EstimatedCombinedRate: 0.075,
  },
  {
    ZipCode: 95925,
    TaxRegionName: "YUBA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95926,
    TaxRegionName: "CHICO",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95927,
    TaxRegionName: "CHICO",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95928,
    TaxRegionName: "CHICO",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95929,
    TaxRegionName: "CHICO",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95930,
    TaxRegionName: "BUTTE COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95932,
    TaxRegionName: "COLUSA",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95934,
    TaxRegionName: "PLUMAS CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95935,
    TaxRegionName: "YUBA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95936,
    TaxRegionName: "SIERRA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95937,
    TaxRegionName: "YOLO COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95938,
    TaxRegionName: "BUTTE COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95939,
    TaxRegionName: "GLENN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95940,
    TaxRegionName: "BUTTE COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95941,
    TaxRegionName: "BUTTE COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95942,
    TaxRegionName: "BUTTE COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95943,
    TaxRegionName: "GLENN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95944,
    TaxRegionName: "SIERRA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95945,
    TaxRegionName: "GRASS VALLEY",
    EstimatedCombinedRate: 0.085,
  },
  {
    ZipCode: 95946,
    TaxRegionName: "NEVADA COUNTY",
    EstimatedCombinedRate: 0.075,
  },
  {
    ZipCode: 95947,
    TaxRegionName: "PLUMAS CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95948,
    TaxRegionName: "GRIDLEY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95949,
    TaxRegionName: "NEVADA COUNTY",
    EstimatedCombinedRate: 0.075,
  },
  {
    ZipCode: 95950,
    TaxRegionName: "COLUSA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95951,
    TaxRegionName: "GLENN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95953,
    TaxRegionName: "LIVE OAK",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95954,
    TaxRegionName: "BUTTE COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95955,
    TaxRegionName: "COLUSA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95956,
    TaxRegionName: "PLUMAS CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95957,
    TaxRegionName: "SUTTER CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95958,
    TaxRegionName: "BUTTE COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95959,
    TaxRegionName: "NEVADA COUNTY",
    EstimatedCombinedRate: 0.075,
  },
  {
    ZipCode: 95960,
    TaxRegionName: "NEVADA COUNTY",
    EstimatedCombinedRate: 0.075,
  },
  {
    ZipCode: 95961,
    TaxRegionName: "YUBA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95962,
    TaxRegionName: "YUBA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95963,
    TaxRegionName: "ORLAND",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95965,
    TaxRegionName: "OROVILLE",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95966,
    TaxRegionName: "BUTTE COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95967,
    TaxRegionName: "PARADISE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95968,
    TaxRegionName: "BUTTE COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95969,
    TaxRegionName: "PARADISE",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95970,
    TaxRegionName: "COLUSA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95971,
    TaxRegionName: "PLUMAS CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95972,
    TaxRegionName: "YUBA",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95973,
    TaxRegionName: "CHICO",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95974,
    TaxRegionName: "BUTTE COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95975,
    TaxRegionName: "NEVADA COUNTY",
    EstimatedCombinedRate: 0.075,
  },
  {
    ZipCode: 95976,
    TaxRegionName: "CHICO",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95977,
    TaxRegionName: "NEVADA COUNTY",
    EstimatedCombinedRate: 0.075,
  },
  {
    ZipCode: 95978,
    TaxRegionName: "BUTTE COUNTY TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95979,
    TaxRegionName: "COLUSA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95980,
    TaxRegionName: "OROVILLE",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 95981,
    TaxRegionName: "PLUMAS CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95982,
    TaxRegionName: "SUTTER CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95983,
    TaxRegionName: "PLUMAS CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95984,
    TaxRegionName: "PLUMAS CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95986,
    TaxRegionName: "NEVADA COUNTY",
    EstimatedCombinedRate: 0.075,
  },
  {
    ZipCode: 95987,
    TaxRegionName: "WILLIAMS",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 95988,
    TaxRegionName: "WILLOWS",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95991,
    TaxRegionName: "YUBA CITY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95992,
    TaxRegionName: "YUBA CITY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 95993,
    TaxRegionName: "YUBA CITY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96001,
    TaxRegionName: "REDDING",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96002,
    TaxRegionName: "REDDING",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96003,
    TaxRegionName: "REDDING",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96006,
    TaxRegionName: "MODOC COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96007,
    TaxRegionName: "ANDERSON",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 96008,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96009,
    TaxRegionName: "LASSEN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96010,
    TaxRegionName: "TRINITY COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96011,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96013,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96014,
    TaxRegionName: "SISKIYOU CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96015,
    TaxRegionName: "MODOC COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96016,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96017,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96019,
    TaxRegionName: "SHASTA LAKE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96020,
    TaxRegionName: "PLUMAS CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96021,
    TaxRegionName: "CORNING",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 96022,
    TaxRegionName: "TEHAMA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96023,
    TaxRegionName: "SISKIYOU CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96024,
    TaxRegionName: "TRINITY COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96025,
    TaxRegionName: "SISKIYOU CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 96027,
    TaxRegionName: "SISKIYOU CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96028,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96029,
    TaxRegionName: "TEHAMA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96031,
    TaxRegionName: "SISKIYOU CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96032,
    TaxRegionName: "SISKIYOU CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96033,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96034,
    TaxRegionName: "SISKIYOU CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96035,
    TaxRegionName: "TEHAMA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96037,
    TaxRegionName: "SISKIYOU CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96038,
    TaxRegionName: "SISKIYOU CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96039,
    TaxRegionName: "SISKIYOU CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96040,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96041,
    TaxRegionName: "TRINITY COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96044,
    TaxRegionName: "SISKIYOU CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96046,
    TaxRegionName: "TRINITY COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96047,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96048,
    TaxRegionName: "TRINITY COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96049,
    TaxRegionName: "REDDING",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96050,
    TaxRegionName: "SISKIYOU CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96051,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96052,
    TaxRegionName: "TRINITY COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96054,
    TaxRegionName: "MODOC COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96055,
    TaxRegionName: "TEHAMA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96056,
    TaxRegionName: "LASSEN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96057,
    TaxRegionName: "SISKIYOU CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96058,
    TaxRegionName: "SISKIYOU CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96059,
    TaxRegionName: "TEHAMA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96061,
    TaxRegionName: "TEHAMA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96062,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96063,
    TaxRegionName: "TEHAMA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96064,
    TaxRegionName: "SISKIYOU CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96065,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96067,
    TaxRegionName: "MT. SHASTA",
    EstimatedCombinedRate: 0.075,
  },
  {
    ZipCode: 96068,
    TaxRegionName: "LASSEN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96069,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96070,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96071,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96073,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96074,
    TaxRegionName: "TEHAMA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96075,
    TaxRegionName: "TEHAMA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96076,
    TaxRegionName: "TRINITY COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96078,
    TaxRegionName: "TEHAMA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96080,
    TaxRegionName: "RED BLUFF",
    EstimatedCombinedRate: 0.075,
  },
  {
    ZipCode: 96084,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96085,
    TaxRegionName: "SISKIYOU CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96086,
    TaxRegionName: "SISKIYOU CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96087,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96088,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96089,
    TaxRegionName: "SHASTA LAKE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96090,
    TaxRegionName: "TEHAMA",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96091,
    TaxRegionName: "TRINITY COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96092,
    TaxRegionName: "TEHAMA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96093,
    TaxRegionName: "TRINITY COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96094,
    TaxRegionName: "SISKIYOU CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96095,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96096,
    TaxRegionName: "SHASTA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96097,
    TaxRegionName: "YREKA",
    EstimatedCombinedRate: 0.0775,
  },
  {
    ZipCode: 96099,
    TaxRegionName: "REDDING",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96101,
    TaxRegionName: "ALTURAS",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96103,
    TaxRegionName: "PLUMAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96104,
    TaxRegionName: "MODOC COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96105,
    TaxRegionName: "PLUMAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96106,
    TaxRegionName: "PLUMAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96107,
    TaxRegionName: "MONO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96108,
    TaxRegionName: "MODOC COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96109,
    TaxRegionName: "LASSEN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96110,
    TaxRegionName: "MODOC COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96111,
    TaxRegionName: "NEVADA COUNTY",
    EstimatedCombinedRate: 0.075,
  },
  {
    ZipCode: 96112,
    TaxRegionName: "MODOC COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96113,
    TaxRegionName: "LASSEN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96114,
    TaxRegionName: "LASSEN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96115,
    TaxRegionName: "MODOC COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96116,
    TaxRegionName: "MODOC COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96117,
    TaxRegionName: "LASSEN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96118,
    TaxRegionName: "LOYALTON",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96119,
    TaxRegionName: "LASSEN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96120,
    TaxRegionName: "ALPINE COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96121,
    TaxRegionName: "LASSEN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96122,
    TaxRegionName: "PORTOLA",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96123,
    TaxRegionName: "LASSEN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96124,
    TaxRegionName: "SIERRA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96125,
    TaxRegionName: "SIERRA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96126,
    TaxRegionName: "SIERRA COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96127,
    TaxRegionName: "LASSEN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96128,
    TaxRegionName: "LASSEN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96129,
    TaxRegionName: "PLUMAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96130,
    TaxRegionName: "SUSANVILLE",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96132,
    TaxRegionName: "LASSEN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96133,
    TaxRegionName: "MONO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96134,
    TaxRegionName: "MODOC COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96135,
    TaxRegionName: "PLUMAS COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96136,
    TaxRegionName: "LASSEN COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96137,
    TaxRegionName: "PLUMAS CO LOCAL TAX SL",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96140,
    TaxRegionName: "PLACER COUNTY NORTH TAHOE AREA",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96141,
    TaxRegionName: "PLACER COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96142,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96143,
    TaxRegionName: "PLACER COUNTY NORTH TAHOE AREA",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96145,
    TaxRegionName: "PLACER COUNTY NORTH TAHOE AREA",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96146,
    TaxRegionName: "PLACER COUNTY NORTH TAHOE AREA",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96148,
    TaxRegionName: "PLACER COUNTY NORTH TAHOE AREA",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96150,
    TaxRegionName: "SOUTH LAKE TAHOE NON REDEVELOPMENT AREA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 96151,
    TaxRegionName: "SOUTH LAKE TAHOE NON REDEVELOPMENT AREA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 96152,
    TaxRegionName: "SOUTH LAKE TAHOE NON REDEVELOPMENT AREA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 96154,
    TaxRegionName: "SOUTH LAKE TAHOE NON REDEVELOPMENT AREA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 96155,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96157,
    TaxRegionName: "EL DORADO COUNTY",
    EstimatedCombinedRate: 0.0725,
  },
  {
    ZipCode: 96158,
    TaxRegionName: "SOUTH LAKE TAHOE NON REDEVELOPMENT AREA",
    EstimatedCombinedRate: 0.0875,
  },
  {
    ZipCode: 96160,
    TaxRegionName: "TRUCKEE TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 96161,
    TaxRegionName: "TRUCKEE TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
  {
    ZipCode: 96162,
    TaxRegionName: "TRUCKEE TOURISM BUSINESS IMPROVEMENT DISTRICT",
    EstimatedCombinedRate: 0.0825,
  },
]
