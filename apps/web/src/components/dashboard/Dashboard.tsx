import DashboardForm from "./components/dashboard-form";
// import DashboardOutput from "./components/dashboard-output";

export default function Dashboard() {
    return (
        <div className="flex justify-center gap-6 h-screen">
            <DashboardForm />
            {/* <DashboardOutput /> */}
        </div>
    )
}
