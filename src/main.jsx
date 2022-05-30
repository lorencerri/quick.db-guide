import React from "react";
import { MantineProvider } from "@mantine/core";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const theme = { colorScheme: "dark", fontFamily: "Source Sans Pro" };

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MantineProvider theme={theme}>
            <App />
        </MantineProvider>
    </React.StrictMode>
);
