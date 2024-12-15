import React from "react";
import { SafeAreaView, Text } from "react-native";
import { SharedButton } from "@my-monorepo/shared";

const App = () => {
  return (
    <SafeAreaView>
      <Text>왜안나오지지</Text>
      <SharedButton title="모바일에서 사용" />
    </SafeAreaView>
  );
};

export default App;
