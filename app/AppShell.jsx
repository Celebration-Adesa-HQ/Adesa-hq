"use client";
import Maintenance from "@/components/Maintenance";

export default function AppShell() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <Maintenance />
    </div>
  );
}
