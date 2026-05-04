import { createFileRoute } from "@tanstack/react-router";
import { OutilsSection } from "@/components/OutilsSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <OutilsSection />
    </main>
  );
}
