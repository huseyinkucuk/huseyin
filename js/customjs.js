//document ready
$(function(){ 
	$("#solbtn").text("Sonraki renk : " + renkler[0]);
    
    // document ready
    $('.elaman').hide();
    $('.elaman:eq(0)').show();
    $('.elaman:eq(0) img').attr("src", elemanlar[glb_siradakiEleman].resim);
    $('.elaman:eq(0) h3').text(elemanlar[glb_siradakiEleman].baslik);
    $('.elaman:eq(0) p').text(elemanlar[glb_siradakiEleman].yazi);
});

/* -------------------------------------------------NAVBAR----------------------------------- */

 /* ---------------------------------------------- NAVBAR BACROUND BUTTONS ------------------ */
function mavi()
{
	//document.body.style.backgroundColor = "blue";
	//$("body").css("background-color", "blue");
	$("body").css({backgroundColor : "blue"});
}

function beyaz()
{
	$("body").css({backgroundColor : "white"});
}

function green()
{
	$("body").css({backgroundColor : "green"});
}

function red()
{
	$("body").css({backgroundColor: "red"});
}

function gri()
{
    $("body").css({backgroundColor : "gray"});
}

//function renkDegistir(renk)
//{
//    $("body").css({backgroundColor : renk});
//}

/* --------------------------------- AUTO BACKGROUND DEGISTIRME --------------------------------------- */


var renkler=["blue","gray","green","red"];
var sayi=0;
function yaz() 
{   
	$("body").css({backgroundColor:renkler[sayi]});

	var uzunluk=renkler.length;

	if (sayi == uzunluk - 1)
	{
		sayi = 0;
		$("#solbtn").text("Sonraki renk : " + renkler[0]);
	}
	else
	{
		$("#solbtn").text("Sonraki renk : " + renkler[sayi+1]);
		sayi++;
	}
}





/* ------------------------------------------------------------------------------------------- */
//
//$(function mindir () {
//
//        $( "#slideac" ).click(function() 
//        {   
//            function divcikaran () 
//                {
//                    var text="<div>";
//                    for (var i=0; i=kutular.length; i++) { text  }
//
//                }
//
//            $( "#asagikayan" ).slideToggle( "slow" );
//
//            $( "#asagikayan" ).append("");
//
//
//
//        });
//
//
//    });


function toggleSubMenu()
{
    console.log('asdasd');
    $('#subMenu').html("").toggle();
    
    for (var i=0; i < kutular.length; i++)
    {
        var kutu  = "<div class='col-sm-2'>";
                kutu += "<a href='"+kutular[i].link+"'>";
                    kutu += "<div class='thumbnail'>";
                        kutu += "<img src='" + kutular[i].resim + "' />";
                        kutu += "<h4 class='text-center'>"+ kutular[i].yazi +"</h4>";
                    kutu += "</div>";
                kutu += "</a>";
            kutu += "</div>";
        
        
        
        $('#subMenu').append(kutu);
    }
    
    console.log("burda");
}

var kutular = [
    {
        "resim" : "http://lorempixel.com/200/200/animals/1",
        "yazi"  : "Lorem ipsum",
        "link"  : "http://www.google.com"
    },
    {
        "resim" : "http://lorempixel.com/200/200/animals/2",
        "yazi"  : "Dolor sit amet",
        "link"  : "http://www.google.com"
    },
    {
        "resim" : "http://lorempixel.com/200/200/animals/3",
        "yazi"  : "Lorem hede",
        "link"  : "http://www.google.com"
    },
    {
        "resim" : "http://lorempixel.com/200/200/animals/4",
        "yazi"  : "Lorem ipsum dolor",
        "link"  : "http://www.google.com"
    },
    {
        "resim" : "http://lorempixel.com/200/200/animals/5",
        "yazi"  : "Lorem ipsum dolor",
        "link"  : "http://www.google.com"
    },
    {
        "resim" : "http://lorempixel.com/200/200/animals/6",
        "yazi"  : "Lorem ipsum dolor",
        "link"  : "http://www.google.com"
    }
];












/* ------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------- */

/* ----------------------------------------  SLIDER  ----------------------------------------- */
/* --------------------------------------  SLIDER  BUTONLARI --------------------------------- */

var glb_siradakiEleman = 0;

var elemanlar = [
    {
        "resim" : "http://lorempixel.com/1130/300/sports/1",
        "baslik": "Birinci baslik",
        "yazi"  : "Lorem ipsum dolor sit amet, sed ex mazim ponderum. Has elit possim consulatu an, verear saperet ad mei, pro error dicit et. Sea agam aperiri et, his alii deleniti cu. Velit scripta efficiendi nec ex, dicat lucilius cum ea. Alienum dolores per in, his probo blandit patrioque ad. Sea et meis quaeque phaedrum Lorem ipsum dolor sit amet, sed ex mazim ponderum. Has elit possim consulatu an, verear saperet ad mei, pro error dicit et. Sea agam aperiri et, his alii deleniti cu. Velit scripta efficiendi nec ex, dicat lucilius cum ea. Alienum dolores per in, his probo blandit patrioque ad. Sea et meis quaeque phaedrum Lorem ipsum dolor sit amet, sed ex mazim ponderum. Has elit possim consulatu an, verear saperet ad mei, pro error dicit et. Sea agam aperiri et, his alii deleniti cu. Velit scripta efficiendi nec ex, dicat lucilius cum ea. Alienum dolores per in, his probo blandit patrioque ad. Sea et meis quaeque phaedrumId ius laudem civibus blandit, ne per vero referrentur, laoreet omnesque te sed. Sed congue munere laoreet ex, no partem scripta concludaturque eam. Ea autem velit pericula sea, meis saepe mei at, quem sensibus salutatus ut has. Detracto principes mei ad, ponderum sapientem liberavisse et mea, ut maiorum officiis inciderint his. No putant latine pro. Duo ea alia iudicabit elaboraret, sea ei omnes dignissim, mea et graeci persius. Ea vim iriure vivendum, sed vidisse albucius te."
    },
    {
        "resim" : "http://lorempixel.com/1130/300/sports/2",
        "baslik": "Ikinci baslik",
        "yazi"  : "Vel augue utroque mandamus at. No qui maiorum albucius, ei falli pericula eam. Aliquip eruditi salutandi eu vim, ne sea quem tractatos comprehensam, ut inciderint signiferumque duo. Vis wisi disputando cu.Duo utinam audire ad, wisi affert sapientem ad pri. Cum id stet esse, denique probatus eum ad, vel eu tamquam euripidis. Duis illud impetus no pro, sea ne soluta corrumpit. Quo eu dicunt recteque, usu at agam persequeris, mei legere deseruisse ut. In cum quaeque sanctus constituto. Eum et unum corpora, molestie convenire vix an.Id ius laudem civibus blandit, ne per vero referrentur, laoreet omnesque te sed. Sed congue munere laoreet ex, no partem scripta concludaturque eam. Ea autem velit pericula sea, meis saepe mei at, quem sensibus salutatus ut has. Detracto principes mei ad, ponderum sapientem liberavisse et mea, ut maiorum officiis inciderint his. No putant latine pro. Duo ea alia iudicabit elaboraret, sea ei omnes dignissim, mea et graeci persius. Ea vim iriure vivendum, sed vidisse albucius te."
    },
    {
        "resim" : "http://lorempixel.com/1130/300/sports/3",
        "baslik": "Ucuncu baslik",
        "yazi"  : "Eros malorum ius eu. Mea ne oratio intellegat. Ut scripserit conclusionemque duo, sit saperet deseruisse ne. Vel congue ullamcorper ex. Ius quaeque repudiandae ad, ei quod aliquip officiis vel. At pri doctus petentium suscipiantur.Duo utinam audire ad, wisi affert sapientem ad pri. Cum id stet esse, denique probatus eum ad, vel eu tamquam euripidis. Duis illud impetus no pro, sea ne soluta corrumpit. Quo eu dicunt recteque, usu at agam persequeris, mei legere deseruisse ut. In cum quaeque sanctus constituto. Eum et unum corpora, molestie convenire vix an.Id ius laudem civibus blandit, ne per vero referrentur, laoreet omnesque te sed. Sed congue munere laoreet ex, no partem scripta concludaturque eam. Ea autem velit pericula sea, meis saepe mei at, quem sensibus salutatus ut has. Detracto principes mei ad, ponderum sapientem liberavisse et mea, ut maiorum officiis inciderint his. No putant latine pro. Duo ea alia iudicabit elaboraret, sea ei omnes dignissim, mea et graeci persius. Ea vim iriure vivendum, sed vidisse albucius te."
    },
    {
        "resim" : "http://lorempixel.com/1130/300/sports/6",
        "baslik": "Dorduncu baslik",
        "yazi"  : "Lorem ipsum dolor sit amet, vix periculis vituperata ad, vix et offendit neglegentur, singulis urbanitas voluptatum te mea. Usu no altera efficiendi, no hinc ornatus persequeris per, laoreet copiosae consetetur an mel. Regione equidem sea ad, te nemore lucilius dissentiet sea, te vis sonet nemore voluptua. Meis porro integre id eum. Qui ut brute dissentias delicatissimi, laudem inciderint ex has, an sed labore aeterno aliquipHas elit possim consulatu an, verear saperet ad mei, pro error dicit et. Sea agam aperiri et, his alii deleniti cu.Id ius laudem civibus blandit, ne per vero referrentur, laoreet omnesque te sed. Sed congue munere laoreet ex, no partem scripta concludaturque eam. Ea autem velit pericula sea, meis saepe mei at, quem sensibus salutatus ut has. Detracto principes mei ad, ponderum sapientem liberavisse et mea, ut maiorum officiis inciderint his. No putant latine pro. Duo ea alia iudicabit elaboraret, sea ei omnes dignissim, mea et graeci persius. Ea vim iriure vivendum, sed vidisse albucius te."
    },
    {
        "resim" : "http://lorempixel.com/1130/300/sports/5",
        "baslik": "Besinci baslik",
        "yazi"  : "Duo utinam audire ad, wisi affert sapientem ad pri. Cum id stet esse, denique probatus eum ad, vel eu tamquam euripidis. Duis illud impetus no pro, sea ne soluta corrumpit. Quo eu dicunt recteque, usu at agam persequeris, mei legere deseruisse ut. In cum quaeque sanctus constituto. Eum et unum corpora, molestie convenire vix an.Id ius laudem civibus blandit, ne per vero referrentur, laoreet omnesque te sed. Sed congue munere laoreet ex, no partem scripta concludaturque eam. Ea autem velit pericula sea, meis saepe mei at, quem sensibus salutatus ut has. Detracto principes mei ad, ponderum sapientem liberavisse et mea, ut maiorum officiis inciderint his. No putant latine pro. Duo ea alia iudicabit elaboraret, sea ei omnes dignissim, mea et graeci persius. Ea vim iriure vivendum, sed vidisse albucius te.Id ius laudem civibus blandit, ne per vero referrentur, laoreet omnesque te sed. Sed congue munere laoreet ex, no partem scripta concludaturque eam. Ea autem velit pericula sea, meis saepe mei at, quem sensibus salutatus ut has. Detracto principes mei ad, ponderum sapientem liberavisse et mea, ut maiorum officiis inciderint his. No putant latine pro. Duo ea alia iudicabit elaboraret, sea ei omnes dignissim, mea et graeci persius. Ea vim iriure vivendum, sed vidisse albucius te."
    },
];
// arastir : JSON



