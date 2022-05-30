import { Center } from "@mantine/core";
import { useStore } from "../store";

import { Installation } from "../steps/Installation";
import { Introduction } from "../steps/Introduction";
import { UsingWithDiscordjs } from "../steps/UsingWithDiscordjs";
import { BasicUsage } from "../steps/BasicUsage";
import { Tables } from "../steps/Tables";

export const ContentWrapper = () => {
    const step = useStore((state) => state.step);

    switch (step) {
        case 0:
            return <Introduction />;
        case 1:
            return <Installation />;
        case 2:
            return <BasicUsage />;
        case 3:
            return <Tables />;
        case 4:
            return <UsingWithDiscordjs />;
        default:
            return <Center>Sorry, this step could not be found!</Center>;
    }
};
