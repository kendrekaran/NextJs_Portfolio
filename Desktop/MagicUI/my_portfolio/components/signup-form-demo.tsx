"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";

import {
  IconBrandCodecov,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div
      id="contact"
      className="w-full mx-auto h-full min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-8 bg-black rounded-none md:rounded-2xl shadow-lg"
    >
      {/* Contact Info Section */}
      <section className="flex flex-col items-center md:w-1/2 text-center space-y-6 md:space-y-8">
        <h2
          className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-[#f1f5f966] via-[#f1f5f9] to-[#f1f5f966] text-transparent bg-clip-text" >
          Contact <span className="text-blue-500">Me</span>
        </h2>
        <p className="text-sm md:text-base max-w-md text-neutral-300 px-8">
          Have a project in mind? I&apos;d love to hear from you! Reach out to me, and let's turn your ideas into reality.
        </p>

        <div className="flex flex-col space-y-4 w-full max-w-xs">
        {/* Twitter Button */}
        <button
          className="relative group/btn flex space-x-2 items-center justify-start px-4 py-2 rounded-md font-medium bg-zinc-900 text-neutral-300 shadow-lg hover:shadow-xl transition-all"
          type="button"
        >
          <Link href="https://twitter.com/kendrekaran_" target="_blank" rel="noopener noreferrer" className="flex space-x-2">
            <IconBrandTwitter className="h-5 w-5" />
          <span>Twitter</span>
          </Link>
          <BottomGradient />
        </button>

        {/* GitHub Button */}
        <button
          className="relative group/btn flex space-x-2 items-center justify-start px-4 py-2 rounded-md font-medium bg-zinc-900 text-neutral-300 shadow-lg hover:shadow-xl transition-all"
          type="button"
        >
          <Link href="https://github.com/kendrekaran" target="_blank" rel="noopener noreferrer" className="flex space-x-2">
            <IconBrandGithub className="h-5 w-5" />
          <span>GitHub</span>
          </Link>
          <BottomGradient />
        </button>

        {/* LinkedIn Button */}
        <button
          className="relative group/btn flex space-x-2 items-center justify-start px-4 py-2 rounded-md font-medium bg-zinc-900 text-neutral-300 shadow-lg hover:shadow-xl transition-all"
          type="button"
        >
          <Link href="https://linkedin.com/in/kendrekaran" target="_blank" rel="noopener noreferrer" className="flex space-x-2">
            <IconBrandLinkedin className="h-5 w-5" />
          <span>LinkedIn</span>
          </Link>
          <BottomGradient />
        </button>

        
        <button
          className="relative group/btn flex flex-row space-x-2 items-center justify-start px-4 py-2 rounded-md font-medium bg-zinc-900 text-neutral-300 shadow-lg hover:shadow-xl transition-all"
          type="button"
        >
          <Link href="https://karank.tech" target="_blank" rel="noopener noreferrer" className="flex space-x-2">
            <IconBrandCodecov className="h-5 w-5" />
            <span>Porfolio</span>
          </Link>
          <BottomGradient />
        </button>
      </div>

      </section>

      {/* Contact Form Section */}
      <section className="flex items-center justify-center w-full md:w-1/2 mt-10 md:mt-0">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First Name</Label>
              <Input
                id="firstname"
                type="text"
                placeholder="Tyler"
                className="placeholder:text-neutral-400"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                id="lastname"
                type="text"
                placeholder="Durden"
                className="placeholder:text-neutral-400"
              />
            </LabelInputContainer>
          </div>

          {/* Email Field */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="projectmayhem@fc.com"
              className="placeholder:text-neutral-400"
            />
          </LabelInputContainer>

          {/* Message Field */}
          <LabelInputContainer className="mb-6">
            <Label htmlFor="message">Type Your Message</Label>
            <Input
              id="message"
              placeholder="Write your message here..."
              className="placeholder:text-neutral-400 h-32"
            />
          </LabelInputContainer>

          {/* Submit Button */}
          <button
            className="relative group/btn bg-gradient-to-br from-zinc-900 to-neutral-700 text-white rounded-md w-full h-10 font-medium shadow-lg hover:shadow-xl transition-all"
            type="submit"
          >
            Send Message &rarr;
            <BottomGradient />
          </button>
        </form>
      </section>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
