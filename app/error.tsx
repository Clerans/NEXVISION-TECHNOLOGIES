"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AlertCircle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[NEXVISION RUNTIME EXCEPTION]:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto">
          <AlertCircle className="w-7 h-7" />
        </div>

        <Badge variant="outline" className="text-rose-400 border-rose-500/30">
          RUNTIME FAULT DETECTED
        </Badge>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            An Unexpected System Exception Occurred
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            Our automated telemetry has logged this exception. You may attempt to recover the segment state below.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 pt-2">
          <Button
            onClick={() => reset()}
            variant="glow"
            size="md"
            icon={<RefreshCw className="w-4 h-4" />}
            iconPosition="left"
          >
            Retry Execution
          </Button>

          <Button
            href="/"
            variant="outline"
            size="md"
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
          >
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
