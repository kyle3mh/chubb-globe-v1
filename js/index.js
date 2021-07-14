/*
 *
 * SAP Concur
 * The Sustainable corporate travel tool
 *
 * ©2020 Raconteur Media Ltd.
 *
 * */

/*
 *
 *  UTILITIES
 *
 */



/**
 * "Safer" String.toLowerCase()
 */
function lowerCase(str) {
    return str.toLowerCase();
}

/**
 * "Safer" String.toUpperCase()
 */
function upperCase(str) {
    return str.toUpperCase();
}

/**
 * String to Camel Case
 */
function camelCase(str) {
    str = replaceAccents(str);
    str = removeNonWord(str)
        .replace(/\-/g, " ") //convert all hyphens to spaces
        .replace(/\s[a-z]/g, upperCase) //convert first char of each word to UPPERCASE
        .replace(/\s+/g, "") //remove spaces
        .replace(/^[A-Z]/g, lowerCase); //convert first char to lowercase
    return str;
}

/*
 *
 *  DATA LOAD 
 *
 */

// var reportEl = document.getElementById("sc-2021"),
//     localURL = reportEl.getAttribute("data-lang"),
//     dataFileName = "data-report",
//     url;

// if (!localURL) {
//     localURL = "en-EN";
// }

// // @if NODE_ENV='production'
// const baseURL = "https://res.cloudinary.com/yumyoshojin/raw/upload/b2b/schroders/";
// // @endif
// // @if NODE_ENV='development'
// const baseURL = "./assets/data/";
// // @endif
// url =
//     baseURL +
//     dataFileName +
//     '-' +
//     localURL +
//     ".json";
//var countries = { "AF": { "elements": { "name" : "Afganistan", "risk": "big"} }, "AL": "Albania", "DZ": "Algeria", "AO": "Angola", "AQ": "Antarctica", "AR": "Argentina", "AM": "Armenia", "AU": "Australia", "AT": "Austria", "AZ": "Azerbaijan", "BD": "Bangladesh", "BY": "Belarus", "BE": "Belgium", "BZ": "Belize", "BJ": "Benin", "BT": "Bhutan", "BO": "Bolivia", "BA": "Bosnia And Herzegovina", "BW": "Botswana", "BR": "Brazil", "BN": "Brunei Darussalam", "BG": "Bulgaria", "BF": "Burkina Faso", "BI": "Burundi", "KH": "Cambodia", "CM": "Cameroon", "CA": "Canada", "CF": "Central African Republic", "TD": "Chad", "CL": "Chile", "CN": "China", "CO": "Colombia", "CG": "Congo", "CD": "Congo", "CR": "Costa Rica", "CI": "Cote D'Ivoire", "HR": "Croatia", "CU": "Cuba", "CY": "Cyprus", "CZ": "Czech Republic", "DK": "Denmark", "DJ": "Djibouti", "DO": "Dominican Republic", "EC": "Ecuador", "EG": "Egypt", "SV": "El Salvador", "GQ": "Equatorial Guinea", "ER": "Eritrea", "EE": "Estonia", "ET": "Ethiopia", "FI": "Finland", "FR": "France", "GF": "French Guiana", "GA": "Gabon", "GM": "Gambia", "GE": "Georgia", "DE": "Germany", "GH": "Ghana", "GR": "Greece", "GL": "Greenland", "GT": "Guatemala", "GN": "Guinea", "GW": "Guinea-Bissau", "GY": "Guyana", "HT": "Haiti", "HN": "Honduras", "HU": "Hungary", "IS": "Iceland", "IN": "India", "ID": "Indonesia", "IR": "Iran", "IQ": "Iraq", "IE": "Ireland", "IL": "Israel", "IT": "Italy", "JM": "Jamaica", "JP": "Japan", "JO": "Jordan", "KZ": "Kazakhstan", "KE": "Kenya", "KP": "North Korea", "KR": "South Korea", "KW": "Kuwait", "KG": "Kyrgyzstan", "LA": "Laos", "LV": "Latvia", "LB": "Lebanon", "LS": "Lesotho", "LR": "Liberia", "LY": "Libya", "LT": "Lithuania", "LU": "Luxembourg", "MK": "Macedonia", "MG": "Madagascar", "MW": "Malawi", "MY": "Malaysia", "ML": "Mali", "MR": "Mauritania", "MX": "Mexico", "MD": "Moldova", "MN": "Mongolia", "ME": "Montenegro", "MA": "Morocco", "MZ": "Mozambique", "MM": "Myanmar", "NA": "Namibia", "NP": "Nepal", "NL": "Netherlands", "NZ": "New Zealand", "NI": "Nicaragua", "NE": "Niger", "NG": "Nigeria", "NO": "Norway", "OM": "Oman", "PK": "Pakistan", "PA": "Panama", "PG": "Papua New Guinea", "PY": "Paraguay", "PE": "Peru", "PH": "Philippines", "PL": "Poland", "PT": "Portugal", "PR": "Puerto Rico", "QA": "Qatar", "RO": "Romania", "RU": "Russia", "RW": "Rwanda", "SA": "Saudi Arabia", "SN": "Senegal", "RS": "Serbia", "SL": "Sierra Leone", "SK": "Slovakia", "SI": "Slovenia", "SO": "Somalia", "ZA": "South Africa", "ES": "Spain", "LK": "Sri Lanka", "SD": "Sudan", "SS": "South Sudan", "SR": "Suriname", "SZ": "Swaziland", "SE": "Sweden", "CH": "Switzerland", "SY": "Syria", "TW": "Taiwan", "TJ": "Tajikistan", "TZ": "Tanzania", "TH": "Thailand", "TG": "Togo", "TT": "Trinidad And Tobago", "TN": "Tunisia", "TR": "Turkey", "TM": "Turkmenistan", "UG": "Uganda", "UA": "Ukraine", "AE": "United Arab Emirates", "GB": "United Kingdom", "US": "United States", "UY": "Uruguay", "UZ": "Uzbekistan", "VE": "Venezuela", "VN": "Viet Nam", "EH": "Western Sahara", "YE": "Yemen", "ZM": "Zambia", "ZW": "Zimbabwe" };

