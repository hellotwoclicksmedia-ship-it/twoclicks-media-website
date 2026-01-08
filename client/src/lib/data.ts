import type { CaseStudy, BlogArticle, Service } from "@shared/schema";

export const services: Service[] = [
  {
    id: "cro",
    title: "Conversion Rate Optimization (CRO)",
    shortDescription: "We identify leaks, test hypotheses, and optimise product, cart, and checkout flows to increase revenue from existing traffic.",
    description: "We analyse user behaviour, funnels, and friction points — then test and optimise what actually moves revenue.",
    includes: [
      "Funnel & UX audits",
      "Product page optimisation",
      "Cart & checkout improvements",
      "A/B testing & experiments",
      "Conversion tracking setup"
    ],
    outcome: "Higher revenue from the same traffic."
  },
  {
    id: "revamps",
    title: "Shopify Store Revamps",
    shortDescription: "Design and UX improvements driven by conversion data — not aesthetics alone.",
    description: "Redesigns driven by clarity, speed, and conversion — not trends.",
    includes: [
      "UX & IA restructuring",
      "Homepage & PDP redesign",
      "Checkout optimisation",
      "Mobile-first improvements"
    ],
    outcome: "A store that feels trustworthy, fast, and conversion-ready."
  },
  {
    id: "apps",
    title: "App Integration & Cleanup",
    shortDescription: "We audit, remove overlap, integrate correctly, and ensure apps actually improve performance.",
    description: "We audit, remove bloat, and integrate only what your store actually needs.",
    includes: [
      "App audits & replacements",
      "Proper configuration",
      "Custom app workflows",
      "Performance checks"
    ],
    outcome: "Faster store, fewer conflicts, cleaner logic."
  },
  {
    id: "speed",
    title: "Speed & Performance Optimization",
    shortDescription: "LCP, CLS, load time fixes that directly impact conversion and ad efficiency.",
    description: "We improve metrics that impact conversion and ads.",
    includes: [
      "LCP / CLS fixes",
      "Image & script optimisation",
      "Theme performance tuning"
    ],
    outcome: "Faster load times, better UX, higher conversion."
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "doubling-revenue-90-days",
    title: "Doubling revenue in 3 months",
    primaryMetric: "0.54% → 1.2% conversion rate",
    description: "Store revamp + CRO + speed optimisation",
    problem: "This DTC skincare brand had strong traffic from paid ads but a conversion rate stuck at 0.54%. Their product pages lacked clear value propositions, the checkout had unnecessary friction, and mobile experience was subpar.",
    approach: [
      "Deep audit of analytics, heatmaps, and user recordings",
      "Identified 23 conversion blockers across the funnel",
      "Prioritised fixes by revenue impact potential",
      "Implemented changes in 30-day sprints with A/B testing"
    ],
    changes: [
      "Redesigned product pages with clear benefit hierarchy",
      "Simplified checkout to 2 steps from 4",
      "Added trust signals at key decision points",
      "Optimised mobile navigation and CTA placement",
      "Reduced page load time from 4.2s to 1.8s"
    ],
    results: {
      conversionRate: "0.54% → 1.2% (+122%)",
      revenueImpact: "100% revenue growth in 3 months",
      speedImprovement: "4.2s → 1.8s load time"
    },
    quote: {
      text: "TwoClicks didn't just redesign our store — they transformed how we think about conversion. The results speak for themselves.",
      author: "Sarah M.",
      role: "Founder, DTC Skincare Brand"
    }
  },
  {
    id: "2",
    slug: "messy-launch-to-conversion-ready",
    title: "From messy launch to conversion-ready store",
    primaryMetric: "Launch → 2.1% conversion rate",
    description: "New Shopify build with performance-first UX",
    problem: "A new wellness brand launched with a template-based store that looked generic and performed poorly. They had a great product but the store didn't communicate its value or build trust.",
    approach: [
      "Complete UX audit and competitor analysis",
      "Developed conversion-focused wireframes",
      "Built custom theme with performance as priority",
      "Integrated essential apps without bloat"
    ],
    changes: [
      "Custom homepage with clear brand story",
      "Product pages optimised for mobile-first",
      "Streamlined navigation structure",
      "Fast-loading image optimization",
      "Strategic social proof placement"
    ],
    results: {
      conversionRate: "2.1% from day one",
      revenueImpact: "Exceeded launch month projections by 40%"
    },
    quote: {
      text: "We finally have a store that matches the quality of our product. The conversion rate from launch was beyond our expectations.",
      author: "Michael R.",
      role: "Co-founder, Wellness Brand"
    }
  }
];

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    slug: "why-shopify-conversion-rate-low",
    title: "Why your Shopify conversion rate is low (and how to fix it)",
    summary: "The most common conversion killers we see across DTC stores and practical fixes you can implement today.",
    category: "conversion",
    readTime: "8 min read",
    content: [
      "Most DTC brands focus on traffic. They pour money into ads, influencer partnerships, and SEO. But traffic without conversion is just expensive window shopping.",
      "After auditing hundreds of Shopify stores, we've identified patterns. The same mistakes appear again and again. The good news? Most are fixable.",
      "The first killer: unclear value proposition. Visitors land on your store and within 3 seconds, they need to understand what you sell, why it's different, and why they should care. If your hero section is just a pretty image with a vague tagline, you're losing sales.",
      "The second killer: friction in the funnel. Every extra click, every unnecessary form field, every confusing navigation choice reduces conversion. We've seen stores improve by 30% just by simplifying their checkout.",
      "The third killer: lack of trust signals. New visitors don't know you. They need proof that others have bought and loved your products. Reviews, testimonials, and trust badges should be visible throughout the journey."
    ],
    checklist: [
      "Audit your above-the-fold messaging — is the value clear?",
      "Count the clicks from landing to purchase — can you reduce them?",
      "Review your trust signals — are they visible at decision points?",
      "Check mobile experience — is it as good as desktop?",
      "Analyse your checkout — are there unnecessary steps?"
    ]
  },
  {
    id: "2",
    slug: "shopify-apps-improve-conversion",
    title: "Which Shopify apps actually improve conversion",
    summary: "Not all apps are created equal. Here's what actually moves the needle vs what just slows your store.",
    category: "apps",
    readTime: "6 min read",
    content: [
      "The Shopify app store is overwhelming. Over 8,000 apps promise to improve your store. But many add bloat, slow down your site, and conflict with each other.",
      "We've tested hundreds of apps across our client stores. Here's what we've learned about which categories actually improve conversion.",
      "Reviews and social proof apps consistently deliver ROI. But you don't need five different apps. One well-configured solution outperforms scattered social proof.",
      "Upsell and cross-sell apps can increase AOV, but only if implemented thoughtfully. Annoying popups hurt more than they help.",
      "Speed optimization apps are necessary evils. They fix problems often caused by other apps. The best strategy is to need fewer apps in the first place."
    ],
    checklist: [
      "Audit current apps — do you need all of them?",
      "Check app impact on page speed",
      "Consolidate overlapping functionality",
      "Test conversion with and without each app",
      "Remove apps that aren't earning their keep"
    ]
  },
  {
    id: "3",
    slug: "speed-optimization-checklist",
    title: "Speed optimisation checklist for DTC founders",
    summary: "A practical guide to improving your store's load time without technical expertise.",
    category: "speed",
    readTime: "5 min read",
    content: [
      "Page speed directly impacts conversion. Every second of delay costs you sales. Google research shows that 53% of mobile visitors leave if a page takes more than 3 seconds to load.",
      "But speed optimization can feel technical and overwhelming. Here's a practical checklist you can work through.",
      "Images are usually the biggest culprit. Unoptimized product photos can add seconds to your load time. Use WebP format and lazy loading.",
      "Apps add JavaScript that needs to load. Each app adds weight. Audit your apps and remove what you don't need.",
      "Theme code matters. Some themes are built for speed, others prioritize flashy features. Consider a theme audit if your speed issues persist."
    ],
    checklist: [
      "Run PageSpeed Insights and note your score",
      "Compress and convert images to WebP",
      "Enable lazy loading for images",
      "Remove unused apps",
      "Review and minimise custom code",
      "Consider theme performance audit"
    ]
  },
  {
    id: "4",
    slug: "cro-experiments-increase-revenue",
    title: "CRO experiments that consistently increase revenue",
    summary: "Proven A/B tests and optimizations that deliver results across different product categories.",
    category: "ux",
    readTime: "7 min read",
    content: [
      "Not all CRO experiments are created equal. Some changes consistently deliver results across different stores and product categories.",
      "We've run hundreds of experiments. Here are the patterns that work.",
      "Simplifying product pages almost always wins. Remove distractions, prioritize key information, make the add-to-cart button prominent.",
      "Adding urgency carefully works. Stock levels, limited-time offers, and shipping cutoffs can increase conversion — but fake urgency destroys trust.",
      "Improving mobile checkout is often the biggest opportunity. Most traffic is mobile, but most checkouts are designed desktop-first."
    ],
    checklist: [
      "Test simplified vs feature-rich product pages",
      "A/B test different CTA copy and placement",
      "Experiment with social proof positioning",
      "Test mobile checkout improvements",
      "Measure and iterate based on data"
    ]
  }
];

export const retainerTiers = [
  {
    id: "starter",
    name: "Starter Retainer",
    description: "For newly launched or early-stage brands",
    features: [
      "Ongoing Shopify support",
      "Monthly CRO improvements",
      "Speed & UX fixes",
      "Priority support"
    ],
    popular: false
  },
  {
    id: "growth",
    name: "Growth Retainer",
    description: "For scaling brands with traffic but low conversion",
    features: [
      "Dedicated monthly hours",
      "CRO roadmap & experiments",
      "App optimisation",
      "Monthly performance review"
    ],
    popular: true
  },
  {
    id: "fractional",
    name: "Fractional Shopify Product Team",
    description: "For brands that want ownership, not vendors",
    features: [
      "Deep store ownership",
      "Strategic roadmap",
      "Weekly strategy calls",
      "Execution across CRO, UX, apps, speed"
    ],
    popular: false
  }
];

export const stats = [
  {
    value: "0.54% → 1.2%",
    label: "conversion rate in 90 days"
  },
  {
    value: "100%",
    label: "revenue growth in 3 months"
  },
  {
    value: "50–100 hrs",
    label: "high-touch monthly retainers / brand"
  }
];
