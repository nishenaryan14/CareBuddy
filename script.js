

const newsCard = document.getElementsByClassName('newscard');
const button = document.getElementById('seeAll');
const newsLink = [];
const api_key = "7b406ce845b64422bb4c0ca7d7e1525b";
country = "in"
const getNews = ()=>{
  const url = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=7b406ce845b64422bb4c0ca7d7e1525b"
  fetch(url).then((api_data)=>{
    return api_data.json();
  })
  .then((actual_data)=>{
    console.log(actual_data);
    const articles = actual_data.articles;
    console.log(articles);
    createCards(articles);
  })
}

getNews();


//fetching data of top nurses around you

const topNurseData = ()=>{
  const url = "http://192.168.53.37:8080/api/user/get-top-nurses/94043"
  fetch(url,{
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://127.0.0.1:5500'
    },
  })
  .then((api)=>{
    console.log("fetching top nurses api")
    return api.json();
  })
  .then((actual_data)=>{
    console.log(actual_data);
  })
  .catch((err)=>{
    console.log('error is ${err}');
  });
}

topNurseData();
  // Function to create dynamic cards
function createCards(data) {
  const cardContainer = document.getElementById('card-news');

  // Loop through the data and create cards
  if(cardContainer){
    
    let count = 0
    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('col-lg-4');
      card.classList.add('newscard');
      const cardContent = `
      <p>${item.title}</p>
      <img src="${item.urlToImage}">
      `;    
      card.innerHTML = cardContent;
      cardContainer.appendChild(card);
      if(cardContainer.children.length>5){
        card.classList.add('displayLess');
      }
      count += 1;
      fullview(card);
      card.addEventListener('click',()=>{
        window.location.href = item.url;
      })
    });
  }
  else{
    console.error("Error: 'card-container' element not found.");
  }
}

function fullview(temp){
  button.addEventListener('click',()=>{
    console.log(button.innerHTML);
    temp.classList.toggle('displayLess');
      // if(button.innerHTML==="seeAll"){
      //   temp.classList.remove('displayLess');
      //   button.innerHTML="seeLess";
      // }
      // else{
      //   temp.classList.add('displayLess');
      //   button.innerHTML="seeAll";
      // }
  })
}





const cardBookings = [
  {
    title: "Card 1",
    bookingDate: "2023-07-29",
    bookingTime: "03:00 PM "
  },
  {
    title: "Card 2",
    bookingDate: "2023-07-30",
    bookingTime: "1:00 PM"
  },
  {
      title: "Card 3",
      bookingDate: "2023-08-08",
      bookingTime: "10:00 AM"
  }
  // Add more card objects as needed
];

const cardData = [
    {
      title: "Card 1",
      rating:"4.9",
      description: "This is a dummy data about nurse.She has 8 years of experience in her field.",
      imageUrl: "https://media.nurse.org/cache/29/98/299888758a4f8e05992ac2cbf942215f.jpg",
      speciality:["Baby Care","Alzheimer's","Post Surgery"]
    },
    {
      title: "Card 2",
      rating:"4.8",
      description: "This is a dummy data about nurse.She has 8 years of experience in her field.",
      imageUrl: "https://www.1nurse.com/blog/media/filer_public/cb/cc/cbcc3e1a-f645-4f14-a621-71b3077ce052/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg",
      speciality:["Elder Care","Alzheimer's"]
    },
    {
      title: "Card 3",
      rating:"4.6",
      description: "This is a dummy data about nurse.She has 8 years of experience in her field.",
      imageUrl: "https://images.ctfassets.net/wp1lcwdav1p1/4Dr0xobYqWZ6D9cXSixkps/62b0c83704d5eece88719b93b7f2b15b/GettyImages-1292777549__5_.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive",
      speciality:["Baby Care","Alzheimer's","Post Surgery"]
    },
    {
      title: "Card 4",
      rating:"4.9",
      description: "This is a dummy data about nurse.She has 8 years of experience in her field.",
      imageUrl: "https://i.guim.co.uk/img/media/4fdec73d03d5e50abff22ed5afea103cf854162e/0_22_7360_4417/master/7360.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0c4163a67cfa0e5631d1cf284a975dba",
      speciality:["Elder Care","Alzheimer's","Post Surgery"]
    }
    // Add more card objects as needed
  ];

  const cardNews = [
    {
      title: "Card 1",
      description: "This is the content of Card 1.",
      imageUrl: "https://example.com/card1-image.jpg"
    },
    {
      title: "Card 2",
      description: "This is the content of Card 2.",
      imageUrl: "https://example.com/card2-image.jpg"
    },
    {
        title: "Card 3",
        description: "This is the content of Card 2.",
        imageUrl: "https://example.com/card2-image.jpg"
    },
    {
        title: "Card 4",
        description: "This is the content of Card 2.",
        imageUrl: "https://example.com/card2-image.jpg"
    }
    // Add more card objects as needed
  ];
// document.addEventListener("DOMContentLoaded", function () {
//     // Get the card container element

