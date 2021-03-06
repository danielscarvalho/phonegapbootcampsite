app.controller('QuotesController', ['$scope', 'AppEventManager',
    function (scope, AppEventManager) {
        AppEventManager.tellMenuNewSectionLoaded('quotes');

        // defining multiple language content
        scope.pageItems = {
            "title": {
                "ptLabel": "Depoimentos",
                "enLabel": "Quotes"
            },
            "quotes": [{
                    "ptLabel": "O conhecimento dos instrutores, com exemplos reais, e a organização dos assuntos de maneira gradual fizeram do PhoneGap Bootcamp um treinamento excelente.",
                    "enLabel": "The knowledge of the instructors, with real examples, and the subject distribution made PhoneGap Bootcamp an awesome training."
                            },
                {
                    "ptLabel": "Com certeza eu recomendo o PhoneGap Bootcamp para outros desenvolvedores, principalmente porque cada vez mais a gente precisa entregar aplicativos multi-plataforma, e o HTML5 é a promessa para garantir esse requisito do mercado. Com o curso eu tenho certeza que saio daqui muito mais capacitado para entregar um app móvel multi-plataforma totalmente comparável aos aplicativos nativos de cada um dos sistemas.",
                    "enLabel": "I highly recommend PhoneGap Bootcamp to other developers, mainly because each day we get more requests to deliver cross-platform apps, and HTML5 is the promise that fulfills this market requisite. With this training I'm sure I leave here a lot more capable to deliver cross-platform mobile apps totally comparable to native apps of each platform."
                            },
                {
                    "ptLabel": "O que mais gostei foi a parte de configuração do ambiente de desenvolvimento, que foi bem detalhada e precisa; agora consigo configurar qualquer Mac ou qualquer PC para criar apps usando HTML5 com o Cordova.",
                    "enLabel": "What I liked the most was how to configure the development environment, which was very detailed and precise; now I can configure any Mac or any PC in order to create apps with HTML5 and Cordova."
                            },
                {
                    "ptLabel": "Não tinha ideia do poder do Cordova, a ferramenta é bem interessante; foi meu primeiro contato com ela e pretendo dar continuidade aos estudos.",
                    "enLabel": "I had no idea of how powerful Cordova was, the tool is really interesting; it was my first contact with it and I plan to keep studying it."
                            },
                {
                    "ptLabel": "O curso é extremamente intenso e foca em pontos que a gente não encontra facilmente, com dicas do mundo real, que fazem toda a diferença na hora de ter um app móvel com alta performance.",
                    "enLabel": "The training is very intense and focuses on points that we don't find easily, with real world tips, that make all the difference when you need a high performance mobile app."
                            },
                {
                    "ptLabel": "A documentação na Web é muito complicada de filtrar, é quase toda em inglês e muda constantemente, com o curso consegui absorver tudo de forma rápida e mastigada. O PhoneGap Bootcamp é fantástico!",
                    "enLabel": "The documentation on the web is very hard to filter and changes constantly, with the training I was able to learn it all quickly and in an ordered manner. PhoneGap Bootcamp is amazing!"
                }]
        };
}]);