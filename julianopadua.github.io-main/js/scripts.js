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
        localStorage.setItem('selectedLanguage', 'pt-br');

        //apresentação home page
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(1) h2").text("Olá! Meu nome é Juliano Pádua.");
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(2) h1").text("Sou estudante de Engenharia da Computação");
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(3) p").text("Estou em constante evolução, buscando integrar meus conhecimentos em tecnologia e mercado financeiro. Apaixonado por Python, Ciência de Dados e análise de mercado, dedico-me a desenvolver soluções inovadoras que unam tecnologia e inteligência de mercado. Meu objetivo é criar impacto significativo ao aplicar ferramentas tecnológicas para resolver desafios no setor financeiro.");
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
            "Profissionalmente, adquiri insights inestimáveis trabalhando como Estagiário de Suporte na Leadfy Imob e, posteriormente, como Estagiário de Inteligência de Mercado na HedgePoint Global Markets. Atualmente, atuo como desenvolvedor voluntário na All Juice Capital, uma startup inglesa, onde contribuo com o desenvolvimento de produtos de software e aplico metodologias ágeis. Esses papéis aperfeiçoaram minhas habilidades de trabalho em equipe, resolução de problemas e adaptação a ambientes dinâmicos, proporcionando-me uma base sólida para navegar na interseção de tecnologia e finanças."
        );
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(5) p").html(
            "Além dos meus esforços acadêmicos e profissionais, gosto de criar projetos impactantes em Python, muitos dos quais estão disponíveis no meu GitHub: <a href='https://github.com/julianopadua' target='_blank'>github.com/julianopadua</a>. Estou comprometido com o aprendizado contínuo e com a aplicação de soluções baseadas em dados para gerar resultados significativos na indústria financeira."
        );

        $(".apresentacao__informacoes ul:nth-child(1) li:nth-child(1) h2").text("Aniversário:");
        $(".apresentacao__informacoes ul:nth-child(1) li:nth-child(2) p").text("19 de jan. de 2002");
        $(".apresentacao__informacoes ul:nth-child(2) li:nth-child(1) h2").text("Whatsapp:");
        $(".apresentacao__informacoes ul:nth-child(2) li:nth-child(2) p").text("+55 (34) 99910-9610");
        $(".apresentacao__informacoes__ageadress ul:nth-child(1) li:nth-child(1) h2").text("Idade:");
        $(".apresentacao__informacoes__ageadress ul:nth-child(1) li:nth-child(2) p").text("23 anos");
        $(".apresentacao__informacoes__ageadress ul:nth-child(2) li:nth-child(1) h2").text("Endereço:");
        $(".apresentacao__informacoes__ageadress ul:nth-child(2) li:nth-child(2) p").text("Edifício Jardim de Sevilha - São Carlos, SP");

        //apresentacao cv page
        $(".apresentacao__cv__conteudo ul:nth-child(1) li:nth-child(1) h1").text("Currículo");
        
        // UFSCar Experience
        $(".job-title").eq(0).text("Monitor de Introdução à Computação e Tutor de Geometria Analítica - UFSCar");
        $(".job-description").eq(0).html(
            "Realizei monitoria em Introdução à Computação, auxiliando estudantes no aprendizado da linguagem " +
            "<span class='skill'>Python</span> e fundamentos da programação. Além disso, atuei como tutor de " +
            "Geometria Analítica, apoiando alunos na compreensão de conceitos matemáticos e <span class='soft-skill'>resolução de problemas</span>."
        );

        // Leadfy Experience
        $(".job-duration").eq(0).text("Mai de 2024 - Ago de 2024 · 4 meses");
        $(".job-description").eq(1).html(
            "No meu estágio na Leadfy Imob, tive a oportunidade de aprimorar minhas habilidades de <span class='soft-skill'>trabalho em equipe</span>, " +
            "atendimento ao cliente e suporte técnico, desenvolvendo habilidades interpessoais de <span class='soft-skill'>comunicação</span> e " +
            "<span class='soft-skill'>resolução de problemas</span>. Trabalhei com <span class='skill'>metodologias ágeis</span>, utilizando o ClickUp para " +
            "gestão de projetos e implementando práticas Kanban, o que fortaleceu minha <span class='soft-skill'>gestão de tempo</span> e " +
            "<span class='soft-skill'>adaptabilidade</span>."
        );

        // HedgePoint Experience
        $(".job-duration").eq(1).text("Set de 2024 - Mar de 2025");
        $(".job-description").eq(2).html(
            "Na HedgePoint Global Markets, foquei em otimizar fluxos de trabalho com " +
            "<span class='skill'>Python</span>, <span class='skill'>Excel e VBA</span>. Desenvolvi soluções para coleta, tratamento e " +
            "organização de grandes volumes de dados, utilizando técnicas avançadas de <span class='skill'>web scraping</span>. Participei de " +
            "análises de mercado e reuniões, onde me familiarizei com conceitos avançados de economia como <span class='skill'>hedging</span> " +
            "e <span class='skill'>mercado de commodities</span>, além de contribuir com o refino de minha <span class='soft-skill'>comunicação</span> " +
            "e <span class='soft-skill'>trabalho em equipe</span>."
        );

        // All Juice Capital Experience
        $(".job-duration").eq(2).text("Mai de 2025 - Atualmente");
        $(".job-description").eq(3).html(
            "Colaboro e construo produtos de software internos e externos para a startup inglesa All Juice Capital. Atuo no desenvolvimento " +
            "de soluções tecnológicas utilizando <span class='skill'>Python</span>, <span class='skill'>TypeScript</span> e " +
            "<span class='skill'>trading systems</span>, aplicando <span class='skill'>metodologias ágeis</span> no dia a dia através de práticas Kanban. " +
            "Além do desenvolvimento, contribuo com a <span class='soft-skill'>gestão de equipe</span>, <span class='soft-skill'>onboarding</span> de novos " +
            "funcionários e desenvolvimento de documentação técnica. Esta experiência voluntária tem sido fundamental para o desenvolvimento de minhas habilidades " +
            "técnicas e profissionais, especialmente em <span class='soft-skill'>liderança</span> e <span class='soft-skill'>mentoria</span>."
        );

        // Skills Section
        $(".apresentacao__skills__titulo").text("Habilidades");
        $(".apresentacao__skills__conteudo h3").eq(0).html("<span class='soft-skill'>Soft Skills</span>");
        $(".apresentacao__skills__conteudo h3").eq(1).html("<span class='skill'>Hard Skills</span>");

        // Soft Skills
        $(".apresentacao__skills__conteudo ul").eq(0).html(`
            <li><span class="skill-name">Comunicação clara e eficaz</span> - habilidade aprimorada como tutor e monitor acadêmico, aplicada no atendimento ao cliente e em reuniões estratégicas.</li>
            <li><span class="skill-name">Trabalho em equipe</span> - desenvolvida em ambientes de colaboração, como projetos acadêmicos, suporte e interações multidisciplinares.</li>
            <li><span class="skill-name">Resolução criativa de problemas</span> - exercitada ao criar soluções técnicas para fluxos de trabalho e ao ajudar alunos na compreensão de conceitos desafiadores.</li>
            <li><span class="skill-name">Gestão de tempo</span> - aplicada no equilíbrio entre estudos, estágios e projetos pessoais, garantindo prazos e alta produtividade.</li>
            <li><span class="skill-name">Liderança e mentoria</span> - desenvolvidas através do onboarding e gestão de novos funcionários, além da criação de documentação técnica.</li>
            <li><span class="skill-name">Adaptabilidade</span> - fortalecida pela experiência com metodologias ágeis e diferentes ambientes de trabalho.</li>
        `);

        // Hard Skills
        $(".apresentacao__skills__conteudo ul").eq(1).html(`
            <li><span class="skill-name">Python</span> - usado para análise de dados, webscraping, automação de processos e desenvolvimento de sistemas.</li>
            <li><span class="skill-name">TypeScript</span> - aplicado no desenvolvimento de aplicações web e sistemas full-stack.</li>
            <li><span class="skill-name">Trading Systems</span> - desenvolvimento e implementação de algoritmos e sistemas de trading.</li>
            <li><span class="skill-name">Full-Stack Development</span> - experiência em desenvolvimento completo de aplicações web.</li>
            <li><span class="skill-name">Metodologias Ágeis</span> - experiência prática com Kanban e ferramentas como ClickUp para gestão de projetos e equipes.</li>
            <li><span class="skill-name">Conhecimento Econômico</span> - experiência em análise de mercados, hedging e commodities, aplicado em ambiente profissional de trading.</li>
            <li><span class="skill-name">SQL</span> - aplicado em consultas complexas e modelagem de dados para suporte a análises de mercado.</li>
            <li><span class="skill-name">Excel e VBA</span> - incluindo automação de tarefas e geração de relatórios personalizados.</li>
            <li><span class='skill-name'>Git/GitHub</span> - gerenciando versionamento de código em projetos colaborativos.</li>
            <li><span class="skill-name">Linguagem C e C++</span> - aplicadas em algoritmos de baixo nível e resolução de problemas acadêmicos.</li>
            <li><span class="skill-name">HTML e CSS</span> - habilidades utilizadas para desenvolvimento de projetos front-end e portfólio pessoal.</li>
        `);

        // Projects Section
        $(".apresentacao__projetos__titulos").text("Meus Projetos");
        
        // Project 1
        $(".apresentacao__projetos__textos h2").eq(0).text("Análise Comparativa de Empresas");
        $(".apresentacao__projetos__textos p").eq(0).text(
            "Este projeto é uma aplicação web desenvolvida em Python utilizando Streamlit para fornecer uma análise comparativa de indicadores financeiros de diferentes empresas e uma análise gráfica dos dados históricos das ações. O objetivo é educacional, aplicando conhecimentos adquiridos em prática!"
        );
        $(".apresentacao__projetos__textos a").eq(0).text("Ver no GitHub");

        // Project 2
        $(".apresentacao__projetos__textos h2").eq(1).text("Project Initialization App");
        $(".apresentacao__projetos__textos p").eq(1).text(
            "Aplicação baseada em Streamlit que facilita a criação de estruturas de projetos personalizadas. Permite definir diretórios, personalizar arquivos essenciais e gerar um arquivo ZIP do projeto. Ideal para otimizar o início de novos projetos com eficiência e consistência."
        );
        $(".apresentacao__projetos__textos a").eq(1).text("Ver no GitHub");

        // Project 3
        $(".apresentacao__projetos__textos h2").eq(2).text("Pra onde vai o Dólar?");
        $(".apresentacao__projetos__textos p").eq(2).text(
            "Este projeto utiliza técnicas de Machine Learning para prever se o dólar (USD/BRL=X) irá subir ou cair no dia seguinte. Baseia-se em dados históricos da taxa de câmbio e indicadores financeiros, aplicando algoritmos de classificação para análise preditiva."
        );
        $(".apresentacao__projetos__textos a").eq(2).text("Ver no GitHub");

        // Project 4
        $(".apresentacao__projetos__textos h2").eq(3).text("Cotação do Dólar: Previsão com Machine Learning");
        $(".apresentacao__projetos__textos p").eq(3).text(
            "Este projeto utiliza Machine Learning para tentar prever o valor do dólar (USD/BRL=X) no dia seguinte, aplicando o modelo ARIMA X. A abordagem se baseia em séries temporais e dados históricos da taxa de câmbio para gerar previsões com maior precisão."
        );
        $(".apresentacao__projetos__textos a").eq(3).text("Ver no GitHub");

        // Project 5
        $(".apresentacao__projetos__textos h2").eq(4).text("Relatório Financeiro Automatizado");
        $(".apresentacao__projetos__textos p").eq(4).text(
            "Aplicação web desenvolvida com Streamlit que permite aos usuários gerar relatórios financeiros detalhados e personalizados. Os usuários podem selecionar diferentes ativos financeiros para análise comparativa, visualizar gráficos interativos e métricas importantes, além de escolher o idioma do relatório. O sistema automatiza todo o processo de coleta de dados, análise e geração de PDF."
        );
        $(".apresentacao__projetos__textos a").eq(4).text("Ver no GitHub");

        // Project 6
        $(".apresentacao__projetos__textos h2").eq(5).text("Limpador de Pastas");
        $(".apresentacao__projetos__textos p").eq(5).text(
            "Ferramenta desenvolvida em Python que auxilia na gestão de armazenamento, identificando automaticamente os arquivos e diretórios mais pesados dentro de um local especificado. O programa facilita a limpeza de espaço em disco, apresentando de forma clara e organizada os maiores consumidores de armazenamento, permitindo uma tomada de decisão mais eficiente na liberação de espaço."
        );
        $(".apresentacao__projetos__textos a").eq(5).text("Ver no GitHub");
    });
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
        localStorage.setItem('selectedLanguage', 'en');

        //apresentação
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(1) h2").text("Hi! I'm Juliano Pádua");
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(2) h1").text("I'm a Computer Engineering student");
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(3) p").text("I am in constant evolution, seeking to integrate my knowledge of technology and financial markets. Passionate about Python, Data Science, and market analysis, I am dedicated to developing innovative solutions that combine technology and market intelligence. My goal is to create meaningful impact by applying technological tools to solve challenges in the financial sector.");
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
             "Professionally, I have gained invaluable insights working as a Support Intern at Leadfy Imob and later as a Market Intelligence Intern at HedgePoint Global Markets. Currently, I serve as a volunteer developer at All Juice Capital, a UK-based startup, where I contribute to software product development and apply agile methodologies. These roles have sharpened my teamwork, problem-solving, and adaptability skills, providing me with a solid foundation to navigate the intersection of technology and finance."
         );
         $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(5) p").html(
             "In addition to my academic and professional efforts, I enjoy creating impactful Python projects, many of which are available on my GitHub: <a href='https://github.com/julianopadua' target='_blank'>github.com/julianopadua</a>. I am committed to continuous learning and to applying data-driven solutions that deliver meaningful results in the financial industry."
         );

         $(".apresentacao__informacoes ul:nth-child(1) li:nth-child(1) h2").text("Birthday:");
         $(".apresentacao__informacoes ul:nth-child(1) li:nth-child(2) p").text("January 19, 2002");
         $(".apresentacao__informacoes ul:nth-child(2) li:nth-child(1) h2").text("Whatsapp:");
         $(".apresentacao__informacoes ul:nth-child(2) li:nth-child(2) p").text("+55 (34) 99910-9610");
         $(".apresentacao__informacoes__ageadress ul:nth-child(1) li:nth-child(1) h2").text("Age:");
         $(".apresentacao__informacoes__ageadress ul:nth-child(1) li:nth-child(2) p").text("23 years old");
         $(".apresentacao__informacoes__ageadress ul:nth-child(2) li:nth-child(1) h2").text("Address:");
         $(".apresentacao__informacoes__ageadress ul:nth-child(2) li:nth-child(2) p").text("Edifício Jardim de Sevilha - São Carlos, SP");

         //apresentacao cv page
         $(".apresentacao__cv__conteudo ul:nth-child(1) li:nth-child(1) h1").text("Curriculum");
         
         // UFSCar Experience
         $(".job-title").eq(0).text("Introduction to Computing Monitor and Analytical Geometry Tutor - UFSCar");
         $(".job-description").eq(0).html(
             "I conducted tutoring sessions in Introduction to Computing, assisting students in learning the " +
             "<span class='skill'>Python</span> language and programming fundamentals. Additionally, I served as an Analytical Geometry tutor, " +
             "supporting students in understanding mathematical concepts and <span class='soft-skill'>problem-solving</span>."
         );

         // Leadfy Experience
         $(".job-duration").eq(0).text("May 2024 - Aug 2024 · 4 months");
         $(".job-description").eq(1).html(
             "During my internship at Leadfy Imob, I had the opportunity to enhance my <span class='soft-skill'>teamwork</span> skills, " +
             "customer service, and technical support, developing interpersonal skills in <span class='soft-skill'>communication</span> and " +
             "<span class='soft-skill'>problem-solving</span>. I worked with <span class='skill'>agile methodologies</span>, using ClickUp for " +
             "project management and implementing Kanban practices, which strengthened my <span class='soft-skill'>time management</span> and " +
             "<span class='soft-skill'>adaptability</span>."
         );

         // HedgePoint Experience
         $(".job-duration").eq(1).text("Sep 2024 - Mar 2025");
         $(".job-description").eq(2).html(
             "At HedgePoint Global Markets, I focused on optimizing workflows using " +
             "<span class='skill'>Python</span>, <span class='skill'>Excel and VBA</span>. I developed solutions for collecting, processing, " +
             "and organizing large volumes of data, utilizing advanced <span class='skill'>web scraping</span> techniques. I participated in " +
             "market analysis and meetings, where I became familiar with advanced economic concepts such as <span class='skill'>hedging</span> " +
             "and <span class='skill'>commodities market</span>, while also contributing to the refinement of my <span class='soft-skill'>communication</span> " +
             "and <span class='soft-skill'>teamwork</span> skills."
         );

         // All Juice Capital Experience
         $(".job-duration").eq(2).text("May 2025 - Present");
         $(".job-description").eq(3).html(
             "I collaborate and build internal and external software products for the English startup All Juice Capital. I work on developing " +
             "technological solutions using <span class='skill'>Python</span>, <span class='skill'>TypeScript</span>, and " +
             "<span class='skill'>trading systems</span>, applying <span class='skill'>agile methodologies</span> daily through Kanban practices. " +
             "Beyond development, I contribute to <span class='soft-skill'>team management</span>, <span class='soft-skill'>onboarding</span> of new " +
             "employees, and technical documentation development. This voluntary experience has been fundamental to the development of my technical " +
             "and professional skills, especially in <span class='soft-skill'>leadership</span> and <span class='soft-skill'>mentoring</span>."
         );

         // Skills Section
         $(".apresentacao__skills__titulo").text("Skills");
         $(".apresentacao__skills__conteudo h3").eq(0).html("<span class='soft-skill'>Soft Skills</span>");
         $(".apresentacao__skills__conteudo h3").eq(1).html("<span class='skill'>Hard Skills</span>");

         // Soft Skills
         $(".apresentacao__skills__conteudo ul").eq(0).html(`
             <li><span class="skill-name">Clear and effective communication</span> - skill enhanced as a tutor and academic monitor, applied in customer service and strategic meetings.</li>
             <li><span class="skill-name">Teamwork</span> - developed in collaborative environments, such as academic projects, support, and multidisciplinary interactions.</li>
             <li><span class="skill-name">Creative problem-solving</span> - exercised when creating technical solutions for workflows and helping students understand challenging concepts.</li>
             <li><span class="skill-name">Time management</span> - applied in balancing studies, internships, and personal projects, ensuring deadlines and high productivity.</li>
             <li><span class="skill-name">Leadership and mentoring</span> - developed through onboarding and management of new employees, as well as technical documentation creation.</li>
             <li><span class="skill-name">Adaptability</span> - strengthened by experience with agile methodologies and different work environments.</li>
         `);

         // Hard Skills
         $(".apresentacao__skills__conteudo ul").eq(1).html(`
             <li><span class="skill-name">Python</span> - used for data analysis, webscraping, process automation, and system development.</li>
             <li><span class="skill-name">TypeScript</span> - applied in web application development and full-stack systems.</li>
             <li><span class="skill-name">Trading Systems</span> - development and implementation of trading algorithms and systems.</li>
             <li><span class="skill-name">Full-Stack Development</span> - experience in complete web application development.</li>
             <li><span class="skill-name">Agile Methodologies</span> - practical experience with Kanban and tools like ClickUp for project and team management.</li>
             <li><span class="skill-name">Economic Knowledge</span> - experience in market analysis, hedging, and commodities, applied in professional trading environment.</li>
             <li><span class="skill-name">SQL</span> - applied in complex queries and data modeling to support market analysis.</li>
             <li><span class="skill-name">Excel and VBA</span> - including task automation and custom report generation.</li>
             <li><span class="skill-name">Git/GitHub</span> - managing code versioning in collaborative projects.</li>
             <li><span class="skill-name">C and C++ Languages</span> - applied in low-level algorithms and academic problem-solving.</li>
             <li><span class="skill-name">HTML and CSS</span> - skills used for front-end project development and personal portfolio.</li>
         `);

         // Projects Section
         $(".apresentacao__projetos__titulos").text("My Projects");
         
         // Project 1
         $(".apresentacao__projetos__textos h2").eq(0).text("Company Comparative Analysis");
         $(".apresentacao__projetos__textos p").eq(0).text(
             "This project is a web application developed in Python using Streamlit to provide a comparative analysis of financial indicators from different companies and a graphical analysis of historical stock data. The goal is educational, applying acquired knowledge in practice!"
         );
         $(".apresentacao__projetos__textos a").eq(0).text("View on GitHub");

         // Project 2
         $(".apresentacao__projetos__textos h2").eq(1).text("Project Initialization App");
         $(".apresentacao__projetos__textos p").eq(1).text(
             "Streamlit-based application that facilitates the creation of customized project structures. Allows defining directories, customizing essential files, and generating a project ZIP file. Ideal for optimizing the start of new projects with efficiency and consistency."
         );
         $(".apresentacao__projetos__textos a").eq(1).text("View on GitHub");

         // Project 3
         $(".apresentacao__projetos__textos h2").eq(2).text("Where is the Dollar Going?");
         $(".apresentacao__projetos__textos p").eq(2).text(
             "This project uses Machine Learning techniques to predict whether the dollar (USD/BRL=X) will rise or fall the next day. It is based on historical exchange rate data and financial indicators, applying classification algorithms for predictive analysis."
         );
         $(".apresentacao__projetos__textos a").eq(2).text("View on GitHub");

         // Project 4
         $(".apresentacao__projetos__textos h2").eq(3).text("Dollar Exchange Rate: Machine Learning Prediction");
         $(".apresentacao__projetos__textos p").eq(3).text(
             "This project uses Machine Learning to try to predict the dollar value (USD/BRL=X) for the next day, applying the ARIMA X model. The approach is based on time series and historical exchange rate data to generate more accurate predictions."
         );
         $(".apresentacao__projetos__textos a").eq(3).text("View on GitHub");

         // Project 5
         $(".apresentacao__projetos__textos h2").eq(4).text("Automated Financial Report");
         $(".apresentacao__projetos__textos p").eq(4).text(
             "Web application developed with Streamlit that allows users to generate detailed and customized financial reports. Users can select different financial assets for comparative analysis, view interactive graphs and important metrics, and choose the report language. The system automates the entire process of data collection, analysis, and PDF generation."
         );
         $(".apresentacao__projetos__textos a").eq(4).text("View on GitHub");

         // Project 6
         $(".apresentacao__projetos__textos h2").eq(5).text("Folder Cleaner");
         $(".apresentacao__projetos__textos p").eq(5).text(
             "Tool developed in Python that assists in storage management by automatically identifying the heaviest files and directories within a specified location. The program facilitates disk space cleaning by clearly and organizedly presenting the largest storage consumers, allowing for more efficient decision-making in space liberation."
         );
         $(".apresentacao__projetos__textos a").eq(5).text("View on GitHub");
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
        localStorage.setItem('selectedLanguage', 'es');

        //apresentação
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(1) h2").text("¡Hola! Mi nombre es Juliano Padua.");
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(2) h1").text("Soy estudiante de ingenieria informatica");
        $(".apresentacao__conteudo ul:nth-child(1) li:nth-child(3) p").text("Estoy en constante evolución, buscando integrar mis conocimientos en tecnología y mercados financieros. Apasionado por Python, Ciencia de Datos y análisis de mercado, me dedico a desarrollar soluciones innovadoras que unan tecnología e inteligencia de mercado. Mi objetivo es generar un impacto significativo al aplicar herramientas tecnológicas para resolver desafíos en el sector financiero.");
        $(".apresentacao__conteudo ul:nth-child(2) li:nth-child(1) h3").text("Encuentrame");

        //apresentacao sobre page
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(1) h1").text("Sobre mí");
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(2) p").text(
            "Soy un estudiante dedicado de Ingeniería de Computación en la UFSCar, apasionado por la resolución de problemas, la ciencia de datos y los mercados financieros. Mi trayectoria académica me ha dotado de sólidas habilidades en análisis de datos, programación y modelado financiero, lo que alimenta mi entusiasmo por aprovechar la tecnología para enfrentar desafíos reales en las finanzas y más allá."
        );
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(3) p").text(
            "Como tutor en la UFSCar, guié a estudiantes en Introducción a la Computación y Geometría Analítica, perfeccionando mi capacidad para comunicar conceptos complejos de forma clara y accesible. Estas experiencias profundizaron mi experiencia en esas áreas y reforzaron mi pasión por enseñar y aprender."
        );
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(4) p").text(
            "Profesionalmente, adquirí conocimientos valiosos trabajando como Pasante de Soporte en Leadfy Imob y, posteriormente, como Pasante de Inteligencia de Mercado en HedgePoint Global Markets. Actualmente, actúo como desarrollador voluntario en All Juice Capital, una startup inglesa, donde contribuyo al desarrollo de productos de software y aplico metodologías ágiles. Estos roles han perfeccionado mis habilidades de trabajo en equipo, resolución de problemas y adaptación a entornos dinámicos, brindándome una base sólida para moverme en la intersección entre tecnología y finanzas."
        );
        $(".apresentacao__conteudo__sobre ul:nth-child(1) li:nth-child(5) p").html(
            "Además de mis esfuerzos académicos y profesionales, disfruto crear proyectos impactantes en Python, muchos de los cuales están disponibles en mi GitHub: <a href='https://github.com/julianopadua' target='_blank'>github.com/julianopadua</a>. Estoy comprometido con el aprendizaje continuo y con la aplicación de soluciones basadas en datos para generar resultados significativos en la industria financiera."
        );

        $(".apresentacao__informacoes ul:nth-child(1) li:nth-child(1) h2").text("Cumpleaños:");
        $(".apresentacao__informacoes ul:nth-child(1) li:nth-child(2) p").text("19 de enero de 2002");
        $(".apresentacao__informacoes ul:nth-child(2) li:nth-child(1) h2").text("Whatsapp:");
        $(".apresentacao__informacoes ul:nth-child(2) li:nth-child(2) p").text("+55 (34) 99910-9610");
        $(".apresentacao__informacoes__ageadress ul:nth-child(1) li:nth-child(1) h2").text("Edad:");
        $(".apresentacao__informacoes__ageadress ul:nth-child(1) li:nth-child(2) p").text("23 años");
        $(".apresentacao__informacoes__ageadress ul:nth-child(2) li:nth-child(1) h2").text("Dirección:");
        $(".apresentacao__informacoes__ageadress ul:nth-child(2) li:nth-child(2) p").text("Edifício Jardim de Sevilha - São Carlos, SP");

        //apresentacao cv page
        $(".apresentacao__cv__conteudo ul:nth-child(1) li:nth-child(1) h1").text("Currículo");
        
        // UFSCar Experience
        $(".job-title").eq(0).text("Monitor de Introducción a la Computación y Tutor de Geometría Analítica - UFSCar");
        $(".job-description").eq(0).html(
            "Realicé monitoría en Introducción a la Computación, ayudando a estudiantes en el aprendizaje del lenguaje " +
            "<span class='skill'>Python</span> y fundamentos de programación. Además, actué como tutor de " +
            "Geometría Analítica, apoyando a estudiantes en la comprensión de conceptos matemáticos y <span class='soft-skill'>resolución de problemas</span>."
        );

        // Leadfy Experience
        $(".job-duration").eq(0).text("May 2024 - Ago 2024 · 4 meses");
        $(".job-description").eq(1).html(
            "Durante mi pasantía en Leadfy Imob, tuve la oportunidad de mejorar mis habilidades de <span class='soft-skill'>trabajo en equipo</span>, " +
            "atención al cliente y soporte técnico, desarrollando habilidades interpersonales de <span class='soft-skill'>comunicación</span> y " +
            "<span class='soft-skill'>resolución de problemas</span>. Trabajé con <span class='skill'>metodologías ágiles</span>, utilizando ClickUp para " +
            "gestión de proyectos e implementando prácticas Kanban, lo que fortaleció mi <span class='soft-skill'>gestión del tiempo</span> y " +
            "<span class='soft-skill'>adaptabilidad</span>."
        );

        // HedgePoint Experience
        $(".job-duration").eq(1).text("Sep 2024 - Mar 2025");
        $(".job-description").eq(2).html(
            "En HedgePoint Global Markets, me enfoqué en optimizar flujos de trabajo con " +
            "<span class='skill'>Python</span>, <span class='skill'>Excel y VBA</span>. Desarrollé soluciones para recolección, procesamiento y " +
            "organización de grandes volúmenes de datos, utilizando técnicas avanzadas de <span class='skill'>web scraping</span>. Participé en " +
            "análisis de mercado y reuniones, donde me familiaricé con conceptos avanzados de economía como <span class='skill'>hedging</span> " +
            "y <span class='skill'>mercado de commodities</span>, además de contribuir al refinamiento de mi <span class='soft-skill'>comunicación</span> " +
            "y <span class='soft-skill'>trabajo en equipo</span>."
        );

        // All Juice Capital Experience
        $(".job-duration").eq(2).text("May 2025 - Actualmente");
        $(".job-description").eq(3).html(
            "Colaboro y construyo productos de software internos y externos para la startup inglesa All Juice Capital. Actúo en el desarrollo " +
            "de soluciones tecnológicas utilizando <span class='skill'>Python</span>, <span class='skill'>TypeScript</span> y " +
            "<span class='skill'>trading systems</span>, aplicando <span class='skill'>metodologías ágiles</span> diariamente a través de prácticas Kanban. " +
            "Además del desarrollo, contribuyo con la <span class='soft-skill'>gestión de equipo</span>, <span class='soft-skill'>onboarding</span> de nuevos " +
            "empleados y desarrollo de documentación técnica. Esta experiencia voluntaria ha sido fundamental para el desarrollo de mis habilidades " +
            "técnicas y profesionales, especialmente en <span class='soft-skill'>liderazgo</span> y <span class='soft-skill'>mentoría</span>."
        );

        // Skills Section
        $(".apresentacao__skills__titulo").text("Habilidades");
        $(".apresentacao__skills__conteudo h3").eq(0).html("<span class='soft-skill'>Soft Skills</span>");
        $(".apresentacao__skills__conteudo h3").eq(1).html("<span class='skill'>Hard Skills</span>");

        // Soft Skills
        $(".apresentacao__skills__conteudo ul").eq(0).html(`
            <li><span class="skill-name">Comunicación clara y efectiva</span> - habilidad mejorada como tutor y monitor académico, aplicada en atención al cliente y reuniones estratégicas.</li>
            <li><span class="skill-name">Trabajo en equipo</span> - desarrollada en entornos de colaboración, como proyectos académicos, soporte e interacciones multidisciplinarias.</li>
            <li><span class="skill-name">Resolución creativa de problemas</span> - ejercitada al crear soluciones técnicas para flujos de trabajo y al ayudar a estudiantes en la comprensión de conceptos desafiantes.</li>
            <li><span class="skill-name">Gestión del tiempo</span> - aplicada en el equilibrio entre estudios, pasantías y proyectos personales, garantizando plazos y alta productividad.</li>
            <li><span class="skill-name">Liderazgo y mentoría</span> - desarrolladas a través del onboarding y gestión de nuevos empleados, además de la creación de documentación técnica.</li>
            <li><span class="skill-name">Adaptabilidad</span> - fortalecida por la experiencia con metodologías ágiles y diferentes entornos de trabajo.</li>
        `);

        // Hard Skills
        $(".apresentacao__skills__conteudo ul").eq(1).html(`
            <li><span class="skill-name">Python</span> - usado para análisis de datos, webscraping, automatización de procesos y desarrollo de sistemas.</li>
            <li><span class="skill-name">TypeScript</span> - aplicado en el desarrollo de aplicaciones web y sistemas full-stack.</li>
            <li><span class="skill-name">Trading Systems</span> - desarrollo e implementación de algoritmos y sistemas de trading.</li>
            <li><span class="skill-name">Full-Stack Development</span> - experiencia en desarrollo completo de aplicaciones web.</li>
            <li><span class="skill-name">Metodologías Ágiles</span> - experiencia práctica con Kanban y herramientas como ClickUp para gestión de proyectos y equipos.</li>
            <li><span class="skill-name">Conocimiento Económico</span> - experiencia en análisis de mercados, hedging y commodities, aplicado en entorno profesional de trading.</li>
            <li><span class="skill-name">SQL</span> - aplicado en consultas complejas y modelado de datos para soporte a análisis de mercado.</li>
            <li><span class="skill-name">Excel y VBA</span> - incluyendo automatización de tareas y generación de informes personalizados.</li>
            <li><span class="skill-name">Git/GitHub</span> - gestionando versionamiento de código en proyectos colaborativos.</li>
            <li><span class="skill-name">Lenguajes C y C++</span> - aplicados en algoritmos de bajo nivel y resolución de problemas académicos.</li>
            <li><span class="skill-name">HTML y CSS</span> - habilidades utilizadas para desarrollo de proyectos front-end y portafolio personal.</li>
        `);

        // Projects Section
        $(".apresentacao__projetos__titulos").text("Mis Proyectos");
        
        // Project 1
        $(".apresentacao__projetos__textos h2").eq(0).text("Análisis Comparativo de Empresas");
        $(".apresentacao__projetos__textos p").eq(0).text(
            "Este proyecto es una aplicación web desarrollada en Python utilizando Streamlit para proporcionar un análisis comparativo de indicadores financieros de diferentes empresas y un análisis gráfico de los datos históricos de las acciones. ¡El objetivo es educativo, aplicando conocimientos adquiridos en la práctica!"
        );
        $(".apresentacao__projetos__textos a").eq(0).text("Ver en GitHub");

        // Project 2
        $(".apresentacao__projetos__textos h2").eq(1).text("Project Initialization App");
        $(".apresentacao__projetos__textos p").eq(1).text(
            "Aplicación basada en Streamlit que facilita la creación de estructuras de proyectos personalizadas. Permite definir directorios, personalizar archivos esenciales y generar un archivo ZIP del proyecto. Ideal para optimizar el inicio de nuevos proyectos con eficiencia y consistencia."
        );
        $(".apresentacao__projetos__textos a").eq(1).text("Ver en GitHub");

        // Project 3
        $(".apresentacao__projetos__textos h2").eq(2).text("¿Hacia dónde va el Dólar?");
        $(".apresentacao__projetos__textos p").eq(2).text(
            "Este proyecto utiliza técnicas de Machine Learning para predecir si el dólar (USD/BRL=X) subirá o bajará al día siguiente. Se basa en datos históricos del tipo de cambio e indicadores financieros, aplicando algoritmos de clasificación para análisis predictivo."
        );
        $(".apresentacao__projetos__textos a").eq(2).text("Ver en GitHub");

        // Project 4
        $(".apresentacao__projetos__textos h2").eq(3).text("Cotización del Dólar: Predicción con Machine Learning");
        $(".apresentacao__projetos__textos p").eq(3).text(
            "Este proyecto utiliza Machine Learning para intentar predecir el valor del dólar (USD/BRL=X) al día siguiente, aplicando el modelo ARIMA X. El enfoque se basa en series temporales y datos históricos del tipo de cambio para generar predicciones más precisas."
        );
        $(".apresentacao__projetos__textos a").eq(3).text("Ver en GitHub");

        // Project 5
        $(".apresentacao__projetos__textos h2").eq(4).text("Informe Financiero Automatizado");
        $(".apresentacao__projetos__textos p").eq(4).text(
            "Aplicación web desarrollada con Streamlit que permite a los usuarios generar informes financieros detallados y personalizados. Los usuarios pueden seleccionar diferentes activos financieros para análisis comparativo, visualizar gráficos interactivos y métricas importantes, además de elegir el idioma del informe. El sistema automatiza todo el proceso de recolección de datos, análisis y generación de PDF."
        );
        $(".apresentacao__projetos__textos a").eq(4).text("Ver en GitHub");

        // Project 6
        $(".apresentacao__projetos__textos h2").eq(5).text("Limpiador de Carpetas");
        $(".apresentacao__projetos__textos p").eq(5).text(
            "Herramienta desarrollada en Python que ayuda en la gestión de almacenamiento, identificando automáticamente los archivos y directorios más pesados dentro de una ubicación especificada. El programa facilita la limpieza de espacio en disco, presentando de manera clara y organizada los mayores consumidores de almacenamiento, permitiendo una toma de decisiones más eficiente en la liberación de espacio."
        );
        $(".apresentacao__projetos__textos a").eq(5).text("Ver en GitHub");
    });
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

// Function to apply language based on localStorage
function applyLanguage() {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
        switch(selectedLanguage) {
            case 'en':
                $(".en").click();
                break;
            case 'es':
                $(".es").click();
                break;
            case 'pt-br':
            default:
                $(".br").click();
                break;
        }
    }
}

// Apply language when page loads
$(document).ready(function() {
    applyLanguage();
});
