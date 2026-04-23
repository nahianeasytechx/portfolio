import React, { useState, useEffect, useRef } from 'react';

const Metrics = () => {
    const metrics = [
        { value: "800+", label: "Projects", target: 800, decimal: false },
        { value: "$1.5M+", label: "Ad Spend Managed", target: 1500000, isCurrency: true, decimal: true },
        { value: "20+", label: "Startups Worked", target: 20, decimal: false },
        { value: "12+", label: "Systems Built", target: 12, decimal: false },
    ];

    const [displayValues, setDisplayValues] = useState(metrics.map(() => 0));
    const sectionRef = useRef(null);
    const animationRefs = useRef([]);

    // More sophisticated easing function (easeOutCubic)
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    
    // EaseOutElastic for a subtle bounce effect (optional)
    const easeOutElastic = (t) => {
        const c4 = (2 * Math.PI) / 3;
        return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
    };

    const animateValue = (start, end, duration, index, decimal = false) => {
        const startTime = performance.now();
        
        const updateValue = (currentTime) => {
            const elapsed = currentTime - startTime;
            let progress = Math.min(elapsed / duration, 1);
            
            // Use different easing for different effects
            const easedProgress = easeOutCubic(progress); // Smooth, professional
            // const easedProgress = easeOutElastic(progress); // Bouncy, playful
            
            let currentValue;
            if (decimal) {
                // Keep decimals for smooth large number animations
                currentValue = start + (end - start) * easedProgress;
            } else {
                currentValue = Math.floor(start + (end - start) * easedProgress);
            }
            
            setDisplayValues(prev => {
                const newValues = [...prev];
                newValues[index] = currentValue;
                return newValues;
            });
            
            if (progress < 1) {
                animationRefs.current[index] = requestAnimationFrame(updateValue);
            } else {
                // Ensure final value is exact
                setDisplayValues(prev => {
                    const newValues = [...prev];
                    newValues[index] = end;
                    return newValues;
                });
            }
        };
        
        // Small delay between counters for a cascading effect
        setTimeout(() => {
            animationRefs.current[index] = requestAnimationFrame(updateValue);
        }, index * 100);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        metrics.forEach((metric, index) => {
                            animateValue(0, metric.target, 2000, index, metric.decimal);
                        });
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
            animationRefs.current.forEach(anim => {
                if (anim) cancelAnimationFrame(anim);
            });
        };
    }, []);

    const formatValue = (value, metric) => {
        if (metric.isCurrency) {
            if (value >= 1000000) {
                return `$${(value / 1000000).toFixed(1)}M+`;
            } else if (value >= 1000) {
                return `$${(value / 1000).toFixed(0)}K+`;
            }
            return `$${Math.floor(value)}+`;
        }
        
        if (metric.decimal && value < 100) {
            return `${value.toFixed(1)}+`;
        }
        return `${Math.floor(value)}+`;
    };

    return (
        <section id="metrics" ref={sectionRef} className="w-full py-4">
            <div className="container mx-auto px-4 md:px-6 lg:px-0">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-12 text-center">
                    Metrics / Achievements
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                    {metrics.map((metric, index) => (
                        <div
                            key={metric.label}
                            className="group bg-white rounded-xl md:rounded-2xl p-3 md:p-6 border border-gray-100 shadow-sm text-center transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-default "
                        >
                            <p className="text-xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-1 md:mb-2">
                                {displayValues[index] > 0 
                                    ? formatValue(displayValues[index], metric)
                                    : metric.value}
                            </p>
                            <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wide">
                                {metric.label}
                            </p>
            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Metrics;