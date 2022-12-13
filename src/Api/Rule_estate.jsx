import API from "./Rule_api";

const Rule_estate = {
  newEstate: async (newEstateInfo) => {
    const url = "/api/estates/newPublication";
    return await API.post(url, newEstateInfo)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data.error;
      });
  },
  getEstates: async () => {
    const url = "/api/estates/publications";
    return await API.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data.error;
      });
  },
  getEstatesById: async (id) => {
    const url = `/api/estates/publications/${id}`;
    return await API.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data.error;
      });
  },
  getEstatesBySearchBar: async (data) => {
    const url = "/api/estates/searchBar";
    return await API.post(url, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data.error;
      });
  },
};

export default Rule_estate;