// });
const cardBooking = [];
const createBookingCard = ()=>{
  const cardContainer = document.getElementById("card-bookings");
  
  if(cardContainer){

    // cardContainer.innerHTML = ""; // Clear existing cards before adding new ones

    const cardBooking = getCardBookingsFromSessionStorage(); // Retrieve the array from Local Storage
    cardBookings.push(...cardBooking);
    // Loop through the cardData array and create cards
    for (const card of cardBookings) {
      // Create a card element
      const cardElement = document.createElement("div");
      cardElement.classList.add("bookings-card");
      
      // Create card content
      const cardTitle = document.createElement("h2");
      cardTitle.textContent = card.title;
      
      const cardDate = document.createElement("p");
      cardDate.textContent = card.bookingDate;
      
      const cardTime = document.createElement("p");
      cardTime.textContent = card.bookingTime;

      // const cardImage = document.createElement("img");
      // cardImage.src = card.imageUrl;
      // cardImage.alt = card.title;
      
      // Append card content to the card element
      cardElement.appendChild(cardTitle);
      cardElement.appendChild(cardDate);
      cardElement.appendChild(cardTime);
      // cardElement.appendChild(cardImage);
      
      // Append the card element to the card container
      cardContainer.appendChild(cardElement);
    }
    console.log(cardBookings);
  }
  else{
    console.error("Error: 'card-container' element not found.");
  }
}

function getCardBookingsFromSessionStorage() {
  const cardBookingsJSON = sessionStorage.getItem("cardBooking");
  return cardBookingsJSON ? JSON.parse(cardBookingsJSON) : [];
}

createBookingCard();
  // Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Get the card container element
    const cardContainer = document.getElementById("card-container");
    if(cardContainer){
      
      // Loop through the cardData array and create cards
      for (const card of cardData) {
        // Create a card element
        if (!Array.isArray(card.speciality)) {
          console.error(`Error: 'speciality' property for '${card.title}' is not an array.`);
          continue; // Skip this card and continue with the next one
        }
        const cardElement = document.createElement("div");
        cardElement.classList.add("col-lg-3")
        cardElement.classList.add("top-nurses-card");
        
        // Create card content
        const nurse = document.createElement("div");
        nurse.classList.add("nurse-div");  // for making flex with row flex
        const nurseName = document.createElement("div");
        nurseName.classList.add("nurse-name-rating"); //for making flex with column flex
        const nurseImage = document.createElement("div");
        nurseImage.classList.add("nurse-img");
        const nurseDetails = document.createElement("div");
        nurseDetails.classList.add("nurse-details"); //for making flex column

        const nurseSpeciality = document.createElement("div");
        nurseSpeciality.classList.add("nurse-speciality"); //for making flex column

        const cardTitle = document.createElement("h2");
        cardTitle.textContent = card.title;
        
        const cardRating = document.createElement("h6");
        cardRating.textContent = card.rating;

        nurseName.appendChild(cardTitle);
        nurseName.appendChild(cardRating);

        const cardDescription = document.createElement("p");
        cardDescription.textContent = card.description;
        nurseDetails.appendChild(cardDescription);
        const cardImage = document.createElement("img");
        cardImage.src = card.imageUrl;
        cardImage.alt = card.title;
        nurseImage.appendChild(cardImage);
        nurse.appendChild(nurseName);
        nurse.appendChild(nurseImage);


        for(const box of card.speciality){
          // console.log(box);
          const specialityBox = document.createElement("div");
          specialityBox.classList.add("speciality");
          specialityBox.textContent = box;
          console.log(specialityBox.textContent);
          nurseSpeciality.appendChild(specialityBox);
        }
        nurseDetails.appendChild(nurseSpeciality);
        // nurse.appendChild(nurseDetails)
      // Append card content to the card element
      // cardElement.appendChild(cardTitle);
      cardElement.appendChild(nurse);
      cardElement.appendChild(nurseDetails);
      // cardElement.appendChild(cardImage);
  
      // Append the card element to the card container
      cardContainer.appendChild(cardElement);
      console.log(card.speciality)
      cardElement.addEventListener('click',()=>{
        getNurseDetail(card)
        .catch(error => {
          console.error("Error occurred while fetching nurse details:", error);
          // Handle the error gracefully, show a message, or perform other actions.
        });
      })
    }
    
    
  }
    else{
      console.error("Error: 'card-container' element not found.");
    }
  });


  const getNurseDetail = async(card) => {
    // Convert the card details to a URL query parameter string
    await new Promise(resolve => setTimeout(resolve, 1000));
    const queryParams = new URLSearchParams({
      title: card.title,
      rating:card.rating,
      description: card.description,
      imageUrl: card.imageUrl,
      speciality:card.speciality.join(",")

    });
  
    // Redirect to the nurseInfo.html page with the query parameter
    window.location.href = `nurseInfo.html?${queryParams}`;
  };

  document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const bookingbutton = document.getElementById('book');
    const BookingDate = document.getElementById('appointmentDate');
    const BookingTime = document.getElementById('appointmentTime');
    const cardTitleElement = document.getElementById("cardTitle");
    const cardDescriptionElement = document.getElementById("cardDescription");
    const cardImageElement = document.getElementById("cardImage");
    const cardSpecialityElement = document.getElementById("cardSpeciality");
    const cardRatingElement = document.getElementById("cardRating");
  
    const title = urlParams.get("title");
    const description = urlParams.get("description");
    const imageUrl = urlParams.get("imageUrl");
    const speciality = urlParams.get("speciality"); // Convert the comma-separated string back to an array
    const rating = urlParams.get("rating");
  
    cardTitleElement.textContent = title;
    cardDescriptionElement.textContent = description;
    cardImageElement.src = imageUrl;
    cardRatingElement.textContent = rating;
  
    // Display the nurse's speciality in the cardSpecialityElement
    if (cardSpecialityElement && speciality) {

      const specialityList = document.createElement("div");
      specialityList.classList.add("nurse-speciality");
      const specialities = speciality.split(",");
      for (const specialityItem of specialities) {
        const listItem = document.createElement("div");
        listItem.classList.add("speciality");
        listItem.textContent = specialityItem;
        specialityList.appendChild(listItem);
      }
      cardSpecialityElement.appendChild(specialityList);
    }
    
    document.getElementById("appointmentForm").addEventListener("submit", function (event) {
      event.preventDefault();

      // Get input values for the new card
      const title = cardTitleElement.innerHTML;
      const bookingDate = BookingDate.value;
      const  bookingTime = BookingTime.value;

      const existingCardBookings = getCardBookingsFromSessionStorage();
      // Add the new card object to the array
      existingCardBookings.push({ title, bookingDate, bookingTime });
      sessionStorage.setItem("cardBooking", JSON.stringify(existingCardBookings));
      console.log(cardBookings);
      // Redirect back to the main page (index.html) to see the new card
      window.location.href = "index.html";
    });
    });
  
      // const cardBookings = [];
  
    // document.addEventListener("DOMContentLoaded", function () {
    //   const urlParams = new URLSearchParams(window.location.search);
    //   const cardContainer = document.getElementById('card-bookings');
      
    
    //   const nurseName = urlParams.get("name");
    //   const date = urlParams.get("bookingDate");
    //   const time = urlParams.get("bookingTime");

    //   cardBookings.push({nurseName,date,time});
    //   cardBookings.forEach(booking=>{

    //     const cardElement = document.createElement("div");
    //     cardElement.classList.add("bookings-card");
        
    //     // Create card content
    //     const nurseNameElement = document.createElement("h2");
    //     nurseNameElement.textContent =booking.nurseName;
        
    //     const dateElement = document.createElement("p");
    //     dateElement.textContent = "Date: " + booking.date;
        
    //     const timeElement = document.createElement("p");
    //     timeElement.textContent = "Time: " + booking.time;
        
    //     // Append card content to the card element
    //     cardElement.appendChild(nurseNameElement);
    //     cardElement.appendChild(dateElement);
    //     cardElement.appendChild(timeElement);
        
    //     // Append the card element to the card container or page
    //     cardContainer.appendChild(cardElement);
    //   })
  

    // });



