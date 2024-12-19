import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface ButtonProps {
  onPress?: () => void;
  children: React.ReactNode;
  style?: object; // 추가 스타일링을 위한 옵션
}

export const BasicButton = ({ onPress, children, style }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]} // 기본 스타일과 외부에서 전달된 스타일 병합
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#71C4E0", // 기본 버튼 배경색
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF", // 텍스트 색상
    fontSize: 18,
  },
});



//버튼 사용법
//<BasicButton className="btn">버튼입니다</BasicButton>