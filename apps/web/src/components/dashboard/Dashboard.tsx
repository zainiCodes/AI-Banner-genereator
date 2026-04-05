import DashboardForm from "./components/dashboard-form";
import DashboardOutput from "./components/dashboard-output";

export default function Dashboard() {
    return (
        <div className="flex justify-center gap-7  h-screen">
            <DashboardForm />
            <DashboardOutput aspect={16 / 9} />
        </div>
    )
}
