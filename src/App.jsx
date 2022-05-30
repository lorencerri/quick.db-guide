import { AppShell } from "@mantine/core";
import { StepsWrapper } from "./components/StepsWrapper";
import { HeaderWrapper } from "./components/HeaderWrapper";
import { ContentWrapper } from "./components/ContentWrapper";

function App() {
    return (
        <AppShell
            padding="md"
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            style={{
                backgroundColor: "#141517",
                color: "#FFFFFF",
                height: "100vh",
            }}
            navbar={<StepsWrapper />}
            header={<HeaderWrapper />}
        >
            <ContentWrapper />
        </AppShell>
    );
}

export default App;
