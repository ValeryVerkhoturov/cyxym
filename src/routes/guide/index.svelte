<script>
  import { scrollTo } from "../../scroll.js";

  const content = [
    { id: "#first", name: "Карта" },
    { id: "#second", name: "Природа" },
    { id: "#third", name: "Места" },
    { id: "#fourth", name: "Рестораны" },
    { id: "#fifth", name: "Отели" },
    { id: "#sixth", name: "Интересное" },
  ];
</script>

<svelte:head>
  <title>ГИД</title>
  <meta
    name="Description"
    content="В Сухуме много крутых мест посмотреть, развлечься, поесть, отдохнуть. Вам же нужен гид. Вперед"
  />
  <meta itemprop="name" content="ГИД" />
  <meta
    itemprop="description"
    content="В Сухуме много крутых мест посмотреть, развлечься, поесть, отдохнуть. Вам же нужен гид. Вперед"
  />
  <meta property="og:url" content="https://cyxym.now.sh/guide" />
  <meta property="og:title" content="ГИД" />
  <meta
    property="og:description"
    content="В Сухуме много крутых мест посмотреть, развлечься, поесть, отдохнуть. Вам же нужен гид. Вперед"
  />
  <meta name="twitter:url" content="https://cyxym.now.sh/guide" />
  <meta name="twitter:title" content="ГИД" />
  <meta
    name="twitter:description"
    content="В Сухуме много крутых мест посмотреть, развлечься, поесть, отдохнуть. Вам же нужен гид. Вперед"
  />
  <meta name="apple-mobile-web-app-title" content="ГИД" />
</svelte:head>

<h1>ГИД</h1>
<figure>
  <img src="images/guide-main.jpg" alt="Красивый Сухум" />
