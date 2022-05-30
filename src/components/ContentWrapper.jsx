import { Center } from "@mantine/core";
import { useStore } from "../state";

import { StepZero } from "../steps/StepZero";

export const ContentWrapper = () => {
    const step = useStore((state) => state.step);

    switch (step) {
        case 0:
            return <StepZero />;
        default:
            return <Center>Sorry, this step could not be found!</Center>;
    }
};
