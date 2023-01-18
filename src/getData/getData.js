const axios = require("axios");
const mapArrToStrings = require("../mapArrToStrings/mapArrToStrings");

const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const titlePosts = response.data.map((post) => post.id);
    return mapArrToStrings(titlePosts);
  } catch (e) {}
};

module.exports = getData;
