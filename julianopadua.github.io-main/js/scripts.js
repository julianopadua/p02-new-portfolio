const changeThemeBtn = document.querySelector("#change-theme");

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function loadTheme() {
    const darkMode = localStorage.getItem("dark");

    if(darkMode) {
        toggleDarkMode();
    }
}

loadTheme();

changeThemeBtn.addEventListener("change", function(){
    toggleDarkMode();

    // Salva ou remove dark mode
    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
    }
});

//Português
$(function() {
    $(".br").click(function(){
        //cabeçalho
        $(".cabecalho__menu__links").children().eq(0).text("Home");
        $(".sobremim").children().eq(0).text("Sobre mim");
        $(".cabecalho__menu__links").children().eq(2).text("Currículo");
        $(".language__selected").text("pt-br");
        $(".language__selected").removeClass("change-en");
        $(".language__selected").removeClass("change-es");
        $(".language__selected").addClass("change-br");
        //apresentação home page
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(1) h2").text("Olá! Meu nome é Juliano Pádua.");
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(2) h1").text("Sou estudante de Engenharia da Computação");
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(3) p").text("Busco ampliar meu conhecimento em diferentes áreas da tecnologia. Apaixonado por Python e Ciência de Dados, hoje também procuro conhecer mais sobre front-end. Em constante evolução!");
        $(".apresentacao__conteudo ul:nth-child(2) li:nth-child(1) h3").text("Onde me encontrar");

        //apresentacao sobre page
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(1) h1").text("Sobre mim");
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(2) p").text(
            "Sou um estudante dedicado de Engenharia de Computação na UFSCar, apaixonado por resolução de problemas, ciência de dados e mercados financeiros. Minha trajetória acadêmica me equipou com habilidades robustas em análise de dados, programação e modelagem financeira, alimentando meu entusiasmo por alavancar a tecnologia para enfrentar desafios reais nas finanças e além."
        );
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(3) p").text(
            "Como tutor na UFSCar, guiei estudantes em Introdução à Computação e Geometria Analítica, refinando minha habilidade de comunicar conceitos complexos de forma clara e acessível. Essas experiências aprofundaram minha expertise nessas áreas e alimentaram minha paixão por ensinar e aprender."
        );
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(4) p").text(
            "Profissionalmente, adquiri insights inestimáveis trabalhando como Estagiário de Suporte na Leadfy Imob e, atualmente, como Estagiário de Inteligência de Mercado na HedgePoint Global Markets. Esses papéis aperfeiçoaram minhas habilidades de trabalho em equipe, resolução de problemas e adaptação a ambientes dinâmicos, proporcionando-me uma base sólida para navegar na interseção de tecnologia e finanças."
        );
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(5) p").text(
            "Além dos meus esforços acadêmicos e profissionais, gosto de criar projetos impactantes em Python, muitos dos quais estão disponíveis no meu GitHub: github.com/julianopadua. Estou comprometido com o aprendizado contínuo e com a aplicação de soluções baseadas em dados para gerar resultados significativos na indústria financeira."
        );

        $(".apresentacao__informacoes ul:nth-child(1) li:nth-child(1) h2").text("Aniversário:");
        $(".apresentacao__informacoes ul:nth-child(1) li:nth-child(2) p").text("19 de jan. de 2002");
        $(".apresentacao__informacoes ul:nth-child(2) li:nth-child(1) h2").text("Whatsapp:");
        $(".apresentacao__informacoes ul:nth-child(2) li:nth-child(2) p").text("+55 (34) 99681-9610");
        $(".apresentacao__informacoes__ageadress ul:nth-child(1) li:nth-child(1) h2").text("Idade:");
        $(".apresentacao__informacoes__ageadress ul:nth-child(1) li:nth-child(2) p").text("21 anos");
        $(".apresentacao__informacoes__ageadress ul:nth-child(2) li:nth-child(1) h2").text("Endereço:");
        $(".apresentacao__informacoes__ageadress ul:nth-child(2) li:nth-child(2) p").text("Portal do Mediterrâneo - São Carlos, SP");

        //apresentacao cv page
        $(".apresentacao__cv__conteudo ul:nth-child(1) li:nth-child(1) h1").text("Currículo");
         $(".apresentacao__cv__conteudo ul:nth-child(1) li:nth-child(2) p").text("Com ensino médio concluído na escola Olimpo, em 2019, atualmente estudo Engenharia da Computação na UFSCar, onde exercito diariamente meu conhecimento a respeito de linguagens de programação, hardware, software e muito mais.");
         $(".apresentacao__cv__conteudo ul:nth-child(2) li:nth-child(1) h1").text("Experiências Acadêmicas");
         $(".apresentacao__cv__conteudo ul:nth-child(2) li:nth-child(2) p").text("Monitoria de Introdução à Computação; ministrada com a linguagem Python.");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(1) h1").text("Informática e conhecimento");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(2)").text("Linguagens: Python, C, C++, JavaScript");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(3)").text("Domínio Pacote Office");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(4)").text("Inglês Intermediário");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(5)").text("Cursos na plataforma Alura:");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(6)").text(" - Formação Python");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(7)").text(" - Formação Python para Data Science");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(8)").text(" - Linux I e II");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(9)").text(" - Formação HTML e CSS para projetos web");
    })
});

