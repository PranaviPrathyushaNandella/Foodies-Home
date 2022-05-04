import axios from "axios";
const options = {
  method: "GET",
  url: "https://pizza-and-desserts.p.rapidapi.com/desserts",
  headers: {
    "X-RapidAPI-Host": "pizza-and-desserts.p.rapidapi.com",
    "X-RapidAPI-Key": "c2e99008ebmsh51d0067c4677674p1a4af5jsn2b64ff407970",
  },
};

axios.request(options).then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

  export default options;
