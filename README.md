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
- npm run deploy

#### For Tailwind Setup

- npm install -D tailwindcss
- npx tailwindcss init
- In index.css
  - @tailwind base;
  - @tailwind components;
  - @tailwind utilities;
- In tailwind.config.js
  - content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],

#### For Dockerizing App

##### - first create `.dockerignore` and add `node_modules` in it to ignore it.

- create `Dockerfile` :

  - `FROM node:latest` to import node
  - then add `WORKDIR /app`
  - then `COPY package*.json` to let docker knows about your list of dependencies
  - then `RUN npm install` to install all dependencies
  - then `COPY . .` to copy rest of the files
  - then `EXPOSE port` to let docker know where to expose it inside container but has nothing to do with port forwading
  - then `CMD ["npm","start"]`

##### - Done with Dockerfile now create docker `compose.yml` file to run multi-container in single cmd

- specify version
- `services`
- web service name
- then build
- then container name
- images name
- ports
- develop
  - watch -(to sync code changes)
    - `action : sync`
    - `path : .`
    - `target : /app`
    - `ignore :` -(to ignore node_modules)
    - `action : rebuild` -(to rebuild if package.json changed)
    - `path: package.json`

#### Special Notes

- react runs on default port 3000 if we port forward like `- '1313:1313'` it will not work
- to overcome this issue i discovered two solution
  - either change default port of react with `"start": " PORT=1313 react-scripts start"` and then expose the same port and port forward the same
  - second is if not changing default port then port forward in this way `- '1313:3000'` and keep expose as 1313
- don't forget in `- '1313:3000'` 1313 is local port and 3000 is container port
