window.onload = function () {
    var shopping = document.querySelector('.shopping');
    var shoppingA = document.querySelector('.fa');
    var shoppingI = document.querySelector('.shopping a');
    var Cart = document.querySelector('.Cart');
    var mouse = document.querySelector('.mouse');
    var fContent = document.querySelector('.s-content');
    var InputA = document.querySelector('.s-content input');
    var InputB = document.querySelector('.s-content .bInput');
    var searchText = document.querySelector('.search-text');
    var search = document.querySelector('.search');
    var searchSpan = document.querySelector('.search span');
    var miProduct = document.querySelector('.A');
    var miProductB = document.querySelector('.B');
    var miProductC = document.querySelector('.C');
    var miProductD = document.querySelector('.D');
    var miProductE = document.querySelector('.E');
    var miProductF = document.querySelector('.F');
    var miProductG = document.querySelector('.G');
    var miProductH = document.querySelector('.H');
    var phoneNew = document.querySelector('.phoneNew');
    var phoneNewA = document.querySelector('.phoneNewA');
    var phoneNewB = document.querySelector('.phoneNewB');
    var phoneNewC = document.querySelector('.phoneNewC');
    var phoneNewD = document.querySelector('.phoneNewD');
    var phoneNewE = document.querySelector('.phoneNewE');
    var phoneNewF = document.querySelector('.phoneNewF');
    var phoneNewG = document.querySelector('.phoneNewG');


    shopping.onmouseover = function () {
        Cart.style.transition = 'all .5s';
        Cart.style.height = '97px';
        shoppingA.style.color = '#ff6700';
        shoppingI.style.color = '#ff6700';
        Cart.style.opacity = '1';
        Cart.style.zIndex = '30';
    };
    mouse.onmouseout = function () {
        Cart.style.opacity = '0';
        Cart.style.transition = 'all .5s';
        Cart.style.height = '0';
        Cart.style.zIndex = '0';
        shoppingA.style.color = '#b0b0b0';
        shoppingI.style.color = '#b0b0b0';

    };
    fContent.onclick = function () {
        searchText.style.zIndex = '30';
        searchText.style.height = '310px';
        searchText.style.opacity = '1';
        searchText.style.transition = 'all .3s';
        search.style.borderColor = '#ff6700';
        searchSpan.style.borderColor = '#ff6700';
        InputA.style.display = 'none';
        InputB.style.display = 'none';
    };
    fContent.onblur = function () {
        searchText.style.zIndex = '0';
        searchText.style.height = '0';
        searchText.style.opacity = '0';
        searchText.style.transition = 'all .3s';
        search.style.borderColor = '#757575';
        searchSpan.style.borderColor = '#757575';
        InputA.style.display = 'inline-block';
        InputB.style.display = 'inline-block';
        };
        miProduct.onmouseover = function () {
        phoneNew.style.height = '230px';
        phoneNew.style.opacity = '1';
        phoneNew.style.zIndex = '30';
        };
        miProduct.onmouseout = function () {
        phoneNew.style.height = '0';
        phoneNew.style.opacity = '0';
        phoneNew.style.zIndex = '0';
        };
        miProductB.onmouseover = function () {
            phoneNewA.style.height = '230px';
            phoneNewA.style.opacity = '1';
            phoneNewA.style.zIndex = '30';
        };
        miProductB.onmouseout = function () {
        phoneNewA.style.height = '0';
        phoneNewA.style.opacity = '0';
        phoneNewA.style.zIndex = '0';
    };
    miProductC.onmouseover = function () {
        phoneNewB.style.height = '230px';
        phoneNewB.style.opacity = '1';
        phoneNewB.style.zIndex = '30';
    };
    miProductC.onmouseout = function () {
        phoneNewB.style.height = '0';
        phoneNewB.style.opacity = '0';
        phoneNewB.style.zIndex = '0';
    };
    miProductD.onmouseover = function () {
        phoneNewC.style.height = '230px';
        phoneNewC.style.opacity = '1';
        phoneNewC.style.zIndex = '30';
    };
    miProductD.onmouseout = function () {
        phoneNewC.style.height = '0';
        phoneNewC.style.opacity = '0';
        phoneNewC.style.zIndex = '0';
    };
    miProductE.onmouseover = function () {
        phoneNewD.style.height = '230px';
        phoneNewD.style.opacity = '1';
        phoneNewD.style.zIndex = '30';
    };
    miProductE.onmouseout = function () {
        phoneNewD.style.height = '0';
        phoneNewD.style.opacity = '0';
        phoneNewD.style.zIndex = '0';
    };
    miProductF.onmouseover = function () {
        phoneNewE.style.height = '230px';
        phoneNewE.style.opacity = '1';
        phoneNewE.style.zIndex = '30';
    };
    miProductF.onmouseout = function () {
        phoneNewE.style.height = '0';
        phoneNewE.style.opacity = '0';
        phoneNewE.style.zIndex = '0';
    };
    miProductG.onmouseover = function () {
        phoneNewF.style.height = '230px';
        phoneNewF.style.opacity = '1';
        phoneNewF.style.zIndex = '30';
    };
    miProductG.onmouseout = function () {
        phoneNewF.style.height = '0';
        phoneNewF.style.opacity = '0';
        phoneNewF.style.zIndex = '0';
    };
    miProductH.onmouseover = function () {
        phoneNewG.style.height = '230px';
        phoneNewG.style.opacity = '1';
        phoneNewG.style.zIndex = '30';
    };
    miProductH.onmouseout = function () {
        phoneNewG.style.height = '0';
        phoneNewG.style.opacity = '0';
        phoneNewG.style.zIndex = '0';
    };
    /*********************************main********************************/
    function autoplay(){
        ++index;
        if(index >= length){
            index = 0;
        }
        update(index)
    }
    function update(num){
        for(var j=0;j<length;j++){
            bLi[j].style.display = 'none';
            nLi[j].className = '';
        }
        bLi[num].style.display = 'block';
        nLi[num].className = 'active';
    }
    var bLi = document.querySelectorAll('.banner li');
    var nLi = document.querySelectorAll('.number li');
    var right = document.querySelector('.click .right');
    var left = document.querySelector('.click .left');
    var length = nLi.length;
    var timer = null;
    var index = 0;
    timer = setInterval(autoplay,2000);
    for(var i=0;i<length;i++){
        nLi[i].index = i;
        nLi[i].onclick = function(){
            clearInterval(timer);
            index = this.index;
            update(this.index);
        };

        nLi[i].onmouseout = function(){
            timer = setInterval(autoplay,2000);
        }
    }
/************************************************************************/
    var asideLi = document.querySelector('.aside li');
    var asideLiA = document.querySelector('.Ali');
    var asideLiB = document.querySelector('.Bli');
    var asideLiC = document.querySelector('.Cli');
    var asideLiD = document.querySelector('.Dli');
    var asideLiE = document.querySelector('.Eli');
    var asideLiF = document.querySelector('.Fli');
    var asideLiG = document.querySelector('.Gli');
    var asideLiH = document.querySelector('.Hli');
    var asideLiI = document.querySelector('.Ili');
    var bigBox = document.querySelector('.BigBox');
    var bigBoxA = document.querySelector('.BigBoxA');
    var bigBoxB = document.querySelector('.BigBoxB');
    var bigBoxC = document.querySelector('.BigBoxC');
    var bigBoxD = document.querySelector('.BigBoxD');
    var bigBoxE = document.querySelector('.BigBoxE');
    var bigBoxF = document.querySelector('.BigBoxF');
    var bigBoxG = document.querySelector('.BigBoxG');
    var bigBoxH = document.querySelector('.BigBoxH');
    var bigBoxI = document.querySelector('.BigBoxI');

    asideLi.onmouseover = function () {
        bigBox.style.opacity = '1';
    };
    asideLi.onmouseout = function () {
        bigBox.style.opacity = '0';
    };
    asideLiA.onmouseover = function () {
        bigBoxA.style.opacity = '1';
    };
    asideLiA.onmouseout = function () {
        bigBoxA.style.opacity = '0';
    };
    asideLiB.onmouseover = function () {
        bigBoxB.style.opacity = '1';
    };
    asideLiB.onmouseout = function () {
        bigBoxB.style.opacity = '0';
    };
    asideLiC.onmouseover = function () {
        bigBoxC.style.opacity = '1';
    };
    asideLiC.onmouseout = function () {
        bigBoxC.style.opacity = '0';
    };
    asideLiD.onmouseover = function () {
        bigBoxD.style.opacity = '1';
    };
    asideLiD.onmouseout = function () {
        bigBoxD.style.opacity = '0';
    };
    asideLiE.onmouseover = function () {
        bigBoxE.style.opacity = '1';
    };
    asideLiE.onmouseout = function () {
        bigBoxE.style.opacity = '0';
    };
    asideLiF.onmouseover = function () {
        bigBoxF.style.opacity = '1';
    };
    asideLiF.onmouseout = function () {
        bigBoxF.style.opacity = '0';
    };
    asideLiG.onmouseover = function () {
        bigBoxG.style.opacity = '1';
    };
    asideLiG.onmouseout = function () {
        bigBoxG.style.opacity = '0';
    };
    asideLiH.onmouseover = function () {
        bigBoxH.style.opacity = '1';
    };
    asideLiH.onmouseout = function () {
        bigBoxH.style.opacity = '0';
    };
    asideLiI.onmouseover = function () {
        bigBoxI.style.opacity = '1';
    };
    asideLiI.onmouseout = function () {
        bigBoxI.style.opacity = '0';
    };
    var ppp = document.querySelector('.ffLi');
    var aali = document.querySelector('.aaLi');
    var bbli = document.querySelector('.bbLi');
    var ccli = document.querySelector('.ccLi');
    var ddli = document.querySelector('.ddLi');
    var eeli = document.querySelector('.eeLi');
    var ggli = document.querySelector('.ggLi');
    var hhli = document.querySelector('.hhLi');
    var iili = document.querySelector('.iiLi');
    var kkli = document.querySelector('.kkLi');
    var jjli = document.querySelector('.jjLi');
    var llli = document.querySelector('.llLi');
    var mmli = document.querySelector('.mmLi');
    var nnli = document.querySelector('.nnli');
    var ooli = document.querySelector('.ooli');
    var ppli = document.querySelector('.ppli');
    var qqli = document.querySelector('.qqli');
    var rrli = document.querySelector('.rrli');
    var ssli = document.querySelector('.ssli');
    var ttli = document.querySelector('.ttli');
    var uuli = document.querySelector('.uuli');
    var vvli = document.querySelector('.vvli');
    var wwli = document.querySelector('.wwli');
    var xxli = document.querySelector('.xxli');
    var yyli = document.querySelector('.yyli');
    var zzli = document.querySelector('.zzli');
    var abli = document.querySelector('.abli');
    var acli = document.querySelector('.acli');
    var adli = document.querySelector('.adli');
    var aeli = document.querySelector('.aeli');
    var afli = document.querySelector('.afli');
    var agli = document.querySelector('.agli');
    var ahli = document.querySelector('.ahli');
    var aili = document.querySelector('.aili');
    var aapopping = document.querySelector('.aapopping');
    var bbpopping = document.querySelector('.bbpopping');
    var ccpopping = document.querySelector('.ccpopping');
    var ddpopping = document.querySelector('.ddpopping');
    var eepopping = document.querySelector('.eepopping');
    var ggpopping = document.querySelector('.ggpopping');
    var hhpopping = document.querySelector('.hhpopping');
    var iipopping = document.querySelector('.iipopping');
    var jjpopping = document.querySelector('.jjpopping');
    var kkpopping = document.querySelector('.kkpopping');
    var llpopping = document.querySelector('.llpopping');
    var mmpopping = document.querySelector('.mmpopping');
    var nnpopping = document.querySelector('.nnpopping');
    var oopopping = document.querySelector('.oopopping');
    var pppopping = document.querySelector('.pppopping');
    var qqpopping = document.querySelector('.qqpopping');
    var rrpopping = document.querySelector('.rrpopping');
    var sspopping = document.querySelector('.sspopping');
    var ttpopping = document.querySelector('.ttpopping');
    var uupopping = document.querySelector('.uupopping');
    var vvpopping = document.querySelector('.vvpopping');
    var wwpopping = document.querySelector('.wwpopping');
    var xxpopping = document.querySelector('.xxpopping');
    var yypopping = document.querySelector('.yypopping');
    var zzpopping = document.querySelector('.zzpopping');
    var abpopping = document.querySelector('.abpopping');
    var acpopping = document.querySelector('.acpopping');
    var adpopping = document.querySelector('.adpopping');
    var aepopping = document.querySelector('.aepopping');
    var afpopping = document.querySelector('.afpopping');
    var agpopping = document.querySelector('.agpopping');
    var ahpopping = document.querySelector('.ahpopping');
    var aipopping = document.querySelector('.aipopping');
    var ing  = document.querySelector('.popping');
    var time=new Date();
    time.setMinutes(18);
    time.setSeconds(0);
    var timeout;
    var send=document.getElementById("send");
    var mit=document.getElementById("mit");
    timeout = setInterval(countdown,1000);
    function countdown(){
        var min=time.getMinutes();
        var second=time.getSeconds();
        if(min=="0"&&second=="0"){clearInterval(timeout);}
        time.setSeconds(second-1);
        min<10?min="0"+min:min;
        second<10?second="0"+second:second;
        mit.innerHTML=min;
        send.innerHTML=second;
    };
    ppp.onmouseover = function () {
        ing.style.bottom = '0px';
        ing.style.opacity = '1';
        ing.style.transition = '.3s';
    };
    ppp.onmouseout = function () {
        ing.style.bottom = '-76px';
        ing.style.opacity = '0';
        ing.style.transition = '.3s';
    };
    aali.onmouseover = function () {
        aapopping.style.bottom = '0px';
        aapopping.style.opacity = '1';
        aapopping.style.transition = '.3s';
    };
    aali.onmouseout = function () {
        aapopping.style.bottom = '-76px';
        aapopping.style.opacity = '0';
        aapopping.style.transition = '.3s';
    };
    bbli.onmouseover = function () {
        bbpopping.style.bottom = '0px';
        bbpopping.style.opacity = '1';
        bbpopping.style.transition = '.3s';
    };
    bbli.onmouseout = function () {
        bbpopping.style.bottom = '-76px';
        bbpopping.style.opacity = '0';
        bbpopping.style.transition = '.3s';
    };
    ccli.onmouseover = function () {
        ccpopping.style.bottom = '0px';
        ccpopping.style.opacity = '1';
        ccpopping.style.transition = '.3s';
    };
    ccli.onmouseout = function () {
        ccpopping.style.bottom = '-76px';
        ccpopping.style.opacity = '0';
        ccpopping.style.transition = '.3s';
    };
    ddli.onmouseover = function () {
        ddpopping.style.bottom = '0px';
        ddpopping.style.opacity = '1';
        ddpopping.style.transition = '.3s';
    };
    ddli.onmouseout = function () {
        ddpopping.style.bottom = '-76px';
        ddpopping.style.opacity = '0';
        ddpopping.style.transition = '.3s';
    };
    eeli.onmouseover = function () {
        eepopping.style.bottom = '0px';
        eepopping.style.opacity = '1';
        eepopping.style.transition = '.3s';
    };
    eeli.onmouseout = function () {
        eepopping.style.bottom = '-76px';
        eepopping.style.opacity = '0';
        eepopping.style.transition = '.3s';
    };
    ggli.onmouseover = function () {
        ggpopping.style.bottom = '0px';
        ggpopping.style.opacity = '1';
        ggpopping.style.transition = '.3s';
    };
    ggli.onmouseout = function () {
        ggpopping.style.bottom = '-76px';
        ggpopping.style.opacity = '0';
        ggpopping.style.transition = '.3s';
    };
    hhli.onmouseover = function () {
        hhpopping.style.bottom = '0px';
        hhpopping.style.opacity = '1';
        hhpopping.style.transition = '.3s';
    };
    hhli.onmouseout = function () {
        hhpopping.style.bottom = '-76px';
        hhpopping.style.opacity = '0';
        hhpopping.style.transition = '.3s';
    };
    iili.onmouseover = function () {
        iipopping.style.bottom = '0px';
        iipopping.style.opacity = '1';
        iipopping.style.transition = '.3s';
    };
    iili.onmouseout = function () {
        iipopping.style.bottom = '-76px';
        iipopping.style.opacity = '0';
        iipopping.style.transition = '.3s';
    };
    jjli.onmouseover = function () {
        jjpopping.style.bottom = '0px';
        jjpopping.style.opacity = '1';
        jjpopping.style.transition = '.3s';
    };
    jjli.onmouseout = function () {
        jjpopping.style.bottom = '-76px';
        jjpopping.style.opacity = '0';
        jjpopping.style.transition = '.3s';
    };
    kkli.onmouseover = function () {
        kkpopping.style.bottom = '0px';
        kkpopping.style.opacity = '1';
        kkpopping.style.transition = '.3s';
    };
    kkli.onmouseout = function () {
        kkpopping.style.bottom = '-76px';
        kkpopping.style.opacity = '0';
        kkpopping.style.transition = '.3s';
    };
    llli.onmouseover = function () {
        llpopping.style.bottom = '0px';
        llpopping.style.opacity = '1';
        llpopping.style.transition = '.3s';
    };
    llli.onmouseout = function () {
        llpopping.style.bottom = '-76px';
        llpopping.style.opacity = '0';
        llpopping.style.transition = '.3s';
    };
    mmli.onmouseover = function () {
        mmpopping.style.bottom = '0px';
        mmpopping.style.opacity = '1';
        mmpopping.style.transition = '.3s';
    };
    mmli.onmouseout = function () {
        mmpopping.style.bottom = '-76px';
        mmpopping.style.opacity = '0';
        mmpopping.style.transition = '.3s';
    };
    nnli.onmouseover = function () {
        nnpopping.style.bottom = '0px';
        nnpopping.style.opacity = '1';
        nnpopping.style.transition = '.3s';
    };
    nnli.onmouseout = function () {
        nnpopping.style.bottom = '-76px';
        nnpopping.style.opacity = '0';
        nnpopping.style.transition = '.3s';
    };
    ooli.onmouseover = function () {
        oopopping.style.bottom = '0px';
        oopopping.style.opacity = '1';
        oopopping.style.transition = '.3s';
    };
    ooli.onmouseout = function () {
        oopopping.style.bottom = '-76px';
        oopopping.style.opacity = '0';
        oopopping.style.transition = '.3s';
    };
    ppli.onmouseover = function () {
        pppopping.style.bottom = '0px';
        pppopping.style.opacity = '1';
        pppopping.style.transition = '.3s';
    };
    ppli.onmouseout = function () {
        pppopping.style.bottom = '-76px';
        pppopping.style.opacity = '0';
        pppopping.style.transition = '.3s';
    };
    qqli.onmouseover = function () {
        qqpopping.style.bottom = '0px';
        qqpopping.style.opacity = '1';
        qqpopping.style.transition = '.3s';
    };
    qqli.onmouseout = function () {
        qqpopping.style.bottom = '-76px';
        qqpopping.style.opacity = '0';
        qqpopping.style.transition = '.3s';
    };
    rrli.onmouseover = function () {
        rrpopping.style.bottom = '0px';
        rrpopping.style.opacity = '1';
        rrpopping.style.transition = '.3s';
    };
    rrli.onmouseout = function () {
        rrpopping.style.bottom = '-76px';
        rrpopping.style.opacity = '0';
        rrpopping.style.transition = '.3s';
    };
    ssli.onmouseover = function () {
        sspopping.style.bottom = '0px';
        sspopping.style.opacity = '1';
        sspopping.style.transition = '.3s';
    };
    ssli.onmouseout = function () {
        sspopping.style.bottom = '-76px';
        sspopping.style.opacity = '0';
        sspopping.style.transition = '.3s';
    };
    ttli.onmouseover = function () {
        ttpopping.style.bottom = '0px';
        ttpopping.style.opacity = '1';
        ttpopping.style.transition = '.3s';
    };
    ttli.onmouseout = function () {
        ttpopping.style.bottom = '-76px';
        ttpopping.style.opacity = '0';
        ttpopping.style.transition = '.3s';
    };
    uuli.onmouseover = function () {
        uupopping.style.bottom = '0px';
        uupopping.style.opacity = '1';
        uupopping.style.transition = '.3s';
    };
    uuli.onmouseout = function () {
        uupopping.style.bottom = '-76px';
        uupopping.style.opacity = '0';
        uupopping.style.transition = '.3s';
    };
    vvli.onmouseover = function () {
        vvpopping.style.bottom = '0px';
        vvpopping.style.opacity = '1';
        vvpopping.style.transition = '.3s';
    };
    vvli.onmouseout = function () {
        vvpopping.style.bottom = '-76px';
        vvpopping.style.opacity = '0';
        vvpopping.style.transition = '.3s';
    };
    wwli.onmouseover = function () {
        wwpopping.style.bottom = '0px';
        wwpopping.style.opacity = '1';
        wwpopping.style.transition = '.3s';
    };
    wwli.onmouseout = function () {
        wwpopping.style.bottom = '-76px';
        wwpopping.style.opacity = '0';
        wwpopping.style.transition = '.3s';
    };
    xxli.onmouseover = function () {
        xxpopping.style.bottom = '0px';
        xxpopping.style.opacity = '1';
        xxpopping.style.transition = '.3s';
    };
    xxli.onmouseout = function () {
        xxpopping.style.bottom = '-76px';
        xxpopping.style.opacity = '0';
        xxpopping.style.transition = '.3s';
    };
    yyli.onmouseover = function () {
        yypopping.style.bottom = '0px';
        yypopping.style.opacity = '1';
        yypopping.style.transition = '.3s';
    };
    yyli.onmouseout = function () {
        yypopping.style.bottom = '-76px';
        yypopping.style.opacity = '0';
        yypopping.style.transition = '.3s';
    };
    zzli.onmouseover = function () {
        zzpopping.style.bottom = '0px';
        zzpopping.style.opacity = '1';
        zzpopping.style.transition = '.3s';
    };
    zzli.onmouseout = function () {
        zzpopping.style.bottom = '-76px';
        zzpopping.style.opacity = '0';
        zzpopping.style.transition = '.3s';
    };
    abli.onmouseover = function () {
        abpopping.style.bottom = '0px';
        abpopping.style.opacity = '1';
        abpopping.style.transition = '.3s';
    };
    abli.onmouseout = function () {
        abpopping.style.bottom = '-76px';
        abpopping.style.opacity = '0';
        abpopping.style.transition = '.3s';
    };
    acli.onmouseover = function () {
        acpopping.style.bottom = '0px';
        acpopping.style.opacity = '1';
        acpopping.style.transition = '.3s';
    };
    acli.onmouseout = function () {
        acpopping.style.bottom = '-76px';
        acpopping.style.opacity = '0';
        acpopping.style.transition = '.3s';
    };
    adli.onmouseover = function () {
        adpopping.style.bottom = '0px';
        adpopping.style.opacity = '1';
        adpopping.style.transition = '.3s';
    };
    adli.onmouseout = function () {
        adpopping.style.bottom = '-76px';
        adpopping.style.opacity = '0';
        adpopping.style.transition = '.3s';
    };
    aeli.onmouseover = function () {
        aepopping.style.bottom = '0px';
        aepopping.style.opacity = '1';
        aepopping.style.transition = '.3s';
    };
    aeli.onmouseout = function () {
        aepopping.style.bottom = '-76px';
        aepopping.style.opacity = '0';
        aepopping.style.transition = '.3s';
    };
    afli.onmouseover = function () {
        afpopping.style.bottom = '0px';
        afpopping.style.opacity = '1';
        afpopping.style.transition = '.3s';
    };
    afli.onmouseout = function () {
        afpopping.style.bottom = '-76px';
        afpopping.style.opacity = '0';
        afpopping.style.transition = '.3s';
    };
    agli.onmouseover = function () {
        agpopping.style.bottom = '0px';
        agpopping.style.opacity = '1';
        agpopping.style.transition = '.3s';
    };
    agli.onmouseout = function () {
        agpopping.style.bottom = '-76px';
        agpopping.style.opacity = '0';
        agpopping.style.transition = '.3s';
    };
    ahli.onmouseover = function () {
        ahpopping.style.bottom = '0px';
        ahpopping.style.opacity = '1';
        ahpopping.style.transition = '.3s';
    };
    ahli.onmouseout = function () {
        ahpopping.style.bottom = '-76px';
        ahpopping.style.opacity = '0';
        ahpopping.style.transition = '.3s';
    };
    aili.onmouseover = function () {
        aipopping.style.bottom = '0px';
        aipopping.style.opacity = '1';
        aipopping.style.transition = '.3s';
    };
    aili.onmouseout = function () {
        aipopping.style.bottom = '-76px';
        aipopping.style.opacity = '0';
        aipopping.style.transition = '.3s';
    }; var ppp = document.querySelector('.ffLi');
    var aali = document.querySelector('.aaLi');
    var bbli = document.querySelector('.bbLi');
    var ccli = document.querySelector('.ccLi');
    var ddli = document.querySelector('.ddLi');
    var eeli = document.querySelector('.eeLi');
    var ggli = document.querySelector('.ggLi');
    var hhli = document.querySelector('.hhLi');
    var iili = document.querySelector('.iiLi');
    var kkli = document.querySelector('.kkLi');
    var jjli = document.querySelector('.jjLi');
    var llli = document.querySelector('.llLi');
    var mmli = document.querySelector('.mmLi');
    var nnli = document.querySelector('.nnli');
    var ooli = document.querySelector('.ooli');
    var ppli = document.querySelector('.ppli');
    var qqli = document.querySelector('.qqli');
    var rrli = document.querySelector('.rrli');
    var ssli = document.querySelector('.ssli');
    var ttli = document.querySelector('.ttli');
    var uuli = document.querySelector('.uuli');
    var vvli = document.querySelector('.vvli');
    var wwli = document.querySelector('.wwli');
    var xxli = document.querySelector('.xxli');
    var yyli = document.querySelector('.yyli');
    var zzli = document.querySelector('.zzli');
    var abli = document.querySelector('.abli');
    var acli = document.querySelector('.acli');
    var adli = document.querySelector('.adli');
    var aeli = document.querySelector('.aeli');
    var afli = document.querySelector('.afli');
    var agli = document.querySelector('.agli');
    var ahli = document.querySelector('.ahli');
    var aili = document.querySelector('.aili');
    var aapopping = document.querySelector('.aapopping');
    var bbpopping = document.querySelector('.bbpopping');
    var ccpopping = document.querySelector('.ccpopping');
    var ddpopping = document.querySelector('.ddpopping');
    var eepopping = document.querySelector('.eepopping');
    var ggpopping = document.querySelector('.ggpopping');
    var hhpopping = document.querySelector('.hhpopping');
    var iipopping = document.querySelector('.iipopping');
    var jjpopping = document.querySelector('.jjpopping');
    var kkpopping = document.querySelector('.kkpopping');
    var llpopping = document.querySelector('.llpopping');
    var mmpopping = document.querySelector('.mmpopping');
    var nnpopping = document.querySelector('.nnpopping');
    var oopopping = document.querySelector('.oopopping');
    var pppopping = document.querySelector('.pppopping');
    var qqpopping = document.querySelector('.qqpopping');
    var rrpopping = document.querySelector('.rrpopping');
    var sspopping = document.querySelector('.sspopping');
    var ttpopping = document.querySelector('.ttpopping');
    var uupopping = document.querySelector('.uupopping');
    var vvpopping = document.querySelector('.vvpopping');
    var wwpopping = document.querySelector('.wwpopping');
    var xxpopping = document.querySelector('.xxpopping');
    var yypopping = document.querySelector('.yypopping');
    var zzpopping = document.querySelector('.zzpopping');
    var abpopping = document.querySelector('.abpopping');
    var acpopping = document.querySelector('.acpopping');
    var adpopping = document.querySelector('.adpopping');
    var aepopping = document.querySelector('.aepopping');
    var afpopping = document.querySelector('.afpopping');
    var agpopping = document.querySelector('.agpopping');
    var ahpopping = document.querySelector('.ahpopping');
    var aipopping = document.querySelector('.aipopping');
    var ing  = document.querySelector('.popping');
    var time=new Date();
    time.setMinutes(18);
    time.setSeconds(0);
    var timeout;
    var send=document.getElementById("send");
    var mit=document.getElementById("mit");
    timeout = setInterval(countdown,1000);
    function countdown(){
        var min=time.getMinutes();
        var second=time.getSeconds();
        if(min=="0"&&second=="0"){clearInterval(timeout);}
        time.setSeconds(second-1);
        min<10?min="0"+min:min;
        second<10?second="0"+second:second;
        mit.innerHTML=min;
        send.innerHTML=second;
    };
    ppp.onmouseover = function () {
        ing.style.bottom = '0px';
        ing.style.opacity = '1';
        ing.style.transition = '.3s';
    };
    ppp.onmouseout = function () {
        ing.style.bottom = '-76px';
        ing.style.opacity = '0';
        ing.style.transition = '.3s';
    };
    aali.onmouseover = function () {
        aapopping.style.bottom = '0px';
        aapopping.style.opacity = '1';
        aapopping.style.transition = '.3s';
    };
    aali.onmouseout = function () {
        aapopping.style.bottom = '-76px';
        aapopping.style.opacity = '0';
        aapopping.style.transition = '.3s';
    };
    bbli.onmouseover = function () {
        bbpopping.style.bottom = '0px';
        bbpopping.style.opacity = '1';
        bbpopping.style.transition = '.3s';
    };
    bbli.onmouseout = function () {
        bbpopping.style.bottom = '-76px';
        bbpopping.style.opacity = '0';
        bbpopping.style.transition = '.3s';
    };
    ccli.onmouseover = function () {
        ccpopping.style.bottom = '0px';
        ccpopping.style.opacity = '1';
        ccpopping.style.transition = '.3s';
    };
    ccli.onmouseout = function () {
        ccpopping.style.bottom = '-76px';
        ccpopping.style.opacity = '0';
        ccpopping.style.transition = '.3s';
    };
    ddli.onmouseover = function () {
        ddpopping.style.bottom = '0px';
        ddpopping.style.opacity = '1';
        ddpopping.style.transition = '.3s';
    };
    ddli.onmouseout = function () {
        ddpopping.style.bottom = '-76px';
        ddpopping.style.opacity = '0';
        ddpopping.style.transition = '.3s';
    };
    eeli.onmouseover = function () {
        eepopping.style.bottom = '0px';
        eepopping.style.opacity = '1';
        eepopping.style.transition = '.3s';
    };
    eeli.onmouseout = function () {
        eepopping.style.bottom = '-76px';
        eepopping.style.opacity = '0';
        eepopping.style.transition = '.3s';
    };
    ggli.onmouseover = function () {
        ggpopping.style.bottom = '0px';
        ggpopping.style.opacity = '1';
        ggpopping.style.transition = '.3s';
    };
    ggli.onmouseout = function () {
        ggpopping.style.bottom = '-76px';
        ggpopping.style.opacity = '0';
        ggpopping.style.transition = '.3s';
    };
    hhli.onmouseover = function () {
        hhpopping.style.bottom = '0px';
        hhpopping.style.opacity = '1';
        hhpopping.style.transition = '.3s';
    };
    hhli.onmouseout = function () {
        hhpopping.style.bottom = '-76px';
        hhpopping.style.opacity = '0';
        hhpopping.style.transition = '.3s';
    };
    iili.onmouseover = function () {
        iipopping.style.bottom = '0px';
        iipopping.style.opacity = '1';
        iipopping.style.transition = '.3s';
    };
    iili.onmouseout = function () {
        iipopping.style.bottom = '-76px';
        iipopping.style.opacity = '0';
        iipopping.style.transition = '.3s';
    };
    jjli.onmouseover = function () {
        jjpopping.style.bottom = '0px';
        jjpopping.style.opacity = '1';
        jjpopping.style.transition = '.3s';
    };
    jjli.onmouseout = function () {
        jjpopping.style.bottom = '-76px';
        jjpopping.style.opacity = '0';
        jjpopping.style.transition = '.3s';
    };
    kkli.onmouseover = function () {
        kkpopping.style.bottom = '0px';
        kkpopping.style.opacity = '1';
        kkpopping.style.transition = '.3s';
    };
    kkli.onmouseout = function () {
        kkpopping.style.bottom = '-76px';
        kkpopping.style.opacity = '0';
        kkpopping.style.transition = '.3s';
    };
    llli.onmouseover = function () {
        llpopping.style.bottom = '0px';
        llpopping.style.opacity = '1';
        llpopping.style.transition = '.3s';
    };
    llli.onmouseout = function () {
        llpopping.style.bottom = '-76px';
        llpopping.style.opacity = '0';
        llpopping.style.transition = '.3s';
    };
    mmli.onmouseover = function () {
        mmpopping.style.bottom = '0px';
        mmpopping.style.opacity = '1';
        mmpopping.style.transition = '.3s';
    };
    mmli.onmouseout = function () {
        mmpopping.style.bottom = '-76px';
        mmpopping.style.opacity = '0';
        mmpopping.style.transition = '.3s';
    };
    nnli.onmouseover = function () {
        nnpopping.style.bottom = '0px';
        nnpopping.style.opacity = '1';
        nnpopping.style.transition = '.3s';
    };
    nnli.onmouseout = function () {
        nnpopping.style.bottom = '-76px';
        nnpopping.style.opacity = '0';
        nnpopping.style.transition = '.3s';
    };
    ooli.onmouseover = function () {
        oopopping.style.bottom = '0px';
        oopopping.style.opacity = '1';
        oopopping.style.transition = '.3s';
    };
    ooli.onmouseout = function () {
        oopopping.style.bottom = '-76px';
        oopopping.style.opacity = '0';
        oopopping.style.transition = '.3s';
    };
    ppli.onmouseover = function () {
        pppopping.style.bottom = '0px';
        pppopping.style.opacity = '1';
        pppopping.style.transition = '.3s';
    };
    ppli.onmouseout = function () {
        pppopping.style.bottom = '-76px';
        pppopping.style.opacity = '0';
        pppopping.style.transition = '.3s';
    };
    qqli.onmouseover = function () {
        qqpopping.style.bottom = '0px';
        qqpopping.style.opacity = '1';
        qqpopping.style.transition = '.3s';
    };
    qqli.onmouseout = function () {
        qqpopping.style.bottom = '-76px';
        qqpopping.style.opacity = '0';
        qqpopping.style.transition = '.3s';
    };
    rrli.onmouseover = function () {
        rrpopping.style.bottom = '0px';
        rrpopping.style.opacity = '1';
        rrpopping.style.transition = '.3s';
    };
    rrli.onmouseout = function () {
        rrpopping.style.bottom = '-76px';
        rrpopping.style.opacity = '0';
        rrpopping.style.transition = '.3s';
    };
    ssli.onmouseover = function () {
        sspopping.style.bottom = '0px';
        sspopping.style.opacity = '1';
        sspopping.style.transition = '.3s';
    };
    ssli.onmouseout = function () {
        sspopping.style.bottom = '-76px';
        sspopping.style.opacity = '0';
        sspopping.style.transition = '.3s';
    };
    ttli.onmouseover = function () {
        ttpopping.style.bottom = '0px';
        ttpopping.style.opacity = '1';
        ttpopping.style.transition = '.3s';
    };
    ttli.onmouseout = function () {
        ttpopping.style.bottom = '-76px';
        ttpopping.style.opacity = '0';
        ttpopping.style.transition = '.3s';
    };
    uuli.onmouseover = function () {
        uupopping.style.bottom = '0px';
        uupopping.style.opacity = '1';
        uupopping.style.transition = '.3s';
    };
    uuli.onmouseout = function () {
        uupopping.style.bottom = '-76px';
        uupopping.style.opacity = '0';
        uupopping.style.transition = '.3s';
    };
    vvli.onmouseover = function () {
        vvpopping.style.bottom = '0px';
        vvpopping.style.opacity = '1';
        vvpopping.style.transition = '.3s';
    };
    vvli.onmouseout = function () {
        vvpopping.style.bottom = '-76px';
        vvpopping.style.opacity = '0';
        vvpopping.style.transition = '.3s';
    };
    wwli.onmouseover = function () {
        wwpopping.style.bottom = '0px';
        wwpopping.style.opacity = '1';
        wwpopping.style.transition = '.3s';
    };
    wwli.onmouseout = function () {
        wwpopping.style.bottom = '-76px';
        wwpopping.style.opacity = '0';
        wwpopping.style.transition = '.3s';
    };
    xxli.onmouseover = function () {
        xxpopping.style.bottom = '0px';
        xxpopping.style.opacity = '1';
        xxpopping.style.transition = '.3s';
    };
    xxli.onmouseout = function () {
        xxpopping.style.bottom = '-76px';
        xxpopping.style.opacity = '0';
        xxpopping.style.transition = '.3s';
    };
    yyli.onmouseover = function () {
        yypopping.style.bottom = '0px';
        yypopping.style.opacity = '1';
        yypopping.style.transition = '.3s';
    };
    yyli.onmouseout = function () {
        yypopping.style.bottom = '-76px';
        yypopping.style.opacity = '0';
        yypopping.style.transition = '.3s';
    };
    zzli.onmouseover = function () {
        zzpopping.style.bottom = '0px';
        zzpopping.style.opacity = '1';
        zzpopping.style.transition = '.3s';
    };
    zzli.onmouseout = function () {
        zzpopping.style.bottom = '-76px';
        zzpopping.style.opacity = '0';
        zzpopping.style.transition = '.3s';
    };
    abli.onmouseover = function () {
        abpopping.style.bottom = '0px';
        abpopping.style.opacity = '1';
        abpopping.style.transition = '.3s';
    };
    abli.onmouseout = function () {
        abpopping.style.bottom = '-76px';
        abpopping.style.opacity = '0';
        abpopping.style.transition = '.3s';
    };
    acli.onmouseover = function () {
        acpopping.style.bottom = '0px';
        acpopping.style.opacity = '1';
        acpopping.style.transition = '.3s';
    };
    acli.onmouseout = function () {
        acpopping.style.bottom = '-76px';
        acpopping.style.opacity = '0';
        acpopping.style.transition = '.3s';
    };
    adli.onmouseover = function () {
        adpopping.style.bottom = '0px';
        adpopping.style.opacity = '1';
        adpopping.style.transition = '.3s';
    };
    adli.onmouseout = function () {
        adpopping.style.bottom = '-76px';
        adpopping.style.opacity = '0';
        adpopping.style.transition = '.3s';
    };
    aeli.onmouseover = function () {
        aepopping.style.bottom = '0px';
        aepopping.style.opacity = '1';
        aepopping.style.transition = '.3s';
    };
    aeli.onmouseout = function () {
        aepopping.style.bottom = '-76px';
        aepopping.style.opacity = '0';
        aepopping.style.transition = '.3s';
    };
    afli.onmouseover = function () {
        afpopping.style.bottom = '0px';
        afpopping.style.opacity = '1';
        afpopping.style.transition = '.3s';
    };
    afli.onmouseout = function () {
        afpopping.style.bottom = '-76px';
        afpopping.style.opacity = '0';
        afpopping.style.transition = '.3s';
    };
    agli.onmouseover = function () {
        agpopping.style.bottom = '0px';
        agpopping.style.opacity = '1';
        agpopping.style.transition = '.3s';
    };
    agli.onmouseout = function () {
        agpopping.style.bottom = '-76px';
        agpopping.style.opacity = '0';
        agpopping.style.transition = '.3s';
    };
    ahli.onmouseover = function () {
        ahpopping.style.bottom = '0px';
        ahpopping.style.opacity = '1';
        ahpopping.style.transition = '.3s';
    };
    ahli.onmouseout = function () {
        ahpopping.style.bottom = '-76px';
        ahpopping.style.opacity = '0';
        ahpopping.style.transition = '.3s';
    };
    aili.onmouseover = function () {
        aipopping.style.bottom = '0px';
        aipopping.style.opacity = '1';
        aipopping.style.transition = '.3s';
    };
    aili.onmouseout = function () {
        aipopping.style.bottom = '-76px';
        aipopping.style.opacity = '0';
        aipopping.style.transition = '.3s';
    };
};


