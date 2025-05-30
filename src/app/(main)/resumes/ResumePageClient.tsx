"use client";

import { Button } from "@/components/ui/button";
import { ResumeValues } from "@/lib/validation";
import React from "react";
import GenerateAiResume from "./Auto ai resume/GenerateAiResume";
import { EditorFormProps } from "@/lib/Types";
import ResumeItem from "./ResumeItem";
import { useRouter } from "next/navigation";
import { saveResume } from "../editor/actions";
import Link from "next/link";
import { PlusCircleIcon } from "lucide-react";

interface ResumePageClientProps {
  resumes: any[];
  totalResumeCount: number;
}

const ResumePageClient = ({ resumes, totalResumeCount }: ResumePageClientProps) => {
  const router = useRouter();

  const saveAiResume = async (resumeData: ResumeValues) => {
    const savedResume = await saveResume(resumeData);
    router.push(`/editor?resumeId=${savedResume.id}`);
  };

  return (
    <main className="mx-auto   max-w-7xl space-y-8 px-4 py-8 w-full">
      {/* Button Row */}
      <div className="w-[100vw]  flex flex-wrap justify-center sm:justify-start gap-4 ">
        <Link href="/editor">
          <Button className="flex items-center gap-2 bg-white text-black border border-gray-300 rounded-full px-6 py-2 hover:bg-gray-100 transition">
            <PlusCircleIcon className="w-4 h-4" />
            Create Manually
          </Button>
        </Link>

        <GenerateAiResume
          onResumeDataGenerated={(resumeData) => {
            saveAiResume(resumeData);
          }}
        />
      </div>

      {/* Resume Count */}
      <div className="text-center sm:text-left">
        <h1 className="text-3xl font-bold">Your resumes: {totalResumeCount}</h1>
      </div>

      {/* Resume Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {resumes.map((resume) => (
          <ResumeItem resume={resume} key={resume.id} />
        ))}
      </div>
    </main>
  );
};

export default ResumePageClient;
