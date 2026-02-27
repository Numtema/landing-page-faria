export const COMPANIES = [
    {
        name: "Asana",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Asana_logo.svg",
    },
    {
        name: "Tidal",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Tidal_logo.svg",
    },
    {
        name: "Linear",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Linear_logo.svg",
    },
    {
        name: "Raycast",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Raycast_logo.svg",
    }
] as const;

export const PROCESS = [
    {
        title: "Organize Your Links",
        description: "Efficiently categorize and tag your links for quick access and easy management.",
    },
    {
        title: "Shorten and Customize",
        description: "Create concise, branded links that are easy to share and track.",
    },
    {
        title: "Analyze and Optimize",
        description: "Gain insights into link performance and optimize for better engagement.",
    },
] as const;

export const REVIEWS = [
    {
        name: "Michael Smith",
        username: "@michaelsmith",
        rating: 5,
        review: "This tool is a lifesaver! Managing and tracking my links has never been easier. A must-have for anyone dealing with numerous links."
    },
    {
        name: "Emily Johnson",
        username: "@emilyjohnson",
        rating: 4,
        review: "Very useful app! It has streamlined my workflow considerably. A few minor bugs, but overall a great experience."
    },
    {
        name: "Daniel Williams",
        username: "@danielwilliams",
        rating: 5,
        review: "I've been using this app daily for months. The insights and analytics it provides are invaluable. Highly recommend it!"
    }
] as const;

export const PLANS = [
  {
    name: "Free",
    info: "For most individuals",
    price: {
      monthly: 0,
      yearly: 0,
    },
    features: [
      { text: "Shorten links" },
      { text: "Up to 100 tags", limit: "100 tags" },
      { text: "Customizable branded links" },
      { text: "Track clicks", tooltip: "1K clicks/month" },
    ],
    btn: {
      text: "Start for free",
      href: "/signup?plan=free",
      variant: "default",
    },
  },
  {
    name: "Pro",
    info: "For small businesses",
    price: {
      monthly: 9,
      yearly: 90,
    },
    features: [
      { text: "Shorten links" },
      { text: "Up to 500 tags", limit: "500 tags" },
      { text: "Customizable branded links" },
      { text: "Track clicks", tooltip: "20K clicks/month" },
      { text: "Export click data", tooltip: "Upto 1K links" },
    ],
    btn: {
      text: "Get started",
      href: "/signup?plan=pro",
      variant: "purple",
    },
  },
  {
    name: "Business",
    info: "For large organizations",
    price: {
      monthly: 49,
      yearly: 490,
    },
    features: [
      { text: "Shorten links" },
      { text: "Unlimited tags" },
      { text: "Customizable branded links" },
      { text: "Track clicks", tooltip: "Unlimited clicks" },
      { text: "Export click data", tooltip: "Unlimited clicks" },
      {
        text: "Dedicated manager",
        tooltip: "Get priority support from our team",
      },
    ],
    btn: {
      text: "Contact team",
      href: "/signup?plan=business",
      variant: "default",
    },
  },
];
