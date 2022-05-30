import { useState } from "react";
import { Text, Group, TextInput, Button, Code } from "@mantine/core";
import { Prism } from "@mantine/prism";
import { Subtext } from "../components/Subtext";

const code = `const { Client } = require('discord.js');
const client = new Client();

const { QuickDB } = require("quick.db");
const db = new QuickDB();

client.on("messageCreate", async (message) => {
	const authorId = message.author.id

	// Increment user's messageCount by 1
	await db.add(\`messageCount_\${authorId}\`, 1);

	// Output user's messageCount
	let messageCount = await db.get(\`messageCount_\${authorId}\`);
	console.log(\`User with the ID of \${authorId} has \${messageCount} messages.\`);
});`;

export const UsingWithDiscordjs = () => {
    const [userId, setUserId] = useState("144645791145918464");
    const [messageCounts, setMessageCounts] = useState({});

    const updateUsersMessageCount = (id) => {
        setMessageCounts((prev) => ({
            ...prev,
            [id]: prev[id] ? prev[id] + 1 : 1,
        }));
    };

    return (
        <div style={{ margin: "10px" }}>
            <Text mt="sm" weight={700}>
                Discord.js
            </Text>
            <Subtext>
                One of the most common usages for quick.db is with discord.js,
                below is an example of how that might look.
            </Subtext>
            <Subtext>
                The following code is a messageCreate handler for tracking the
                messages of a user, separated by guild.
            </Subtext>
            <Prism withLineNumbers noCopy language="js">
                {code}
            </Prism>
            <Text mt="sm" weight={700}>
                Ouput
            </Text>
            <Code>
                User with the ID of {userId} has {messageCounts[userId] || 0}{" "}
                messages.
            </Code>
            <Group mt="lg">
                <Subtext>User ID:</Subtext>
                <TextInput
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    style={{ maxWidth: "300px" }}
                />
                <Button
                    color="green"
                    onClick={() => updateUsersMessageCount(userId)}
                >
                    Run Event
                </Button>
            </Group>
        </div>
    );
};
