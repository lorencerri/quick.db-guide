import { Header, Group, Text } from "@mantine/core";

const style = { fontFamily: "Source Sans Pro" };

export const Branding = () => {
    return (
        <Header height={60}>
            <Group p="13px" spacing="sm">
                <Text style={style} size="xl" weight={700}>
                    quick.db demo
                </Text>
            </Group>
        </Header>
    );
};
