import { createFileRoute } from "@tanstack/react-router";
import HomeComponent from "@/features/home-page/Home";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});
