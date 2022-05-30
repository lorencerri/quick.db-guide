import { Navbar } from "@mantine/core";
import { Steps } from "./Steps";
import { useStore } from "../store";

const { Section } = Navbar;

export const StepsWrapper = () => {
    const opened = useStore((state) => state.opened);

    return (
        <Navbar
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ base: 300 }}
            style={{ background: "transparent", border: "none" }}
        >
            <Section grow m="lg">
                <Steps />
            </Section>
        </Navbar>
    );
};
