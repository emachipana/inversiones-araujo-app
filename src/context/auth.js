import { useContext, useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../services";
import * as session from "../services/sessions";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetch() {
      try {
        const {_token, ...user} = await get("profile");
        setUser(user);
        setTimeout(() => setIsLoading(false), 500);
      }catch {
        setTimeout(() => setIsLoading(false), 500);
      }
    }

    fetch();
  }, []);

  async function login(credentials) {
    try {
      const response = await session.login(credentials);
      setUser(response);
      navigate("/");
    }catch(e) {
      setTimeout(() => setError(e.message), 500);
      setTimeout(() => setError(null), 5000);
    }
  }

  async function logout() {
    await session.logout();
    setUser(null);
    navigate("/");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        isLoading,
        setUser,
        setError,
        login,
        logout
      }}
    >
      { children }
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth }
