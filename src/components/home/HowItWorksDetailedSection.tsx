import type { Dictionary } from '@/lib/types';
import { Card, CardContent } from '../ui/card';
import { 
  FileText, 
  CheckCircle, 
  Users, 
  HandHeart, 
  MessageCircle,
  ArrowRight 
} from 'lucide-react';

export default function HowItWorksDetailedSection({ dict }: { dict: Dictionary }) {
  const steps = [
    {
      number: '1',
      icon: <FileText className="h-8 w-8" />,
      title: dict.howItWorks.steps.step1.title,
      description: dict.howItWorks.steps.step1.description,
      details: dict.howItWorks.steps.step1.details,
    },
    {
      number: '2',
      icon: <CheckCircle className="h-8 w-8" />,
      title: dict.howItWorks.steps.step2.title,
      description: dict.howItWorks.steps.step2.description,
      details: dict.howItWorks.steps.step2.details,
    },
    {
      number: '3',
      icon: <Users className="h-8 w-8" />,
      title: dict.howItWorks.steps.step3.title,
      description: dict.howItWorks.steps.step3.description,
      details: dict.howItWorks.steps.step3.details,
    },
    {
      number: '4',
      icon: <MessageCircle className="h-8 w-8" />,
      title: dict.howItWorks.steps.step4.title,
      description: dict.howItWorks.steps.step4.description,
      details: dict.howItWorks.steps.step4.details,
    },
    {
      number: '5',
      icon: <HandHeart className="h-8 w-8" />,
      title: dict.howItWorks.steps.step5.title,
      description: dict.howItWorks.steps.step5.description,
      details: dict.howItWorks.steps.step5.details,
    },
  ];

  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">
              {dict.howItWorks.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {dict.howItWorks.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Number and Icon */}
                      <div className="flex gap-4 md:gap-6 items-start shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shrink-0">
                          {step.number}
                        </div>
                        <div className="text-primary shrink-0">{step.icon}</div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                          {step.description}
                        </p>
                        <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            <strong className="text-foreground">
                              {dict.howItWorks.detailsLabel}:
                            </strong>{' '}
                            {step.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ArrowRight className="h-8 w-8 text-primary rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}