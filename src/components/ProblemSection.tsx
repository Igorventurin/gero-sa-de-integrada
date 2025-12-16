import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, TrendingUp, Activity } from 'lucide-react';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
}

const StatItem = ({ value, suffix, label, icon: Icon }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-secondary" />
      </div>
      <div className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-2">
        {count.toLocaleString('pt-BR')}{suffix}
      </div>
      <p className="text-primary-foreground/70">{label}</p>
    </div>
  );
};

const stats = [
  {
    value: 10,
    suffix: ' milhões',
    label: 'de pacientes afetados por condições osteometabólicas',
    icon: AlertTriangle,
  },
  {
    value: 81,
    suffix: ' milhões',
    label: 'em gastos anuais (R$)',
    icon: TrendingUp,
  },
  {
    value: 3,
    suffix: '+ milhões',
    label: 'de procedimentos entre 2008-2010',
    icon: Activity,
  },
];

export const ProblemSection = () => {
  return (
    <section className="section-padding section-navy">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-section text-primary-foreground mb-6">
            Por que esse cuidado é essencial?
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Quedas e fraturas são uma das maiores causas de perda funcional e dependência na pessoa idosa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
