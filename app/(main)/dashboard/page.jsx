import { getIndustryInsights } from "@/actions/dashboard";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import DashboardView from "./_components/dashboard-view";

const IndustryInsightsPage = async () => {
  try {
    const { isOnboarded } = await getUserOnboardingStatus();
    const insights = await getIndustryInsights();

    if (!isOnboarded) {
      return redirect('/onboarding');
    }

    return <div className="container mx-auto">
      <DashboardView insights={insights}/>
    </div>;
  } catch (error) {
    console.error("Error fetching onboarding status:", error.message);
    return redirect('/onboarding'); // Redirect if error occurs
  }
};

export default IndustryInsightsPage;
