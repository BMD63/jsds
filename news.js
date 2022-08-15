const paragraph=document.getElementsByClassName("postCont");
let texts = [`<p>Ещё раз.
Для дизайна интерьера требуется:
<ul>
        <li>обмерочный план (делается самостоятельно или с помощью приглашенного)</li>
        <li>фотофиксация (тут как чукча, что вижу, то и фотографирую)</li>
        <li>техзадание (можно самостоятельно заполнить шаблон или с помощью 
            проектировщика по телефону, в формате вопрос - ответ)</li>
    </ul>
Для проектирования здания требуется:
<ul>
        <li>план границ земельного участка в электронном виде. (Топография и 
            геология если есть, то вообще всё волшебно)</li>
        <li>техзадание. Тоже можно самостоятельно или по телефону.</li>
    </ul>
Но если вдруг вы всё же старовер и нуждетесь посмотреть мне в глаза...
Ну ОК, я же не против. С вас билеты туда и обратно! 
И до встречи в любой точке земного шара ) <br> 
</p> `,
`<p>... и так далее... . К сожалению подобные отклики я слышу довольно 
часто о дизайнерах. И лично мне каждый раз становится неловко. 
Возьмусь предположить, что этим страдают преимущественно дизайнеры, 
но не стану ручаться. Даже архитектор, несмотря на то, что учится 
своей специальности 6 лет и в список предметов в обучении, кроме 
профильных, включены еще и такие, как - философия, деловая этика, 
политология, культурология, психология ... даже это не спасает от 
пресловутого "человеческого фактора".

Как-то я была на семинаре для дизайнеров и вот там-то, от лектора, 
я услышала фразу (не дословно) - "Не ведитесь на желания заказчика! 
Вы должны вашему заказчику предложить лучшее, чем он сам надеялся получить". 
Далее следовали лозунги типа "выращивать уровень развития заказчика" и т.д. 
Сам по себе посыл был абсолютно положительным. Но в реальной жизни, 
к сожалению, автор дизайна, зачастую апеллируя громкими специализированными 
цитатами пытается убедить заказчика в том, что именно он/она хочет, 
и не проявляет умения слышать заказчика.

Так где граница между "сделать лучшее" и "сделать совсем не то"? 
Если заказчик хочет, допустим, максимально свободную планировку, 
встроенную мебель и простые геометрические формы, а дизайнер уверяет, 
что - "Арт-Деко это ультрамодно и вам обязательно нужно люстру со Сваровски...", 
кто же тут прав? 
Да что там говорить, я сама в моих этапах взросления перебиралась от 
минимализма к шеби-шику и от лофта к арт-деко. И никогда не скажу, 
что какой-то из этих стилей плох. Они не плохи. Но они разные. 
Нельзя человеку, которому комфортно ходить в мягких тапках по пушистому 
ковру, всучивать плитку "под бетон" или "под металл". 
Моя бывшая свекровь никогда бы не чувствовала себя комфортно в интерьере, 
где нет мебели из натурального дерева. И это не об устаревших взглядах. 
Это о комфортной среде.

Но я могу дать пару рецептов, которые вас могут спасти. 
На самом деле всё невероятно просто. Я очень советую всем заказчикам 
архитектурных и дизайн-проектов, во-первых - тщательно составлять 
тех.задание и не подписывать договор без тех.задания. 
Помните - это ваша страховка и ваша гарантия. 
В тех.задании можно прописать название стиля или просто вложить картинки примеров. 
А во-вторых - дробить весь процесс на этапы с поэтапной оплатой. 
Эти два пункта - это ваши "щит и меч".

Не бойтесь ваших желаний! Они могут осуществиться! <br> 
</p>`,
`<p>
<ul>
<li>
перечень необходимых и приоритетных требований, для меня (у каждого они свои)
</li>
<li>
географическое размещение искомого объекта (номер два по нумерации, но не по важности)
</li>
<li>
требования, которые важны, но ими можно пренебречь, 
в пользу пункта номер один, если потребуется.
</li>
</ul>
В первом пункте (раз уж я архитектор), безусловно - возможность 
перепланировки и ремонта в соответствии с моими личными 
требованиями к функциональности, эргономике и эстетике пространства. 
Поэтому каждую квартиру, которую мне показывает риэлтор, я прощупываю и
 прорисовываю, прежде чем сказать своё "фи". Я художник и я так вижу. 
 И как я удивляюсь/расстраиваюсь всякий раз, когда мой заказчик приводит 
 меня на объект, рассказывает свои восторженные хотелки, 
 на которые безусловно имеет полное право, а я потом, как ножом по ... 
 разочарованно отрезвляю словами - "Вы понимаете, тут это невозможно" ... . 
Грусть и печаль. 
И вот я думаю, а что если ради воплощения ваших мечт, 
предложить услугу типа: "Предпокупный анализ жилья на соответствие 
с желаемым", как думаете?
Кстати, поверьте, это не то, чтобы реклама. Не думаю, что такая 
услуга может оцениваться дорого, скорее это попытка помочь и 
предупредить разочарование, которое в наших реалиях выливается в миллионы ...<br> 
</p>`]
function showParagr(number){
    console.log('click');
    paragraph[number].innerHTML=texts[number]+`<a class="post" onclick="hideParagr(`+number+`)"><em>Свернуть...</em></a>`;
    console.log(texts[number])
}
function hideParagr(number){
    paragraph[number].innerHTML=`<a class="post" onclick="showParagr(`+number+`)"><em>Читать далее...</em></a>`
}