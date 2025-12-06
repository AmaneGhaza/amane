import type { Dictionary } from '@/lib/types';
import { Heart, Users, Globe, Shield } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export default function WhoWeAreSection({ dict }: { dict: Dictionary }) {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: dict.whoWeAre.values.compassion,
      description: dict.whoWeAre.values.compassionDesc,
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: dict.whoWeAre.values.trust,
      description: dict.whoWeAre.values.trustDesc,
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: dict.whoWeAre.values.community,
      description: dict.whoWeAre.values.communityDesc,
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: dict.whoWeAre.values.transparency,
      description: dict.whoWeAre.values.transparencyDesc,
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">
              {dict.whoWeAre.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {dict.whoWeAre.description}
            </p>
          </div>

          <Card className="mb-8 border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">
                {dict.whoWeAre.mission}
              </h3>
              <p className="text-lg text-center text-muted-foreground leading-relaxed">
                {dict.whoWeAre.missionStatement}
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1">{value.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}