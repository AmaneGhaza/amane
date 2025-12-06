import { Card, CardContent } from "@/components/ui/card";

type StatCardProps = {
    icon: React.ReactNode;
    text: string;
};

export function StatCard({ icon, text }: StatCardProps) {
  return (
    <Card className="bg-transparent border-0 shadow-none">
        <CardContent className="p-2">
            <div className="flex items-center gap-4">
                <div className="text-primary">{icon}</div>
                <p className="text-sm md:text-base font-medium text-foreground/80">{text}</p>
            </div>
        </CardContent>
    </Card>
  )
}
