const _js_news_content = $('.js-news-content');

const _news = [{
        "ntitle": "Cập nhật 1: Cập nhật UI",
        "nauthor": "Harmon Riley",
        "ndate": "Saturday, May 12, 2018 8:44 PM",
        "ntext": "Officia deserunt excepteur est et nisi sint. Esse cillum non dolor ex voluptate est elit ad. Velit culpa exercitation eu velit enim exercitation. Aute nisi ipsum officia quis commodo commodo ea.\nExcepteur id nisi est enim ipsum adipisicing cupidatat eiusmod dolor cupidatat enim commodo cillum esse. Sit laboris enim esse adipisicing proident officia elit.",
    }, {
        "ntitle": "Hello, Kennedy! You have 10 unread messages.",
        "nauthor": "Boyle Mcfarland",
        "ndate": "Saturday, August 13, 2016 6:47 AM",
        "ntext": "Ex quis dolor irure nostrud cupidatat pariatur dolor. Fugiat enim eu nisi qui incididunt mollit veniam eu consequat anim est.\nNostrud ex duis commodo laboris irure adipisicing esse cupidatat.\nConsectetur laborum sunt velit minim qui culpa. Duis esse esse mollit irure. Consectetur irure laborum cillum anim velit voluptate.\nDeserunt duis culpa id Lorem tempor in consectetur cillum veniam est.",
    }, {
        "ntitle": "Hello, Joann! You have 7 unread messages.",
        "nauthor": "Boyle Mcfarland",
        "ndate": "Tuesday, August 18, 2020 10:23 PM",
        "ntext": "Quis esse reprehenderit aliqua consectetur consequat exercitation eu. Irure magna adipisicing reprehenderit laborum elit sint laborum enim veniam ex duis.\nOccaecat magna non id dolore anim aute dolor culpa quis exercitation. Aute non duis deserunt duis Lorem non deserunt et officia labore nulla. Reprehenderit Lorem ad cupidatat non adipisicing do do in culpa.",

    },
    {
        "ntitle": "Hello, Sophia! You have 10 unread messages.",
        "nauthor": "Luann Scott",
        "ndate": "Friday, February 12, 2016 9:00 PM",
        "ntext": "Lorem mollit officia proident esse aliqua magna culpa eu sunt sit laboris reprehenderit anim.\nAnim do fugiat fugiat irure anim velit enim consectetur consequat laborum in.\n- Sunt minim duis 1.\n- Sunt minim duis 2.\n- Sunt minim duis 3.\n- Sunt minim duis 4.\nId cupidatat sint culpa pariatur officia ex. Exercitation in mollit consectetur in.",
    },
    {
        "ntitle": "this is titlte",
        "nauthor": "Luann Scott",
        "ndate": "Thursday, June 1, 2017 7:46 AM",
        "ntext": "Quis esse reprehenderit aliqua consectetur consequat exercitation eu. Irure magna adipisicing reprehenderit laborum elit sint laborum enim veniam ex duis.\nOccaecat magna non id dolore anim aute dolor culpa quis exercitation. Aute non duis deserunt duis Lorem non deserunt et officia labore nulla. Reprehenderit Lorem ad cupidatat non adipisicing do do in culpa.",
    }
]; {
    /* <div class="news__box">
        <div class="news__title">
        </div>
        <div class="news__date">

        </div>
        <div class="news__content">

        </div>
    </div> */
}
$.each(_news, function (a, b) {
    let _ntitle = b.ntitle;
    let _nauthor = b.nauthor;
    let _ndate = b.ndate;
    let _ntext = b.ntext.replace(/(\n)/g, '<br />');
    let html = news_box(_ntitle, _nauthor, _ndate, _ntext);
    console.log(a, b);
    _js_news_content.append(html);
})
// let _x = _news[0].text.replace(/(\n)/g, '<br />');
// 

function news_box(a, b, c, d) {
    let html = '';
    html += '<div class="news__box"><div class="news-text news__title">';
    html += a;
    html += '</div>';
    html += '<div class="news-text news__author">';
    html += b;
    html += '</div>';
    html += '<div class="news-text news__date">';
    html += c;
    html += '</div>';
    html += '<div class="news-text news__content">';
    html += d;
    html += '</div></div>';
    return html;
}