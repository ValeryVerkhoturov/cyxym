<script>
  import { scrollTo } from "../../scroll.js";

  const content = [
    { id: "#first", name: "−VI–I" },
    { id: "#second", name: "I–VI" },
    { id: "#third", name: "VI–X" },
    { id: "#fourth", name: "X–XVII" },
    { id: "#fifth", name: "XVII–XIX" },
    { id: "#sixth", name: "XIX–XX" },
    { id: "#seventh", name: "XX" },
  ];
</script>

<svelte:head>
  <title>ИСТОРИЯ</title>
  <meta
    name="Description"
    content="История Сухума начинается с 6 века до нашей эры, когда греки решили посетить Черное Море и заинтересовались берегами, где было много вкусного и красивого. Они основали свои поселения. Продолжение следует…"
  />
  <meta itemprop="name" content="ИСТОРИЯ" />
  <meta
    itemprop="description"
    content="История Сухума начинается с 6 века до нашей эры, когда греки решили посетить Черное Море и заинтересовались берегами, где было много вкусного и красивого. Они основали свои поселения. Продолжение следует…"
  />
  <meta property="og:url" content="https://cyxym.now.sh/history" />
  <meta property="og:title" content="ИСТОРИЯ" />
  <meta
    property="og:description"
    content="История Сухума начинается с 6 века до нашей эры, когда греки решили посетить Черное Море и заинтересовались берегами, где было много вкусного и красивого. Они основали свои поселения. Продолжение следует…"
  />
  <meta name="twitter:url" content="https://cyxym.now.sh/history" />
  <meta name="twitter:title" content="ИСТОРИЯ" />
  <meta
    name="twitter:description"
    content="История Сухума начинается с 6 века до нашей эры, когда греки решили посетить Черное Море и заинтересовались берегами, где было много вкусного и красивого. Они основали свои поселения. Продолжение следует…"
  />
  <meta name="apple-mobile-web-app-title" content="ИСТОРИЯ" />
</svelte:head>

<h1>ИСТОРИЯ</h1>
<figure>
  <img src="images/history-main.jpg" alt="История Абхазии" />
