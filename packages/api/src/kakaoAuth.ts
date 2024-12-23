import { Platform } from "react-native";

export async function kakaoLogin(token: string) {
  if (Platform.OS === "web") {
    // 웹 전용 로직
    return webKakaoLogin(token);
  } else {
    // 모바일 전용 로직
    return mobileKakaoLogin(token);
  }
}

async function webKakaoLogin(token: string) {
  const response = await fetch("https://kapi.kakao.com/v2/user/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user info from Kakao (Web).");
  }

  return await response.json();
}

async function mobileKakaoLogin(token: string) {
  // 모바일 전용 API 로직 (예: react-native-kakao-login 등 사용)
  return { success: true }; // 가상 응답
}
