app.controller('AgendaController', ['$scope', 'AppEventManager',
    function (scope, AppEventManager) {
        AppEventManager.tellMenuNewSectionLoaded('agenda');

        // defining multiple language content
        scope.pageItems = {
            "title": {
                "ptLabel": "Agenda",
                "enLabel": "Agenda"
            },
            "day1": {
                "ptLabel": "DIA 1",
                "enLabel": "DAY 1"
            },
            "day2": {
                "ptLabel": "DIA 2",
                "enLabel": "DAY 2"
            },
            "description": {
                "ptLabel": "Conteúdo",
                "enLabel": "Content"
            },
            "warning": {
                "ptLabel": "Horários sujeitos à alterações.",
                "enLabel": "Schedule subject to change."
            }
        };

        // agenda day 1
        scope.agendaItemsDay1 = [
            {
                "hours": "8am - 9am",
                "ptLabel": "Credenciamento e Apresentações.",
                "enLabel": "Registration and Introductions."
            },
            {
                "hours": "9am - 1pm",
                "ptLabel": "Introdução ao PhoneGap;<br>Introdução ao Cordova, suas dependências, plugins, limitações e vantagens;<br>Configurando o ambiente Windows e o ambiente Mac:<ul><li>Instalando todas as ferramentas e configurando o ambiente Cordova nas máquinas (Windows e Mac) para criação de apps para iOS, Android e BlackBerry 10;</li><li>Instalando e conhecendo dependências do PhoneGap/Cordova: Node.js, Apache Ant e Conhecendo e configurando o PATH do sistema;</li><li>Instalando o Adobe Brackets;</li><li>Preparando o ambiente iOS (somente Mac): Xcode e Command Line Tools;</li><li>Preparando o ambiente Android (Mac e Windows): Java, Eclipse e Android SDK;</li><li>Preparando o ambiente BlackBerry 10 (Mac e Windows): Native SDK, obtendo e configurando chaves de Assinatura.</li></ul>Criando seu primeiro projeto com o Cordova e compilando para cada plataforma (iOS, Android e BlackBerry 10).",
                "enLabel": "Introduction to PhoneGap;<br>Introduction to Cordova, its dependencies, plugins, limitations and advantages;<br>Configuring Windows and Mac environments:<ul><li>Installing all tools and configuring each Cordova environment for Windows and Mac computers, in order to create apps for iOS, Android and BlackBerry 10;</li><li>Installing and getting to know PhoneGap/Cordova dependencies: Node.js, Apache Ant and configuring the system PATH;</li><li>Installing Adobe Brackets;</li><li>Preparing iOS environment (Mac only): Xcode and Command Line Tools;</li><li>Preparing Android environment (Mac and Windows): Java, Eclipse and Android SDK;</li><li>Preparing BlackBerry 10 environment (Mac and Windows): Native SDK, requesting and configuring signing keys.</li></ul>Creating your first project with Cordova and compiling to each platform (iOS, Android and BlackBerry 10).</li>"
            },
            {
                "hours": "1pm - 2pm",
                "ptLabel": "Intervalo para Almoço.",
                "enLabel": "Lunch Break."
            },
            {
                "hours": "2pm - 2:30pm",
                "ptLabel": "Conhecendo o Adobe Brackets e extensões poderosas:<ul><li>Emmet;</li><li>Tabs;</li><li>Beautify;</li><li>Editando CSS a partir do HTML;</li><li>Live Reload.</li></ul>",
                "enLabel": "Getting to know Adobe Brackets and powerful extensions:<ul><li>Emmet;</li><li>Tabs;</li><li>Beautify;</li><li>Editing CSS from your HTML;</li><li>Live Reload.</li></ul>"
            },
            {
                "hours": "2:30pm - 3pm",
                "ptLabel": "Entendendo Single Page Apps.",
                "enLabel": "Getting to know Single Page Apps."
            },
            {
                "hours": "3pm - 6pm",
                "ptLabel": "Entendendo as APIs do HTML5;<br>Entendendo as APIs do Cordova;<br>Conhecendo o Plugman;<br>Criando e gerando builds com:<ul><li>Connection;</li><li>Alerts;</li><li>Device Info;</li><li>Armazenamento Local (Local Storage);</li><li>Mapa e Geolocalização;</li><li>Acelerômetro;</li><li>Contacts (Acessando os Contatos do Device);</li><li>Janela do Navegador dentro do App (In App Browser).</li></ul>",
                "enLabel": "Getting to know HTML5 APIs;<br>Getting to know Cordova APIs;<br>Getting to know Plugman;<br>Creating and generating builds with:<ul><li>Connection;</li><li>Alerts;</li><li>Device Info;</li><li>Local Storage;</li><li>Maps and Geolocation;</li><li>Accelerometer;</li><li>Contacts;</li><li>In App Browser.</li></ul>"
            }
        ];

        // agenda day 2
        scope.agendaItemsDay2 = [
            {
                "hours": "9am - 10am",
                "ptLabel": "20 Técnicas de UX, JS, CSS e HTML, vindas do mundo real, que fazem a diferença em relação à Performance de aplicativos móveis.",
                "enLabel": "20 UX, JS, CSS and HTML Techniques, coming from the real world, that make a big difference regarding Performance for mobile apps."
            },
            {
                "hours": "10am - 11am",
                "ptLabel": "Conhecendo bibliotecas e frameworks poderosos como:<ul><li>AngularJS;</li><li>Swiper;</li><li>Zepto;</li><li>SnapJS;</li><li>FastGap.</li></ul>",
                "enLabel": "Getting to know powerful libraries and frameworks such as:<ul><li>AngularJS;</li><li>Swiper;</li><li>Zepto;</li><li>SnapJS;</li><li>FastGap.</li></ul>"
            },
            {
                "hours": "11am - 1pm",
                "ptLabel": "Criando um aplicativo Single Page com o FastGap, Swiper, Zepto e SnapJS.",
                "enLabel": "Creating a Single Page App with FastGap, Swiper, Zepto and SnapJS."
            },
            {
                "hours": "1pm - 2pm",
                "ptLabel": "Intervalo para Almoço.",
                "enLabel": "Lunch Break."
            },
            {
                "hours": "2pm - 5pm",
                "ptLabel": "Adicionando plugins e usando as APIs do Cordova e do HTML5:<ul><li>Connection;</li><li>Alerts;</li><li>Device Info;</li><li>Armazenamento Local (Local Storage);</li><li>Mapa e Geolocalização;</li><li>Acelerômetro;</li><li>Contacts (Acessando os Contatos do Device);</li><li>Janela do Navegador dentro do App (In App Browser).</li></ul>",
                "enLabel": "Adding plugins and using Cordova+HTML5 APIs:<ul><li>Connection;</li><li>Alerts;</li><li>Device Info;</li><li>Local Storage;</li><li>Maps and Geolocation;</li><li>Accelerometer;</li><li>Contacts;</li><li>In App Browser.</li></ul>"
            },
            {
                "hours": "5pm - 6pm",
                "ptLabel": "Empacotando o aplicativo e ajustando para cada plataforma;<br>Instalando no Device;<br>Debugando no Device com o Remote Web Inspector;<br>Assinando seu aplicativo antes de submeter para a loja;<br>Entendendo como criar uma conta de vendor e como enviar seu aplicativo para as lojas de apps:<ul><li>Apple App Store;</li><li>Google Play;</li><li>BlackBerry World.</li></ul>",
                "enLabel": "Packaging the app and adjusting to each platform;<br>Deploying to the device;<br>On-device Debugging with Remote Web Inspector;<br>Signing your app before submitting to the store;<br>Understanding how to create a vendor account and how to submit to the app stores:<ul><li>Apple App Store;</li><li>Google Play;</li><li>BlackBerry World.</li></ul>"
            },
            {
                "hours": "6pm - 6:30pm",
                "ptLabel": "Encerramento;<br>Entrega dos Certificados;<br>Foto da Turma.",
                "enLabel": "Closing remarks;<br>Course Certificate;<br>Group Picture."
            }
        ];
}]);