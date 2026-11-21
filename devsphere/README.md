RTravelSphere — Travel & Destination Guide
TravelSphere is a travel and destination guide website built with Astro.js, TypeScript, Tailwind CSS, and Sanity CMS. The goal is to help visitors discover destinations around the world by country and travel category.
Project status: In progress. The Sanity CMS integration and the initial homepage sections are being developed. Country detail pages and some reference-based destination features are still being completed.

Tech Stack
- Astro.js — website framework
- TypeScript — type-safe development
- Tailwind CSS — styling
- Sanity CMS — content management
- @sanity/client — fetching content from Sanity
- @sanity/image-url — displaying Sanity-hosted images
Current Features
- Homepage with a travel-focused hero section
- Featured destinations loaded from Sanity
- Travel categories loaded dynamically from Sanity
- Country data fetched from Sanity
- Reusable destination cards
- Destination listing and detail-page routes
- Destination search and country filtering work in progress
Planned / In-Progress Features
- Country cards on the homepage
- Country detail pages showing destinations from the selected country
- Category-based destination filtering
- Complete country and category reference handling for all destination documents
- Improved destination detail pages
Project Structure
devsphere/
├── public/
├── src/
│   ├── components/
│   │   ├── DestinationCard.astro
│   │   ├── Navbar.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── lib/
│   │   ├── sanity.ts
│   │   └── image.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── destinations/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── ...
│   └── styles/
│       └── global.css
├── .env
├── astro.config.mjs
└── package.json
The Sanity Studio is maintained separately in the sibling sanity/ directory.
Getting Started
1. Clone the repository
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd devsphere
2. Install dependencies
npm install
3. Configure environment variables
Create a .env file in the project root:
PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
PUBLIC_SANITY_DATASET=production
Replace the values with your own Sanity project ID and dataset.

These values are public project configuration, not secret credentials. Do not put a Sanity write token or other private secret in a PUBLIC_ variable.
4. Start the development server
npm run dev
Open http://localhost:4321 in your browser.
Sanity CMS Setup
The project uses Sanity documents for:
- Country — country name, slug, description, flag, and cover image
- Category — category title, slug, description, and image
- Destination — destination name, slug, country reference, category reference, description, main image, and featured status
Make sure each destination document has valid Country and Category references assigned in Sanity Studio.
Useful Commands
npm run dev       # Start the local development server
npm run build     # Build the production site
npm run preview   # Preview the production build locally
Notes
- Keep .env out of Git. Make sure .env is listed in .gitignore.
- Do not commit node_modules/ or build output.
- If you change environment variables, restart the Astro development server.
- When Sanity schemas change, check existing documents and update their references where needed.
Author
Sadikuzzaman Tutul
- GitHub: Sadikuzzamantutul23
Built as a learning project while exploring Astro.js, TypeScript, and headless CMS development.