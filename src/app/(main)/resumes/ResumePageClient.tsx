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
    
        <main className="flex flex-col mx-auto w-full max-w-7xl justify-center space-y-6 px-3 py-6">
<div className='flex gap-4 w-[100vw] justify-center'>

            <Link href="/editor">
            <Button  className="rounded-full p-2 w-[9rem] h-[3rem] sm:h-[3rem] sm:w-[9rem]
    md:h-[3rem] md:w-[10rem] lg:h-[4rem] lg:w-[12rem] xl:h-[4rem] xl:w-[15rem]">
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

            <div className="space-y-1 mx-auto w-full">
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
