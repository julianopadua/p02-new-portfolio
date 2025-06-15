# Juliano Pádua - Multilingual Portfolio Website

This project is a personal portfolio website built using HTML, CSS, and JavaScript. It showcases personal and professional information, including academic background, work experience, skills, and relevant projects. The website supports multilingual content and theme switching to enhance accessibility and user experience.

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [File Structure](#file-structure)  
5. [How to Run Locally](#how-to-run-locally)  
6. [Contributing](#contributing)  
7. [License](#license)

---

## Project Overview

This portfolio website serves as an academic and professional presentation for Juliano Pádua, a Computer Engineering student. It includes a homepage, an about page detailing personal and educational background, and a resume page outlining work experience and technical skills. All content is accessible in Portuguese, English, and Spanish, with a persistent language selection and theme preference stored via `localStorage`.

---

## Features

- **Multilingual Support**  
  The website offers full support for Portuguese (default), English, and Spanish. All content is dynamically translated using jQuery, and the selected language is preserved across sessions.

- **Responsive Design**  
  Designed with a mobile-first approach. It includes a fully functional hamburger menu and mobile language selector to optimize the experience on smaller devices.

- **Dark/Light Theme Switching**  
  Users can toggle between light and dark modes. The preference is saved using `localStorage`.

- **Interactive Elements**  
  Includes clickable social media icons, footer date auto-update, and dynamic visual cues.

- **Structured Content Presentation**  
  The content is divided into clearly defined sections: academic introduction, work experience, technical and soft skills, and personal projects.

---

## Technologies Used

- **HTML5**: Structure and semantic markup  
- **CSS3**: Styling and layout, including CSS variables and transitions  
- **JavaScript**: DOM manipulation and interactivity  
- **jQuery**: Language switching and dynamic updates  
- **Bootstrap Icons**: Iconography  
- **LocalStorage API**: Preference persistence (theme and language)

---

## File Structure

```

portfolio/
├── index.html              # Homepage
├── about.html              # About Me page
├── cv.html                 # Resume page
├── js/
│   └── scripts.js          # Main JavaScript logic (language switcher, theme toggle, mobile menu)
├── styles/
│   └── style.css           # Main stylesheet (responsive design and theming)
├── images/
│   ├── hamburger-menu.png  # Mobile menu icon
│   ├── \*.png               # Flag icons, profile images, social icons
└── README.md               # Project documentation

````

---

## How to Run Locally

To run this project on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/julianopadua/julianopadua.github.io.git
    ```

2. Navigate to the project directory:

   ```bash
   cd julianopadua.github.io
   ```
3. Open `index.html` in your browser or use a local server (e.g., Live Server in VSCode).

The website is entirely static and does not require any backend or dependencies to run.

---

## Contributing

This project is personal and currently does not accept external contributions. For feedback or suggestions, please contact the author directly.