/* --------------------------------------  SLIDER  SONRAKI BUTONU --------------------------------- */


function sonraki()
{
    $('.elaman').hide();
    if (glb_siradakiEleman == ($('.elaman').length - 1)){
        glb_siradakiEleman = 0;
    }
    else{
        glb_siradakiEleman++;
    }
    
    $('.elaman:eq(' + glb_siradakiEleman + ') img').attr("src", elemanlar[glb_siradakiEleman].resim);
    $('.elaman:eq(' + glb_siradakiEleman + ') h3').text(elemanlar[glb_siradakiEleman].baslik);
    $('.elaman:eq(' + glb_siradakiEleman + ') p').text(elemanlar[glb_siradakiEleman].yazi);
    
    
    $('.elaman:eq(' + glb_siradakiEleman + ')').show();
}



/* -------------------------------------------- SLIDER ONCEKI BUTONU ------------------------------- */




function onceki()
{
    $('.elaman').hide();
    if (glb_siradakiEleman == 0){
        glb_siradakiEleman = ($('.elaman').length - 1);
    }
    else{
        glb_siradakiEleman--;
    }
    
    $('.elaman:eq(' + glb_siradakiEleman + ') img').attr("src", elemanlar[glb_siradakiEleman].resim);
    $('.elaman:eq(' + glb_siradakiEleman + ') h3').text(elemanlar[glb_siradakiEleman].baslik);
    $('.elaman:eq(' + glb_siradakiEleman + ') p').text(elemanlar[glb_siradakiEleman].yazi);
    
    
    $('.elaman:eq(' + glb_siradakiEleman + ')').show();
}


