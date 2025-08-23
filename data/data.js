
export const users = [
    { 
        id: 1, 
        name: "Padam subba",
        email: 'subbapdm@gmail.com',
        phone: '9816097181',
        role: 'admin',
        status: 'Active',
        createdAt: '2024-05-12',
    },
    { 
        id: 2, 
        name: "Bob Johnson",
        email: 'bob@example.com',
        phone: '9816097181',
        role: 'user',
        status: 'Active',
        createdAt: '2024-05-12',
    },
    { 
        id: 3, 
        name: "Charlie Wilson",
        email: 'charlie@example.com',
        phone: '9816097145',
        role: 'user',
        status: 'Active',
        createdAt: '2024-05-12',
    },
    { 
        id: 4, 
        name: "Iris Thompson",
        email: 'iris@example.com',
        phone: '9816094536',
        role: 'user',
        status: 'Inactive',
        createdAt: '2024-05-12',
    },
    { 
        id: 5, 
        name: "John Doe",
        email: 'john@example.com',
        phone: '9816097181',
        role: 'admin',
        status: 'Active',
        createdAt: '2024-05-12',
    },
    { 
        id: 6, 
        name: "Roshan limbu",
        email: 'roshan@example.com',
        phone: '9816097181',
        role: 'user',
        status: 'Active',
        createdAt: '2024-05-12',
    },
    { 
        id: 7, 
        name: "Subash Sambahamphe",
        email: 'subash@example.com',
        phone: '9816097181',
        role: 'admin',
        status: 'Active',
        createdAt: '2024-05-12',
    },
    { 
        id: 8, 
        name: "Bikash Tamang",
        email: 'bikash@example.com',
        phone: '9816097181',
        role: 'admin',
        status: 'Active',
        createdAt: '2024-05-12',
    }
];

export const products = [
    { 
        id: 1, 
        title: "iPhone 15 Pro Max 2024",
        category: {
            name: "Accessories"
        },
        price: 1500.50,
        stock: '15',
        trend: 2.5,
        createdAt: '2024-05-12',
    },
    { 
        id: 2, 
        title: "Huawei Pura 70 Pro",
        category: {
            name: "Gadgets"
        },
        price: 1300,
        stock: '5',
        trend: 1.7,
        createdAt: '2024-05-12'
    },
    { 
        id: 3, 
        title: "Samsung S22 Ultra 5G 128GB",
        category: {
            name: "Smartphone"
        },
        price: 809.79,
        stock: '0',
        trend: -2,
        createdAt: '2024-05-12'
    },
    { 
        id: 4, 
        title: "lenovo legion geforce rtx 4070",
        category: {
            name: "Computer"
        },
        price: 1999,
        stock: '10',
        trend: -4.1,
        createdAt: '2024-05-12'
    },
    { 
        id: 5, 
        title: "Logitech G PRO X 2 Wireless Headset",
        category: {
            name: "Headsets"
        },
        price: 240.50,
        stock: '7',
        trend: 10,
        createdAt: '2024-05-12',
    },
    { 
        id: 6, 
        title: "lenovo legion geforce rtx 4070",
        category: {
            name: "Computer"
        },
        price: 1999,
        stock: '10',
        trend: 3.2,
        createdAt: '2024-05-12'
    },
    { 
        id: 7, 
        title: "Logitech G PRO X 2 Wireless Headset",
        category: {
            name: "Headsets"
        },
        price: 240.50,
        stock: '7',
        trend: -1.4,
        createdAt: '2024-05-12',
    },
];

export const blogPosts = [
  {
    id: 1,
    title: "Mastering React: A Complete Guide",
    author: "John Doe",
    content:
      "React is one of the most popular JavaScript libraries for building user interfaces. In this guide, we explore components, hooks, state management, and performance optimization techniques.",
    category: "Web Development",
    tags: ["React", "JavaScript", "Frontend"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdAt: "2025-08-01T10:15:00Z",
  },
  {
    id: 2,
    title: "Understanding Node.js Event Loop",
    author: "Jane Smith",
    content:
      "Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. In this post, we dive deep into the event loop and asynchronous programming concepts.",
    category: "Backend Development",
    tags: ["Node.js", "JavaScript", "Backend"],
    image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdAt: "2025-08-05T09:00:00Z",
  },
  {
    id: 3,
    title: "Top 10 UI/UX Design Principles",
    author: "Emily Johnson",
    content:
      "Creating a seamless user experience requires a deep understanding of design principles. This article covers accessibility, hierarchy, color theory, and modern UI patterns.",
    category: "UI/UX Design",
    tags: ["Design", "UX", "UI"],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdAt: "2025-08-12T13:20:00Z",
  },
  {
    id: 4,
    title: "A Beginner's Guide to TypeScript",
    author: "Michael Brown",
    content:
      "TypeScript extends JavaScript by adding static types, making development faster and more reliable. Learn the basics of types, interfaces, generics, and compiler options in this beginner-friendly guide.",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdAt: "2025-08-15T08:40:00Z",
  },
  {
    id: 5,
    title: "Understanding GraphQL vs REST APIs",
    author: "Sophia Williams",
    content:
      "Choosing between GraphQL and REST depends on your project's needs. This blog compares performance, flexibility, and scalability to help you make an informed decision.",
    category: "API Development",
    tags: ["GraphQL", "REST", "API"],
    image: "https://images.unsplash.com/photo-1621703455854-050a995b6d10?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdAt: "2025-08-18T07:10:00Z",
  },
];
