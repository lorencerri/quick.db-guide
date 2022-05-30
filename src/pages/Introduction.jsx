import { Anchor, Divider, List, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { Subtext } from "../components/Subtext";

const { Item } = List;

export const Introduction = () => {
    return (
        <div style={{ margin: "10px" }}>
            <h1 style={{ margin: 0 }}>Hey There 👋</h1>
            <Divider mt="lg" mb="lg" />
            <Subtext mb="lg">
                Quick.db is an open-source package meant to provide an easy way
                for beginners and people of all levels to access & store data in
                a low to medium volume environment. All data is stored
                persistently via either{" "}
                <Anchor
                    href="https://github.com/WiseLibs/better-sqlite3"
                    target="_blank"
                >
                    better-sqlite3
                </Anchor>{" "}
                or{" "}
                <Anchor
                    href="https://www.npmjs.com/package/promise-mysql"
                    target="_blank"
                >
                    promise-mysql
                </Anchor>{" "}
                and comes way various other quality-of-life features.
            </Subtext>
            <List>
                <Item>
                    <b>Persistent Storage</b> - Data doesn't disappear through
                    restarts
                </Item>
                <Item>
                    <b>Multiple Drivers</b> - You can use either better-sqlite3
                    or promise-mysql
                </Item>
                <Item>
                    <b>Works out of the box</b> - No need to set up a database
                    server, all the data is stored locally in the same project
                </Item>
                <Item>
                    <b>Beginner Friendly</b> - Originally created for use in
                    tutorials, the documentation is straightforward and
                    jargon-free
                </Item>
                <Item>& more...</Item>
            </List>
            <Link to="/installation">
                <Button mt="lg" mr="sm">
                    Installation
                </Button>
            </Link>
            <Link to="/basic-usage">
                <Button mt="lg">Basic Usage</Button>
            </Link>
        </div>
    );
};
