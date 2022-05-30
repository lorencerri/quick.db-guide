import { Header, Group, Text, MediaQuery, Burger } from "@mantine/core";
import { useStore } from "../state";

const style = { fontFamily: "Source Sans Pro" };

export const HeaderWrapper = () => {
    const opened = useStore((state) => state.opened);
    const setOpened = useStore((state) => state.setOpened);

    return (
        <Header height={60}>
            <Group p="13px" spacing="sm">
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened(!opened)}
                        size="sm"
                        mr="xl"
                    />
                </MediaQuery>
                <Text style={style} size="xl" weight={700}>
                    quick.db guide
                </Text>
            </Group>
        </Header>
    );
};
