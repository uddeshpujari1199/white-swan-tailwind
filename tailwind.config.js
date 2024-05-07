/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors:{
        "dark-purpule":"#d0e0e0",
        "light-white":"rgba(255,255,255,0.17)",
        "Active":"#E99B66",
        "text-color":"#454545",
        "main-text-color":"linear-gradient(red, blue, green);"
      },
      backgroundImage: {
        'hero-pattern': "url('https://s3-alpha-sig.figma.com/img/c26d/22bb/e8e7d80b697ca3c2b11a75520c964a41?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dXlzQZOW16d9dFfv8ediGYMiFPfSE5qu0AA27~yxPjEzjA489jM5AuDKAdNpECyjT8LI3oO4fLXmXNP0-KCS-LjrkIsP52jt~TDBVO4psJcGRtuz1bR2FEHOQGWjgUM245Pp7o8WoOd91e2FnL9OkyfgSYevaCUzO8hz7rccEstxMH7TN4eZRSPD5llzgTNpj148FidZjdtGYYeUQx2eVvUclg986DbLfwpM2Pkkv4XBaEJjaVLCFCoo6vh-GVVO3ZdPaVabAj~vhO1NmofXS0RDuPSxh~I7GLYJaMTM573reM-vd51EXclhTGFbeWgLny1uAyBYjMc8Iw75Jbhv9Q__')",
      }
    },
  },
  plugins: [],
}

