import React from "react";
import { NativeBaseProvider, Box, Button } from "native-base";

export default function NativeBasePage() {
  return (
    <NativeBaseProvider>
      <Box
        style={{
          height: "100%",
          display: "flex",
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
