"use client"

import PencilIcon from "@/public/images/icon/PencilIcon";
import RightArrowIcon from "@/public/images/icon/RightArrowIcon";
import Link from "next/link";

type Props = {
    onSelect: (value:number)=>void;
    project_id: number;
    end_date: string;
    name: string;
}

export default function ProjectCard({ onSelect, project_id, end_date, name }: Props) {
    return (
        <article className="flex items-center justify-between gap-3 rounded-2xl border border-neutral-200/70 bg-linear-to-b from-white via-neutral-100 to-neutral-200 p-4 shadow-[0_12px_28px_-20px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-3">
                <Link
                    href={`/dashboard/projects/${project_id}`}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-100 bg-neutral-50 text-neutral-600 transition hover:-translate-y-0.5 hover:border-neutral-300 hover:text-neutral-900"
                    aria-label={`نمایش پروژه ${name}`}
                >
                    <RightArrowIcon />
                </Link>
                <div className="text-sm font-extrabold text-neutral-900">{name}</div>
            </div>
            <div className="flex items-center gap-3">
                <div className="text-xs font-bold text-neutral-800">{end_date}</div>
                <button
                    type="button"
                    onClick={() => onSelect(project_id)}
                    className="grid h-10 w-10 place-items-center rounded-full border border-neutral-100 text-neutral-50 transition hover:-translate-y-0.5 hover:border-neutral-300"
                    aria-label={`ویرایش پروژه ${name}`}
                >
                    <PencilIcon />
                </button>
            </div>
        </article>
    );
}
