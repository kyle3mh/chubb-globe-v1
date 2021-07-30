/*
 *
 * CHUBB
 * Global Terrorism Risk Heatmap
 *
 * ©2021 Raconteur Media Ltd.
 *
 * */





var myearth;
var selected_countries = [];


console.log(Object.keys(countries));



const lowRisk = "#6E27C5";
const moderateRisk = "#24388D";
const elevatedRisk = "#17B8D4";
const highRisk = "#86BC25";
const veryHighRisk = "#FFB617";
const severeRisk = "#FF6600";
const extremeRisk = "#F1352B";

window.addEventListener("earthjsload", function () {


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
      else {
        var countryRiskColour = "#333333";
      }
      countryColours2018 += '#' + `${property} { fill: ${countryRiskColour}; } `;
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
      else {
        var countryRiskColour = "#333333";
      }
      countryColours2019 += '#' + `${property} { fill: ${countryRiskColour}; } `;
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
      else {
        var countryRiskColour = "#333333";
      }
      countryColours2020 += '#' + `${property} { fill: ${countryRiskColour}; } `;
    }

    var countryColours2021 = "";
    for (const property in countries) {
      overallRisk = countries[property].elements.year.y2021.overall;
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
      else {
        var countryRiskColour = "#333333";
      }
      countryColours2021 += '#' + `${property} { fill: ${countryRiskColour}; } `;
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
    mapStyles: countryColours2021,
    //mapStyles : '#' + Object.keys(countries) + ' { fill: ' + countries.elements.colour + '; }',
    mapHitTest: true,
    
    autoRotate: false,
    autoRotateSpeed: 0.7,
    autoRotateDelay: 4000,

  });

  

    // for (const property in locations) {
    //   overallRisk = countries[property].elements.year.y2020.overall;
   
    // }

    var countryCode;

    const selectCountry = document.getElementById('country-select');

    selectCountry.addEventListener('change', (event) => {
        //const result = document.querySelector('.result');
        console.log(event.target.value);
        countryCode = event.target.value;
        console.log(Object.keys(locations));
        
        var latLong = locations[event.target.value];   // value2
        //console.log(latLing[0]);
        myearth.goTo( { lat: latLong[0], lng: latLong[1] }, { relativeDuration: 100, approachAngle: 0 } ); 
        //myearth.mapStyles = `${event.target.value}`; 
        document.getElementById('country-name').innerHTML = countries[event.target.value].elements.name;
        document.getElementById("year").selectedIndex = 0; //set year filter to 2021
        if (countries[event.target.value].elements.year.y2018.overall != undefined) {
          document.getElementById("risk").style.display = "block";
          document.getElementById('overall').innerHTML = countries[event.target.value].elements.year.y2021.overall;
          document.getElementById('terrorism').innerHTML = countries[event.target.value].elements.year.y2021.terrorism;
          document.getElementById('civil-unrest').innerHTML = countries[event.target.value].elements.year.y2021.civil_unrest;
          document.getElementById('war').innerHTML = countries[event.target.value].elements.year.y2021.war;
          document.getElementById('political').innerHTML = countries[event.target.value].elements.year.y2021.political;
        }
        
        else if (countries[event.target.value].elements.year.y2018.overall === undefined) {
          
          document.getElementById("risk").style.display = "none";
        }
        document.getElementById('srcc').innerHTML = countries[event.target.value].elements.year.y2021.srcc;
        document.getElementById('id-terrorism').innerHTML = countries[event.target.value].elements.year.y2021.id_terrorism;

       
      });

      // the year select
    const selectElement = document.querySelector('.year-filter');

    selectElement.addEventListener('change', (event) => {
      console.log(countryCode);
      var year = event.target.value;
      console.log(year);

      switch (year) {

        case "2018":
          myearth.mapStyles = countryColours2018;
          myearth.redrawMap();
          document.getElementById('overall').innerHTML = countries[countryCode].elements.year.y2018.overall;
          document.getElementById('terrorism').innerHTML = countries[countryCode].elements.year.y2018.terrorism;
          document.getElementById('civil-unrest').innerHTML = countries[countryCode].elements.year.y2018.civil_unrest;
          document.getElementById('war').innerHTML = countries[countryCode].elements.year.y2018.war;
          document.getElementById('political').innerHTML = countries[countryCode].elements.year.y2018.political;
          document.getElementById('srcc').innerHTML = countries[countryCode].elements.year.y2018.srcc;
          document.getElementById('id-terrorism').innerHTML = countries[countryCode].elements.year.y2018.id_terrorism;
         
          break;

        case "2019":
          myearth.mapStyles = countryColours2019;
          myearth.redrawMap();
          document.getElementById('overall').innerHTML = countries[countryCode].elements.year.y2019.overall;
          document.getElementById('terrorism').innerHTML = countries[countryCode].elements.year.y2019.terrorism;
          document.getElementById('civil-unrest').innerHTML = countries[countryCode].elements.year.y2019.civil_unrest;
          document.getElementById('war').innerHTML = countries[countryCode].elements.year.y2019.war;
          document.getElementById('political').innerHTML = countries[countryCode].elements.year.y2019.political;
          document.getElementById('srcc').innerHTML = countries[countryCode].elements.year.y2019.srcc;
          document.getElementById('id-terrorism').innerHTML = countries[countryCode].elements.year.y2019.id_terrorism;
          break;

        case "2020":
          myearth.mapStyles = countryColours2020;
          myearth.redrawMap();
          document.getElementById('overall').innerHTML = countries[countryCode].elements.year.y2020.overall;
          document.getElementById('terrorism').innerHTML = countries[countryCode].elements.year.y2020.terrorism;
          document.getElementById('civil-unrest').innerHTML = countries[countryCode].elements.year.y2020.civil_unrest;
          document.getElementById('war').innerHTML = countries[countryCode].elements.year.y2020.war;
          document.getElementById('political').innerHTML = countries[countryCode].elements.year.y2020.political;
          document.getElementById('srcc').innerHTML = countries[countryCode].elements.year.y2020.srcc;
          document.getElementById('id-terrorism').innerHTML = countries[countryCode].elements.year.y2020.id_terrorism;
          break;
        
        case "2021":
          myearth.mapStyles = countryColours2021;
          myearth.redrawMap();
          document.getElementById('overall').innerHTML = countries[countryCode].elements.year.y2021.overall;
          document.getElementById('terrorism').innerHTML = countries[countryCode].elements.year.y2021.terrorism;
          document.getElementById('civil-unrest').innerHTML = countries[countryCode].elements.year.y2021.civil_unrest;
          document.getElementById('war').innerHTML = countries[countryCode].elements.year.y2021.war;
          document.getElementById('political').innerHTML = countries[countryCode].elements.year.y2021.political;
          document.getElementById('srcc').innerHTML = countries[countryCode].elements.year.y2021.srcc;
          document.getElementById('id-terrorism').innerHTML = countries[countryCode].elements.year.y2021.id_terrorism;
          break;

        default:
          myearth.mapStyles = countryColours2021;
      }
      
    });


  var selectedCountry;
  console.log(countries);
  myearth.addEventListener('click', function (event) {
    if ( ! event.id || event.id == 'SEA' ) return; // no country hit
		
      
    if (event.id) {
        countryCode = event.id;
        if ( selectedCountry != event.id ) {
          document.getElementById("year").selectedIndex = 0; //set year filter to 2021
          selectedCountry = event.id;
          if (countries[selectedCountry].elements.year.y2018.overall != undefined) {
            document.getElementById("risk").style.display = "block";
            document.getElementById('country-name').innerHTML = countries[ event.id ];
            document.getElementById('country-name').innerHTML = countries[event.id].elements.name;
            document.getElementById('overall').innerHTML = countries[event.id].elements.year.y2021.overall;
            document.getElementById('terrorism').innerHTML = countries[event.id].elements.year.y2021.terrorism;
            document.getElementById('civil-unrest').innerHTML = countries[event.id].elements.year.y2021.civil_unrest;
            document.getElementById('war').innerHTML = countries[event.id].elements.year.y2021.war;
            document.getElementById('political').innerHTML = countries[event.id].elements.year.y2021.political;

          }
          else if (countries[selectedCountry].elements.year.y2018.overall === undefined) {
            
            document.getElementById("risk").style.display = "none";
          }
          document.getElementById('country-name').innerHTML = countries[event.id].elements.name;
          document.getElementById('srcc').innerHTML = countries[event.id].elements.year.y2021.srcc;
          document.getElementById('id-terrorism').innerHTML = countries[event.id].elements.year.y2021.id_terrorism;
        }

    }

  });
  


});




