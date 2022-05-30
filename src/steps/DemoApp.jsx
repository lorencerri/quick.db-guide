import { useState } from "react";
import { Text, Group, TextInput, Button, Code } from "@mantine/core";
import { Prism } from "@mantine/prism";
import { Subtext } from "../components/Subtext";

const code = `const { QuickDB } = require("quick.db");
const db = new QuickDB();

async function incrementBalance() {
    await db.add("myUser.balance", 100);
}

async function decrementBalance() {
    await db.sub("myUser.balance", 25);
}

async function addRandomItem() {
    let items = ['Sword', 'Axe', 'Armor', 'Amulet', 'Ring', 'Boots', 'Helmet', 'Shield'];
    await db.push("myUser.items", items[Math.floor(Math.random() * items.length)]);
}

async function deleteUser() {
    await db.delete("myUser");
}
`;

export const DemoApp = () => {
    const [balance, setBalance] = useState(null);
    const [items, setItems] = useState([]);

    const getOutput = () => {
        let balanceStr =
            balance !== null
                ? ` balance: ${balance}${items.length > 0 ? "," : ""} `
                : "";
        let itemsStr =
            items.length > 0
                ? `${balance === null ? " " : ""}items: [${items.join(", ")}] `
                : "";

        if (balance !== null || items.length > 0)
            return `{${balanceStr}${itemsStr}}`;
        else return "undefined";
    };

    return (
        <div style={{ margin: "10px" }}>
            <Text mt="sm" weight={700}>
                Methods
            </Text>
            <Prism withLineNumbers noCopy language="js">
                {code}
            </Prism>
            <Group mt="lg">
                <Button
                    color="green"
                    onClick={() => {
                        setBalance((state) =>
                            state === null ? 100 : state + 100
                        );
                    }}
                >
                    incrementBalance()
                </Button>
                <Button
                    color="green"
                    onClick={() => {
                        setBalance((state) => state - 25);
                    }}
                >
                    decrementBalance()
                </Button>
                <Button
                    color="green"
                    onClick={() => {
                        let items = [
                            "'Sword'",
                            "'Axe'",
                            "'Armor'",
                            "'Amulet'",
                            "'Ring'",
                            "'Boots'",
                            "'Helmet'",
                            "'Shield'",
                        ];
                        setItems((state) => [
                            ...state,
                            items[Math.floor(Math.random() * items.length)],
                        ]);
                    }}
                >
                    addRandomItem()
                </Button>
                <Button
                    color="green"
                    onClick={() => {
                        setItems([]);
                        setBalance(null);
                    }}
                >
                    deleteUser()
                </Button>
            </Group>
            <Text mt="sm" weight={700}>
                Output
            </Text>
            <Prism withLineNumbers noCopy language="js">
                {`let output = await db.get('myUser')\n// Output ->  ${getOutput()}`}
            </Prism>
        </div>
    );
};
