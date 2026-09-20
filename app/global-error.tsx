"use client";

import React from "react";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050505] text-slate-100 min-h-screen flex items-center justify-center p-6 font-sans">
        <div className="max-w-md text-center space-y-6">
          <h1 className="text-4xl font-extrabold text-white">500 — System Failure</h1>
          <p className="text-sm text-slate-400">
            A critical server-side exception occurred while rendering the root application layout.
          </p>
          <Button onClick={() => reset()} variant="glow" size="md">
            Reload Application
          </Button>
        </div>
      </body>
    </html>
  );
}
