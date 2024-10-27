function getAllBlogs() {
  const blogsDir = path.join(__dirname, 'blogs');
  const blogFiles = fs.readdirSync(blogsDir);

  return blogFiles.map(file => {
      const filePath = path.join(blogsDir, file);
      const blogData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      return blogData;
  });
}

function escape(html) {
  return String(html)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
}


const data = {
  title: "Blogs Page",
  fullDescription1: `
    <h2>Introduction to Our Journey</h2>
    <p>When we think of a perfect getaway, images of stunning landscapes, breathtaking views, and unforgettable experiences come to mind. This trip was not just about reaching a destination but creating memories that will last a lifetime.</p>

    <h3>Day 1: Arrival in Paradise</h3>
    <p>Our journey began the moment we landed in the Maldives, a paradise famed for its pristine beaches and crystal-clear waters. As we stepped off the plane, a warm breeze welcomed us, carrying the delicate fragrance of tropical flowers. We were taken to our overwater bungalow, where the sound of gentle waves soothed our spirits. That evening, the sunset painted the sky in hues of pink and orange, creating a surreal moment that felt like stepping into another world. With a toast of fresh coconut water, we looked forward to the days ahead.</p>

    <h3>Day 2: Exploring the Underwater Wonderland</h3>
    <p>The next day, we couldn’t wait to dive into the underwater world. Our snorkeling trip revealed vibrant coral reefs teeming with life; colorful fish darted around, and a majestic sea turtle glided effortlessly by. Every moment felt magical, and as we swam together, we felt a stronger connection to both nature and each other. Later, we had a picnic on a secluded beach, sharing dreams and stories while the waves serenaded us.</p>

    <h3>Day 3: A Thrilling Day of Adventure</h3>
    <p>Seeking more excitement, we spent our third day jet skiing and parasailing. The thrill of gliding over the water was exhilarating, and parasailing offered a bird’s-eye view of the islands that we would never forget. As the sun set, we enjoyed a candlelit dinner by the beach, savoring fresh seafood and Maldivian dishes, sharing laughter and dreams beneath the starlit sky.</p>

    <h3>Day 4: Embracing Tranquility</h3>
    <p>After days of adventure, we took time to unwind. A couples' spa day rejuvenated us, followed by an afternoon by the infinity pool, watching the horizon melt into the ocean. That evening, we reflected on our trip and realized that it wasn’t just the destination that made it special but the moments we shared away from the bustle of life.</p>

    <h3>Day 5: Farewell to Paradise</h3>
    <p>As our trip came to an end, we took a final sunrise walk along the beach, hand in hand, filled with gratitude. This trip wasn’t just an escape; it was a reminder of the joy of being together. We returned home with a treasure trove of memories, forever cherishing this heavenly journey.</p>
  `,

  fullDescription2: `
    <h2>The Beautiful Journey of Falling in Love</h2>
    <p>Falling in love is like discovering a new world, one where every glance shared is a spark and every laugh echoes like music. It all started with a chance encounter, one that quickly blossomed into something extraordinary.</p>

    <h3>Growing Closer, Day by Day</h3>
    <p>As we spent more time together exploring new places, our connection grew. Conversations became deeper, sharing dreams and fears that made us feel connected on a profound level. Each new memory was like adding a page to our love story.</p>

    <h3>Milestones in Our Journey</h3>
    <p>The first time we held hands, it felt electric as if the world around us melted away, leaving just us. Simple outings became adventures, and each date felt like a new chapter filled with excitement and joy. From cozy movie nights to road trips, we created memories that would last a lifetime.</p>

    <h3>A Love That Transforms</h3>
    <p>Our love taught us patience, understanding, and the courage to be vulnerable. We learned to appreciate the small moments, from holding hands on walks to warm embraces on chilly evenings. Together, we navigated challenges, celebrating each other’s growth, knowing that love is not just for the good times but also for the moments when we support one another through life’s challenges.</p>
  `,

  fullDescription3: `
    <h2>A Journey of Love and Adventure with My Husband</h2>
    <p>Traveling with my husband is a journey filled with love, laughter, and shared discoveries. From the excitement of planning to the adventures that await, every moment deepens our connection and adds another beautiful memory to our story.</p>

    <h3>The Thrill of Exploration</h3>
    <p>We find joy in the simple pleasures of a road trip, stopping at quaint cafes, tasting local treats, and sharing our dreams. Arriving at each destination, the thrill of exploration takes over, whether hiking breathtaking trails or walking hand in hand along a serene beach.</p>

    <h3>Special Moments</h3>
    <p>One evening, we watched the sun dip below the horizon from a quiet beach, reflecting on our journey and the love that has grown between us. Even simple dinners become romantic as we enjoy candle-lit meals, sharing stories of past travels and dreams for future adventures.</p>

    <h3>A Beautiful Partnership</h3>
    <p>As we navigate new places and experiences, we learn to lean on each other. Facing challenges together strengthens our bond, and as we return home, it’s not just with souvenirs but with memories and a renewed appreciation for the journey we’re on as partners and best friends.</p>
  `,

  fullDescription4: `
    <h2>Finding Inner Peace in a Chaotic World</h2>
    <p>Inner peace is a journey toward self-discovery and acceptance. It begins when we take a moment to step back, breathe, and silence the world around us. In that stillness, we find ourselves and learn the art of letting go.</p>

    <h3>Embracing Tranquility</h3>
    <p>Finding peace often leads us to nature. A walk along a quiet shore or listening to the rustling leaves offers a sense of calm that grounds us. In these moments, we cultivate gratitude for life’s simple joys—a warm cup of tea, a good book, or time with loved ones.</p>

    <h3>The Practice of Mindfulness</h3>
    <p>Mindfulness teaches us to be present, to savor each moment without the weight of expectations. Through meditation and reflection, we develop an understanding of who we are and the beauty of our unique journey. Inner peace is not a destination but a state we nurture every day, creating our own sanctuary in a noisy world.</p>
  `,

  fullDescription5: `
    <h2>A Father and Son's Bike Adventure in the Himalayas</h2>
    <p>Early one morning, a father and son set off on an unforgettable bike trip through the Himalayas. The crisp air filled them with excitement as they waved goodbye to familiar faces, ready for an adventure that promised breathtaking landscapes and bonding moments.</p>

    <h3>Climbing the Mighty Mountains</h3>
    <p>Riding through winding roads and misty valleys, the son watched his father handle each turn with skill and confidence, silently learning the art of resilience. As they climbed higher, they encountered rough trails, rushing streams, and towering cliffs that left them both in awe.</p>

    <h3>Sharing Stories and Memories</h3>
    <p>They took breaks to soak in the views and share stories. The father recounted tales of his youth, while the son shared dreams of the future. They stopped by tea stalls, savoring warm cups in the chilly mountain air, meeting locals and fellow travelers, adding to the magic of the journey.</p>

    <h3>A Moment of Triumph</h3>
    <p>When they finally reached the peak, where valleys and snow-capped peaks stretched out below, they paused to take in the accomplishment. That night, under a starlit sky, they shared a quiet meal by the fire, grateful for the bond that had grown stronger with every mile, a memory that would forever remain in their hearts.</p>
  `
};



