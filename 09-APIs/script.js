//? XMLHttpRequest is a JavaScript object that allows you to make HTTP requests to retrieve data from a server asynchronously.
//? It is commonly used for AJAX (Asynchronous JavaScript and XML) operations, enabling web pages to update content without reloading the entire page.

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://randomuser.me/api/", true);

//? The onreadystatechange property of the XMLHttpRequest object is an event handler that is called whenever the readyState property changes.
xhr.onreadystatechange = function () {
  //? The readyState property of the XMLHttpRequest object holds the status of the XMLHttpRequest.
  //! The possible values are:
  //* 0: UNSENT - The request has not been opened yet.
  //* 1: OPENED - The request has been opened.
  //* 2: HEADERS_RECEIVED - The request has been sent, and the headers have been received.
  //* 3: LOADING - The response is being downloaded; responseText holds partial data.
  //* 4: DONE - The operation is complete.

  // console.log(xhr.readyState);
  if (xhr.readyState == 4) {
    //* Whenever we get a response in the form of a string, we can use JSON.parse() to convert it into a JavaScript object.
    //* This allows us to easily access and manipulate the data received from the API.
    //* JSON.parse() is a built-in JavaScript method that parses a JSON string and converts it into a JavaScript object.
    //* In this case, it is used to convert the JSON response received from the API into a JavaScript object that can be easily manipulated and accessed in the code. */
    //* The responseText property of the XMLHttpRequest object contains the response data as a string.

    const data = JSON.parse(xhr.responseText);
    // console.log(data);
    // console.log(data.results[0].name.first, data.results[0].name.last);
  }
};
xhr.send();

//*------------------------------------------------------HITESH ----------------------------------------------------------------- */
const hitesh = new XMLHttpRequest();

const hiteshDiv = document.querySelector(".hiteshJi");
const Person = document.querySelector(".name");
const Follower = document.querySelector(".followers");
const Avatar = document.querySelector(".img");


let img = document.createElement("img");

const btn = document.querySelector('.btn');

hitesh.open("GET", "https://api.github.com/users/hiteshchoudhary", true);




btn.addEventListener('click', ()=> {
    hitesh.onreadystatechange = function () {
  if (hitesh.readyState === 4 && hitesh.status === 200) {
    if(hitesh.status === 200){
        const data = JSON.parse(hitesh.responseText);
    console.log(data);
    console.log(data.name);
    Person.innerHTML = data.name;

    console.log("Followers: ", data.followers);
    Follower.innerHTML = `Followers: ${data.followers}`;
    console.log("Image URL: ", data.avatar_url);


    
    img.src = data.avatar_url;
    img.alt = "Hitesh Choudhary";

    Avatar.appendChild(img);
    }
     else {
    console.error("Request failed. Status:", hitesh.status);
  }
  }
};
hitesh.send();
})