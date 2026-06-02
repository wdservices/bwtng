const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./serviceAccountKey.json'); // You'll need to download this from Firebase Console

// Initialize Firebase Admin
initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

async function createSampleTool() {
  const sampleTool = {
    name: "AI Content Generator",
    description: "An advanced AI tool that generates high-quality content for blogs, social media, and marketing materials.",
    price: 29.99,
    category: "content-creation",
    features: [
      "AI-powered content generation",
      "Multiple content templates",
      "SEO optimization",
      "Plagiarism checker",
      "Multi-language support"
    ],
    demoUrl: "https://example.com/ai-content-generator/demo",
    documentationUrl: "https://docs.example.com/ai-content-generator",
    status: "published",
    isFeatured: true,
    isActive: true,
    rating: 4.7,
    tags: ["ai", "content", "marketing", "seo"],
    keywords: ["ai writing", "content creation", "blog generator", "seo content"],
    createdAt: new Date(),
    updatedAt: new Date(),
    createdBy: "admin",
    updatedBy: "admin"
  };

  try {
    const docRef = await db.collection('tools').add(sampleTool);
    console.log('Tool created with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding tool: ', error);
    throw error;
  }
}

createSampleTool()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });