import {
    Header,
    Group,
    Text,
    MediaQuery,
    Burger,
    Anchor,
    Button,
} from "@mantine/core";
import { BrandDiscord } from "tabler-icons-react";
import { useStore } from "../store";

const style = { fontFamily: "Source Sans Pro" };

export const HeaderWrapper = () => {
    const opened = useStore((state) => state.opened);
    const setOpened = useStore((state) => state.setOpened);

    return (
        <Header height={60}>
            <Group position="apart">
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
                <Anchor href="https://discord.gg/plexidev" target="_blank">
                    <Button
                        style={{ background: "#5865F2" }}
                        leftIcon={<BrandDiscord size={18} />}
                        mr="sm"
                    >
                        Discord
                    </Button>
                </Anchor>
            </Group>
        </Header>
    );
};