let url = "http://localhost:8888/globe/demo/chubb-globe-demo/data/data-report-en-EN.json"
let fallbackUrl =
    "https://raw.githubusercontent.com/kyle3mh/jsontest/main/data-report-en-EN.json";

// // GET the data
// axios
//   .get(fallbackUrl, {
//         headers: {
//             "Content-Type": "application/json",
//         },
//     })
//     .then((resp) => startReport(resp.data))
//     .catch((error) => {
//         console.log(error);
//     });

/*
 *
 *  Start Report function.
 *
 */

var myearth;
var localNewsMarker;
var news = [];
var selected_countries = [];

// var test = countries.length;
// console.log(test);

// console.log(countries.values());
console.log(Object.keys(countries));
const low = "blue";
const high = "red";


const lowRisk = "#6E27C5";
const moderateRisk = "#24388D";
const elevatedRisk = "#17B8D4";
const highRisk = "#86BC25";
const veryHighRisk = "#FFB617";
const severeRisk = "#FF6600";
const extremeRisk = "#F1352B";

window.addEventListener("earthjsload", function () {

  // var poly = document.querySelector('path[data-id="AF"]');
  // console.log(poly);
  // poly.dispatchEvent(new Event('click'));
  // function myFunction() {
  //   console.log(document.querySelector('path[data-id="AF"]'));
  //   poly.dispatchEvent(new Event('click'));
  // }

  var countryRisk2018 = [];
  for (const property in countries) {
    countryRisk2018 += `${property} ${countries[property].elements.year.y2018.overall}` ;
    //console.log('#' + `${property} { fill: ${countries[property].elements.colour}; } `);
    //countryColours = '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
    //countryColours += '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
  }
  console.log(countryRisk2018);
  // var test = 0;

  //  const selectElement = document.querySelector('.ice-cream');

  // selectElement.addEventListener('change', (event) => {
  //   //const result = document.querySelector('.result');
  //   console.log(test);
  //   test = event.target.value;
  //   console.log(test);
  //   myearth.redrawMap();
  // });
  

  // if (test === 1) {
  //     var countryColours = "";
  //     for (const property in countries) {
  //       overallRisk = countries[property].elements.year.y2020.overall;
  //       if (overallRisk >= 0.1 && overallRisk <= 0.7  ) {
  //         var countryRiskColour = lowRisk;
  //       }
  //       else if (overallRisk >= 0.8 && overallRisk <= 1.5  ) {
  //         var countryRiskColour = moderateRisk;
  //       }
  //       else if (overallRisk >= 1.6 && overallRisk <= 2.3 ) {
  //         var countryRiskColour = elevatedRisk;
  //       }
  //       else if (overallRisk >= 2.4 && overallRisk <= 3.1  ) {
  //         var countryRiskColour = highRisk;
  //       }
  //       else if (overallRisk >= 3.2 && overallRisk <= 4.3  ) {
  //         var countryRiskColour = veryHighRisk;
  //       }
  //       else if (overallRisk >= 4.4 && overallRisk <= 6.4  ) {
  //         var countryRiskColour = severeRisk;
  //       }
  //       else if (overallRisk >= 6.5 && overallRisk <= 10  ) {
  //         var countryRiskColour = extremeRisk;
  //       }
  //       //const risk = `${countries[property].elements.year.y2018.overall}`;
  //       countryColours += '#' + `${property} { fill: ${countryRiskColour}; } `;
  //       //console.log('#' + `${property} { fill: ${countries[property].elements.colour}; } `);
  //       //countryColours = '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
  //       //countryColours += '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
  //     }
  // }

  // else {
  //   var countryColours = "";
  //   for (const property in countries) {
  //     overallRisk = countries[property].elements.year.y2019.overall;
  //     if (overallRisk >= 0.1 && overallRisk <= 0.7  ) {
  //       var countryRiskColour = lowRisk;
  //     }
  //     else if (overallRisk >= 0.8 && overallRisk <= 1.5  ) {
  //       var countryRiskColour = moderateRisk;
  //     }
  //     else if (overallRisk >= 1.6 && overallRisk <= 2.3 ) {
  //       var countryRiskColour = elevatedRisk;
  //     }
  //     else if (overallRisk >= 2.4 && overallRisk <= 3.1  ) {
  //       var countryRiskColour = highRisk;
  //     }
  //     else if (overallRisk >= 3.2 && overallRisk <= 4.3  ) {
  //       var countryRiskColour = veryHighRisk;
  //     }
  //     else if (overallRisk >= 4.4 && overallRisk <= 6.4  ) {
  //       var countryRiskColour = severeRisk;
  //     }
  //     else if (overallRisk >= 6.5 && overallRisk <= 10  ) {
  //       var countryRiskColour = extremeRisk;
  //     }
  //     //const risk = `${countries[property].elements.year.y2018.overall}`;
  //     countryColours += '#' + `${property} { fill: ${countryRiskColour}; } `;
  //     //console.log('#' + `${property} { fill: ${countries[property].elements.colour}; } `);
  //     //countryColours = '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
  //     //countryColours += '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
  //   }
  // }
  
  // var countryColours2020 = "";
  // for (const property in countries) {
  //   overallRisk = countries[property].elements.year.y2020.overall;
  //   if (overallRisk >= 0.1 && overallRisk <= 0.7  ) {
  //     var countryRiskColour = lowRisk;
  //   }
  //   else if (overallRisk >= 0.8 && overallRisk <= 1.5  ) {
  //     var countryRiskColour = moderateRisk;
  //   }
  //   else if (overallRisk >= 1.6 && overallRisk <= 2.3 ) {
  //     var countryRiskColour = elevatedRisk;
  //   }
  //   else if (overallRisk >= 2.4 && overallRisk <= 3.1  ) {
  //     var countryRiskColour = highRisk;
  //   }
  //   else if (overallRisk >= 3.2 && overallRisk <= 4.3  ) {
  //     var countryRiskColour = veryHighRisk;
  //   }
  //   else if (overallRisk >= 4.4 && overallRisk <= 6.4  ) {
  //     var countryRiskColour = severeRisk;
  //   }
  //   else if (overallRisk >= 6.5 && overallRisk <= 10  ) {
  //     var countryRiskColour = extremeRisk;
  //   }
  //   //const risk = `${countries[property].elements.year.y2018.overall}`;
  //   countryColours2020 += '#' + `${property} { fill: ${countryRiskColour}; } `;
  //   //console.log('#' + `${property} { fill: ${countries[property].elements.colour}; } `);
  //   //countryColours = '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
  //   //countryColours += '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
  // }
  console.log(countryColours);
  Object.keys(countries).forEach(element => console.log('#' + element + '{ fill: blue; } '));

  var year = 0;

   
  

  if (year === 2020) {
      var countryColours = "";
      for (const property in countries) {
        overallRisk = countries[property].elements.year.y2020.overall;
        if (overallRisk >= 0.1 && overallRisk <= 0.7  ) {
          var countryRiskColour = lowRisk;
        }
        else if (overallRisk >= 0.8 && overallRisk <= 1.5  ) {
          var countryRiskColour = moderateRisk;
        }
        else if (overallRisk >= 1.6 && overallRisk <= 2.3 ) {
          var countryRiskColour = elevatedRisk;
        }
        else if (overallRisk >= 2.4 && overallRisk <= 3.1  ) {
          var countryRiskColour = highRisk;
        }
        else if (overallRisk >= 3.2 && overallRisk <= 4.3  ) {
          var countryRiskColour = veryHighRisk;
        }
        else if (overallRisk >= 4.4 && overallRisk <= 6.4  ) {
          var countryRiskColour = severeRisk;
        }
        else if (overallRisk >= 6.5 && overallRisk <= 10  ) {
          var countryRiskColour = extremeRisk;
        }
        //const risk = `${countries[property].elements.year.y2018.overall}`;
        countryColours += '#' + `${property} { fill: ${countryRiskColour}; } `;
        //console.log('#' + `${property} { fill: ${countries[property].elements.colour}; } `);
        //countryColours = '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
        //countryColours += '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
      }
  }

  else if (year === 2019){
    var countryColours = "";
    for (const property in countries) {
      overallRisk = countries[property].elements.year.y2019.overall;
      if (overallRisk >= 0.1 && overallRisk <= 0.7  ) {
        var countryRiskColour = lowRisk;
      }
      else if (overallRisk >= 0.8 && overallRisk <= 1.5  ) {
        var countryRiskColour = moderateRisk;
      }
      else if (overallRisk >= 1.6 && overallRisk <= 2.3 ) {
        var countryRiskColour = elevatedRisk;
      }
      else if (overallRisk >= 2.4 && overallRisk <= 3.1  ) {
        var countryRiskColour = highRisk;
      }
      else if (overallRisk >= 3.2 && overallRisk <= 4.3  ) {
        var countryRiskColour = veryHighRisk;
      }
      else if (overallRisk >= 4.4 && overallRisk <= 6.4  ) {
        var countryRiskColour = severeRisk;
      }
      else if (overallRisk >= 6.5 && overallRisk <= 10  ) {
        var countryRiskColour = extremeRisk;
      }
      //const risk = `${countries[property].elements.year.y2018.overall}`;
      countryColours += '#' + `${property} { fill: ${countryRiskColour}; } `;
      //console.log('#' + `${property} { fill: ${countries[property].elements.colour}; } `);
      //countryColours = '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
      //countryColours += '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
    }
  }
  else if (year === 2018){
    var countryColours = "";
    for (const property in countries) {
      overallRisk = countries[property].elements.year.y2018.overall;
      if (overallRisk >= 0.1 && overallRisk <= 0.7  ) {
        var countryRiskColour = lowRisk;
      }
      else if (overallRisk >= 0.8 && overallRisk <= 1.5  ) {
        var countryRiskColour = moderateRisk;
      }
      else if (overallRisk >= 1.6 && overallRisk <= 2.3 ) {
        var countryRiskColour = elevatedRisk;
      }
      else if (overallRisk >= 2.4 && overallRisk <= 3.1  ) {
        var countryRiskColour = highRisk;
      }
      else if (overallRisk >= 3.2 && overallRisk <= 4.3  ) {
        var countryRiskColour = veryHighRisk;
      }
      else if (overallRisk >= 4.4 && overallRisk <= 6.4  ) {
        var countryRiskColour = severeRisk;
      }
      else if (overallRisk >= 6.5 && overallRisk <= 10  ) {
        var countryRiskColour = extremeRisk;
      }
      //const risk = `${countries[property].elements.year.y2018.overall}`;
      countryColours += '#' + `${property} { fill: ${countryRiskColour}; } `;
      //console.log('#' + `${property} { fill: ${countries[property].elements.colour}; } `);
      //countryColours = '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
      //countryColours += '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
    }
  }

  var countryColours2018 = "";
    for (const property in countries) {
      overallRisk = countries[property].elements.year.y2018.overall;
      if (overallRisk >= 0.1 && overallRisk <= 0.7  ) {
        var countryRiskColour = lowRisk;
      }
      else if (overallRisk >= 0.8 && overallRisk <= 1.5  ) {
        var countryRiskColour = moderateRisk;
      }
      else if (overallRisk >= 1.6 && overallRisk <= 2.3 ) {
        var countryRiskColour = elevatedRisk;
      }
      else if (overallRisk >= 2.4 && overallRisk <= 3.1  ) {
        var countryRiskColour = highRisk;
      }
      else if (overallRisk >= 3.2 && overallRisk <= 4.3  ) {
        var countryRiskColour = veryHighRisk;
      }
      else if (overallRisk >= 4.4 && overallRisk <= 6.4  ) {
        var countryRiskColour = severeRisk;
      }
      else if (overallRisk >= 6.5 && overallRisk <= 10  ) {
        var countryRiskColour = extremeRisk;
      }
      //const risk = `${countries[property].elements.year.y2018.overall}`;
      countryColours2018 += '#' + `${property} { fill: ${countryRiskColour}; } `;
      //console.log('#' + `${property} { fill: ${countries[property].elements.colour}; } `);
      //countryColours = '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
      //countryColours += '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
    }


    var countryColours2019 = "";
    for (const property in countries) {
      overallRisk = countries[property].elements.year.y2019.overall;
      if (overallRisk >= 0.1 && overallRisk <= 0.7  ) {
        var countryRiskColour = lowRisk;
      }
      else if (overallRisk >= 0.8 && overallRisk <= 1.5  ) {
        var countryRiskColour = moderateRisk;
      }
      else if (overallRisk >= 1.6 && overallRisk <= 2.3 ) {
        var countryRiskColour = elevatedRisk;
      }
      else if (overallRisk >= 2.4 && overallRisk <= 3.1  ) {
        var countryRiskColour = highRisk;
      }
      else if (overallRisk >= 3.2 && overallRisk <= 4.3  ) {
        var countryRiskColour = veryHighRisk;
      }
      else if (overallRisk >= 4.4 && overallRisk <= 6.4  ) {
        var countryRiskColour = severeRisk;
      }
      else if (overallRisk >= 6.5 && overallRisk <= 10  ) {
        var countryRiskColour = extremeRisk;
      }
      //const risk = `${countries[property].elements.year.y2018.overall}`;
      countryColours2019 += '#' + `${property} { fill: ${countryRiskColour}; } `;
      //console.log('#' + `${property} { fill: ${countries[property].elements.colour}; } `);
      //countryColours = '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
      //countryColours += '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
    }

    var countryColours2020 = "";
    for (const property in countries) {
      overallRisk = countries[property].elements.year.y2020.overall;
      if (overallRisk >= 0.1 && overallRisk <= 0.7  ) {
        var countryRiskColour = lowRisk;
      }
      else if (overallRisk >= 0.8 && overallRisk <= 1.5  ) {
        var countryRiskColour = moderateRisk;
      }
      else if (overallRisk >= 1.6 && overallRisk <= 2.3 ) {
        var countryRiskColour = elevatedRisk;
      }
      else if (overallRisk >= 2.4 && overallRisk <= 3.1  ) {
        var countryRiskColour = highRisk;
      }
      else if (overallRisk >= 3.2 && overallRisk <= 4.3  ) {
        var countryRiskColour = veryHighRisk;
      }
      else if (overallRisk >= 4.4 && overallRisk <= 6.4  ) {
        var countryRiskColour = severeRisk;
      }
      else if (overallRisk >= 6.5 && overallRisk <= 10  ) {
        var countryRiskColour = extremeRisk;
      }
      //const risk = `${countries[property].elements.year.y2018.overall}`;
      countryColours2020 += '#' + `${property} { fill: ${countryRiskColour}; } `;
      //console.log('#' + `${property} { fill: ${countries[property].elements.colour}; } `);
      //countryColours = '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
      //countryColours += '#' + `${property} { fill: ${countries[property].elements.colour}; } `;
    }
 
  myearth = new Earth(document.getElementById('element'), {

    location: { lat: 18, lng: 50 },
    zoom: 1.05,
    light: 'none',

    transparent: true,
    mapSeaColor: 'RGBA(255,255,255,0.76)',
    mapLandColor: '#383838',
    mapBorderColor: '#FFFFFF',
    mapBorderWidth: 0.25,
    mapStyles: countryColours2020,
    //mapStyles : '#' + Object.keys(countries) + ' { fill: ' + countries.elements.colour + '; }',
    mapHitTest: true,
    
    autoRotate: false,
    autoRotateSpeed: 0.7,
    autoRotateDelay: 4000,

  });

  const selectElement = document.querySelector('.ice-cream');

  selectElement.addEventListener('change', (event) => {
      //const result = document.querySelector('.result');
      console.log(year);
      year = event.target.value;
      console.log(year);
      if (year === 2020) {
        myearth.mapStyles = countryColours2020;
        //myearth.redrawMap();
      }
      else if (year === 2019) {
        myearth.mapStyles = countryColours2019;
        //myearth.redrawMap();
      }
      else  {
        myearth.mapStyles = countryColours2018;
        //myearth.redrawMap();
      }
      myearth.redrawMap();
      //myearth.mapStyles = `${event.target.value}`; 
      
    });

    // for (const property in locations) {
    //   overallRisk = countries[property].elements.year.y2020.overall;
   
    // }

    const selectCountry = document.getElementById('country-select');

    selectCountry.addEventListener('change', (event) => {
        //const result = document.querySelector('.result');
        console.log(event.target.value);
        var countryCode = event.target.value;
        console.log(Object.keys(locations));
        
        var latLong = locations[event.target.value];   // value2
        //console.log(latLing[0]);
        myearth.goTo( { lat: latLong[0], lng: latLong[1] }, { relativeDuration: 100, approachAngle: 0 } ); 
        //myearth.mapStyles = `${event.target.value}`; 
        document.getElementById('country-name').innerHTML = countries[event.target.value].elements.name;
        document.getElementById('overall').innerHTML = countries[event.target.value].elements.year.y2018.overall;
        document.getElementById('terrorism').innerHTML = countries[event.target.value].elements.year.y2018.terrorism;
        document.getElementById('civil-unrest').innerHTML = countries[event.target.value].elements.year.y2018.civil_unrest;
        document.getElementById('war').innerHTML = countries[event.target.value].elements.year.y2018.war;
        document.getElementById('political').innerHTML = countries[event.target.value].elements.year.y2018.political;
        document.getElementById('srcc').innerHTML = countries[event.target.value].elements.year.y2018.srcc;
        document.getElementById('id-terrorism').innerHTML = countries[event.target.value].elements.year.y2018.id_terrorism;
      });

  


  var selectedCountry;
  console.log(countries);
  myearth.addEventListener('click', function (event) {
    if ( ! event.id || event.id == 'SEA' ) return; // no country hit
		
		
		// // toggle selection		
		// if ( selected_countries.indexOf(event.id) != -1 ) { // remove
		// 	selected_countries.splice(selected_countries.indexOf(event.id), 1);
		// } else { // add
		// 	selected_countries.push( event.id );
		// }
    // console.log(Object.keys(countries));
    // if ( selected_countries.length ) {
		
		// 	myearth.mapStyles = '#' + Object.keys(countries) + ' { fill: ' + countries[event.id].elements.colour + '; }';
		// 	// // show info
		// 	// document.getElementById( 'info' ).innerHTML = 'Selected: ' + selected_countries.join(', ');
			
		// } else {
		
		// 	myearth.mapStyles = '';
			
		// 	// // show info
		// 	// document.getElementById( 'info' ).innerHTML = 'no countries selected';
			
		// }
    // myearth.redrawMap();
      
    if (event.id) {
      
        if ( selectedCountry != event.id ) {
          selectedCountry = event.id;
          document.getElementById('country-name').innerHTML = countries[ event.id ];
          document.getElementById('country-name').innerHTML = countries[event.id].elements.name;
          document.getElementById('overall').innerHTML = countries[event.id].elements.year.y2018.overall;
          document.getElementById('terrorism').innerHTML = countries[event.id].elements.year.y2018.terrorism;
          document.getElementById('civil-unrest').innerHTML = countries[event.id].elements.year.y2018.civil_unrest;
          document.getElementById('war').innerHTML = countries[event.id].elements.year.y2018.war;
          document.getElementById('political').innerHTML = countries[event.id].elements.year.y2018.political;
          document.getElementById('srcc').innerHTML = countries[event.id].elements.year.y2018.srcc;
          document.getElementById('id-terrorism').innerHTML = countries[event.id].elements.year.y2018.id_terrorism;
        }
        //console.log(event.id);

      // if (selectedCountry != event.id) {
      //   selectedCountry = event.id;
        
      //   if (event.id === "AF") {
      //     //myearth.mapStyles = '#AF { fill:' + countries[event.id].elements.colour + '; }';
      //     document.getElementById('country-name').innerHTML = countries[event.id].elements.name;
      //     document.getElementById('country-risk').innerHTML = countries[event.id].elements.year.y2018.terrorism;
      //     //document.getElementById('country-name').innerHTML = countries[event.id].elements.name;
      //   }
      //   else {
      //     document.getElementById('country-name').innerHTML = countries[event.id];
      //   }
        
      //   document.getElementById('local-news').classList.add('has-news');
      //   document.getElementById('local-news').classList.toggle('toggle-news');
      // }
      // console.log(event.id);
      // create news marker on first click

      // if (!localNewsMarker) {

      //   localNewsMarker = this.addMarker({
      //     mesh: "Marker",
      //     color: '#257cff',
      //     location: event.location,
      //     scale: 0.01
      //   });

      //   localNewsMarker.animate('scale', 0.9, { easing: 'out-back' });

      // } else {

      //   localNewsMarker.animate('location', event.location, { duration: 200, relativeDuration: 50, easing: 'in-out-cubic' });

      // }

    }

  });
  


});


