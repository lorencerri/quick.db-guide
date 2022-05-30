import { Text, Button } from "@mantine/core";
import { Prism } from "@mantine/prism";
import { Link } from "react-router-dom";
import { Subtext } from "../components/Subtext";

const initialization = `// Quick.db before
const db = require('quick.db');

// Now
const { QuickDB } = require('quick.db');
const db = new QuickDB();`;

const tables = `// Quick.db before
const table = new db.table("my_table");

// Now
const table = db.table("my_table");`;

const subtract = `// Quick.db before
await db.subtract("mykey", 10);

// Now
await db.sub("mykey", 10);`;

const asyncAwait = `// Quick.db before
db.add("mykey", 10);

// Now
await db.add("mykey", 10);`;

export const Migration = () => {
    return (
        <div style={{ margin: "10px" }}>
            <Text size="xl" mt="sm" weight={700}>
                Migration Guide
            </Text>
            <Subtext mb="lg">
                This page will help in migrating from quick.db 7.x.x and 8.x.x
                to 9.0.0.
            </Subtext>
            <Text mt="sm" weight={700}>
                Initialization
            </Text>
            <Subtext>The way to initialize quick.db has been changed.</Subtext>
            <Prism withLineNumbers noCopy language="js">
                {initialization}
            </Prism>
            <Text mt="sm" weight={700}>
                Tables
            </Text>
            <Subtext>
                The table function no longer uses the new keyboard.
            </Subtext>
            <Prism withLineNumbers noCopy language="js">
                {tables}
            </Prism>
            <Text mt="sm" weight={700}>
                Subtract
            </Text>
            <Subtext>
                This function has been renamed to <b>sub</b> to keep the naming
                convention of the <b>add</b> method.
            </Subtext>
            <Prism withLineNumbers noCopy language="js">
                {subtract}
            </Prism>
            <Text mt="sm" weight={700}>
                Async/Await
            </Text>
            <Subtext>
                Quick.db now uses async and await for all methods.
            </Subtext>
            <Prism withLineNumbers noCopy language="js">
                {asyncAwait}
            </Prism>
            <Link to="/basic-usage">
                <Button mt="lg">Basic Usage</Button>
            </Link>
        </div>
    );
};