//English
$(function() {
    $(".en").click(function(){
        //cabeçalho
        $(".cabecalho__menu__links").children().eq(0).text("Home");
        $(".sobremim").children().eq(0).text("About");
        $(".cabecalho__menu__links").children().eq(2).text("Curriculum");
        $(".language__selected").text("en");
        $(".language__selected").removeClass("change-br");
        $(".language__selected").removeClass("change-es");
        $(".language__selected").addClass("change-en");

        //apresentação
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(1) h2").text("Hi! I'm Juliano Pádua");
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(2) h1").text("I'm a Computer Engineering student");
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(3) p").text("I seek to expand my knowledge in different areas of technology. Passionate about Python and Data Science, today I also try to learn more about front-end. Constantly evolving!");
        $(".apresentacao__conteudo ul:nth-child(2) li:nth-child(1) h3").text("Find me");

         //apresentacao sobre page
         $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(1) h1").text("About Me");
         $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(2) p").text(
             "I am a dedicated Computer Engineering student at UFSCar with a passion for problem-solving, data science, and the financial markets. My academic journey has equipped me with robust skills in data analysis, programming, and financial modeling, fueling my enthusiasm for leveraging technology to address real-world challenges in finance and beyond."
         );
         $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(3) p").text(
             "As a tutor at UFSCar, I have guided students through Introduction to Computing and Analytical Geometry, refining my ability to communicate complex concepts in clear and accessible ways. These experiences have deepened my expertise in these areas while fostering my passion for teaching and learning."
         );
         $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(4) p").text(
             "Professionally, I’ve gained invaluable insights working as a Support Intern at Leadfy Imob and currently as a Market Intelligence Intern at HedgePoint Global Markets. These roles have honed my skills in teamwork, problem-solving, and adapting to dynamic environments, providing me with a strong foundation to navigate the intersection of technology and finance."
         );
         $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(5) p").text(
             "Beyond my academic and professional endeavors, I enjoy creating impactful Python projects, many of which are available on my GitHub: github.com/julianopadua. I am committed to continuous learning and applying data-driven solutions to drive meaningful outcomes in the financial industry."
         );

         $(".apresentacao__informacoes ul:nth-child(1) li:nth-child(1) h2").text("Birthday:");
         $(".apresentacao__informacoes ul:nth-child(1) li:nth-child(2) p").text("19th of January of 2002");
         $(".apresentacao__informacoes ul:nth-child(2) li:nth-child(1) h2").text("Whatsapp:");
         $(".apresentacao__informacoes ul:nth-child(2) li:nth-child(2) p").text("+55 (34) 99681-9610");
         $(".apresentacao__informacoes__ageadress ul:nth-child(1) li:nth-child(1) h2").text("Age:");
         $(".apresentacao__informacoes__ageadress ul:nth-child(1) li:nth-child(2) p").text("21 years");
         $(".apresentacao__informacoes__ageadress ul:nth-child(2) li:nth-child(1) h2").text("Address:");
         $(".apresentacao__informacoes__ageadress ul:nth-child(2) li:nth-child(2) p").text("Portal do Mediterrâneo - São Carlos, SP");

         //apresentacao cv page
         $(".apresentacao__cv__conteudo ul:nth-child(1) li:nth-child(1) h1").text("Curriculum");
         $(".apresentacao__cv__conteudo ul:nth-child(1) li:nth-child(2) p").text("With high school completed at Olimpo school, in 2019, I am currently studying Computer Engineering at UFSCar, where I daily exercise my knowledge about programming languages, hardware, software and much more.");
         $(".apresentacao__cv__conteudo ul:nth-child(2) li:nth-child(1) h1").text("Academic Experiences");
         $(".apresentacao__cv__conteudo ul:nth-child(2) li:nth-child(2) p").text("Tutoring of Introduction to Computing; taught with the Python language.");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(1) h1").text("Informatics and knowledge");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(2)").text("Languages: Python, C, C++, JavaScript");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(3)").text("Microsoft Office");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(4)").text("Intermediate English");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(5)").text("Courses on the Alura platform:");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(6)").text(" - Python Training");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(7)").text(" - Python training for data science");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(8)").text(" - Linux I and II");
         $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(9)").text(" - HTML and CSS training for web projects");
    })
});

