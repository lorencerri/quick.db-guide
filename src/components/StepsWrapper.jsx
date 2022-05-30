import { Navbar } from "@mantine/core";
const { Section } = Navbar;

import { Steps } from "./Steps";

export const StepsWrapper = () => {
    return (
        <Navbar width={{ base: 300 }}>
            <Section grow m="md">
                <Steps />
            </Section>
        </Navbar>
    );
};
