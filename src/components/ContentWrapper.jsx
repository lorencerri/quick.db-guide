import { useEffect } from "react";
import { Center } from "@mantine/core";
import { useStore } from "../store";
import { Routes, Route, useLocation } from "react-router-dom";

import { Installation } from "../pages/Installation";
import { Introduction } from "../pages/Introduction";
import { UsingWithDiscordjs } from "../pages/UsingWithDiscordjs";
import { BasicUsage } from "../pages/BasicUsage";
import { Tables } from "../pages/Tables";
import { DemoApp } from "../pages/DemoApp";
import { Migration } from "../pages/Migration";
import { Api } from "../pages/Api";

export const ContentWrapper = () => {
    const location = useLocation();
    const steps = useStore((state) => state.steps);
    const setStep = useStore((state) => state.setStep);

    useEffect(() => {
        const path = window.location.pathname;
        const step = steps.findIndex(
            (step) => step.path && path.endsWith(step.path)
        );
        if (step !== -1) setStep(step);
    }, [location]);

    return (
        <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/installation" element={<Installation />} />
            <Route
                path="/using-with-discordjs"
                element={<UsingWithDiscordjs />}
            />
            <Route path="/basic-usage" element={<BasicUsage />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/demo-app" element={<DemoApp />} />
            <Route path="/api" element={<Api />} />
            <Route path="/migration" element={<Migration />} />
            <Route
                path="*"
                element={<Center>Sorry, this step could not be found!</Center>}
            />
        </Routes>
    );
};
