# CMS Dashboard

A professional CMS dashboard with modern UI and responsive design.

## Features

- Modern UI with responsive design
- MongoDB database integration
- RESTful API endpoints
- TypeScript support
- Vite for fast development

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Git

## Setup

1. Clone the repository:
```bash
git clone [your-repo-url]
cd cms-dashboard
```

2. Install dependencies:
```bash
npm install
cd server
npm install
```

3. Create a `.env` file in the server directory:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

4. Start the development server:
```bash
# Terminal 1 (Frontend)
npm run dev

# Terminal 2 (Backend)
cd server
npm run dev
```

## Deployment

This project is configured for deployment on Netlify. The build process will:
1. Build the frontend with Vite
2. Build the server code
3. Deploy to Netlify

## Environment Variables

- `MONGODB_URI`: MongoDB connection string
- `PORT`: Server port (default: 5000)

## License

ISC
