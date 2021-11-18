//replace with your user:
const GITHUB_URL = "https://api.github.com/users/Spifet";

//fetch/gets through GitHub's API of my GitHub's User info
//and returns it, and redirects through data for processing
//creates a const for the ID holding the profile image
//replaces the image source with my GitHub's User Picture src

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
  });

//Similar to previous but this one uses Github's API
//of my GitHub's User info to get Name property
//holding the Public Name and replaces #myName's text with it

  fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileName = document.getElementById("myName");
    profileName.innerText = data.name;
  });
