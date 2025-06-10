export const getDarkMode = () => {
  return localStorage.getItem("darkMode") === "true";
};

export const toggleDarkMode = () => {
  const current = getDarkMode();
  localStorage.setItem("darkMode", !current);
  window.location.reload(); 
};
