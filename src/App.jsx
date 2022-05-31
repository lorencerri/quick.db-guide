import { AppShell, MediaQuery } from "@mantine/core";
import { StepsWrapper } from "./components/StepsWrapper";
import { HeaderWrapper } from "./components/HeaderWrapper";
import { ContentWrapper } from "./components/ContentWrapper";

function App() {
    return (
        <MediaQuery
            largerThan={"lg"}
            styles={{ paddingLeft: "15%", paddingRight: "15%" }}
        >
            <AppShell
                padding="md"
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                style={{
                    backgroundColor: "#141517",
                    color: "#FFFFFF",
                    minHeight: "100vh",
                }}
                navbar={<StepsWrapper />}
                header={<HeaderWrapper />}
            >
                <ContentWrapper />
            </AppShell>
        </MediaQuery>
    );
}

export default App;
