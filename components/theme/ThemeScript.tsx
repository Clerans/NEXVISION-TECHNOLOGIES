import React from "react";

export function ThemeScript() {
  const code = `
(function() {
  try {
    var storedTheme = localStorage.getItem('nexvision_theme');
    var isDark = false;
    if (storedTheme === 'dark') {
      isDark = true;
    } else if (storedTheme === 'light') {
      isDark = false;
    } else {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

  return (
    <script
      id="theme-script"
      dangerouslySetInnerHTML={{ __html: code }}
      suppressHydrationWarning
    />
  );
}
