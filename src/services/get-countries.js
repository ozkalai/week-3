import axios from "axios";

export const getAllCountries = async () => {
  try {
    const response = await axios.get("https://restcountries.eu/rest/v2/all");
    return response;
  } catch (error) {
    console.error(error);
  }
};
