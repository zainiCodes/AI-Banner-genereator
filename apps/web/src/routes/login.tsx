import { createFileRoute } from "@tanstack/react-router";
import LoginForm from "@/components/auth/components/sign-in-form";


export const Route = createFileRoute("/login")({
  component: LoginForm,
});
