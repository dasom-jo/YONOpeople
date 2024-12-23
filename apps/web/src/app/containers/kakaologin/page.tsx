import React, { useState } from "react";
import { kakaoLogin } from "../../../../../../packages/api/src/kakaoAuth";

const LoginScreen = () => {
  const [token, setToken] = useState<string>("");
  const [userInfo, setUserInfo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setError(null);
    try {
      const response = await fetch("https://kapi.kakao.com/v2/user/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user info from Kakao.");
      }

      const user = await response.json();
      setUserInfo(user);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Kakao Login</h1>
      <input
        style={styles.input}
        type="text"
        placeholder="Enter Kakao Token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <button style={styles.button} onClick={handleLogin}>
        Login
      </button>
      {userInfo && (
        <div style={styles.info}>
          <p style={styles.infoText}>User ID: {userInfo.id}</p>
          <p style={styles.infoText}>
            Nickname: {userInfo.properties?.nickname}
          </p>
        </div>
      )}
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  input: {
    width: "80%",
    height: "40px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "8px",
    marginBottom: "16px",
  },
  button: {
    width: "80%",
    height: "40px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "16px",
  },
  info: {
    marginTop: "16px",
    padding: "16px",
    backgroundColor: "#e6f7ff",
    borderRadius: "8px",
    width: "80%",
  },
  infoText: {
    fontSize: "16px",
  },
  error: {
    color: "red",
    marginTop: "8px",
  },
};

export default LoginScreen;
