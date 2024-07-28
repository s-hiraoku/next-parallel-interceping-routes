"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import Button from "../_components/Button";
import { useCallback, useEffect, useState } from "react";

type ViewType = "analytic" | "team" | null;
type NonNullViewType = Exclude<ViewType, null>;

export default function DashboardLayout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();
  const [activeView, setActiveView] = useState<ViewType>(null);

  const commonClasses = "transition-all duration-300 ease-in-out";

  const handleClick = useCallback(() => {
    setActiveView((prev) => (prev === "analytic" ? "team" : "analytic"));
  }, []);

  const getButtonLabel = useCallback((view: NonNullViewType) => {
    return view === "analytic" ? "Team" : "Analytic";
  }, []);

  return (
    <div className="h-full flex flex-col bg-gray-100 p-4">
      <div className="mb-4 bg-white shadow-md p-4 rounded-md flex justify-between items-center">
        <div className="flex-1">{children}</div>
        {segment != null && (
          <Button onClick={handleClick}>
            Change {getButtonLabel(activeView ?? (segment as NonNullViewType))}{" "}
            view
          </Button>
        )}
      </div>
      <div
        className={`flex h-full min-h-0 ${activeView === null ? "gap-4" : ""}`}
      >
        {activeView === null ? (
          <>
            <div
              className={`${commonClasses} flex-1 bg-white shadow-md p-4 rounded-md`}
            >
              {analytics}
            </div>
            <div
              className={`${commonClasses} flex-1 bg-white shadow-md p-4 rounded-md`}
            >
              {team}
            </div>
          </>
        ) : (
          <>
            <div
              className={`${commonClasses} ${
                activeView === "analytic"
                  ? "flex-1 bg-white shadow-md p-4 rounded-md"
                  : "flex-none w-0 overflow-hidden"
              } `}
            >
              {analytics}
            </div>
            <div
              className={`${commonClasses} ${
                activeView === "team"
                  ? "flex-1 bg-white shadow-md p-4 rounded-md"
                  : "flex-none w-0 overflow-hidden"
              } `}
            >
              {team}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
