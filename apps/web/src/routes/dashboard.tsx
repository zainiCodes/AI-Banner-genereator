import { createFileRoute, redirect } from "@tanstack/react-router";
import { getUser } from "@/functions/get-user";
// import { lazy } from "react";
import Dashboard from "@/features/dashboard/Dashboard";
export const Route = createFileRoute("/dashboard")({
  // component: lazy(() => import("@/features/dashboard/Dashboard")),
  component: Dashboard,
  beforeLoad: async () => {
    const session = await getUser();
    return { session };
  },
  loader: async ({ context }) => {
    if (!context.session) {
      throw redirect({
        to: "/login",
      });
    }
  },
});
