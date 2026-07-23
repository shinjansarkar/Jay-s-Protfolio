import IntelCenter from "@/components/IntelCenter";

export default function AchievementsPage() {
  return (
    <div className="w-full min-h-full p-8 flex items-center justify-center">
      {/* We are using IntelCenter here because it contains the medals (Achievements) */}
      <IntelCenter />
    </div>
  );
}
