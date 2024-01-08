import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({});

import { api, createSession } from "../services/api";

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("sessions", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("@food_explorer:user", JSON.stringify(user));
      localStorage.setItem("@food_explorer:token", token);

      createSession(token);

      setData({ token, user });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@food_explorer:token");
    localStorage.removeItem("@food_explorer:user");
    localStorage.removeItem("@food_explorer:orders");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@food_explorer:token");
    const user = localStorage.getItem("@food_explorer:user");

    if (token && user) {
      createSession(token);

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