/* ------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------- */

/* -----------------------------------------ICERIK BIR---------------------------------------------- */
/* ----------------------------- ICERIK BIR - RESME TIKLANILDIGINDA -------------------------------- */

$("#icerikbirresim").click(function () {
        if ($('.cikanyazi').length < 1)
        {
            $('#icerikrow').append("<button onclick='geridon()' class='btn btn-danger kapatbtn'>     <span class='glyphicon glyphicon glyphicon-remove' aria-hidden='true'></span><span></span>                  </button><div class='col-sm-8 cikanyazi'></div>");        
        }
        
    
        var mytext = 'Lorem ipsum dolor sit amet, sed ex mazim ponderum. Has elit possim consulatu an, verear saperet ad mei, pro error dicit et. Sea agam aperiri et, his alii deleniti cu. Velit scripta efficiendi nec ex, dicat lucilius cum ea. Alienum dolores per in, his probo blandit patrioque ad. Sea et meis quaeque phaedrum Lorem ipsum dolor sit amet, sed ex mazim ponderum. Has elit possim consulatu an, verear saperet ad mei, pro error dicit et. Sea agam aperiri et, his alii deleniti cu. Velit scripta efficiendi nec ex, dicat lucilius cum ea. Alienum dolores per in, his probo blandit patrioque ad. Sea et meis quaeque phaedrum Lorem ipsum dolor sit amet, sed ex mazim ponderum. Has elit possim consulatu an, verear saperet ad mei, pro error dicit et. Sea agam aperiri et, his alii deleniti cu. Velit scripta efficiendi nec ex, dicat lucilius cum ea. Alienum dolores per in, his probo blandit patrioque ad. Sea et meis quaeque phaedrumId ius laudem civibus blandit, ne per vero referrentur, laoreet omnesque te sed. Sed congue munere laoreet ex, no partem scripta concludaturque eam. Ea autem velit pericula sea, meis saepe mei at, quem sensibus salutatus ut has. Detracto principes mei ad, ponderum sapientem liberavisse et mea, ut maiorum officiis inciderint his. No putant latine pro. Duo ea alia iudicabit elaboraret, sea ei omnes dignissim, mea et graeci persius. Ea vim iriure vivendum, sed vidisse albucius te.';
    
        $('.cikanyazi').text(mytext).show();
        
        $("#diviki").hide();
        $("#divuc").hide();
        $(".kapatbtn").show(); 


    }
);




