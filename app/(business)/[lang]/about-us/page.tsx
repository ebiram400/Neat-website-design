"use client";
import AboutNovinAshian from "@/app/components/WithUs/AboutNovinAshian";
import AboutSite from "@/app/components/WithUs/AboutSite";
import ContactUs from "@/app/components/WithUs/ContactUs";
import Footer from "@/app/components/WithUs/Footer";
import OurTeam from "@/app/components/WithUs/OurTeam";
import Projects from "@/app/components/WithUs/Projects";
import { useState } from "react";

const componentMap = {
    a: Projects,
    b: ContactUs,
    c: OurTeam,
    d: AboutSite,
    e: AboutNovinAshian,
}as const;

type ComponentKey = keyof typeof componentMap;

export default function AboutUs(){
    const [active, setActive] = useState<ComponentKey>("a");
    const ActiveComponent = componentMap[active]
    return(
        <>
            <ActiveComponent />
            <Footer onSelect={setActive} />
        </>
    )
}