import { Text, Code } from "@mantine/core";
import { Prism } from "@mantine/prism";

const initializing = `const { QuickDB } = require("quick.db");
const db = new QuickDB();`;

const demoCode = `
// Self-calling async function
(async () => {
    // Setting an object in the database:
    await db.set("userInfo", { difficulty: "Easy" });
    // -> { difficulty: 'Easy' }

    // Pushing an element to an array (that doesn't exist yet) in an object:
    await db.push("userInfo.items", "Sword");
    // -> { difficulty: 'Easy', items: ['Sword'] }

    // Adding to a number (that doesn't exist yet) in an object:
    await db.add("userInfo.balance", 500);
    // -> { difficulty: 'Easy', items: ['Sword'], balance: 500 }

    // Repeating previous examples:
    await db.push("userInfo.items", "Watch");
    // -> { difficulty: 'Easy', items: ['Sword', 'Watch'], balance: 500 }
    await db.add("userInfo.balance", 500);
    // -> { difficulty: 'Easy', items: ['Sword', 'Watch'], balance: 1000 }

    // Fetching individual properties
    await db.get("userInfo.balance"); // -> 1000
    await db.get("userInfo.items"); // ['Sword', 'Watch']
})();

`;

export const Usage = () => {
    return (
        <div style={{ margin: "10px" }}>
            <Text mt="sm" weight={700}>
                Initializing
            </Text>
            <Text color="dimmed" style={{ maxWidth: "800px" }}>
                Wherever you need to use quick.db, you need to initialize the db
                variable so it can be used. You can either do this in the file
                using the below example, or somehow pass it to the file so it
                can be accessed.
            </Text>
            <Prism withLineNumbers noCopy language="js">
                {initializing}
            </Prism>
            <Text mt="sm" weight={700}>
                Usage
            </Text>
            <Text color="dimmed" style={{ maxWidth: "800px" }}>
                Since quick.db's methods are asynchronous, you need to declare
                the surrounding function as async. Below is an example of this
                usage, as well as some demo code.
            </Text>
            <Prism withLineNumbers noCopy language="js">
                {demoCode}
            </Prism>
        </div>
    );
};
