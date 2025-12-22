import { AlertTriangle, TrendingUp, Users } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import './ProblemContext.css';

const ProblemContext = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const stats = [
    {
      value: 10,
      suffix: " milhões",
      label: "de pacientes afetados por condições osteometabólicas",
      icon: <Users size={32} />,
      currentValue: count1
    },
    {
      value: 81,
      prefix: "R$ ",
      suffix: " mi",
      label: "em gastos anuais com tratamentos e urgências",
      icon: <TrendingUp size={32} />,
      currentValue: count2
    },
    {
      value: 3,
      prefix: "+",
      suffix: " milhões",
      label: "de procedimentos realizados entre 2008–2010",
      icon: <AlertTriangle size={32} />,
      currentValue: count3
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Animate counter 1
            let current1 = 0;
            const timer1 = setInterval(() => {
              current1 += 1;
              setCount1(current1);
              if (current1 >= 10) clearInterval(timer1);
            }, 100);

            // Animate counter 2
            let current2 = 0;
            const timer2 = setInterval(() => {
              current2 += 3;
              setCount2(current2);
              if (current2 >= 81) {
                setCount2(81);
                clearInterval(timer2);
              }
            }, 30);

            // Animate counter 3
            let current3 = 0;
            const timer3 = setInterval(() => {
              current3 += 1;
              setCount3(current3);
              if (current3 >= 3) clearInterval(timer3);
            }, 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return (
    <section className="problem-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title light center">Por que esse cuidado é essencial?</h2>
        <div className="problem-grid">
          <div className="problem-highlight">
            <blockquote>
              "Quedas e fraturas são uma das maiores causas de perda funcional e dependência na pessoa idosa."
            </blockquote>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-value">
                  {stat.prefix || ''}{stat.currentValue}{stat.suffix || ''}
                </h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemContext;
