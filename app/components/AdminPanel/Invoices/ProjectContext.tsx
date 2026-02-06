"use client";

import { createContext, useContext } from "react";
import type { ReactNode } from "react";

type ProjectContextValue = {
    projectId: string;
};

const ProjectContext = createContext<ProjectContextValue | null>(null);

export function ProjectProvider({ projectId, children }: { projectId: string; children: ReactNode }) {
    return (
        <ProjectContext.Provider value={{ projectId }}>
            {children}
        </ProjectContext.Provider>
    );
}

export function useProjectId() {
    const ctx = useContext(ProjectContext);
    if (!ctx) {
        throw new Error("useProjectId must be used within ProjectProvider");
    }
    return ctx.projectId;
}