//Español
$(function() {
    $(".es").click(function(){
        //cabeçalho
        $(".cabecalho__menu__links").children().eq(0).text("Home");
        $(".sobremim").children().eq(0).text("Acerca");
        $(".cabecalho__menu__links").children().eq(2).text("Currículo");
        $(".language__selected").text("es");
        $(".language__selected").removeClass("change-en");
        $(".language__selected").removeClass("change-br");
        $(".language__selected").addClass("change-es");
        //apresentação
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(1) h2").text("¡Hola! Mi nombre es Juliano Padua.");
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(2) h1").text("Soy estudiante de ingenieria informatica");
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(3) p").text("Busco ampliar mis conocimientos en diferentes áreas de la tecnología. Apasionado por Python y Data Science, hoy también trato de aprender más sobre front-end. ¡Constantemente evolucionando!");
        $(".apresentacao__conteudo ul:nth-child(2) li:nth-child(1) h3").text("Encuentrame");

        //apresentacao sobre page
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(1) h1").text("Sobre mí");
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(2) p").text(
            "Soy un estudiante dedicado de Ingeniería Informática en la UFSCar, apasionado por la resolución de problemas, la ciencia de datos y los mercados financieros. Mi trayectoria académica me ha equipado con habilidades sólidas en análisis de datos, programación y modelado financiero, alimentando mi entusiasmo por aprovechar la tecnología para abordar desafíos del mundo real en finanzas y más allá."
        );
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(3) p").text(
            "Como tutor en la UFSCar, he guiado a estudiantes en Introducción a la Computación y Geometría Analítica, refinando mi capacidad para comunicar conceptos complejos de manera clara y accesible. Estas experiencias han profundizado mi experiencia en estas áreas y han fomentado mi pasión por enseñar y aprender."
        );
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(4) p").text(
            "Profesionalmente, he adquirido conocimientos invaluables trabajando como Pasante de Soporte en Leadfy Imob y actualmente como Pasante de Inteligencia de Mercados en HedgePoint Global Markets. Estos roles han perfeccionado mis habilidades en trabajo en equipo, resolución de problemas y adaptación a entornos dinámicos, proporcionándome una base sólida para navegar en la intersección de tecnología y finanzas."
        );
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(5) p").text(
            "Más allá de mis esfuerzos académicos y profesionales, disfruto creando proyectos impactantes en Python, muchos de los cuales están disponibles en mi GitHub: github.com/julianopadua. Estoy comprometido con el aprendizaje continuo y la aplicación de soluciones basadas en datos para generar resultados significativos en la industria financiera."
        );

        $(".apresentacao__informacoes ul:nth-child(1) li:nth-child(1) h2").text("Cumpleaños:");
        $(".apresentacao__informacoes ul:nth-child(1) li:nth-child(2) p").text("19 de enero de 2002");
        $(".apresentacao__informacoes ul:nth-child(2) li:nth-child(1) h2").text("Whatsapp:");
        $(".apresentacao__informacoes ul:nth-child(2) li:nth-child(2) p").text("+55 (34) 99681-9610");
        $(".apresentacao__informacoes__ageadress ul:nth-child(1) li:nth-child(1) h2").text("Edad:");
        $(".apresentacao__informacoes__ageadress ul:nth-child(1) li:nth-child(2) p").text("21 años");
        $(".apresentacao__informacoes__ageadress ul:nth-child(2) li:nth-child(1) h2").text("Dirección:");
        $(".apresentacao__informacoes__ageadress ul:nth-child(2) li:nth-child(2) p").text("Portal do Mediterrâneo - São Carlos, SP");

        //apresentacao cv page
        $(".apresentacao__cv__conteudo ul:nth-child(1) li:nth-child(1) h1").text("Currículo");
        $(".apresentacao__cv__conteudo ul:nth-child(1) li:nth-child(2) p").text("Con el bachillerato terminado en el colegio Olimpo en 2019, actualmente estudio Ingeniería Informática en la UFSCar, donde ejerzo diariamente mis conocimientos sobre lenguajes de programación, hardware, software y mucho más.");
        $(".apresentacao__cv__conteudo ul:nth-child(2) li:nth-child(1) h1").text("Experiencias Académicas");
        $(".apresentacao__cv__conteudo ul:nth-child(2) li:nth-child(2) p").text("Tutoría de Introducción a la Computación; enseñado con el lenguaje Python.");
        $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(1) h1").text("Informática y conocimiento");
        $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(2)").text("Lenguajes: Python, C, C++, JavaScript");
        $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(3)").text("Microsoft Office");
        $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(4)").text("Inglés intermediario");
        $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(5)").text("Cursos en la plataforma Alura:");
        $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(6)").text(" - Entrenamiento de Python");
        $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(7)").text(" - Capacitación de Python para ciencia de datos");
        $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(8)").text(" - Linux I y II");
        $(".apresentacao__cv__conteudo ul:nth-child(3) li:nth-child(9)").text(" - Formación en HTML y CSS para proyectos web");
    })
});


