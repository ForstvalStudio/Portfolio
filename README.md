# ORGSTUDIO Portfolio Website

A modern, professional portfolio website for ORGSTUDIO showcasing application development services across multiple platforms. The design features a sleek, grid-based layout with a deep purple/blue color scheme, modern typography, and interactive elements.

This project was built with React and is fully deployment-ready.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deployment Instructions

This application has been configured for easy deployment to various hosting platforms:

### Deploying to Netlify

1. Create a Netlify account if you don't have one: [https://app.netlify.com/signup](https://app.netlify.com/signup)
2. Run `npm run build` to create a production build
3. Drag and drop your `build` folder to Netlify's dashboard OR
4. Connect your GitHub repository to Netlify for continuous deployment
5. The `netlify.toml` file is already configured to handle React Router correctly

### Deploying to GitHub Pages

1. Update the `package.json` file:
   ```json
   "homepage": "https://yourusername.github.io/org-portfolio",
   ```
2. Install GitHub Pages package:
   ```
   npm install --save gh-pages
   ```
3. Add deployment scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy your site:
   ```
   npm run deploy
   ```

### Deploying to Vercel

1. Install Vercel CLI:
   ```
   npm install -g vercel
   ```
2. Run:
   ```
   vercel
   ```
3. Follow the on-screen instructions to deploy

The app has been pre-configured with:
- Proper routing for single-page applications
- SEO-friendly meta tags
- Mobile-responsive design
- PWA capabilities

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
