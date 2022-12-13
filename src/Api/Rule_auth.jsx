import API from "./Rule_api";

const Rule_auth = {
  userLogin: async (userCredentials) => {
    const url = "/api/users/login";
    return await API.post(url, userCredentials)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        return response.data;
      })
      .catch((error) => {
        throw error.response.data.error;
      });
  },

  userRegister: async (newUserCredentials) => {
    const url = "/api//users/register";
    return await API.post(url, newUserCredentials)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data.error;
      });
  },

  isAuth: () => {
    if (typeof window !== "undefined") {
      const tokenChecked = localStorage.getItem("token"); //compruebo que el usuario esté autenticado
      if (tokenChecked) {
        return true;
      } else {
        return false;
      }
    }
  },
};

export default Rule_auth;