function highlightBreakingNews(event) {

  var overlay = event.target.closest('.earth-overlay').overlay;
  var newsId = overlay.newsId;

  document.getElementById('breaking-news-' + newsId).classList.add('news-highlight');
  setTimeout(function () {
    document.getElementById('breaking-news-' + newsId).classList.remove('news-highlight');
  }, 500);

  myearth.goTo(overlay.location, { duration: 250, relativeDuration: 70 });

  event.stopPropagation();
}

function gotoBreakingNews(newsId) {

  myearth.goTo(news[newsId].location, { duration: 250, relativeDuration: 70 });

}

function startReport(results) {

    let ReportWrapper = document.getElementById("sc-2021");

    // console.log("results:");
    // console.log(results);

    const [coverLogo, coverBG, linkLeft, linkRight] = results.cover.elements;

    const tocElements = results.toc.elements;

    const pages = results.pages;

    let tocLinks = tocElements.filter(function (e) {
        return e.name == 'toc_link';
    });

    const getButton = tocElements.filter(function (e) {
        return e.name == 'toc_back_link';
    });

    let tocButton = getButton[0].html;

    function tocLinkTemplate(tocLink, index) {
      index = index + 1;
      return `
          <li>
            <span>${index}</span><span>${tocLink.html}</span>
          </li>
      `;
    }


    function pageTemplate(page, index) {
      const elements = page.elements;
      index = index + 1;
      return `
          <div id="sc-art-${index}" class="sc-post">
            <div class="jumbotron jumbotron--header sc-bg-${page.color}">
              <img src="${elements[0].url}" alt="" />
            </div>
            <div class="container">
              ${elements[1].html}
              <div class="row sc-post__wrapper">
                <div class="sc-post__content col-md-7 col-md-offset-2">
                ${elements.map(pageContentTemplate).join("")}
                </div>
                <div class="aside__toc col-md-3 visible-md-block visible-lg-block">
                  <div class="toc__wrapper">
                    <ul class="toc__content toc__content--timeline">
                    ${tocLinks.map(function (link, i) {
                      let activeClass;
                      i = i + 1;
                      if (index === i) {
                        activeClass = 'active';
                      } else {
                        activeClass = '';
                      }
                      return `
                      <li class="tl-item ${activeClass}">
                        <div class="tl-dot">${i}</div>
                        <div class="tl-content">
                          ${link.html}
                        </div>
                      </li>
                      `;
                    }).join('')}
                    </ul>
                    <div class="toc__back ">${tocButton}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function pageContentTemplate(pageElements) {

      if (pageElements.type == "html" && pageElements.name !== "page_title")
      return `
            ${pageElements.html}
      `;
    }

    const coverOpen = `<div id="sc-cover"`;
    const cover = `<div class="jumbotron jumbotron--cover" style="background-image: url('assets/files/${coverBG.url}')";>
              <img src="./assets/files/${coverLogo.url}" alt="" />
            </div>
    `;

    const coverLinks = `
      <div class="row row-no-gutters sc-is-flex sc-is-flex-md">
        <div class="col-sm-6 sc-is-flex sc-is-flex-md">${linkLeft.html}</div>
        <div class="col-sm-6 sc-is-flex sc-is-flex-md">${linkRight.html}</div>
      </div>
    `;
    const close = `</div>`;

    const tocPage = `
      <div id="sc-toc" class="sc-page">
        <div class="container">
          <div class="row">
            <div class="col-md-10 col-md-offset-1">
              <h2 class="h1 sc-post__title">Contents</h2>
            </div>
            <div class="col-md-8 col-md-offset-2">
              <ul class="toc__content">
                ${tocLinks.map(tocLinkTemplate).join("")}
              </ul>
              <div class="toc__back ">${tocButton}</div>
          </div>
        </div>
      </div>
    </div>`;



    function renderReport() {
      document.getElementById("sc-2021").innerHTML = `
        ${coverLinks}
      `;
      setTimeout( function() { 
        console.log("Yay!! You win!");
      }, 1000);
    }

    renderReport();

}