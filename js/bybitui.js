var bb = (function bybit_UI() {

    //Hide green chat button
    let chatbttn = document.getElementById('by-chat-widget-button')
    if (chatbttn != null) { // Dynamically loaded
      chatbttn.style.visibility='hidden'
    }

    //Hide yellow chat button
    let yellowchat = document.getElementById('launcher')
    if (yellowchat != null) { // Dynamically loaded
      yellowchat.style.visibility='hidden'
    }

    let spans = document.querySelectorAll('span');
    for (var s of spans) {
      s.style.fontSize='1.15em'
    }

    let ptags = document.querySelectorAll('p')
    for (var p of ptags) {
      p.style.fontSize='1.15em'
    }

    //Increase size of BUY/SELL order value
    let BLSS = document.querySelectorAll('p.gc-06')
    BLSS[0].classList.remove("f-10");
    BLSS[1].classList.remove("f-10");
    BLSS[0].classList.add("f-16");
    BLSS[1].classList.add("f-16");

    //change default f12 fontSize
    let f12 = document.querySelectorAll('.f-12')
    for (var fnode of f12) {
      fnode.classList.remove("f-12");
      fnode.classList.add("f-16");
    }

    //BTCUSD curent price
    let leftPrice = document.getElementsByClassName('prefer-nav__left--price')
    leftPrice[0].style.fontSize = '1.35em'
    
    //Increase size of EQUITY and BALANCE
    let topnav = document.getElementsByClassName('pnr__item-content')
    for (var tpn of topnav) {
      tpn.style.fontSize='1.15em'
    }

    let gotem = document.querySelectorAll('.pnr__item-title')
    for (var gt of gotem) {
      gt.style.fontSize='1.1em'
    }


    // topnav[6].style.fontSize='1.1em'
    // topnav[7].style.fontSize='1.1em'
    console.info("Updated UI: Total Equity, Available Balance, Long/Short equity cost, Hide Buttons")
})();

