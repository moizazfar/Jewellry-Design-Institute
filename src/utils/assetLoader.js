export const getAssetUrl = (path) => {
  if (process.env.NODE_ENV === 'production') {
    return `https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload${path}`;
  }
  return `/assets/optimized${path}`;
}; 