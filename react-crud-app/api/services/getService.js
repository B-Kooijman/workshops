const fetch = require("node-fetch");
const baseUrl = process.env.DATABASE_URL;
const jobsUrl = `${baseUrl}/jobs`;

async function fetchResults(url, message = "") {
  const result = await fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
  }).then((response) => {
    if(!response) {
      return message;
    }
    return response
  });
  return result;
}

const getAll = async () => await fetchResults(jobsUrl, `Oops... no results found.`);
const getById = async (id) => await fetchResults(`${jobsUrl}/${id}`, `Oops... result with id: ${id} is not found`);
const getByCategory = async (category) => await fetchResults(`${jobsUrl}?category=${category}`, `Oops... no results found with category id: ${id}`);

module.exports = {
  getAll: getAll,
  getById: getById,
  getByCategory: getByCategory,
}