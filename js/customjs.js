 function mavi()
{
	//document.body.style.backgroundColor = "blue";
	//$("body").css("background-color", "blue");
	$("body").css({backgroundColor : "blue"});
}

function yellow()
{
	$("body").css({backgroundColor : "yellow"});
}

function green()
{
	$("body").css({backgroundColor : "green"});
}

function red()
{
	$("body").css({backgroundColor: "red"});
}


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

$(function(){
	$("#solbtn").text("Sonraki renk : " + renkler[0]);

});

/* --------------------------------------  SLIDER --------------------------------- */


$(function(){
    // document ready
    $('.elaman').hide();
    $('.elaman:eq(0)').show();
    $('.elaman:eq(0) img').attr("src", elemanlar[glb_siradakiEleman].resim);
    $('.elaman:eq(0) h3').text(elemanlar[glb_siradakiEleman].baslik);
    $('.elaman:eq(0) p').text(elemanlar[glb_siradakiEleman].yazi);
});

var glb_siradakiEleman = 0;

var elemanlar = [
    {
        "resim" : "http://lorempixel.com/1130/300/sports/1",
        "baslik": "Birinci baslik",
        "yazi"  : "Lorem ipsum dolor sit amet.. 111"
    },
    {
        "resim" : "http://lorempixel.com/1130/300/sports/2",
        "baslik": "Ikinci baslik",
        "yazi"  : "Lorem ipsum dolor sit amet.. 22"
    },
    {
        "resim" : "http://lorempixel.com/1130/300/sports/3",
        "baslik": "Ucuncu baslik",
        "yazi"  : "Lorem ipsum dolor sit amet.. 33"
    },
    {
        "resim" : "http://lorempixel.com/1130/300/sports/6",
        "baslik": "Dorduncu baslik",
        "yazi"  : "Lorem ipsum dolor sit amet.. 44"
    },
    {
        "resim" : "http://lorempixel.com/1130/300/sports/5",
        "baslik": "Besinci baslik",
        "yazi"  : "Lorem ipsum dolor sit amet.. 55"
    },
];
// arastir : JSON






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



/* -------------------------------------------- GERI BUTONU --------------------------- */




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





