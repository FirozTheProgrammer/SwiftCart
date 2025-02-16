# 🛒 SwiftCart

SwiftCart is a modern e-commerce web application built with [Next.js](https://nextjs.org/).

## 🛠️ How I Built SwiftCart

### Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React-based framework)
- **Styling**: Tailwind CSS for a modern and responsive UI
- **State Management**: Context API (or Redux if applicable)
- **Authentication**: Firebase Auth for secure user login/signup
- **Database**: MongoDB (via Mongoose) for storing user data and products
- **Deployment**: Hosted on [Vercel](https://vercel.com/) for seamless performance and scalability

### Development Process

#### 1️⃣ Project Setup

- Bootstrapped with [`create-next-app`](https://nextjs.org/docs/getting-started).
- Installed dependencies like Tailwind CSS, Firebase, and MongoDB.

#### 2️⃣ UI & Components

- Designed reusable UI components (Navbar, Footer, Product Cards, etc.).
- Implemented responsive layouts using Tailwind CSS.

#### 3️⃣ Authentication System

- Integrated Firebase Authentication (Google sign-in, email/password login).
- Created authentication guards for protected routes.

#### 4️⃣ Database & API Development

- Configured MongoDB with Mongoose for product and user data management.
- Built Next.js API routes to handle CRUD operations.

#### 5️⃣ Cart & Checkout System

- Implemented a shopping cart using React Context API.
- Created a checkout page with order summary and payment integration (Stripe, if used).

#### 6️⃣ Deployment & Optimization

- Deployed SwiftCart on [Vercel](https://vercel.com/) for production.
- Optimized images and performance using Next.js features like **SSR (Server-Side Rendering)** and **ISR (Incremental Static Regeneration)**.
