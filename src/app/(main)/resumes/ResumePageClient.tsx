"use client"
import { Button } from '@/components/ui/button';
import { ResumeValues } from '@/lib/validation';

import React from 'react'
import GenerateAiResume from './Auto ai resume/GenerateAiResume';
import { EditorFormProps } from '@/lib/Types';
import ResumeItem from './ResumeItem';
import { useRouter } from 'next/navigation';
import { saveResume } from '../editor/actions';
import Link from 'next/link';
import { PlusCircleIcon } from 'lucide-react';



interface ResumePageClientProps {
    resumes:any[];
    totalResumeCount:number;
   
}

const ResumePageClient = ({resumes,totalResumeCount}:ResumePageClientProps) => {

    const router = useRouter()

    const saveAiResume  = async (resumeData:ResumeValues) =>{
        const savedResume = await saveResume(resumeData)
        router.push(`/editor?resumeId=${savedResume.id}`)
    }

  return (
    
        <main className="mx-auto w-full max-w-7xl space-y-6 px-3 py-6">
<div className='flex gap-4'>
            <Link href="/editor">
            <Button  className="rounded-full w-[7rem] h-[1.5rem] sm:h-[2rem] sm:w-[9rem]
    md:h-[2rem] md:w-[8rem] lg:h-[3rem] lg:w-[9rem] xl:h-[3rem] xl:w-[10rem]">
                <PlusCircleIcon/>
                    Create Manual
                
            </Button>
            </Link>
              <div className='w-full h-20 '>
                    <GenerateAiResume onResumeDataGenerated={resumeData =>{ 
                      saveAiResume(resumeData)
                    }} />
                </div>

                </div>

            <div className="space-y-1">
                <h1 className="text-3xl font-bold">Your resumes : {totalResumeCount} </h1>
            </div>

           
          
                <div className="flex flex-col sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3">
                    {resumes.map((resume) => (
                        <ResumeItem resume={resume} key={resume.id} />
                    ))}
                </div>
            
        </main>
    );
  
}

export default ResumePageClient
