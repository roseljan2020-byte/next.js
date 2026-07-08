export default function Pricing() {
  return (
    <div className="pricing-container">
      <h1>Choose Your Plan</h1>
      <p>Start with a 14-day free trial. Cancel anytime.</p>

      <div className="pricing-cards">
        {/* Starter Plan */}
        <div className="pricing-card">
          <h2>Starter</h2>
          <p className="price">$9<span>/month</span></p>
          <ul>
            <li>AI-generated marketing copy</li>
            <li>Unlimited content generations</li>
            <li>14-day free trial</li>
            <li>Email support</li>
          </ul>
          <a
            href="https://roseljan.gumroad.com/l/xecus"
            className="btn-checkout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Free Trial
          </a>
        </div>

        {/* Pro Plan */}
        <div className="pricing-card featured">
          <h2>Pro</h2>
          <p className="price">$29<span>/month</span></p>
          <ul>
            <li>Everything in Starter</li>
            <li>Higher/priority generation limits</li>
            <li>Priority email support</li>
            <li>Early access to new features</li>
            <li>14-day free trial</li>
          </ul>
          <a
            href="https://roseljan.gumroad.com/l/odeguc"
            className="btn-checkout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </div>
  );
}
Compose
