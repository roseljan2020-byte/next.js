import { useState } from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const [loadingPlan, setLoadingPlan] = useState(null);

  const handleSubscribe = async (plan) => {
    if (plan === 'free') {
      window.location.href = '/signup';
      return;
    }

    setLoadingPlan(plan);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Something went wrong. Please try again.');
        setLoadingPlan(null);
      }
    } catch (err) {
      console.error('Checkout error:', err);
      alert('Something went wrong. Please try again.');
      setLoadingPlan(null);
    }
  };

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: '',
      description: 'Try it out, no card required',
      features: [
        '5 content generations / month',
        'Email campaigns',
        'Basic templates',
        'Community support',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      id: 'starter',
      name: 'Starter',
      price: '$9',
      period: '/month',
      description: '14-day free trial',
      features: [
        '100 content generations / month',
        'All content types',
        'Priority templates',
        'Email support',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: '14-day free trial',
      features: [
        'Unlimited content generations',
        'All content types',
        'Custom templates',
        'Priority support',
        'API access',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, transparent pricing</h1>
        <p className="text-gray-400">Choose the plan that fits your content needs</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl p-8 border ${
              plan.highlighted
                ? 'border-blue-500 bg-gray-900 scale-105 shadow-xl shadow-blue-500/10'
                : 'border-gray-800 bg-gray-900/50'
            }`}
          >
            {plan.highlighted && (
              <span className="inline-block bg-blue-500 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Most Popular
              </span>
            )}
            <h2 className="text-xl font-semibold mb-1">{plan.name}</h2>
            <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-gray-400">{plan.period}</span>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleSubscribe(plan.id)}
              disabled={loadingPlan === plan.id}
              className={`w-full py-3 rounded-lg font-medium transition ${
                plan.highlighted
                  ? 'bg-blue-500 hover:bg-blue-400 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              } disabled:opacity-50`}
            >
              {loadingPlan === plan.id ? 'Redirecting...' : plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
