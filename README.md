# Neon Nightlife 3D Art Gallery

An interactive 3D art gallery built with **Next.js** and **Three.js**, featuring a **neon nightlife aesthetic** with vibrant lighting, reflective surfaces, and immersive navigation. Users can explore a virtual gallery, view high-quality artworks, and interact with the environment in a visually stunning experience.

## 🚀 Features

### 🎨 **3D Gallery Environment**
- Fully interactive 3D space powered by Three.js
- Neon-themed lighting with vibrant pink, cyan, and purple hues
- Reflective metallic surfaces with realistic material rendering
- Smooth **WASD** navigation and **mouse orbit** controls

### 🖼️ **Artwork Display**
- High-resolution images mapped onto 3D planes
- Interactive hover effects with scaling animations
- Click on artworks to view detailed information
- Customizable artwork arrangements

### 🌟 **Neon Effects & UI**
- Dynamic **neon glow** effects on walls and UI elements
- Glassmorphism-styled UI for a futuristic look
- Floating navigation panel with minimal design
- Responsive layout for desktop and mobile

### 🌍 **Additional Features**
- **Pre-recorded Gallery Tours** for guided experiences
- **Social Sharing**: Share artworks directly on social media
- **Customizable User Experience**: Adjust lighting and music settings
- **Optimized Performance** with lazy loading and SSR

---

## 🛠️ Tech Stack


- **Next.js** – React-based framework for SSR & SSG
- **Three.js** – 3D rendering and WebGL integration
- **React Three Fiber** – React wrapper for Three.js
- **Tailwind CSS** – Styling and responsive UI design
- **Framer Motion** – Smooth animations and transitions

---

## 🛠️ Installation & Setup

### **Prerequisites**
Make sure you have **Node.js** and **npm/yarn** installed on your system.

### **Clone the Repository**
```sh
git clone
cd neon-3d-gallery
```

### **Install Dependencies**
```sh
npm install
# or
yarn install
```

### **Run the Development Server**
```sh
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) to view the gallery in your browser.

---

## 📁 Project Structure
```
📦 neon-3d-gallery
├── 📂 app
│   ├── page.tsx      # Main entry point
│   ├── globals.css   # Global styles
├── 📂 components
│   ├── Gallery.tsx   # 3D gallery container
│   ├── Scene.tsx     # Three.js scene setup
│   ├── Wall.tsx      # Walls with neon effects
│   ├── Artwork.tsx   # Artwork display component
│   ├── UI.tsx        # Neon-themed UI components
├── 📂 lib
│   ├── data.ts       # Artwork data
│   ├── types.ts      # Type definitions
├── package.json
└── README.md
```

---

## ⚙️ Configuration
- **Modify Artworks**: Update `lib/data.ts` to add/remove artworks
- **Change Lighting**: Edit `components/Scene.tsx` for custom lighting effects
- **Customize UI Theme**: Modify `app/globals.css` for new styles

Feel free to Fork and do the changes...<3
---

