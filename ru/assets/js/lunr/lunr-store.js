var store = [{
        "title": "CGMiner&#58; Настройка - Как пользоваться программой [2023]",
        "excerpt":"CGMiner требует Windows x64 (Windows 7, Windows 10 и т.д.) Или Linux x64 (проверено на Ubuntu LTS и стабильной версии Debian)          Для начала вы можете скачать самую последнюю версию CGMiner 3.7.2 отсюда:   Скачать сейчас   Скачать (зеркало)   Как запустить   CGMiner имеет интерфейс командной строки. Для минимальной конфигурации введите в .bat файле:   CGMiner -a [алгоритм майнинга] -o [сервер пула] -u [имя пользователя или адрес кошелька]   Пример:   cgminer -o http://pool:port -u username -p password   Самый простой способ получить кошелек - зарегистрироваться на бирже криптовалют, например Huobi или Binance.   Для получения полного списка команд CGMiner конфигурации выполните:   CGMiner --help   Готовые шаблоны:   cgminer -o http://pool1:port -u pool1username -p pool1password -o http://pool2:port -u pool2usernmae -p pool2password   Читайте обновленный и  подробный гайд по настройке CGMiner.   &nbsp;          Как настроить CGMiner для майнинга криптовалют (Litecoin и Dogecoin)  Эта инструкция очень наглядна. Даже не смотря на то, что она на английском языке. Вы можете включить субтитры и их перевод.        &nbsp;          Настройка CGMiner для Litecoin для Windows  Руководство о том, как настроить cgminer в Windows 10. В видео мы использовали Litecoin в качестве примера майнинга, но программное обеспечение может добывать многие другие криптовалюты, кроме Litecoin. Это видео для новичков, которые только входят в мир майнинга.        &nbsp;          Замена bmminer на CGMiner в асике Antminer  Описание процедуры ручной замены программы майнера в асике.        &nbsp;   Пример батника для Doge   setx GPU_FORCE_64BIT_PTR 0 setx GPU_MAX_HEAP_SIZE 100 setx GPU_USE_SYNC_OBJECTS 1 setx GPU_MAX_ALLOC_PERCENT 100 setx GPU_SINGLE_ALLOC_PERCENT 100 cgminer --scrypt -I 10 -o stratum+tcp://pool.coinfoundry.org:3151 -u DKs5E8nWJe2E5vYnVSoYqNjw2T17nGYUDo.my_worker_password -p my_worker_password -T  pause   Программа поддерживает следующие алгоритмы:      Scrypt   SHA-256   NeoScrypt   CryptoNight   Для получения других примеров и полного списка команд CGMiner посетите эту страницу.       ","categories": ["documentation"],
        "tags": ["CGMiner"],
        "url": "https://cgminer.info/documentation/setup/",
        "teaser": "https://cgminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "CGMiner&#58; Команды, аргументы и Параметры Командной Строки",
        "excerpt":"Вы должны оптимизировать файлы cgminer.conf и cgminer.bat, чтобы создать наилучшее сочетание пропускной способности и хеширования, поддерживаемое вашей конкретной аппаратной установкой.          Скачать   Скачать   Параметры командной строки   Резюме по использованию:   Один пул:   cgminer -o http://pool:port -u имя пользователя -p пароль   Несколько пулов:   cgminer -o http://pool1:port -u имя пользователя_пула -p пароль_пула1 -o http://пул2:порт -u пользователь_пула2nmae -p пароль_пула2   Единый пул со стандартным http-прокси:   cgminer -o \"http:proxy:port|http://pool:port\" -u имя пользователя -p пароль   Единый пул с прокси socks5:   cgminer -o \"socks5:proxy:port|http://pool:port\" -u имя пользователя -p пароль   Единый пул с поддержкой протокола stratum:   cgminer -o stratum+tcp://pool:port -u имя пользователя -p пароль   Соло-майнинг в localhost:   cgminer -o http://localhost:8332 -u имя пользователя -p пароль --btc-адрес 15qSxP1SQcUX3o4nhkfdbgyoWEFMomJ4rZ  ","categories": ["documentation"],
        "tags": ["CGMiner"],
        "url": "https://cgminer.info/documentation/arguments/",
        "teaser": "https://cgminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "CGMiner&#58; Журнал изменений и примечания к выпуску",
        "excerpt":"Примечания к выпуску — это документы, которые распространяются вместе с программными продуктами.    Список изменений         23 апреля 2021 г. — Лукас Мердиан slyon@ubuntu.com cgminer (4.9.2-1ubuntu1) разработка; срочность = средняя     Исправление FTBFS с GCC-10 путем компиляции с параметром -fcommon   03.05.2018 - Маттиас Клозе doko@ubuntu.com cgminer (4.9.2-1build2) космический; срочность = средняя     Перестроение без изменений для изменений soname ncurses.   07.02.2016 - Матиас Клозе doko@ubuntu.com cgminer (4.9.2-1build1) xenial; срочность = средняя     Перестроение без изменений для перехода на ncurses6.   2015-06-25 — Скотт Ховард showard@debian.org cgminer (4.9.2-1) нестабильный; срочность = средняя     Новый релиз   Обновлен список поддерживаемых устройств   Обновлена ​​справочная страница   Удален патч Debian для использования системного json, включённого в апстрим   08.11.2014 — Скотт Ховард showard@debian.org cgminer (4.7.0-2) нестабильный; срочность = средняя     Сборка только с рекомендованной конфигурацией на всех арках (Закрыт: #767719)   Обновлена ​​справочная страница, поскольку новый бинарный файл будет иметь ту же конфигурацию. на всех арках   26.10.2014 — Скотт Ховард showard@debian.org cgminer (4.7.0-1) нестабильный; срочность = средняя     Новый апстрим-релиз.   libusb_init_warning.patch: Записывать предупреждение и не выходить, если libusb_init() завершается ошибкой (закрытие: #757381).   2014-10-12 — Скотт Ховард showard@debian.org cgminer (4.6.1-1) нестабильный; срочность = средняя     Новый апстрим-релиз   обновлен дебиан/авторское право   Добавлена ​​поддержка хешрейта   БД на zlib1g-dev   Д-С-В = 3.9.6, без изменений   некоторая отладка для поиска ошибки 757381 (показать вывод help2man в журналы сборки)   30.07.2014 — Скотт Ховард showard@debian.org cgminer (4.4.2-1) нестабильный; срочность = средняя     Новый апстрим-релиз.   Обновлен дебиан/авторское право   Обновленные патчи.   debian/patches/kfreebsd_libusb.patch #определить LIBUSB_CALL, если нет определено (закрыто: #754682)   debian/patches/mips_roundl.patch удален, включен в апстрим   Обновление debian/rules для сборки новых майнеров   06.06.2014 — Скотт Ховард showard@debian.org cgminer (4.3.4-2) нестабильный; срочность = средняя     debian/patches/mips_roundl.patch: Удалить #define из roundl, вызывающего FTBFS на mips. roundl уже определен в -lm.   03.06.2014 — Скотт Ховард showard@debian.org cgminer (4.3.4-1) нестабильный; срочность = средняя     Новый апстрим-релиз.   Новый пример ruby ​​(api-example.rb), обновленный debian/copyright   Источник  ","categories": ["documentation"],
        "tags": ["CGMiner"],
        "url": "https://cgminer.info/documentation/changelog/",
        "teaser": "https://cgminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Скачать CGMiner 3.7.2 - ASIC, GPU и FPGA майнер [2022]",
        "excerpt":" Начните добывать криптовалюту   с помощью CGMiner  \t\t \t\t\t \t\tВерсия: 3.7.2  \t\tФайл: *cgminer.exe,   \t\tSHA256: 417b22681a716e2481fde1fcaed96d66a5716a188186a4ae765d558d4a7ec2f5  \t\t(Скачать для Linux)\t \t\t \t\t \t\t \t\t \t\tСкачать сейчас(Windows x64) \t\t \t\t(зеркало) \t\t \t           Новая версия CGMiner готова для скачивания.   Вы можете скачать CGMiner 3.7.2 отсюда:   Скачать сейчас   Скачать (зеркало)   Внутри архива вы найдете файл README.txt с инструкцией по установке.   Не забудьте поменять адреса кошельков в примерах настройки на свои адреса!        ","categories": ["download"],
        "tags": ["CGMiner"],
        "url": "https://cgminer.info/download/3.7.2/",
        "teaser": "https://cgminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Прогноз Курса Биткоина на следующую Неделю",
        "excerpt":"         Несмотря на волатильность и недавнее падение цены, многие эксперты по-прежнему говорят, что биткойн находится на пути к отметке в 100 000 долларов, хотя мнения относительно того, когда именно это произойдет, расходятся. Волатильность не является чем-то новым, и эксперты говорят, что новые криптоинвесторы должны быть крайне осторожны при распределении части своего портфеля в криптовалюту.   MicroStrategy закупает криптовалюту   MicroStrategy увеличит инвестиции в криптовалюту. Поэтому я ожидаю 45$ Долларов за 1 Биткоин.   Крупнейший держатель криптовалюты среди публичных компаний MicroStrategy планирует увеличить инвестиции в цифровые активы. Об этом заявил  генеральный директор MicroStrategy Майкл Сейлор в финансовом отчете компании за 2 квартал 2021 года.      «Наше последнее увеличение капитала позволило нам расширить наши криптовалютные запасы, которые в настоящее время превышают 105 тыс. биткоинов. В будущем мы намерены и дальше вкладывать дополнительный капитал в нашу стратегию цифровых активов», — отметил Сейлор.    По состоянию на 30 июня MicroStrategy владеет 105 тыс. биткоинов, совокупная стоимость которых составляет $2,05 млрд с убытком от обесценения в размере $689,6 млн с момента приобретения. Средняя стоимость одного биткоина в портфеле MicroStrategy составляет $19,5 тыс.   Мне часто приходится слышать мнение отдельных хомяков, что Майкл Сейлор сошел с ума, и его не стоит слушать. Многие все ожидают падения биткоина до нуля и многие матерые участники рынка и известные аналитики говорят об этом с умным видом, даже с такой снисходительной улыбкой. Не буду называть здесь их имена. И согласен был бы прислушаться к их доводам, если бы не эта снисходительная улыбка.   Но почему не все верят этим гуру?   Но почему не все верят этим гуру? Я замечал, что уровень агрессивного неприятия биткоина тем выше, чем ниже уровень благосостояния критика, безотносительно его опыта и научных званий. Самыми богатыми критиками биткоина по-прежнему являются Уоррен Баффет и его партнер Чарли Мангер. Но поскольку их преследует проклятие Сатоши Накамото, то они просто находятся на пути к разорению. Это происходит медленно, на прошлой неделе их фонд Berkshire Hathaway потерял всего $6 млрд.   Что же касается остальных богатых, то они тихо скупают весь доступный биткоин. Киты - владельцы крупнейших кошельков биткоина от 100 до 10000 BTC, за последние шесть недель увеличили количество биткоинов на своих кошельках на 170 тыс BTC или на $6,3 млрд.  Всего на небольшом количестве кошельков китов теперь сосредоточено более 9,3 млн биткоинов. Это очень богатые люди.   И мы вряд ли когда нибудь увидим на их лице снисходительную улыбку. Поскольку мы даже не увидим их лиц. А очень бы хотелось при встрече спросить их: они что, не слушают главу МВФ и Центробанка Англии? Ну в крайнем случае, они могли бы посмотреть пару роликов Степана Демуры. Они что, не понимают, что биткоин это пузырь и он вот-вот упадет до нуля?   Конечно можно предположить, что все они умственно отсталые, или чего-то не понимают, но скорее всего нет. Более того, на их лицах не бывает снисходительных улыбок, они продолжают увеличивать позицию с серьёзными лицами и уже владеют BTC на $363 млрд.  ","categories": ["articles"],
        "tags": [],
        "url": "https://cgminer.info/ru/articles/micro-07-30/",
        "teaser": "https://cgminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Прогноз Курса Биткоина на Весна 2022",
        "excerpt":"         Прогноз: Биткойн может достичь 100 000 долларов в 2022 году . Почему: цена биткойна в январе 2022 года почти равна его цене в январе 2021 года, но появился новый спрос на альткойны.  Однако, эксперт по криптовалюте Мэтью Хайленд  написал в Твиттере, что падение ниже 40 000 долларов может привести к «свободному падению» на медвежьем рынке биткойнов.   Хотя биткойн закрыл год ниже, чем многие ожидали, и в 2022 году он начнет медленно расти, важно отметить, что криптовалюта превзошла другие классы активов в 2021 году, включая товары, акции и золото.   События в Китае   Пока все отдыхают в воскресенье, в Китае происходят странные события. Согласно исследованию Trustnode, в Китае в течение раннего утра было замечено увеличение заявок от богатых людей на покупки BTC на крупные суммы, которые внебиржевые обменники (OTC), не могут удовлетворить   В пятницу 30 июля неизвестный трейдер купил в общей сложности 2000 контрактов call-опционов на биткойн в нескольких сделках по 100 BTC через внебиржевую OTC компанию. Покупка закрылась 30 июля по истечении срока действия опциона по ценам исполнения $33 000, $34 000 и $35 000 долларов США. Трейдер также разместил следующие заявки со сроком исполнения 6 августа.   Обычные трейдеры используют децентрализованные биржевые платформы (dex), либо централизованные криптобиржи(cex) для приобретения биткоинов. Однако состоятельные частные лица и компании обычно не используют биржи, поскольку предпочитают торговать через OTC (внебиржевые торговые столы.)   Внебиржевая торговля - это торговля между двумя сторонами напрямую но чаще с помощью посредников OTC. В отличие от сделок, которые происходят на криптобиржах, эти сделки не регистрируются в книгах ордеров. Хотя переводы с OTC могут быть отслежены в блокчейне.      “OTC Outflow RSI показывает самый сильный сигнал на покупку BTC с июля прошлого года”,    -сказал  аналитик Уилл Клементе своим 158 000 подписчикам в Twitter. “Это указывает на покупку компаниями либо состоятельными частными лицами”.   Ряд других трейдеров, обсуждающих эту тему в Twitter, согласились с оценкой внебиржевого спроса, подчеркнув, что платформы социальных сетей завалены постами, на эту тему.   Но крупные фонды и компании не заинтересованы в открытой покупке BTC на биржах, поскольку такие объемы легко отправят цену биткоина на Луну. Однако в свободном обращении биткоинов почти нет. И рано или поздно фонды будут вынуждены прийти на биржи и будут конкурировать между собой за возможность приобрести последние доступные битокины.   Не дайте себя обмануть, не продавайте свои биткоины и эфиры.   Конечно сделки на крупных OTC тщательно прячутся, но даже имеющиеся у Glassnode в распоряжении сведения о кошельках некоторых OTC, показывают, что за последнюю неделю объемы вывода биткоинов с кошельков внебиржевых обменников значительно выросли.  ","categories": ["articles"],
        "tags": [],
        "url": "https://cgminer.info/ru/articles/otc-08-01/",
        "teaser": "https://cgminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Биткоин Регулирование в США&#58; Легально или Нет?",
        "excerpt":"         По состоянию на 2022 год, биткойн является легальным в США, Японии, Великобритании и большинстве других развитых стран. В общем, нужно смотреть на законы о биткойнах в конкретных странах. В США IRS проявляет растущий интерес к биткойнам и выпустила руководство для налогоплательщиков.   Несмотря на использование BTC для покупки товаров и услуг, до сих пор нет единых международных законов, регулирующих биткойн. Многие развитые страны, например, США, Канада и Великобритания, разрешают использование биткойнов. Несколько стран объявили использование биткойнов незаконным, включая Китай и Египет.   Законы   В самой свободной крипто-юрисдикции в мире - США, решили пойти по пути российских законодателей. Конгрессмен Дон Бейер представил Закон      “О рынке цифровых активов и защите инвесторов.”    Законодательство будет включать цифровые активы в существующие структуры финансового регулирования.   Конгрессмен сказал:      “Цифровые активы и технология блокчейн имеют большие перспективы, и ясно, что такие активы, как биткойн и эфир, останутся здесь навсегда. Но к сожалению, нынешняя структура рынка цифровых активов и нормативная база неоднозначны и опасны для инвесторов и потребителей.       Держатели цифровых активов в течение многих лет подвергались безудержному мошенничеству, воровству и манипулированию рынком, однако Конгресс до сих пор игнорировал просьбы отраслевых экспертов и федеральных регуляторов создать всеобъемлющую правовую базу”,    -сказал он.   Далее идет непереводимая игра слов, которая очень похожа на принятый в России закон о ЦФА, который фактически даёт право регуляторам запрещать оборот криптовалют, либо даже конфисковывать цифровые кошельки.   Но американские законодатели пошли ещё дальше, предлагая держателям кошельков криптовалют, которые не имеют открытых блокчейнов, например, такие, как Monero, отчитываться в течение 24 часов после проведения операции. И все это с благими целями, чтобы      “свести к минимуму вероятность мошенничества и повысить прозрачность”.    То есть законодатели хотят повысить прозрачность непрозрачных блокчейнов. Но и это еще не всё.   Текст закона   В законе, полную версию которого можно прочитать здесь, правом эмиссии цифрового доллара будет обладать только ФРС, не минфин, не казначейство.   И в конце вишенка на торте:      “Министр финансов США будет иметь “полномочия разрешать или запрещать стэйблкоины, привязанные к доллару США а также стэйблкоины, привязанные к другим фиатным валютам.”    Но как??? Как можно запретить USDT, еще можно понять. Нужно арестовать CEO Digfinex (мажоритарный владелец Tether и iFinex) и держать его за решеткой, пока не отдаст ключи от всех смартконтрактов и кошельков USDT.  Ну или, надавить на банки, в которых Tether держит депозиты в фиате.   Однако, как остановить DAI и другие проекты, которые выпускают стабильные монеты, привязанные к национальным валютам?   Мне это сразу напомнило анекдот:      “Товарищ прапорщик! Вы можете остановить поезд? - Могу. Поезд стой! Раз-два.  Я конечно ничего не хочу сказать о способностях самого конгрессмена Дона Бейера, но на мой взгляд, все эти критики и запрещаторы крипты выглядят как-то похоже.   ","categories": ["articles"],
        "tags": [],
        "url": "https://cgminer.info/ru/articles/finusa-08-02/",
        "teaser": "https://cgminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Скачать CGMiner - последнюю версию (3.7.2) - [2022]",
        "excerpt":"  Начните добывать Ethereum с помощью CGMiner  \t\t \t\t\t \t\tПоследняя версия - 3.7.2 \t\tSHA256: 417b22681a716e2481fde1fcaed96d66a5716a188186a4ae765d558d4a7ec2f5 *cgminer3.7.2.exe \t\t(Скачать для Linux)\t \t\t \t\t \t\t \t\t \t\tСкачать сейчас (Windows x64) \t\t \t\t(зеркало) \t\t \t           Готова новая стабильная версия CGMiner.   Скачайте CGMiner 3.7.2 отсюда:   Скачать Сейчас   Скачать (зеркало)   Внутри архива вы найдете файл README.txt с инструкциями по установке.   Обязательно замените пул и адрес кошелька тем, что вы используете во всех файлах.        ","categories": ["download"],
        "tags": ["CGMiner"],
        "url": "https://cgminer.info/download/latest/",
        "teaser": "https://cgminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Скачать CGMiner 4.12 - ASIC, GPU и FPGA майнер [2022]",
        "excerpt":" Начните добывать криптовалюту   с помощью CGMiner  \t\t \t\t\t \t\tВерсия: 4.12  \t\tФайл: *cgminer.exe,   \t\tSHA256: c57cfadb4a6b8af18bb83248e5244992a0e1dd3617b254f68df9a6c97261c953  \t\t(Скачать для Linux)\t \t\t \t\t \t\t \t\t \t\tСкачать сейчас(Windows x64) \t\t \t\t(зеркало) \t\t \t           Новая версия CGMiner готова для скачивания.   Вы можете скачать CGMiner 4.12 отсюда:   Скачать сейчас   Скачать (зеркало)   Внутри архива вы найдете файл README.txt с инструкцией по установке.   Не забудьте поменять адреса кошельков в примерах настройки на свои адреса!        Установка   Чтобы создать этот код в Linux:   sudo apt-get update -y sudo apt-get install build-essential autoconf automake libtool pkg-config libcurl4-openssl-dev libudev-dev \\ libjansson-dev libncurses5-dev libusb-1.0-0-dev zlib1g-dev -y  git clone https://github.com/wareck/cgminer-gekko.git  cd cgminer-gekko sudo usermod -a -G dialout,plugdev $USER sudo cp 01-cgminer.rules /etc/udev/rules.d/ CFLAGS=\"-O2 -march=native\" ./autogen.sh ./configure --enable-gekko make sudo make install   Поддержка экстранонса Nicehash   Вы можете использовать свой майнер с поддержкой last extranonce для nicehash, добавив #xnsub в конце адреса, например:   ./cgminer -o stratum+tcp://sha256.eu.nicehash.com:3334#xnsub -u my_btc_address -p x --gekko-compac-freq 200 --gekko-2pac-freq 150 --gekko-newpac-freq 150   Linux   ./cgminer -o pool_url -u username -p password --gekko-compac-freq 200 --gekko-2pac-freq 150 --gekko-newpac-freq 150   Windows   Для пользователей Windows вы можете загрузить zip-файл выпуска.   Внутри архива вы можете найти файл cgminer_run.bat. В нем вы можете изменить свои настройки.   Пример:   cgminer.exe -o stratum+tcp://eu.stratum.slushpool.com:3333 -u wareck.gekko -p x --gekko-compac-freq 200 --gekko-2pac-freq 150 --gekko-newpac-freq 150   Как использовать Gekko Stick на Windows      Сначала установите Zadig.   Нажмите «options», затем «list devices».   Найдите свой майнер.   Выберите «winusb driver» и нажмите «change driver».   У вас должно быть что-то вроде этого:           Затем запустите start.bat (измените значение для вашего собственного адреса BTC и сервера).   Через несколько минут вы увидите подключение в консоли:        Обзор опций      --gekko-compac-freq &lt;clock&gt; Тактовая частота чипа (МГц) по умолчанию составляет 200 МГц.   --gekko-2pac-freq &lt;clock&gt; Тактовая частота чипа (МГц) по умолчанию составляет 150 МГц.   --gekko-newpac-freq &lt;clock&gt; Тактовая частота чипа (МГц) по умолчанию составляет 150 МГц.   --gekko-r606-freq &lt;clock&gt; Установить частоту GekkoScience Terminus R606 в МГц, диапазон 50-900 (по умолчанию: 550).   --gekko-terminus-detect Обнаружить GekkoScience Terminus BM1384.   --suggest-diff &lt;value&gt; Предел разницы для запуска майнера по умолчанию равен 32.  ","categories": ["download"],
        "tags": ["CGMiner"],
        "url": "https://cgminer.info/download/4.12/",
        "teaser": "https://cgminer.info/assets/images/thumbs/500x300.png"
      },]
