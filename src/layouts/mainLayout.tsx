import React from "react";
import StartPageHeader from "@src/components/NavBar";

interface IMainLayout {
    className?: string,
    children?: React.ReactNode
}

export default function MainLayout(props: IMainLayout) {
    return (
        <main className={props.className}>
            <StartPageHeader />
            {props.children}
        </main>
    )
}
