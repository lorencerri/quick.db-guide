import { Tabs, List, Code, Text, Anchor, Button } from "@mantine/core";
import { BrandWindows, BrandUbuntu, BrandApple } from "tabler-icons-react";
import { Subtext } from "../components/Subtext";
import { useStore } from "../store";

const { Item } = List;

export const Installation = () => {
    const increment = useStore((state) => state.increment);

    return (
        <div style={{ margin: "10px" }}>
            <Text weight={700}>Package</Text>
            <Tabs
                mt="lg"
                pl="sm"
                pb="sm"
                pr="sm"
                style={{ background: "#1A1B1E", borderRadius: "10px" }}
            >
                <Tabs.Tab label="Windows" icon={<BrandWindows size={14} />}>
                    <Code>npm i quick.db</Code>
                </Tabs.Tab>
                <Tabs.Tab label="Linux" icon={<BrandUbuntu size={14} />}>
                    <Code>npm i quick.db</Code>
                </Tabs.Tab>
                <Tabs.Tab label="Mac" icon={<BrandApple size={14} />}>
                    <List type="ordered">
                        <Item>Install XCode</Item>
                        <Text mt="md" ml="md" weight={700}>
                            Run the following in the terminal:
                        </Text>
                        <Item>
                            <Code>npm i -g node-gyp</Code>
                        </Item>
                        <Item>
                            <Code>node-gyp --python /path/to/python2.7</Code>
                        </Item>
                        <Item>
                            <Code>npm i quick.db</Code>
                        </Item>
                    </List>
                </Tabs.Tab>
            </Tabs>
            <Text mt="lg" weight={700}>
                Drivers
            </Text>
            <Subtext>
                One of the following drivers are required so quick.db can
                interact with the database.
                <br />
                The default and recommended driver is SQLite.
            </Subtext>
            <Tabs
                mt="lg"
                pl="sm"
                pb="sm"
                pr="sm"
                style={{ background: "#1A1B1E", borderRadius: "10px" }}
            >
                <Tabs.Tab label="Sqlite (Default)">
                    <Code>npm i better-sqlite3</Code>
                    <Subtext mt="sm">
                        Occasionally, installing better-sqlite3 has some issues.
                        You can view{" "}
                        <Anchor
                            href="https://github.com/WiseLibs/better-sqlite3/blob/master/docs/troubleshooting.md"
                            target="_blank"
                        >
                            this
                        </Anchor>{" "}
                        post to help troubleshoot installation.
                    </Subtext>
                </Tabs.Tab>
                <Tabs.Tab label="MySQL">
                    <Code>npm i promise-mysql</Code>
                </Tabs.Tab>
            </Tabs>
            <Button mt="lg" onClick={increment}>
                Basic Usage
            </Button>
        </div>
    );
};
