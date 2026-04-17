import SignUpForm from '@/features/auth/components/sign-up-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/signUp')({
    component: SignUpForm,
})

