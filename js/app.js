var searchForm = document.querySelector('#search-form');
var tableBody = document.querySelector('#data')
var buttonSubmit = document.querySelector('#button')

var apiKey = "14776119d3c0796c7ba34b2251d8f8b6";
var city = "san diego";
var state;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;




fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('City: \n----------');
      console.log(data.name);
      var name = data.name;
      var temp = data.main.temp;
      var disName = document.createAttribute('h2');
      var listInfo = document.createAttribute('p');
      disName.textContent = name;
      listInfo.textContent = temp;
      tableBody.append(disName);

  });


// function getApi () {
// fetch(queryURL)
//     .then(function (data) {
//         console.log(data);

//         for (var i = 0; i < data.length; i++) {
//             // Creating elements, tablerow, tabledata, and anchor
//             var createTableRow = document.createElement('tr');
//             var tableData = document.createElement('td');
//             var link = document.createElement('a');
    
//             // Setting the text of link and the href of the link
//             link.textContent = data[i].html_url;
//             link.href = data[i].html_url;
    
//             // Appending the link to the tabledata and then appending the tabledata to the tablerow
//             // The tablerow then gets appended to the tablebody
//             tableData.appendChild(link);
//             createTableRow.appendChild(tableData);
//             tableBody.appendChild(createTableRow);
//           }
//     })
// }

// buttonSubmit.addEventListener('click', getApi)



// function handleSearchFormSubmit (event) {
//     event.preventDefault();

//     var searchInputVal = document.querySelector('#search-input').value;
//     var formatInputVal = document.querySelector('#format-input').value;

//     if (!searchInputVal) {
//         console.error('You need a search input value!');
//         return;
//     }

// }


