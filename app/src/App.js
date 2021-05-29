import * as React from "react";
import Box from "@material-ui/core/Box";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

export default function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vH" }}>
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Content />
      </Box>
      <Footer />
    </Box>
  );
}
