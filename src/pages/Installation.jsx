import { Tabs, List, Code, Text, Anchor, Button } from "@mantine/core";
import { BrandWindows, BrandUbuntu, BrandApple } from "tabler-icons-react";
import { Prism } from "@mantine/prism";
import { Subtext } from "../components/Subtext";
import { Link } from "react-router-dom";

const { Item } = List;

const mysql = `const { QuickDB, MySQLDriver } = require('quick.db');

(async () => {
    const mysql = new MySQLDriver({
        host:     'localhost',
        user:     'me',
        password: 'secret',
        database: 'my_db'
    });
    
    // Important: Connect to MySQL server before using it
    await mysql.connect();
    
    const db = new QuickDB({ driver: mysql });
})();`;

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
                    <Text weight={700} mt="lg">
                        Initialization
                    </Text>
                    <Prism withLineNumbers noCopy language="js">
                        {`const { QuickDB } = require('quick.db');\nconst db = new QuickDB();`}
                    </Prism>
                </Tabs.Tab>
                <Tabs.Tab label="MySQL">
                    <Code>npm i promise-mysql</Code>
                    <Text weight={700} mt="lg">
                        Initialization
                    </Text>
                    <Prism withLineNumbers noCopy language="js">
                        {mysql}
                    </Prism>
                </Tabs.Tab>
            </Tabs>
            <Link to="/basic-usage">
                <Button mt="lg">Basic Usage</Button>
            </Link>
        </div>
    );
};