// Function to update a booking card's details
function updateBookingCard(nurseName, date, time) {
  const cardToUpdate = cardBookings.find((booking) => booking.nurseName === nurseName);
  if (cardToUpdate) {
    cardToUpdate.date = date;
    cardToUpdate.time = time;

    // Update the card's DOM elements with new details (optional)
    const cardElement = document.querySelector(`.booking-card h2:contains(${nurseName})`);
    if (cardElement) {
      const dateElement = cardElement.nextElementSibling;
      const timeElement = dateElement.nextElementSibling;
      dateElement.textContent = "Date: " + date;
      timeElement.textContent = "Time: " + time;
    }
  } else {
    console.warn("No booking found for nurse: " + nurseName);
  }
}

// Example usage:
// createBookingCard("Nurse A", "2023-07-25", "09:00 AM");
// createBookingCard("Nurse B", "2023-07-26", "02:00 PM");

// // Update Nurse B's booking details
// updateBookingCard("Nurse B", "2023-07-28", "10:30 AM");










//   document.addEventListener("DOMContentLoaded", function () {
//     // Get the card container element
//     const cardContainer = document.getElementById("card-news");
  
//     // Loop through the cardData array and create cards
//     for (const card of cardNews) {
//       // Create a card element
//       const cardElement = document.createElement("div");
//       cardElement.classList.add("newscard");
  
//       // Create card content
//       const cardTitle = document.createElement("h2");
//       cardTitle.textContent = card.title;
  
//       const cardDescription = document.createElement("p");
//       cardDescription.textContent = card.description;
  
//       const cardImage = document.createElement("img");
//       cardImage.src = card.imageUrl;
//       cardImage.alt = card.title;
  
//       // Append card content to the card element
//       cardElement.appendChild(cardTitle);
//       cardElement.appendChild(cardDescription);
//       cardElement.appendChild(cardImage);
  
//       // Append the card element to the card container
//       cardContainer.appendChild(cardElement);
//     }
// }); 