import React from "react";
import { NativeBaseProvider, Box, Button } from "native-base";

export default function NativeBasePage() {
  return (
    <NativeBaseProvider>
      <Box
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button shadow={2} onPress={() => console.log("hello world")}>
          Click me
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}
