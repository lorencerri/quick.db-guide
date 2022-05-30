import { Tabs, List, Code, Text, Anchor, Divider } from "@mantine/core";
import { BrandWindows, BrandUbuntu, BrandApple } from "tabler-icons-react";

const { Item } = List;

export const Installation = () => {
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
                    <Text mt="sm">
                        {" "}
                        You may need to do some additional steps found{" "}
                        <Anchor
                            href="https://github.com/WiseLibs/better-sqlite3/blob/master/docs/troubleshooting.md"
                            target="_blank"
                        >
                            here
                        </Anchor>{" "}
                        to finish the installation.
                    </Text>
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
            <Text>
                One of the following drivers are required so quick.db can
                interact with the database. The default and recommended driver
                is Sqlite.
            </Text>
            <Tabs
                mt="lg"
                pl="sm"
                pb="sm"
                pr="sm"
                style={{ background: "#1A1B1E", borderRadius: "10px" }}
            >
                <Tabs.Tab label="Sqlite (Default)">
                    <Code>npm i better-sqlite3</Code>
                </Tabs.Tab>
                <Tabs.Tab label="MySQL">
                    <Code>npm i promise-mysql</Code>
                </Tabs.Tab>
            </Tabs>
        </div>
    );
};
