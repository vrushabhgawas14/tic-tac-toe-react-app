# Tic Tac Toe

#### Notes on Deploying React App

- npx create-react-app my-app
- cd my-app
- git init
- npm install gh-pages --save
- In package.json
  - "homepage" : `url of deployed site`
  - In scripts:
    - "predeploy": "npm run build",
    - "deploy": "gh-pages -d build"
- git add .
- git commit -m "Initial Commit"
- git branch -M main
- git remote add origin `url of github project`
- git push -u origin main
- npm run deploys

#### For Tailwind Setup

- npm install -D tailwindcss
- npx tailwindcss init
- In index.css
  - @tailwind base;
  - @tailwind components;
  - @tailwind utilities;
- In tailwind.config.js
  - content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
