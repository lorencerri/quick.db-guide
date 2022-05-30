import React from "react";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const theme = { colorScheme: "dark", fontFamily: "Source Sans Pro" };

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <MantineProvider theme={theme}>
                <App />
            </MantineProvider>
        </BrowserRouter>
    </React.StrictMode>
);