</figure>
<nav>
  {#each content as item}
  <button href="{item.id}" on:click="{scrollTo}">{item.name}</button>
  {/each}
</nav>
<h2 id="first">Карта</h2>
<figure>
  <img src="images/guide-1.jpg" alt="Карта Сухума" loading="lazy" />
  <figcaption>Карта Сухума</figcaption>
</figure>
<h2 id="second">Природа</h2>
<h3>Цветы</h3>
<figure>
  <img
    src="images/guide-2.jpg"
    alt="Природа Сухума. Красные цветы"
    loading="lazy"
  />
  <img
    src="images/guide-3.jpg"
    alt="Природа Сухума. Белые цветы"
    loading="lazy"
  />
  <figcaption>Цветы (Автор фотографий: Лана Амичба)</figcaption>
</figure>
<p>
  Природа города Сухум красивая&numsp;— много цветов разных форм и&numsp;расцветок, деревья,
  горы, море. Растительности так много, потому что хороший климат, воздух зимой
  теплый, потому что Кавказские горы сохраняют от&numsp;плохой погоды и&numsp;снегопадов, 
  а&numsp;летом прохладно, потому что дует ветер с&numsp;моря. За&numsp;цветами можно не&numsp;идти в&numsp;сады
  и&numsp;парки&numsp;— они везде на&numsp;улицах.
</p>
<h3>Закат</h3>
<figure>
  <img
    src="images/guide-4.jpg"
    alt="Природа Сухума: море и закат"
    loading="lazy"
  />
  <img src="images/guide-5.jpg" alt="Природа Сухума: закат" loading="lazy" />
  <figcaption>Закат (Автор фотографий: Лана Амичба)</figcaption>
</figure>
<p>
  Закаты украшают растительность и&numsp;добавляют ей цветов. Лучший вариант&numsp;— пойти 
  к&numsp;берегу и&numsp;любоваться закатами. Летом с&numsp;19:30 солнце садится и&numsp;появляется
  красивый вид и&numsp;в&numsp;ясную и&numsp;в&numsp;облачную погоду.
</p>
<h2 id="third">Места</h2>
<p>
  Сухум&numsp;— туристический город. Он удобный для&numsp;активного и&numsp;пассивного отдыха&numsp;—
  есть исторические и&numsp;культурые места, такие как Музей Боевой Славы, драматические
  театры, природные места в&numsp;городе: ботанический сад, за его пределами, ореховая роща, 
  есть места для остановки&numsp;— у&numsp;нас много гостиниц.
</p>
<figure>
  <img
    src="images/guide-6.jpg"
    alt="Абхазский Драматический театр"
    loading="lazy"
  />
  <figcaption>Абхазский Драматический театр</figcaption>
</figure>
<figure>
  <img
    src="images/guide-7.jpg"
    alt="Русский Драматический театр"
    loading="lazy"
  />
  <figcaption>Русский Драматический театр</figcaption>
</figure>
<h2 id="fourth">Рестораны</h2>
<p>
  В&numsp;Сухуме рестораны на&numsp;любой вкус с&numsp;абхазской кухней, американским фастфудом,
  японскими блюдами или смешанные, закрытые и&numsp;с&numsp;видом на&numsp;море.
</p>
<h3>Нартаа</h3>
<figure>
  <img src="images/guide-8.jpg" alt="Нартаа" loading="lazy" />
  <figcaption>Нартаа</figcaption>
</figure>
<p>
  Нартаа — ресторан, чтоб познакомиться с местной кухней. Он похож на большой
  абхазский двор из национальных литературных рассказов — это придает ощущения
  нахождения в абхазской гостеприимной семье. В Нарте есть открытые места, где
  дует летний ветер с моря, и закрытые, чтоб спрятаться от дождя.
</p>
<p>
  Основные блюда: хачапур-лодочка, мамалыга, мясо и салаты. В Нарте готовят и
  другие более привычные для туристов блюда, например, пиццу, но смысл в местной
  кухне.
</p>
<h3>Кантри Чикен</h3>
<figure>
  <img src="images/guide-9.jpg" alt="Кантри Чикен" loading="lazy" />
  <figcaption>Кантри Чикен</figcaption>
</figure>
<p>
  Кантри Чикен&numsp;— замена Макдоналдса и&numsp;КФС, любимое место молодежи&numsp;— ходят 
  в&numsp;другие места, но всегда возвращаются в&numsp;Чикен. Заведение оформлено 
  в&numsp;Австралийском стиле с&numsp;географическими местами на&numsp;картах, фотографиями 
  и&numsp;другими атрибутами.
</p>
<p>
  Бесплатный Вайфай и&numsp;знакомый фастфуд, который часто лучше, чем в&numsp;популярных
  зарубежных аналогах. Американская кухня с&numsp;частицей Абхазии.
</p>
<h2 id="fifth">Отели</h2>
<p>
  Мест для остановки в&numsp;городе много&numsp;— местные сдают квартиры, номера 
  в&numsp;гостиницах, коттеджи и&numsp;дома для удобства туристов. Встречают люди отдыхающих
  со&numsp;свойственным абхазам гостеприимством. Все квартиры и&numsp;отели
  дешевые и&numsp;уютные.
</p>
<h3>Леон</h3>
<figure>
  <img src="images/guide-10.jpg" alt="Отель-ресторан Леон" loading="lazy" />
  <figcaption>Отель-ресторан Леон</figcaption>
</figure>
<p>
  Леон — отель про экономию или дорогой номер люкс. Само здание выглядит
  красиво, сфоткаться не стыдно и есть парковочное место. А рядом находится
  ресторан при отеле, где залы оформлены по-разному: есть и в японском стиле.
</p>
<h3>Рица</h3>
<figure>
  <img src="images/guide-11.jpg" alt="Отель Рица" loading="lazy" />
  <figcaption>Отель Рица</figcaption>
</figure>
<p>
  У&numsp;Рицы столетняя история&numsp;— Сухум был знаменит этим заведением, потому что
  сюда любили приезжать российские и&numsp;зарубежные знаменитости.
</p>
<h3>Атриум-Виктория</h3>
<figure>
  <img src="images/guide-12.jpg" alt="Атриум-Виктория" loading="lazy" />
  <figcaption>Атриум-Виктория</figcaption>
</figure>
<p>
  Атриум-Виктория находится в&numsp;400 метрах от&numsp;Сухумской бухты рядом с&numsp;центром
  города, большинство достопримечательностей в&numsp;пятнадцати минутах ходьбы.
  Есть конференц-зал, где&numsp;предпрениматели и&numsp;инвесторы проводят свои
  встречи и&numsp;презентации.
</p>
<p>
  Забронировать номер можно через Букинг или Трипадвайзор.
</p>
<h2 id="sixth">Интересное</h2>
<h3>Колоннада на&numsp;набережной</h3>
<figure>
  <img src="images/guide-13.jpg" alt="Картины на колоннаде" loading="lazy" />
  <figcaption>Картины на&numsp;колоннаде</figcaption>
</figure>
<p>
  Колоннада&numsp;— архитектурная особенность города. Здесь однажды собрались
  Сухумские художники и&numsp;решили выставлять картины, теперь колоннада&numsp;— бесплатная
  выставка под небом. Если картина понравилась, можете купить. Большинство
  картин&numsp;— натюрморты и&numsp;изображения набережной, но&numsp;есть абстракции и&numsp;портреты.
</p>
<h3>Абхазский государственный музей</h3>
<figure>
  <img src="images/guide-14.jpg" alt="Дольмен" loading="lazy" />
  <figcaption>Дольмен</figcaption>
</figure>
<p>
  В&numsp;Абхазии найдено больше 60&numsp;дольменов и&numsp;один из&numsp;их расположен в&numsp;этом музее.
  Дольмены&numsp;— каменные сооружения из&numsp;пяти плит, с&numsp;которыми связаны легенды.
  Строились они в&numsp;III–II тысячелетиях до&numsp;нашей эры.
</p>
<p>
  В&numsp;музее находятся окаменелости, которые изображают древнюю природу Абхазии 
  и&numsp;предметы культуры людей живших до&numsp;нашей эры и&numsp;в&numsp;нашей эре&numsp;— становится
  понятно, чем занимались люди тогда и&numsp;как они развивались.
</p>
<h3>Сухумский ботанический сад</h3>
<figure>
  <img src="images/guide-15.jpg" alt="Ботанический сад" loading="lazy" />
  <figcaption>Ботанический сад</figcaption>
</figure>
<p>
  Если с&numsp;кухней Вы уже познакомились, культуру и&numsp;историю изучили, пора пойти 
  в&numsp;ботанический сад. В&numsp;саду можно погулять самостоятельно, а&numsp;можно взять билет 
  с&numsp;экскурсией. В&numsp;нем находится растительность из&numsp;Австралии, Южной и&numsp;Северной
  Америки, Африки, Европы и&numsp;Азии.
</p>
<h3>Обезьяний питомник</h3>
<figure>
  <img src="images/guide-16.jpg" alt="Обезьяний питомник" loading="lazy" />
  <figcaption>Обезьяний питомник</figcaption>
</figure>
<p>
  Продолжаем экскурсию по&numsp;природе&numsp;— теперь фауна&numsp;— обезьяний питомник. Чтобы
  попасть в&numsp;питомник, необходимо пройти вершину горы трапеция по&numsp;лестнице. Его создали
  в&numsp;конце 20&numsp;годов прошлого века в&numsp;научных целях&numsp;— ученые хотели исследовать
  жизнь обезьян в&numsp;климатических условиях Сухума и&numsp;Абхазии. Обезьяны хорошо
  прижились, поэтому питомник стал открытым для&numsp;посещения. Здесь живут 300 обезьян.
</p>
