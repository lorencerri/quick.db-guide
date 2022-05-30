import { Text } from "@mantine/core";

export const Subtext = (props) => {
    return (
        <Text color="dimmed" style={{ maxWidth: "800px" }} {...props}>
            {props.children}
        </Text>
    );
};