$("#icerikikiresim").click(function () {
        if ($('.cikanyazi').length < 1)
        {
            $('#icerikrow').append("<button onclick='geridon()' class='btn btn-danger kapatbtn'> <span class='glyphicon glyphicon glyphicon-remove' aria-hidden='true'></span><span ></span></button>          <div class='col-sm-8 cikanyazi'></div>");        
        }

        var mytext = 'Lorem ipsum dolor sit amet, sed ex mazim ponderum. Has elit possim consulatu an, verear saperet ad mei, pro error dicit et. Sea agam aperiri et, his alii deleniti cu. Velit scripta efficiendi nec ex, dicat lucilius cum ea. Alienum dolores per in, his probo blandit patrioque ad. Sea et meis quaeque phaedrum Lorem ipsum dolor sit amet, sed ex mazim ponderum. Has elit possim consulatu an, verear saperet ad mei, pro error dicit et. Sea agam aperiri et, his alii deleniti cu. Velit scripta efficiendi nec ex, dicat lucilius cum ea. Alienum dolores per in, his probo blandit patrioque ad. Sea et meis quaeque phaedrum Lorem ipsum dolor sit amet, sed ex mazim ponderum. Has elit possim consulatu an, verear saperet ad mei, pro error dicit et. Sea agam aperiri et, his alii deleniti cu. Velit scripta efficiendi nec ex, dicat lucilius cum ea. Alienum dolores per in, his probo blandit patrioque ad. Sea et meis quaeque phaedrumId ius laudem civibus blandit, ne per vero referrentur, laoreet omnesque te sed. Sed congue munere laoreet ex, no partem scripta concludaturque eam. Ea autem velit pericula sea, meis saepe mei at, quem sensibus salutatus ut has. Detracto principes mei ad, ponderum sapientem liberavisse et mea, ut maiorum officiis inciderint his. No putant latine pro. Duo ea alia iudicabit elaboraret, sea ei omnes dignissim, mea et graeci persius. Ea vim iriure vivendum, sed vidisse albucius te.';

        $('.cikanyazi').text(mytext).show();

        $("#divbir").hide();
        $("#divuc").hide();
        $(".kapatbtn").show(); 


    }

);


$("#icerikucresim").click(function () {
        if ($('.cikanyazi').length < 1)
        {
            $('#icerikrow').append("<button onclick='geridon()' class='btn btn-danger kapatbtn'> <span class='glyphicon glyphicon glyphicon-remove' aria-hidden='true'></span><span></span></button>   <div class='col-sm-8 cikanyazi'></div>");        
        }

        var mytext = 'Lorem ipsum dolor sit amet, sed ex mazim ponderum. Has elit possim consulatu an, verear saperet ad mei, pro error dicit et. Sea agam aperiri et, his alii deleniti cu. Velit scripta efficiendi nec ex, dicat lucilius cum ea. Alienum dolores per in, his probo blandit patrioque ad. Sea et meis quaeque phaedrum Lorem ipsum dolor sit amet, sed ex mazim ponderum. Has elit possim consulatu an, verear saperet ad mei, pro error dicit et. Sea agam aperiri et, his alii deleniti cu. Velit scripta efficiendi nec ex, dicat lucilius cum ea. Alienum dolores per in, his probo blandit patrioque ad. Sea et meis quaeque phaedrum Lorem ipsum dolor sit amet, sed ex mazim ponderum. Has elit possim consulatu an, verear saperet ad mei, pro error dicit et. Sea agam aperiri et, his alii deleniti cu. Velit scripta efficiendi nec ex, dicat lucilius cum ea. Alienum dolores per in, his probo blandit patrioque ad. Sea et meis quaeque phaedrumId ius laudem civibus blandit, ne per vero referrentur, laoreet omnesque te sed. Sed congue munere laoreet ex, no partem scripta concludaturque eam. Ea autem velit pericula sea, meis saepe mei at, quem sensibus salutatus ut has. Detracto principes mei ad, ponderum sapientem liberavisse et mea, ut maiorum officiis inciderint his. No putant latine pro. Duo ea alia iudicabit elaboraret, sea ei omnes dignissim, mea et graeci persius. Ea vim iriure vivendum, sed vidisse albucius te.';

        $('.cikanyazi').text(mytext).show();

        $("#divbir").hide();
        $("#diviki").hide();
        $(".kapatbtn").show(); 

    }

);

/* ---------------------------------------- ICERIK BIR - kapat ----------------------------------------------- */


function geridon () 
{
    $(".cikanyazi").hide();
    $(".kapatbtn").hide();   
    $("#diviki, #divuc, #divbir").show();

}


/* ---------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------- */









