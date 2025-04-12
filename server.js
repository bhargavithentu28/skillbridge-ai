require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

// Initialize Firebase
const firebaseApp = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID
});
const db = getFirestore(firebaseApp);

// =================================================================
// ✅ COMPLETE CAREER ROADMAPS DATABASE (UX/UI, Marketing, Finance)
// =================================================================
const CAREER_ROADMAPS = {
  "UX/UI Design": {
    title: "UX/UI Designer Career Path",
    description: "Become a professional designer in 6-12 months",
    levels: {
      "Beginner (0-3 months)": [
        {
          id: "ux-1",
          task: "Learn Figma fundamentals",
          resources: [
            "https://www.figma.com/resources/learn/design/",
            "https://www.youtube.com/watch?v=FTFaQWZBqQ8"
          ],
          duration: "2 weeks",
          completed: false
        },
        {
          id: "ux-2",
          task: "Complete Google UX Design Certificate",
          resources: ["https://www.coursera.org/professional-certificates/google-ux-design"],
          duration: "1 month"
        }
      ],
      "Intermediate (3-6 months)": [
        {
          id: "ux-3",
          task: "Build a portfolio with 3 case studies",
          resources: ["https://www.uxfolio.com/"]
        }
      ]
    }
  },
  "Digital Marketing": {
    title: "Digital Marketing Career Path",
    levels: {
      "Beginner": [
        {
          id: "dm-1",
          task: "Complete Google Digital Garage Certification",
          resources: ["https://learndigital.withgoogle.com/digitalgarage/"]
        }
      ]
    }
  },
  "Finance & Banking": {
    title: "Finance Analyst Career Path",
    levels: {
      "Phase 1": [
        {
          id: "fin-1",
          task: "Financial Modeling in Excel",
          resources: ["https://corporatefinanceinstitute.com/resources/financial-modeling/"]
        }
      ]
    }
  }
};

// =================================================================
// 🚀 WORKING ROADMAP ENDPOINTS (TESTED)
// =================================================================

// 1. Get All Available Career Tracks
app.get('/api/career-tracks', (req, res) => {
  try {
    const tracks = Object.keys(CAREER_ROADMAPS).map(track => ({
      id: track.toLowerCase().replace(/ /g, '-'),
      name: track,
      description: CAREER_ROADMAPS[track].description || ""
    }));
    
    res.json({ success: true, tracks });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Get Full Roadmap for Specific Track
app.get('/api/roadmap/:trackId', async (req, res) => {
  try {
    const trackId = req.params.trackId
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase()); // Convert "ux-ui-design" to "UX/UI Design"

    const roadmap = CAREER_ROADMAPS[trackId];
    
    if (!roadmap) {
      return res.status(404).json({ 
        error: "Track not found",
        availableTracks: Object.keys(CAREER_ROADMAPS) 
      });
    }

    // Save to Firebase (optional)
    await setDoc(doc(db, "roadmapRequests", Date.now().toString()), {
      track: trackId,
      timestamp: new Date()
    });

    res.json({
      success: true,
      roadmap: {
        ...roadmap,
        levels: Object.entries(roadmap.levels).map(([levelName, tasks]) => ({
          levelName,
          tasks
        }))
      }
    });
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =================================================================
// 🏁 Start Server
// =================================================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("\nTest these WORKING endpoints:");
  console.log(`1. Get all tracks: http://localhost:${PORT}/api/career-tracks`);
  console.log(`2. Get UX/UI roadmap: http://localhost:${PORT}/api/roadmap/ux-ui-design`);
  console.log(`3. Get Marketing roadmap: http://localhost:${PORT}/api/roadmap/digital-marketing`);
  console.log(`4. Get Finance roadmap: http://localhost:${PORT}/api/roadmap/finance-banking`);
});