document.addEventListener("DOMContentLoaded", function () {
    // List of possible background images
    const markers = [
        "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMjAwMTA5MDQvL0VOIgogICAgICAgICAgICAgICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+Cgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICB3aWR0aD0iMWluIiBoZWlnaHQ9IjAuNWluIgogICAgIHZpZXdCb3g9IjAgMCAzMDAgMTUwIj4KICA8cGF0aAogICAgICAgIGZpbGw9IiNmZmUwMDAiIHN0cm9rZT0ibm9uZSIKICAgICAgICBkPSJNIDEyLjAwLDQ4LjAwCiAgICAgICAgICAgQyAxMi4wMCw1MC4wOSAxMS43OSw1NC45OSAxMi42MCw1Ni43MgogICAgICAgICAgICAgMTUuNTksNjMuMTggMjYuMDksNTYuNjQgMzMuMDAsNjMuMDAKICAgICAgICAgICAgIDMwLjg0LDYzLjE4IDIzLjA1LDYzLjg3IDIxLjgwLDY1LjAyCiAgICAgICAgICAgICAxOC4wMiw2Ny44OCAyMS4yOSw3Ni4zNSAyMS44MCw4MC4wMAogICAgICAgICAgICAgMjEuODAsODAuMDAgMjEuODAsODYuMDAgMjEuODAsODYuMDAKICAgICAgICAgICAgIDIxLjgwLDg2LjAwIDQwLjAwLDg3LjAwIDQwLjAwLDg3LjAwCiAgICAgICAgICAgICAzOS45Myw4OC44OCA0MC4wNiw5MS4wNCAzOC45OCw5Mi42OQogICAgICAgICAgICAgMzcuNTEsOTQuOTMgMzUuMTUsOTQuNzUgMzIuNTksOTYuMjAKICAgICAgICAgICAgIDI4LjMzLDk4LjYxIDI2Ljg3LDEwMi4yMiAyNy4zNCwxMDcuMDAKICAgICAgICAgICAgIDI3LjM0LDEwNy4wMCAzMC4wMiwxMjMuNDEgMzAuMDIsMTIzLjQxCiAgICAgICAgICAgICAzMS44MiwxMjUuNzUgNDAuMDEsMTI3Ljk1IDQzLjAwLDEyOC4wMAogICAgICAgICAgICAgNDMuMDAsMTI4LjAwIDg3LjAwLDEyOC4wMCA4Ny4wMCwxMjguMDAKICAgICAgICAgICAgIDg4LjA4LDEyMS41NiA5MS4xNiwxMjEuODAgOTcuMDAsMTIyLjA0CiAgICAgICAgICAgICA5Ny4wMCwxMjIuMDQgMTA5LjAwLDEyMy4wMCAxMDkuMDAsMTIzLjAwCiAgICAgICAgICAgICAxMDkuMDAsMTIzLjAwIDEyOC4wMCwxMjMuMDAgMTI4LjAwLDEyMy4wMAogICAgICAgICAgICAgMTI4LjAwLDEyMy4wMCAxODIuMDAsMTIyLjAwIDE4Mi4wMCwxMjIuMDAKICAgICAgICAgICAgIDE5NC41OCwxMjEuOTcgMTg4LjQyLDExOS4wMyAyMDEuMDAsMTE5LjAwCiAgICAgICAgICAgICAyMDEuMDAsMTE5LjAwIDI0My4wMCwxMTkuMDAgMjQzLjAwLDExOS4wMAogICAgICAgICAgICAgMjQzLjAwLDExOS4wMCAyNTguMDAsMTE4LjAwIDI1OC4wMCwxMTguMDAKICAgICAgICAgICAgIDI1OS41MywxMDkuMTAgMjY2LjAxLDExMy4zNyAyNzAuNDAsMTA5LjE1CiAgICAgICAgICAgICAyNzIuNjEsMTA3LjAzIDI3Mi4zMCwxMDAuODUgMjcyLjAwLDk4LjAwCiAgICAgICAgICAgICAyNzIuMDAsOTguMDAgMjgwLjAwLDk3LjAwIDI4MC4wMCw5Ny4wMAogICAgICAgICAgICAgMjgwLjAwLDk0LjEwIDI4MC4yNiw4OC41NSAyNzkuMjYsODYuMDIKICAgICAgICAgICAgIDI3Ni40OSw3OC45OCAyNjQuNjMsNzYuODggMjU4LjAwLDc2LjAwCiAgICAgICAgICAgICAyNjUuMTUsNjkuMTkgMjc2LjQwLDczLjAzIDI3NC44NSw2Mi4wNAogICAgICAgICAgICAgMjc0LjQ3LDU5LjM1IDI3My43Myw1OC44NSAyNzIuMDAsNTcuMDAKICAgICAgICAgICAgIDI4MS42OCw1My43NyAyODEuMDAsNTQuMjggMjgxLjAwLDQ0LjAwCiAgICAgICAgICAgICAyODEuMDAsNDQuMDAgMjU4LjAwLDQyLjM4IDI1OC4wMCw0Mi4zOAogICAgICAgICAgICAgMjUwLjAwLDQwLjg0IDI1MS40OCwzOC4wMyAyMzUuMDAsMzguMDAKICAgICAgICAgICAgIDIzNS4wMCwzOC4wMCAxODkuMDAsMzkuMDAgMTg5LjAwLDM5LjAwCiAgICAgICAgICAgICAxODkuMDAsMzkuMDAgMTc3LjAwLDM5LjgyIDE3Ny4wMCwzOS44MgogICAgICAgICAgICAgMTc3LjAwLDM5LjgyIDE1OS4wMCwzOC4wMCAxNTkuMDAsMzguMDAKICAgICAgICAgICAgIDE1OS4wMCwzOC4wMCAxMjguMDAsMzguMDAgMTI4LjAwLDM4LjAwCiAgICAgICAgICAgICAxMTYuOTAsMzguMDIgMTIwLjE2LDM5LjQwIDExMy4wMCw0MC42NwogICAgICAgICAgICAgMTEzLjAwLDQwLjY3IDk3LjAwLDQyLjE3IDk3LjAwLDQyLjE3CiAgICAgICAgICAgICA5Ny4wMCw0Mi4xNyA4Ny4wMCw0My44MyA4Ny4wMCw0My44MwogICAgICAgICAgICAgODcuMDAsNDMuODMgNTcuMDAsNDUuMDAgNTcuMDAsNDUuMDAKICAgICAgICAgICAgIDU3LjAwLDQ1LjAwIDMyLjAwLDQ4LjAwIDMyLjAwLDQ4LjAwCiAgICAgICAgICAgICAzMi4wMCw0OC4wMCAxMi4wMCw0OC4wMCAxMi4wMCw0OC4wMCBaIiAvPgo8L3N2Zz4K')",
        "url('../images/marcador1.png')",
        "url('../images/marcador2.png')",
        "url('../images/marcador3.png')",
        "url('../images/marcador4.png')",
        "url('../images/marcador5.png')",
        "url('../images/marcador6.png')"
    ];

    // Select a random image
    const randomMarker = markers[Math.floor(Math.random() * markers.length)];

    // Apply it to the root CSS variable
    document.documentElement.style.setProperty("--url-marcador", randomMarker);
    document.documentElement.style.setProperty("--url-marcador1", randomMarker);
});


document.addEventListener("DOMContentLoaded", function() {
    function updateDate() {
        const dateElement = document.querySelector(".rodape p");
        const currentDate = new Date();
        
        // Get selected language
        let selectedLanguage = document.querySelector(".language__selected").textContent.trim().toLowerCase();
        
        // Format date
        let formattedDate;
        if (selectedLanguage === "en") {
            formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`; // MM/DD/YYYY
        } else {
            formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`; // DD/MM/YYYY
        }

        dateElement.textContent = `Juliano Pádua - ${formattedDate}`;
    }

    updateDate(); // Run once on page load

    // Update date when the language changes
    document.querySelectorAll(".language ul li a").forEach(langButton => {
        langButton.addEventListener("click", function() {
            setTimeout(updateDate, 100); // Small delay to ensure the language updates
        });
    });
});
