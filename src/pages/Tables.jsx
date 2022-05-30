import { Text } from "@mantine/core";
import { Prism } from "@mantine/prism";
import { Subtext } from "../components/Subtext";

const code = `const { QuickDB } = require("quick.db");
const db = new QuickDB();

async function myFunction() {
	let economy = await db.get("economy");
	
    await economy.set("balance", 100);
	await economy.get("balance"); // Returns -> 100
	await db.get("balance"); // Returns -> undefined
}

myFunction();
`;

export const Tables = () => {
    return (
        <div style={{ margin: "10px" }}>
            <Text weight={700}>Tables</Text>
            <Subtext>
                Tables are a simple way to separate data while using the same
                keys.
            </Subtext>
            <Prism withLineNumbers noCopy language="js">
                {code}
            </Prism>
        </div>
    );
};
