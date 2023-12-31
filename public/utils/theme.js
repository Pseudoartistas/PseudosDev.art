'use client'

(function () {
    var currentTheme;
  
    function changeTheme(inputTheme) {
      if (inputTheme === "dark") {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    try {
      currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light")
      changeTheme(currentTheme);
    } catch (err) {
      console.log(new Error("accessing theme has been denied"));
    }
  })();