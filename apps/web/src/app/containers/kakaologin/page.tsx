import React, { useState } from "react";
import {KakaoLogin} from "../../../../../../packages/ui/src/KaKaoLogin"

const LoginScreen = () => {
  // const [token, setToken] = useState<string>("");
  // const [userInfo, setUserInfo] = useState<any>(null);
  // const [error, setError] = useState<string | null>(null);

  // const handleLogin = async () => {
  //   setError(null);
  //   try {
  //     const response = await fetch("https://kapi.kakao.com/v2/user/me", {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch user info from Kakao.");
  //     }

  //     const user = await response.json();
  //     setUserInfo(user);
  //   } catch (e: any) {
  //     setError(e.message);
  //   }
  // };

  return (
    <div >
      <KakaoLogin  children={"카카오 로그인"}/>
      {/* <input
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
            Nickname: {userInfo.properties?.nickname}2
          </p>
        </div>
      )}
      {error && <p style={styles.error}>{error}</p>} */}
    </div>
  );
};

export default LoginScreen;
