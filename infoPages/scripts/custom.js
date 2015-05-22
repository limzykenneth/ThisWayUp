$(document).ready(function(){
    var list1 = "", 
        list2 = "", 
        list3 = "", 
        list4 = "";

    var studentNames = [
        'Adam Willis',
        'Adhiraj Singh',
        'Aisha A Olatokunbo Tijani',
        'Amy Chau',
        'Amy Louise Elms',
        'Angele T A M Delajoux',
        'Anh Thu Dam',
        'Atikhun Jansanjai',
        'Barnaby Pau Jury Morgan',
        'Benjamin Ezekiel Sing',
        '<a href="http://www.chweetan.com" target="_blank">ChinHwee Tan</a>',
        'Claire Ann Köster',
        'Clara Alicia Metter',
        'Connor Daly',
        'Eftal Soral',
        'Emilien Malo Rabin',
        'Emily Schofield',
        'Gaetan Bernede',
        'Gautam Tankaria',
        'Georgia Cranstoun',
        'Hannah Nightingale',
        'Harriet Patricia Wade',
        'Ho Yiu Frankie Leung',
        '<a href="http://hortensesells.tumblr.com" target="_blank">Hortense Franc</a>',
        'Isobel Ann Lily Orton',
        'Jack William James Smith',
        'Jasmine Kurino',
        'Jillian Ostek',
        'Jiwon Song (Sophia)',
        'John Cubillan',
        '<a href="jordan-devos.com" target="_blank">Jordan DeVos</a>',
        '<a href="jordanwoodage.com" target="_blank">Jordan Woodage</a>',
        'Joshua James Smith',
        'Kateryna Kotikhina',
        'Katie Lambe',
        'Ke Fan',
        'Kerry McGranaghan',
        'Lara Bashar Arafeh',
        'Lars Hoie',
        'Liisa Roll',
        'Louisa Luk',
        'Louise Carolina Dyhrfort',
        'Luying Xu',
        'Melissa Zee',
        'Michael Sierra',
        'Mika Hosono',
        'Natalie Patricia Preston',
        'Navjot Singh Chana',
        'Nikki Johanna Ritmeijer',
        'Oi Kei Elky Li',
        'Olga Bagaeva',
        'Olga Carpenco',
        'Philippine M C Sohet',
        'Pui Sang Wu',
        'Rafael Bruni De Lima',
        'Raymond Hui',
        '<a href="http://www.rebeccabartola.com" target="_blank">Rebecca Bartola</a>',
        'Rebecca Lardeur',
        'Satoko Furusawa',
        'Sean Wei Jun Song',
        'Shannon Swinburn',
        '<a href="http://www.amandachoy.com" target="_blank">Shiau Hui Choy, Amanda</a>',
        'Stephanie Nadine Kaiser',
        'Su Jung Choi',
        'Ta-Chun Hung',
        'Tatiana Ermolaeva',
        'Theo Bernard',
        '<a href="http://theresecappelen.com" target="_blank">Therese Cappelen</a>',
        'Varvara Zelenko',
        'Vorathap Kiathapkajon',
        'Xinxin Zheng',
        'Yangzi Wang',
        'Yi Lin Kezia Kong',
        'Yi-Hsuan Chen',
        'Yuli Serfaty',
        '<a href="http://designerken.be/designing/" target="_blank">Kenneth Lim</a>'];

    for(i=0; i<19; i++){
            list1 = list1 + "<div>" + studentNames[i] + "</div>";
            list2 = list2 + "<div>" + studentNames[i+19] + "</div>";
            list3 = list3 + "<div>" + studentNames[i+38] + "</div>";
            list4 = list4 + "<div>" + studentNames[i+57] + "</div>";
    }
    $("#page-content1 #nameList1").html(list1);
    $("#page-content2 #nameList2").html(list2);
    $("#page-content2 #nameList3").html(list3);
    $("#page-content1 #nameList4").html(list4);

    var anglesNow = 0;
    $(window).click(function(e){
        // caching the object for performance reasons
        var $elem = $('.page-content');

        // we use a pseudo object for the animation
        // (starts from `0` to `angle`), you can name it as you want
        $({deg: anglesNow}).animate({deg: anglesNow+90}, {
            duration: 500,
            step: function(now) {
                // in the step-callback (that is fired each step of the animation),
                // you can use the `now` paramter which contains the current
                // animation-position (`0` up to `angle`)
                $elem.css({
                     transform: 'rotate(' + now + 'deg)'
                });
            }
        });
        anglesNow=anglesNow+90;
     });
});