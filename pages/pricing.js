export default function Pricing() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Choose Your Plan</h1>
        <p className="text-slate-400 text-lg">Start with a 14-day free trial. Cancel anytime.</p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Starter Plan */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-8">
          <h2 className="text-2xl font-bold mb-2">Starter</h2>
          <p className="text-4xl font-bold mb-6">
            $9<span className="text-lg text-slate-400 font-normal">/month</span>
          </p>
          <ul className="space-y-3 mb-8 text-slate-300">
            <li>✓ AI-generated marketing copy</li>
            <li>✓ Unlimited content generations</li>
            <li>✓ 14-day free trial</li>
            <li>✓ Email support</li>
          </ul>
          <a
            href="https://roseljan.gumroad.com/l/xecus"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 rounded-lg transition"
          >
            Start Free Trial
          </a>
        </div>

        {/* Pro Plan */}
        <div className="bg-slate-800 rounded-xl border-2 border-blue-500 p-8 relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
          <h2 className="text-2xl font-bold mb-2">Pro</h2>
          <p className="text-4xl font-bold mb-6">
            $29<span className="text-lg text-slate-400 font-normal">/month</span>
          </p>
          <ul className="space-y-3 mb-8 text-slate-300">
            <li>✓ Everything in Starter</li>
            <li>✓ Higher/priority generation limits</li>
            <li>✓ Priority email support</li>
            <li>✓ Early access to new features</li>
            <li>✓ 14-day free trial</li>
          </ul>
          <a
            href="https://roseljan.gumroad.com/l/odeguc"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </div>
  );
}
