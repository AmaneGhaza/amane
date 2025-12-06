import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

type IconCardProps = {
  icon: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
};

export function IconCard({ icon, title, description, className }: IconCardProps) {
  return (
    <Card className={`text-center flex flex-col items-center ${className}`}>
      <CardHeader className="items-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <CardTitle className="font-bold text-lg">{title}</CardTitle>
      </CardHeader>
      {description && (
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      )}
    </Card>
  );
}
