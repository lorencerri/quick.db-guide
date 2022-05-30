import { AppShell } from "@mantine/core";
import { StepsWrapper } from "./components/StepsWrapper";
import { Branding } from "./components/Branding";

import "./App.css";

function App() {
    return (
        <AppShell
            padding="md"
            style={{ backgroundColor: "#141517", color: "#FFFFFF" }}
            navbar={<StepsWrapper />}
            header={<Branding />}
        >
            Hello World
        </AppShell>
    );
}

export default App;