// importing modules
import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fileUpload from 'express-fileupload'; // Import fileUpload
import { join } from 'path'; // Import join from path

// Define __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// initializing express app and port
const app = express();
const port = 3000;

// Set up EJS as the templating engine
app.set("view engine", "ejs");

// Serve static files from 'public' folder
app.use(express.static(join(__dirname, "public")));
app.use(bodyParser.json()); // Parse JSON bodies 
app.use(fileUpload());

// Basic route setup
app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});
app.get("/about",(req,res)=>{
  res.render("about.ejs");
})

app.get("/blogs",(req,res)=>{
  res.render("blogs.ejs", data);
});
app.get('/yourBlogs', (req, res) => {
  const blogs = getAllBlogs();
  res.render('yourBlogs', { blogs, title: "Your Blogs" } );
});
app.get("/createBlogs",(req,res)=>{
  res.render("createBlogs.ejs",{ title: "Create Blogs" });
})

// upload link
app.post('/upload', (req, res) => {
  // Check if files are present
  if (!req.files || !req.files.image) {
    console.error("No file uploaded.");
    return res.status(400).json({ error: 'No file uploaded.' });
  }

  let file = req.files.image;
  let date = new Date();
  // Image name
  let imagename = `${date.getDate()}-${date.getTime()}-${file.name}`; // Added a separator for clarity
  // Image upload path
  let uploadPath = join(__dirname, 'public/uploads/', imagename);

  // Ensure the uploads directory exists
  const uploadsDir = join(__dirname, 'public/uploads/');

  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
  }

  // Move the file
  file.mv(uploadPath, (err) => {
    if (err) {
      console.error("File upload failed:", err);
      return res.status(500).json({ error: 'File upload failed.' });
    } else {
      console.log(`File uploaded to: ${uploadPath}`);
      // Return the image path
      return res.json(`uploads/${imagename}`);
    }
  });
});

app.post('/saveBlog', (req, res) => {
  const blogData = req.body;

  // Create a directory for blogs if it doesn't exist
  const blogsDir = path.join(__dirname, 'blogs');
  if (!fs.existsSync(blogsDir)) {
      fs.mkdirSync(blogsDir);
  }

  // Generate a unique filename for the blog post
  const filename = `${blogData.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}-${Date.now()}.json`;
  const filePath = path.join(blogsDir, filename);

  // Save blog data to a JSON file
  fs.writeFile(filePath, JSON.stringify(blogData, null, 2), (err) => {
      if (err) {
          console.error('Error writing file:', err);
          return res.status(500).json({ message: 'Error saving blog' });
      }
      res.status(201).json({ message: 'Blog saved', file: filename });
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});