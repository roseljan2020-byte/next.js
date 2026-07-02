import React, { useState } from 'react';
import { Copy, Zap, Mail, Share2, Lightbulb, Sparkles, CheckCircle } from 'lucide-react';

export default function MarketingContentGenerator() {
  const [contentType, setContentType] = useState('email');
  const [productInfo, setProductInfo] = useState('');
  const [audience, setAudience] = useState('');
  const [tone, setTone] = useState('professional');
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const contentTypes = {
    email: { name: 'Email Campaign', icon: Mail, prompt: 'Create a compelling email subject line and short body copy' },
    social: { name: 'Social Media Posts', icon: Share2, prompt: 'Create 3 engaging social media posts' },
    ads: { name: 'Ad Copy', icon: Zap, prompt: 'Create Google/Facebook ad copy with headline and description' },
    landing: { name: 'Landing Page', icon: Lightbulb, prompt: 'Create compelling landing page headline, subheading, and CTA' },
    product: { name: 'Product Description', icon: Sparkles, prompt: 'Create a professional product description' },
  };

  const generateContent = async () => {
    if (!productInfo.trim() || !audience.trim()) {
      alert('Please fill in product info and target audience');
      return;
    }

    setLoading(true);
    setGeneratedContent('');

    try {
      const systemPrompt = `You are an expert marketing copywriter specializing in high-converting marketing content. 
Your task is to create compelling, persuasive marketing copy that drives action and resonates with the target audience.
Tone: ${tone}
Always be concise, impactful, and include specific benefits.
Format the output clearly with sections.`;

      const userPrompt = `${contentTypes[contentType].prompt}

Product/Service: ${productInfo}
Target Audience: ${audience}
Tone: ${tone}

Generate compelling marketing content that will convert.`;

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          system: systemPrompt,
          messages: [
            { role: 'user', content: userPrompt }
          ],
        })
      });

      const data = await response.json();
      
      if (data.content && data.content[0] && data.content[0].text) {
        setGeneratedContent(data.content[0].text);
      } else {
        setGeneratedContent('Error generating content. Please try again.');
      }
    } catch (error) {
      setGeneratedContent(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const CurrentIcon = contentTypes[contentType].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl font-bold text-white">ContentAI</h1>
          </div>
          <p className="text-slate-400 text-lg">Generate high-converting marketing copy in seconds</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Input */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-8 sticky top-8">
              <h2 className="text-xl font-bold text-white mb-6">Create Content</h2>

              {/* Content Type Selection */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-300 mb-3">Content Type</label>
                <div className="space-y-2">
                  {Object.entries(contentTypes).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => setContentType(key)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                        contentType === key
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      <value.icon className="w-5 h-5" />
                      <span>{value.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-300 mb-2">What do you sell?</label>
                <textarea
                  value={productInfo}
                  onChange={(e) => setProductInfo(e.target.value)}
                  placeholder="e.g., 'Healthy protein shakes', 'SEO services for SaaS', 'Productivity app'"
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-500"
                  rows="3"
                />
              </div>

              {/* Target Audience */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-300 mb-2">Target Audience</label>
                <textarea
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  placeholder="e.g., 'Busy entrepreneurs', 'Health-conscious women 25-45', 'Marketing directors'"
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-500"
                  rows="3"
                />
              </div>

              {/* Tone */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-300 mb-3">Tone</label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="professional">Professional</option>
                  <option value="friendly">Friendly & Casual</option>
                  <option value="urgent">Urgent & Compelling</option>
                  <option value="creative">Creative & Fun</option>
                  <option value="educational">Educational</option>
                </select>
              </div>

              {/* Generate Button */}
              <button
                onClick={generateContent}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate Content
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Panel - Output */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Your Content</h2>
                {generatedContent && (
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                )}
              </div>

              {generatedContent ? (
                <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                  <div className="prose prose-invert max-w-none">
                    <div className="text-slate-100 whitespace-pre-wrap text-sm leading-relaxed">
                      {generatedContent}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-700/50 rounded-lg p-12 border border-slate-600 border-dashed flex flex-col items-center justify-center text-center">
                  <Sparkles className="w-12 h-12 text-slate-500 mb-4" />
                  <p className="text-slate-400 mb-2">No content yet</p>
                  <p className="text-slate-500 text-sm">Fill in your details and click "Generate Content" to see AI-powered copy</p>
                </div>
              )}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { icon: Zap, label: 'Lightning Fast', value: '<5 seconds' },
                { icon: CheckCircle, label: 'High Converting', value: 'Data-driven' },
                { icon: Sparkles, label: 'AI Powered', value: 'Claude 4' },
              ].map((feature, idx) => (
                <div key={idx} className="bg-slate-800 rounded-lg border border-slate-700 p-4 text-center">
                  <feature.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-white font-semibold text-sm">{feature.label}</p>
                  <p className="text-slate-400 text-xs">{feature.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            ContentAI • Unlimited content generation • No credit card required
          </p>
        </div>
      </div>
    </div>
  );
}
