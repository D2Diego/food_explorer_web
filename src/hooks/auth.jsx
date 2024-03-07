import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const updateApiHeaders = (token) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  const executeLoading = async (action) => {
    try {
      setLoading(true);
      await action();
    } catch (error) {
      alert(
        error.response
          ? error.response.data.message
          : "Não foi possível completar a operação."
      );
    } finally {
      setLoading(false);
    }
  };

  const signIn = ({ email, password }) =>
    executeLoading(async () => {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);

      updateApiHeaders(token);
      setData({ user, token });
    });

  const signOut = () => {
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:user");
    setData({});
  };

  const updateProfile = ({ user, avatarFile }) =>
    executeLoading(async () => {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      setData({ user, token: data.token });
      alert("Perfil atualizado com sucesso!");
    });

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");

    if (token && user) {
      updateApiHeaders(token);
      setData({ token, user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        loading,
        updateProfile,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
