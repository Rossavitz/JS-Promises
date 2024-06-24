let url = "http://numbersapi.com";
let favoriteNumber = 2;

// async function randomNumber() {
//   let response = await axios.get(`${url}/random?json`);
//   console.log(response);
// }
// randomNumber();

async function manyRandom() {
  axios
    .get(`${url}/random?json`)
    .then((n1) => {
      console.log(n1.data.text);
      $("body").append(`<p>${n1.data.text}</p>`);
      return axios.get(`${url}/random?json`);
    })
    .then((n2) => {
      console.log(n2.data.text);
      $("body").append(`<p>${n2.data.text}</p>`);
      return axios.get(`${url}/random?json`);
    })
    .then((n3) => {
      console.log(n3.data.text);
      $("body").append(`<p>${n3.data.text}</p>`);
      return axios.get(`${url}/random?json`);
    });
}

manyRandom();

async function manyFavorite() {
  axios
    .get(`${url}/${favoriteNumber}?json`)
    .then((n1) => {
      console.log(n1.data.text);
      $("ul").append(`<li>${n1.data.text}</li>`);
      return axios.get(`${url}/${favoriteNumber}?json`);
    })
    .then((n2) => {
      console.log(n2.data.text);
      $("ul").append(`<li>${n2.data.text}</li>`);
      return axios.get(`${url}/${favoriteNumber}?json`);
    })
    .then((n3) => {
      console.log(n3.data.text);
      $("ul").append(`<li>${n3.data.text}</li>`);
      return axios.get(`${url}/${favoriteNumber}?json`);
    })
    .then((n4) => {
      console.log(n4.data.text);
      $("ul").append(`<li>${n4.data.text}</li>`);
      return axios.get(`${url}/${favoriteNumber}?json`);
    });
}

manyFavorite();
