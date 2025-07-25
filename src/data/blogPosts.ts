
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  coverImage: string;
  category: string;
  readTime: string;
  lastUpdated?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Benefits of Mindfulness Meditation",
    slug: "benefits-of-mindfulness-meditation",
    excerpt: "Explore how mindfulness meditation can reduce stress and improve overall well-being.",
    content: "Mindfulness meditation has been shown to have numerous benefits for mental and physical health...",
    date: "2024-01-20",
    author: {
      name: "Health Expert",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    },
    coverImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "Mental Health",
    readTime: "7 min",
  },
  {
    id: 2,
    title: "Understanding the Science of Sleep",
    slug: "understanding-science-of-sleep",
    excerpt: "Delve into the science behind sleep and its critical role in maintaining optimal health.",
    content: "Sleep is a fundamental biological need, and understanding its mechanisms can help improve sleep quality...",
    date: "2024-02-15",
    author: {
      name: "Sleep Specialist",
      avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Sleep",
    readTime: "10 min",
  },
  {
    id: 3,
    title: "The Role of Nutrition in Mental Health",
    slug: "role-of-nutrition-in-mental-health",
    excerpt: "Discover how your diet can impact your mental health and learn about key nutrients for brain health.",
    content: "The connection between nutrition and mental health is increasingly recognized, with studies showing...",
    date: "2024-03-10",
    author: {
      name: "Nutrition Expert",
      avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Nutrition",
    readTime: "8 min",
  },
];
