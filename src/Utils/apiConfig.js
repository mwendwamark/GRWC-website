// src/utils/apiConfig.js

// Instead of using process.env, we'll use constants that can be easily changed
const DEV_API_URL = 'http://localhost:1337';
const PROD_API_URL = 'https://useful-baseball-c6e473d7d0.strapiapp.com';

// Set this to 'development' or 'production' to switch environments
const CURRENT_ENVIRONMENT = 'development';

// Get the base API URL based on environment
const getApiUrl = () => {
  if (CURRENT_ENVIRONMENT === 'production') {
    return PROD_API_URL;
  }
  return DEV_API_URL;
};

// Construct full API paths with endpoints
const getFullApiUrl = (endpoint) => {
  const baseUrl = getApiUrl();
  // Make sure endpoint doesn't start with a slash if we're appending
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.substring(1) : endpoint;
  return `${baseUrl}/${cleanEndpoint}`;
};

// Helper to construct image URLs
const getImageUrl = (imagePath) => {
  if (!imagePath) return null;
  
  // If the path already includes the domain, return it as is
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // Make sure path starts with a slash for appending
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${getApiUrl()}${cleanPath}`;
};

export { getApiUrl, getFullApiUrl, getImageUrl };