"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  ResumeValues,
  resumeSchema,
} from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { GenerateResumeData } from "../../editor/forms/actions";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface GenerateAiResumeProps {
  onResumeDataGenerated: (resumeData: ResumeValues) => void;
}

const questions = [
  { key: "name", label: "What's your name?" },
  { key: "age", label: "What's your age?" },
  { key: "city", label: "Which city do you live in?" },
  { key: "job", label: "What's your current job or goal?" },
  { key: "Country", label: "Which Country do you live in?" },
  { key: "Email", label: "What's your email?" },
  { key: "Phone", label: "What's your phone number?" },
  { key: "skills", label: "What are your skills?" },
  { key: "workExperiences", label: "What work have you done?" },
  { key: "educations", label: "Summarize your education." },
];

const GenerateAiResume = ({ onResumeDataGenerated }: GenerateAiResumeProps) => {
  const pathname = usePathname();
  const { toast } = useToast();
  const form = useForm<ResumeValues>({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      description: "",
    },
  });

  const [step, setStep] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [open, setOpen] = useState(false);

  const handleNext = async () => {
    const { key } = questions[step];

    setUserDescription((prev) =>
      prev ? `${prev}, ${key}: ${currentAnswer}` : `${key}: ${currentAnswer}`
    );
    setCurrentAnswer("");
    form.setValue("description", "");

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      try {
        const response = await GenerateResumeData(userDescription);
        onResumeDataGenerated(response);
        setOpen(false);
        toast({
          description: "AI-generated resume created successfully!",
        });
      } catch (error) {
        console.error(error);
        toast({
          variant: "destructive",
          description: "Something went wrong. Please try again.",
        });
      }
    }
  };

  const onSubmit = () => {
    handleNext();
  };

  return (
    <>
      {/* AI Button */}
      <Button
        className="rounded-full px-6 py-2 text-white bg-purple-950 hover:bg-purple-900 transition"
        onClick={() => setOpen(true)}
      >
        {pathname === "/editor" ? "Update with AI" : "Generate With AI"}
      </Button>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Generate AI Resume</DialogTitle>
            <DialogDescription>
              Answer the following questions one by one, and the AI will build a personalized resume for you.
            </DialogDescription>
          </DialogHeader>

          <FormProvider {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name="description"
                render={() => (
                  <FormItem>
                    <FormLabel>{questions[step].label}</FormLabel>
                    <FormControl>
                      <Textarea
                        value={currentAnswer}
                        onChange={(e) => setCurrentAnswer(e.target.value)}
                        placeholder={`Enter your ${questions[step].key}`}
                        autoFocus
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? (
                    <span className="inline-block w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                  ) : step < questions.length - 1 ? "Next" : "Generate"}
                </Button>
              </DialogFooter>
            </form>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GenerateAiResume;