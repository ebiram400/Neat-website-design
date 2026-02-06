"use client";

import AdminHeader from "../AdminHeader";
import AccountBalanceReport from "./AccountBalanceReport";
import BalanceSheet from "./BalanceSheet";
import FastRegistration from "./FastRegistration";
import { ProjectProvider } from "./ProjectContext";
import ProjectProgressReport from "./ProjectProgressReport";
import RememberCard from "./RememberCard";
import TransactionsMenu from "./TransactionsMenu";
import VarianceReport from "./VarianceReport";

export default function Invoices({ projectId }: { projectId: string }) {
    const data = projectId; //fetch invoices by projectId
    console.log(data);

    return (
        <ProjectProvider projectId={projectId}>
            <AdminHeader breadcrumb={`پروژه ${data}`} titleLink="پروژه ها" hrefLink="/dashboard/projects" />
            <FastRegistration />
            <TransactionsMenu />
            <RememberCard />
            <BalanceSheet />
            <AccountBalanceReport />
            <ProjectProgressReport />
            <VarianceReport />
        </ProjectProvider>
    );
}
