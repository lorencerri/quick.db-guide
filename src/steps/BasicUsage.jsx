import { Text, Anchor, Accordion } from "@mantine/core";
import { Prism } from "@mantine/prism";
import { Subtext } from "../components/Subtext";

const initializing = `const { QuickDB } = require("quick.db");
const db = new QuickDB();`;

const asyncAwait = `async function myMethod() {
    // your code goes here...
}`;

const setGet = `// Setting the string "myValue" to the key "myKey"
await db.set("myKey", "myValue"); // Returns -> "myValue"

// Getting the value of the key "myKey"
await db.get("myKey"); // Returns -> "myValue"

// In addition to strings, you can store objects as well.
await db.set("myUser", { balance: 500 }); // Returns -> { balance: 500 }

// Getting the value of the key "myUser"
await db.get("myUser"); // Returns -> { balance: 500 }
`;

const dotNotation = `await db.set("myUser.balance", 700); // Returns -> { balance: 700 }
await db.get("myUser.balance"); // Returns -> 700
`;

const arrays = `await db.set("myArray", [1, 2, 3]); // Returns -> [1, 2, 3]
await db.get("myArray"); // Returns -> [1, 2, 3]

// Using the myUser object from earlier
await db.set("myUser.items", ["Sword", "Shield", "Health Potion"]); // Returns -> { balance: 700, items: [ 'Sword', 'Shield', 'Health Potion' ] }

// Some additional helper methods for arrays include push, pull, and has
await db.push("myUser.items", "Armor"); // Returns -> { balance: 700, items: [ 'Sword', 'Shield', 'Health Potion', 'Armor' ] }
await db.pull("myUser.items", "Health Potion"); // Returns -> { balance: 700, items: [ 'Sword', 'Shield', 'Armor' ] }
await db.has("myUser.items", "Sword"); // Returns -> true
`;

const addSubtract = `await db.add("myUser.balance", 100); // Returns -> { balance: 800, items: [ 'Sword', 'Shield', 'Armor' ] } }
await db.sub("myUser.balance", 50); // Returns -> { balance: 750, items: [ 'Sword', 'Shield', 'Armor' ] } }`;

const fullCode = `const { QuickDB } = require("quick.db");
const db = new QuickDB();

async function myMethod() {
	// Setting the string "myValue" to the key "myKey"
	await db.set("myKey", "myValue"); // Returns -> "myValue"

	// Getting the value of the key "myKey"
	await db.get("myKey"); // Returns -> "myValue"

	// In addition to strings, you can store objects as well.
	await db.set("myUser", { balance: 500 }); // Returns -> { balance: 500 }

	// Getting the value of the key "myUser"
	await db.get("myUser"); // Returns -> { balance: 500 }

	await db.set("myUser.balance", 700); // Returns -> { balance: 700 }
	await db.get("myUser.balance"); // Returns -> 700

	await db.set("myArray", [1, 2, 3]); // Returns -> [1, 2, 3]
	await db.get("myArray"); // Returns -> [1, 2, 3]

	// Using the myUser object from earlier
	await db.set("myUser.items", ["Sword", "Shield", "Health Potion"]); // Returns -> { balance: 700, items: [ 'Sword', 'Shield', 'Health Potion' ] }

	// Some additional helper methods for arrays include push, pull, and has
	await db.push("myUser.items", "Armor"); // Returns -> { balance: 700, items: [ 'Sword', 'Shield', 'Health Potion', 'Armor' ] }
	await db.pull("myUser.items", "Health Potion"); // Returns -> { balance: 700, items: [ 'Sword', 'Shield', 'Armor' ] }
	await db.has("myUser.items", "Sword"); // Returns -> true

	await db.add("myUser.balance", 100); // Returns -> { balance: 800, items: [ 'Sword', 'Shield', 'Armor' ] } }
	await db.sub("myUser.balance", 50); // Returns -> { balance: 750, items: [ 'Sword', 'Shield', 'Armor' ] } }
}

myMethod();`;

export const BasicUsage = () => {
    return (
        <div style={{ margin: "10px" }}>
            <Text mt="sm" weight={700}>
                Initializing
            </Text>
            <Subtext>
                Wherever you need to use quick.db, you need to initialize the db
                variable so it can be used. You can either do this in the file
                using the below example, or somehow pass it to the file so it
                can be accessed.
            </Subtext>
            <Prism withLineNumbers noCopy language="js">
                {initializing}
            </Prism>
            <Text mt="sm" weight={700}>
                async/await
            </Text>
            <Subtext>
                Since quick.db's methods are asynchronous, the surrounding
                function where quick.db is being used has to be async. Although,
                the two most commonly used ones are .set() and .get().
            </Subtext>
            <Prism withLineNumbers noCopy language="js">
                {asyncAwait}
            </Prism>
            <Text mt="sm" weight={700}>
                Set & Get
            </Text>
            <Subtext>
                Quick.db has a multitude of methods that you can find on the API
                page. Below are a few that are commonly used.
            </Subtext>
            <Prism withLineNumbers noCopy language="js">
                {setGet}
            </Prism>
            <Text mt="sm" weight={700}>
                Dot Notation
            </Text>
            <Subtext>
                You can use dot notation in the key parameter to modify the
                associated object's properties. Notice below how "myUser" is the
                key, although the property "balance" is being set and get.
            </Subtext>
            <Prism withLineNumbers noCopy language="js">
                {dotNotation}
            </Prism>
            <Text mt="sm" weight={700}>
                Arrays
            </Text>
            <Subtext>
                In addition to primitive types and objects, quick.db can also
                store arrays in the database.
            </Subtext>
            <Prism withLineNumbers noCopy language="js">
                {arrays}
            </Prism>
            <Text mt="sm" weight={700}>
                Add & Subtract
            </Text>
            <Subtext>
                There are some helper methods for adding and subtracting values
                as well.
            </Subtext>
            <Prism withLineNumbers noCopy language="js">
                {addSubtract}
            </Prism>
            <Text mt="sm" weight={700}>
                Full Code
            </Text>
            <Subtext>
                Expand to view the full code. Alternatively, you can view this
                on repl.it and modify the values yourself{" "}
                <Anchor
                    href="https://replit.com/@TrueXPixels/quickdb-demo?v=1#index.js"
                    target="_blank"
                >
                    here
                </Anchor>
                .
            </Subtext>
            <Accordion>
                <Accordion.Item label="Expand">
                    <Prism withLineNumbers noCopy language="js">
                        {fullCode}
                    </Prism>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};
