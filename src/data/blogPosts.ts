export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Benefits of Mindfulness Meditation",
    slug: "benefits-of-mindfulness-meditation",
    excerpt: "Explore how mindfulness meditation can reduce stress and improve overall well-being.",
    content: "Mindfulness meditation has been shown to have numerous benefits for mental and physical health...",
    date: "2024-01-20",
    author: "Dr. Emily Carter",
    readTime: "7 min",
  },
  {
    id: 2,
    title: "Understanding the Science of Sleep",
    slug: "understanding-science-of-sleep",
    excerpt: "Delve into the science behind sleep and its critical role in maintaining optimal health.",
    content: "Sleep is a fundamental biological need, and understanding its mechanisms can help improve sleep quality...",
    date: "2024-02-15",
    author: "Prof. James Anderson",
    readTime: "10 min",
  },
  {
    id: 3,
    title: "The Role of Nutrition in Mental Health",
    slug: "role-of-nutrition-in-mental-health",
    excerpt: "Discover how your diet can impact your mental health and learn about key nutrients for brain health.",
    content: "The connection between nutrition and mental health is increasingly recognized, with studies showing...",
    date: "2024-03-10",
    author: "Sarah Johnson, RD",
    readTime: "8 min",
  },
];
