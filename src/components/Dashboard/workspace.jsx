"use client"

import { cn } from "@/lib/utils"
import { DashboardTool } from "@/components/Dashboard/tools/dashboard-tool"
import PlayersTool from "./tools/PlayersTool"


/* ========= ADD TOOL FUNCTION HERE =========  */
export function Workspace({ collapsed, activeTool }) {
  const renderTool = () => {
  switch (activeTool) {
    case "dashboard":
      return <DashboardTool />;
    case "players":
      return <PlayersTool />;
    // Ajoute d’autres cases ici pour tes futurs outils
    default:
      return null; // ou un fallback, ou rien
  }
};

  return (
    <main className={cn("workspace-transition flex-1 overflow-auto p-6 bg-[#121212]", collapsed ? "ml-16" : "ml-64")}>
      {renderTool()}
    </main>
  )
}