</figure>
<nav>
  {#each content as item}
  <button href="{item.id}" on:click="{scrollTo}">{item.name}</button>
  {/each}
</nav>
<h2 id="first">−VI–I&numsp;в.</h2>
<figure>
  <img
    src="images/history-1.jpg"
    alt="Карта 6–1 веков до&numsp;нашей эры"
    loading="lazy"
  />
  <figcaption>Карта 6–1&numsp;веков до&numsp;нашей эры</figcaption>
</figure>
<p>
  Городу Сухум насчитывается 2500&numsp;лет. Он является одним из&numsp;древнейших городов
  Кавказа. Сухум был основан, так же как и&numsp;многие другие города Абхазии, в&numsp;эпоху
  греческой колонизации (VI в. до&numsp;н.&numsp;э.). Во&numsp;время пребывания греков 
  на&numsp;территории Абхазии абхазы не&numsp;были единственным народом, жившим там, эти земли
  населяли различные народности.
</p>
<p>
  Греческая колонизация не&numsp;носила завоевательный характер. Основной целью греков
  было налаживание торговых связей с&numsp;местным населением.
</p>
<p>
  Во&numsp;втором веке до&numsp;н.&numsp;э. на&numsp;территории Малой Азии возникает греческое
  грсударство&numsp;— Понтийское царство. Наивысшего расцвета Понт достигает при&numsp;царе
  Митридате. Абхазия также становится частью нового государства. Амбиции
  Митридата по&numsp;захвату всего черноморского побережья приводят к&numsp;конфликту 
  с&numsp;римлянами. Разгромленный правитель бежит в&numsp;Диоскуриаду (греческое название
  Сухума). Абхазия, как часть уничтоженного Понтийского государства, оказывается
  захваченной римлянами. Диоскуриада была переименована в&numsp;Себастополис в&numsp;честь
  римского императора Октавиана Августа Себастоса (Величественного). Для&numsp;защиты
  своих провинций римляне отстраивают Понтийский Лимес&numsp;— линию прибрежных
  укреплений, часть из&numsp;которых раполагалась в&numsp;Абхазии.
</p>
<h2 id="second">I—VI&numsp;в.</h2>
<p>
  В&numsp;результате разорительных набегов германских варварских племен 
  и&numsp;внутриполитических проблем Римская империя распадается на&numsp;Западно-римскую 
  и&numsp;Восточно-римскую (Византийскую) империи. Абхазия попадает в&numsp;сферу интересов
  Византии и&numsp;на&numsp;ее территориях начинает активно распространятся христианство.
  Уже к&numsp;548&numsp;году в&numsp;древнеабхазских государствах&numsp;— Апсилии и&numsp;Абасгии&numsp;—
  христианство становится официальной религией. Однако принятие христианства
  вовсе не&numsp;означает лояльность к&numsp;Византии. В&numsp;550&numsp;году, когда разразилась первая
  ирано-византийская война, абасги и&numsp;апсилы поднимают восстание и&numsp;переходят 
  на&numsp;сторону Ирана. Позже, в&numsp;555&numsp;году, восстают мисимиане, неселявшие горные районы
  Абхазии. И&numsp;хотя повстанцы были разбиты, абасги, апсилы и&numsp;мисимиане будут
  долго добиваться независимости.
</p>
<h2 id="third">VI–X&numsp;в.</h2>
<figure>
  <img src="images/history-2.jpg" alt="Карта 8 века" loading="lazy" />
  <figcaption>Карта 8&numsp;века</figcaption>
</figure>
<p>
  Видной фигурой в&numsp;истории объединения Абхазии является князь Абасгии Леон&numsp;I.
  Именно он берется за&numsp;объединение всех абхазских земель в&numsp;единое государство&numsp;—
  Абхазию. Этим государством начинают интересоваться арабы. В&numsp;737&numsp;году
  происходит важное в&numsp;истории Абхазии Анакопийское сражение. Арабы проигрывают 
  и&numsp;подвергаются изгнанию. После этого через династический брак с&numsp;дочерью союзника
  Арчила (грузинского князя) Леон&numsp;I получает во&numsp;владение новые территории.
</p>
<p>
  После смерти Леона&numsp;I править начинает Леон&numsp;II, который провозглашает
  независимость Абхазии.
</p>
<p>
  Основными событиями этого промежутка истории Абхазии становятся многочисленные
  битвы за&numsp;Картли (одно из&numsp;грузинских княжеств). Борьба за&numsp;владение этими
  территориями заканчивается объединением грузинских государств с&numsp;Абхазией 
  в&numsp;одно Абхазо-картвельское государство.
</p>
<h2 id="fourth">X–XVII&numsp;в.</h2>
<figure>
  <img src="images/history-3.jpg" alt="Историческая крепость" loading="lazy" />
  <figcaption>Историческая крепость</figcaption>
</figure>
<p>
  В&numsp;X–XVII&numsp;в. Цхум (Сухум) становится важным причерноморским центром, 
  а&numsp;также летней резиденцией царей. В&numsp;Цхуме проводила время и&numsp;знаменитая царица
  Тамара. Также в&numsp;городе в&numsp;XIII&numsp;в. располагались генуэзские торговые фактории. 
  В&numsp;Абхазии появляются многочисленные торговые пути. Основным же интересом
  генуэзцев является живой товар&numsp;— рабы.
</p>
<p>
  С&numsp;X&numsp;в. в&numsp;Абхазии правит династия Багратидов при&numsp;которой происходило укрепление
  Абхазии на&numsp;востоке.
</p>
<p>
  После Багратидов начинают править Чачба-Шервашидзе.
</p>
<p>
  В&numsp;XVI&numsp;в. Абхазия становится вассалом Мегрельского княжества Сабедиано. После
  неоднократных перемирий Мегрельское княжество всё-таки решается на&numsp;захват
  Абхазии. Это длится не&numsp;продолжительное время. Вскоре Абхазия укрепляется перед
  Сабедиано и&numsp;становится самостоятельной страной.
</p>
<h2 id="fifth">XVII–XIX&numsp;в.</h2>
<figure>
  <img
    src="images/history-4.jpg"
    alt="Династия Чачба-Шервашидзе"
    loading="lazy"
  />
  <figcaption>Династия Чачба-Шервашидзе</figcaption>
</figure>
<p>
  Однако полностью независимой Абхазия существует недолго. Во&numsp;второй половине
  XVII&numsp;в. она попадает под управление Турции. Город Сухум вследствие этого
  получает новое название&numsp;— Сухум-Кале. А для&numsp;защиты своих владений Турки строят
  в&numsp;Абхазии крепость. Начинается продвижение исламской религии в&numsp;христианской
  Абхазии. Первыми ислам принимают князья и&numsp;феодалы. Попытки исламизации низших
  слоёв общества приводят к&numsp;антитурецким восстаниями в&numsp;1725, 1728, 1771 годах.
</p>
<p>
  В&numsp;1780-х годах правителем Абхазии становится Келешбей Чачба-Шервашидзе, один
  из&numsp;самых знаменитых правителей Абхазии.
</p>
<p>
  В&numsp;устье реки Ингур на&numsp;границе Абхазии и&numsp;Мегрелии располагалась спорная
  крепость Анаклия. Келешбей решил раз и&numsp;навсегда закрыть вопрос её
  принадлежности и&numsp;выставил против Мегрелии двадцатитысячное войско. Мегрелия
  находилась в&numsp;тяжелом положении, поэтому уступила Анаклию Абхазии. Чтобы
  защититься от&numsp;наступлений Келешбея Мегрелия в&numsp;1804&numsp;году вступает 
  под&numsp;покровительство России.
</p>
<h2 id="sixth">XIX–XX&numsp;в.</h2>
<figure>
  <img src="images/history-5.jpg" alt="Берег Абхазии" loading="lazy" />
  <figcaption>Берег Абхазии</figcaption>
</figure>
<p>
  Военные авантюры в&numsp;Мегрелии Келешбей совершал, будучи вассалом Османской
  империи. Однако теперь ни сам князь, ни дворяне не&numsp;намерены были подчиняться
  Стамбулу. Обострение отношений приводит к&numsp;военному конфликту, в&numsp;результате
  которого Абхазия становится независимой. Но, только добившись независимости,
  Абхазия вновь её теряет. 2&numsp;мая 1808&numsp;г. Келешбей умирает и&numsp;абхазский престол
  занимает марионетка турции Асланбей.
</p>
<p>
  Асланбей недолго удерживает власть и&numsp;князем становится его младший брат
  Георгий, который находится в&numsp;руках Российской империи. 10&numsp;июня 1810&numsp;года 
  в&numsp;Сухум-Кале высаживается русский десант. Абхазия становится вассалом России.
</p>
<p>
  С&numsp;появлением в&numsp;Абхазии русских войск начинается самая трагическая страница 
  в&numsp;истории страны&numsp;— Махаджирство. Это насильственное переселение горских народов
  (в&numsp;основном абхазов, адыгов и&numsp;черкесов) в&numsp;пределы Османской Турции.
</p>
<p>
  Волны Махаджирства в&numsp;Абхазии происходили в&numsp;течение всего XIX&numsp;века. Всего
  насчитывается 10 волн: 1810, 1817, 1824, 1830, 1837, 1840-41, 1855, 1864,
  1867, 1877&numsp;г.
</p>
<p>
  За&numsp;весь XIX&numsp;век с&numsp;родных земель в&numsp;Турцию было выселено 2&numsp;млн.&numsp;адыгов 
  и&numsp;500&numsp;тысяч абхазов.
</p>
<p>
  В&numsp;1817 году амбиции России на&numsp;Кавказе постепенно выливаются в&numsp;Кавказскую 
  войну&numsp;— столкновение России с&numsp;народами Кавказа. Несмотря на&numsp;то, что Абхазия ещё 
  в&numsp;1810&numsp;году стала частью России, среди абхазов не&numsp;было единого мнения, на&numsp;чьей
  стороне вступать в&numsp;войну. Раскол общества на&numsp;прочеркесски и&numsp;пророссийски
  настроенных приводит к&numsp;отделению некоторых территорий от&numsp;единого Абхазского
  княжества: Цебельдинское, Дальское, Псухвское княжества и&numsp;Садзен (северо-запад
  современной Абхазии) выступают против России. Абхазский князь теряет контроль
  над&numsp;горными районами страны. Однако эти районы не&numsp;долго удерживают свободу. 
  С&numsp;1824 по&numsp;1859 года происходит 5&numsp;карательных экспедиций русских генералов 
  в&numsp;горные части Абхазии. В&numsp;двух из&numsp;них принимает участие сам князь Михаил Чачба.
  В&numsp;результате этих экспедиций горные княжества были разгромлены и&numsp;подчинены. 
  С&numsp;карательными экспедициями связаны и&numsp;несколько волн Махаджирства: горные сёла
  Абхазии были сожжены, а&numsp;их жители выселены в&numsp;Турцию.
</p>
<p>
  Кавказская война завершилась в&numsp;1864&numsp;году победой России. Для&numsp;Абхазии это
  означало полное подчинение ей. В&numsp;этом же году Абхазское княжество было
  упразднено. На&numsp;его месте был создан Сухумский военный отдел Российской
  империи. Также, в&numsp;1864 году произошла 8&numsp;волна Махаджирства. Абхазы долго 
  не&numsp;могли смириться с&numsp;российскими порядками. Неграмотно проведённая крестьянская
  реформа привела к&numsp;Лыхненскому восстанию в&numsp;1866 году. Во&numsp;время русско-турецкой
  войны 1877–1878&numsp;г. абхазы отказались выступать против турков, из-за чего
  Сухум был захвачен османами. И&numsp;хотя турки вскоре были вынуждены покинуть
  город, перед уходом они подвергли его разорению.
</p>
<p>
  Сухум лежал в&numsp;руинах, виноградники и&numsp;сады были заброшены, скот перебит. Даже
  огромный фонтан, достопримечательность города, турки вывезли.
</p>
<h2 id="seventh">XX&numsp;в.</h2>
<figure>
  <img src="images/history-6.jpg" alt="Сухумский вокзал" loading="lazy" />
  <figcaption>Сухумский вокзал</figcaption>
</figure>
<p>
  В&numsp;начале XX&numsp;в. Абхазия&numsp;в целом оставалась неразвитой окраиной Российской
  империи. Сельское хозяйство оставалось натуральным. Виноделие не&numsp;выдерживало
  конкуренции с&numsp;иностранными производителями и&numsp;поэтому спрос был мал.
  Табаководство оставалось основной отраслью.
</p>
<p>
  28&numsp;июля 1914&numsp;года началась Первая Мировая война. Когда германо-турецкие
  военные корабли установили полный контроль над&numsp;Чёрным морем, положение Абхазии
  стало катастрофическим. Из&numsp;Сухума были эвакуированы правительственные
  учреждения, строительство на&numsp;побережье прекратилось, многие предприятия
  закрылись.
</p>
<p>
  В&numsp;феврале 1917 года в&numsp;России происходит буржуазно-демократическая революция.
</p>
<p>
  В&numsp;окраинах бывшей империи наблюдался рост национально-освободительных
  движений. Не&numsp;стала исключением и&numsp;Абхазия. В&numsp;ноябре 1917&numsp;года был создан
  Абхазский Народный Совет (АНС)&numsp;— первый парламент в&numsp;истории Абхазии.
  Председателем АНС стал Симон Басария. В&numsp;парламенте сразу остро встал вопрос
  будущего Абхазии. Большевики во&numsp;главе с&numsp;Ефремом Эшба выступали за&numsp;союз 
  с&numsp;Советской Россией. Существовала прогрузинская фракция, тянувшая Абхазию в&numsp;союз
  с&numsp;Грузией. Однако наиболее сильной была группа, поддержавшая союз с&numsp;Горской
  республикой, созданной также в&numsp;ноябре 1917&numsp;года. Абхазия становится частью
  Горской республики. Между тем большевики, которым не&numsp;удалось мирно втянуть
  Абхазию в&numsp;союз с&numsp;Советской Россией, планировали превратить свои планы в&numsp;жизнь.
  18&numsp;февраля 1918&numsp;года в&numsp;Сухум прибывают корабли с&numsp;революционными матросами.
  Большевики захватили город и&numsp;создали Военно-революционный комитет (ВГК) во
  &numsp;главе с&numsp;Е.&numsp;Эшба. Однако новая власть продержалась три дня&numsp;— АНС в&numsp;ультиматной
  форме потребовал ликвидации ВГК. Попытка захвата власти провалилась. 
  Но&numsp;8&numsp;апреля 1918&numsp;года произошла вторая попытка, которая увеначалсь успехом.
</p>
<p>
  Последствия установления совествкой власти были ужасными. Грузия,
  воспользовавшись тем, что меньшевитская абхазская власть, с&numsp;которой были
  заключены договорые отношения, пала, ввела в&numsp;страну свои войска. 17&numsp;мая 
  с&numsp;тяжелыми боями войска грузинского генерала Джугели входят в&numsp;Сухум. Вторая
  советская власть пала. После падения советской власти был сформирован второй
  АНС, который на&numsp;Батумской мирной конференции добился вывода грузинских войск
  из&numsp;Абхазии. Однако уже в&numsp;июне 1918&numsp;года под предлогом «устновления твёрдой
  власти и помощи АНС» грузинские войска во главе с генералом Мазниевым вновь
  оккупировали Абхазию.
</p>
<p>
  В&numsp;1921&numsp;году повстанские отряды при&numsp;поддержке 9&numsp;красной армии выступают
  против Грузии. 10&numsp;марта 1921&numsp;года грузинские меньшевики были изгнаны из&numsp;Абхазии. 
  В&numsp;стране установлена советская власть.
</p>
<p>
  В&numsp;1926 году в&numsp;Абхазии начинается индустриализация и&numsp;коллективизация. «В 1935
  году в&numsp;строй вступила первая Ткварчельская угольная шахта Началось
  строительство Сухумской ГЭС».
</p>
<p>
  В&numsp;советское время осуществлялось благоустроиство города Сухум. Были построены
  учреждения: Художественная школа, Институт субтропического хозяйства и&numsp;многие
  другие.
</p>
<p>
  Шло активное развитие туризма, который приносил Абхазской АССР немалый доход.
</p>
<p>
  В&numsp;период Великой Отечественной войны курсанты Сухумского училища принимали
  участие в&numsp;боях за&numsp;Клохорский перевал во&numsp;время битвы за&numsp;Кавказ. После смерти
  Сталина абхазский язык переводится с&numsp;грузинской графической основы на&numsp;кириллицу. 
  В&numsp;Сухуме был открыт Абхазский Государственный Университет (АГУ).
</p>
<p>
  1989&numsp;год считается годом начала грузино-абхазского конфликта. В&numsp;этом году 
  в&numsp;Сухуме происходят столкновения абхазов и&numsp;грузин с&numsp;огромными потерями для&numsp;обоих
  сторон. МВД СССР плохо контролировало ситуацию, а&numsp;после распада Союза в&numsp;1991&numsp;году 
  ситуация стала критической. Дело осложнилось с&numsp;началом гражданской войны
  в&numsp;Грузии, когда звиадисты&numsp;- сторонники свергнутого президента&numsp;— начали
  проводить в&numsp;Сухуме митинги в&numsp;его поддержку. Всё это вызвало недовольство
  местного населения. Стоит также отметить, что СССР Абхазия покинула
  независимой республикой. В&numsp;1990&numsp;году Абхазская ССР отделилась от&numsp;Грузинской
  ССР. 14&numsp;августа 1992&numsp;году Госсовет Грузии вводит войска в&numsp;Абхазмю, чтобы 
  не&numsp;допустить её окончательного отделения.
</p>
<p>
  Начинается Отечественная война Абхазии. Абхазия не&numsp;имела регулярной армии 
  и&numsp;министерства обороны. Сухум был захвачен грузинскими войсками почти без боя,
  однако на&numsp;этом победы Госсовета кончились. 29&numsp;ноября абхазским ополченцам
  удалось отбросить войска противника на&numsp;юг во&numsp;время Кочарской наступательной
  операции. 6&numsp;октября абхазские войска осуществляют операцию «Буря» и&numsp;уничтожают
  десант Госсовета в&numsp;Гагре. 2&numsp;июля 1993&numsp;года происходит операция «Буря-777» или
  Тамышская операция, которая была переломным моментом войны. 27&numsp;сентября 1993&numsp;года 
  в&numsp;ходе Сентябрьского наступления Сухум был освобожден, а за&numsp;ним и&numsp;вся
  Абхазия.
</p>
<p>
  Война нанесла огромный ущерб экономике Абхазии. На&numsp;территорях, занятых
  грузинской армией, проводился геноцид: АГУ, научно исследовательские
  институты, сухумский физико-технический институт были разорены. Здание 
  с&numsp;архивами и&numsp;библиотеки, вместе с&numsp;находившимися там книгами, были сожжены. Были
  уничтожены сотни тысяч уникальных документов.
</p>
