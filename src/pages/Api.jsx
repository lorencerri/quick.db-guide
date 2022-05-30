import { Text } from "@mantine/core";
import { Subtext } from "../components/Subtext";
import { Prism } from "@mantine/prism";

const quickdb = `const { QuickDB } = require("quick.db");

// Default (SQLite)
const db = new QuickDB();

// Default (SQLite w/ path)
const db = new QuickDB({ filePath: 'source/to/path/test.sqlite' });

// MySQL
const { QuickDB, MySQLDriver } = require('quick.db');
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
})();
`;

const table = `const economy = db.table('economy')
await economy.set('myBalance', 500) // -> 500
await economy.get('myBalance') // -> 500
await db.get('myBalance') // -> null`;

export const Api = () => {
    return (
        <div style={{ margin: "10px" }}>
            <Text mt="sm" weight={700}>
                {`new QuickDB({ options })`}
            </Text>
            <Subtext>
                This is the main constructor for the QuickDB class, which
                handles the driver and config options.
            </Subtext>
            <Prism withLineNumbers noCopy language="js">
                {quickdb}
            </Prism>
            <Text mt="sm" weight={700}>
                &lt;db&gt;.table(name)
            </Text>
            <Subtext>
                This function creates a new table, allowing you to separate your
                data while using the same keys.
            </Subtext>
            <Prism withLineNumbers noCopy language="js">
                {table}
            </Prism>
        </div>
    );
};
