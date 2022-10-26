// var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
// var randomTopic = topics[Math.floor(Math.random() * topics.length)];

// function listTopics() {
//  for (var x = 0; x < topics.length; x++) {
//    console.log(topics[x]);
//  }
// }

// function selectTopic() {
//  if (randomTopic === 'HTML') {
//    console.log("Let's study HTML!");
//  } else if (randomTopic === 'CSS') {
//    console.log("Let's study CSS!");
//  } else if (randomTopic === 'Git') {
//    console.log("Let's study Git!");
//  } else if (randomTopic === 'JavaScript') {
//    console.log("Let's study JavaScript!");
//  } else {
//    console.log('Please try again!');
//  }
// }

// console.log('Here are the topics we learned through Prework:');
// listTopics();
// console.log('Which topic should we study first?');
// selectTopic();

const restaurantBaseUrl = "https://api.yelp.com/v3/businesses/search?categories=restaurants&locale=en_US&radius=4000";
const bearer = 'Bearer YXuzaCORAsgE_YQF8PMgLZRMg_UiY_7DfpnCEhGS3DOcGLNNrDAYk8BnEDAyj62rfOlD9Z5DSlGPFkc-lXFN-8zVtK3j65-x6mlxxc2ua3TnIWOEQvoRUqCelBVXY3Yx';

getRestaurants("noodles");

function getRestaurantResults(searchValue, userPosition) {
    console.log(userPosition);
    let lat=userPosition.latitude;
    let lon=userPosition.longitude;
    let searchUrl = restaurantBaseUrl+"&term="+searchValue+"&latitude="+lat+"&longitude="+lon;

    fetch(searchUrl, {
        // mode: 'no-cors',
        headers: {
            Authorization: bearer,
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': 'https://api.yelp.com'
          }
    })
  .then(response => console.log(response))
}


function getRestaurants(searchValue) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        let userPosition = {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
        }
        getRestaurantResults(searchValue, userPosition);
      });
    } else { 
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  function getPosition(position) {
    console.log("Latitude: " + position.coords.latitude)
    console.log("Longitude: " + position.coords.longitude);
    let userCoordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    }
    console.log(userCoordinates);
    return userCoordinates;
  }