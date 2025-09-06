import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-d)] text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm mb-3 sm:mb-0">
          © 2025 Matías Diaconchuk. All rights reserved.
        </p>
        <div className="flex space-x-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/diaconchukm/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/mdiaconchuk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>

          {/* Email */}
          <a
            href="mailto:mdiaconchuk@gmail.com"
            className="hover:text-red-500 transition-colors"
            aria-label="Email"
          >
            <EnvelopeIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
