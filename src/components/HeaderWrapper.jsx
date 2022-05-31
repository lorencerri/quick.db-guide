import {
    Header,
    Group,
    Text,
    MediaQuery,
    Burger,
    Anchor,
    Button,
    Box,
} from "@mantine/core";
import { BrandDiscord, BrandGithub } from "tabler-icons-react";
import { useStore } from "../store";

const style = { fontFamily: "Source Sans Pro" };

export const HeaderWrapper = () => {
    const opened = useStore((state) => state.opened);
    const setOpened = useStore((state) => state.setOpened);

    return (
        <Header
            height={60}
            style={{ background: "transparent", border: "none" }}
        >
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
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                    <Group spacing="sm">
                        <Anchor
                            href="https://discord.gg/plexidev"
                            target="_blank"
                        >
                            <Button
                                style={{ background: "#5865F2" }}
                                leftIcon={<BrandDiscord size={18} />}
                            >
                                Discord
                            </Button>
                        </Anchor>

                        <Anchor
                            href="https://github.com/lorencerri/quick.db-guide"
                            target="_blank"
                        >
                            <Button
                                style={{ background: "gray" }}
                                leftIcon={<BrandGithub size={18} />}
                                mr="sm"
                            >
                                Edit on GitHub
                            </Button>
                        </Anchor>
                    </Group>
                </MediaQuery>
            </Group>
        </Header>
    );
};
