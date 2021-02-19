const _js_feature_content = $('.js-feature-content');

const _features = [{
        "ntitle": "Cập nhật 1: Cập nhật UI",
        "ntext": "Officia deserunt excepteur est et nisi sint. Esse cillum non dolor ex voluptate est elit ad. Velit culpa exercitation eu velit enim exercitation. Aute nisi ipsum officia quis commodo commodo ea.\nExcepteur id nisi est enim ipsum adipisicing cupidatat eiusmod dolor cupidatat enim commodo cillum esse. Sit laboris enim esse adipisicing proident officia elit.",
        "nimg": "./images/features/img_fea_0.webp",
        "ncap": "263 Highland Avenue"
    }, {
        "ntitle": "Hello, Kennedy! You have 10 unread messages.",
        "ntext": "Ex quis dolor irure nostrud cupidatat pariatur dolor. Fugiat enim eu nisi qui incididunt mollit veniam eu consequat anim est.\nNostrud ex duis commodo laboris irure adipisicing esse cupidatat.\nConsectetur laborum sunt velit minim qui culpa. Duis esse esse mollit irure. Consectetur irure laborum cillum anim velit voluptate.\nDeserunt duis culpa id Lorem tempor in consectetur cillum veniam est.",
        "nimg": "./images/features/img_fea_1.webp",
        "ncap": "734 Colin Place"
    }, {
        "ntitle": "Hello, Joann! You have 7 unread messages.",
        "ntext": "Quis esse reprehenderit aliqua consectetur consequat exercitation eu. Irure magna adipisicing reprehenderit laborum elit sint laborum enim veniam ex duis.\nOccaecat magna non id dolore anim aute dolor culpa quis exercitation. Aute non duis deserunt duis Lorem non deserunt et officia labore nulla. Reprehenderit Lorem ad cupidatat non adipisicing do do in culpa.",
        "nimg": "./images/features/img_fea_2.webp",
        "ncap": "585 Hubbard Place"
    },
    {
        "ntitle": "Hello, Sophia! You have 10 unread messages.",
        "ntext": "Lorem mollit officia proident esse aliqua magna culpa eu sunt sit laboris reprehenderit anim.\nAnim do fugiat fugiat irure anim velit enim consectetur consequat laborum in.\n- Sunt minim duis 1.\n- Sunt minim duis 2.\n- Sunt minim duis 3.\n- Sunt minim duis 4.\nId cupidatat sint culpa pariatur officia ex. Exercitation in mollit consectetur in.",
        "nimg": "./images/features/img_fea_3.webp",
        "ncap": "883 Bergen Place"
    },
];

$.each(_features, function (a, b) {
    let _ntitle = b.ntitle;
    let _ntext = b.ntext.replace(/(\n)/g, '<br />');
    let _nimg = b.nimg;
    let _ncap = b.ncap;
    let html = feature_box(_ntitle, _ntext, _nimg, _ncap);
    console.log(a, b);
    _js_feature_content.append(html);
})
// let _x = _news[0].text.replace(/(\n)/g, '<br />');
{
    /*
         <div class="left-block">
            <h4 class="news__heading">
                Gặp gỡ bạn bè
            </h4>
            <p class="feature__text">
                asdasd
            </p>
        </div>
        <div class="right-block">
            <figure class="">
                <img src="" alt="" class="">
                <figcaption>asd</figcaption>
            </figure>
        </div>
    */
}

function feature_box(a, b, c, d) {
    let html = '';
    html += '<div class="feature__content"><div class="left-block"><h4 class="feature__heading">';
    html += a;
    html += '</h4>';
    html += '<p class="feature__text">';
    html += b;
    html += '</p></div>';
    html += '<div class="right-block"><figure class=""><img src="';
    html += c;
    html += '" alt="" class=""><figcaption>';
    html += d;
    html += '</figcaption></figure></div></div>';
    return html;
}