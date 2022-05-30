import { Center } from "@mantine/core";
import { useStore } from "../store";

import { Installation } from "../steps/Installation";
import { Introduction } from "../steps/Introduction";

export const ContentWrapper = () => {
    const step = useStore((state) => state.step);

    switch (step) {
        case 0:
            return <Introduction />;
        case 1:
            return <Installation />;
        default:
            return <Center>Sorry, this step could not be found!</Center>;
    }
};
