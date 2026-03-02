import { Icon } from "@iconify/react";

export function Footer() {
  return (
    <footer className="mt-8 sm:mt-12 lg:mt-16 py-4 sm:py-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="flex flex-row justify-center items-center gap-2 text-xs sm:text-sm text-gray-400 text-center">
          Lesinka <span className="mx-1 sm:mx-2">·</span> 2026
          <span className="mx-1 sm:mx-2">·</span>
          <a href="https://github.com/Lesyalys" target="_blank">
            <Icon icon="line-md:github" width="24" height="24" />
          </a>
        </p>
      </div>
    </footer>
  );
}
