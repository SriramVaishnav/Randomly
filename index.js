const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const { generateGamerTag, generatePassword, generatePetName, copyText } = require('./randomUtils');

app.set("view engine", "ejs");
app.use(express.static("public"));

let randomValue = "Your generated random appears here";

app.get("/", function(req, res) {
  res.render("index.ejs", { random: randomValue });
});

app.get("/generate/:type", async function(req, res) {
  const type = req.params.type;

  try {
    let randomData = "";

    if (type === "joke") {
      const response = await axios.get("https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky?blacklistFlags=nsfw,religious,political,explicit&type=single");
      randomData = response.data.joke;
    }
    else if (type === "baby-name") {
      const response = await axios.get("https://random-data-api.com/api/name/random_name");
      randomData = response.data.name;
    }
    else if (type === "company-name") {
      const response = await axios.get("https://random-data-api.com/api/company/random_company");
      randomData = response.data.business_name;
    }
    else if (type === "gamer-tag") {
      randomData = generateGamerTag();
    }
    else if (type === "password") {
      const response = await axios.get("https://random-data-api.com/api/internet_stuff/random_internet_stuff");
      randomData = response.data.password;
    }
    else if (type === "pet-name") {
      randomData = generatePetName();
    }
    else if (type === "pickup-line") {
      const response = await axios.get("https://vinuxd.vercel.app/api/pickup");
      randomData = response.data.pickup
    }
    else if (type === "quote") {
      const response = await axios.get("https://api.quotable.io/random");
      randomData = response.data.content
    }

    randomValue = randomData;
    res.send(randomData);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred");
  }
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
