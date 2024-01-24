window.onload = () =>{
    const test = new AppTest();
    test.addEventListener("test_data_loaded", (e) =>{
        console.log("test data loaded", e.detail);
    })

    test.loadData();
};

class AppTest extends HTMLElement {

    constructor(){
        super();
    }

    async loadData(){
        const req = await fetch("./Data.json");
        const res = await req.json();

        this.dispatchEvent(new CustomEvent("test_data_loaded", {detail:res}));
    }
}

customElements.define("app-test",AppTest);

let speed;

window.addEventListener("load", () => {
    const nav = document.querySelector("#nav");
    const nav2 = document.querySelector("#nav2");
    let isHover = false;

    nav.onclick = (e) =>{
        dispatchEvent(new CustomEvent('div_click'));
    };

    nav.addEventListener('div_click', () =>{
        console.log("clicou no botão.");
    });

    nav2.onclick = (e) =>{
        dispatchEvent(new CustomEvent('div_click2'));
    };

    nav2.addEventListener('div_click2', () =>{
        console.log("clicou no botão 2.");
    });

    nav.onmousedown = (e) =>{
        console.log("cliquei no botão para baixo.");
    };

    nav.onmouseup = (e) =>{
        console.log("cliquei no botão para cima.");
    };

    nav.onmouseover = (e) =>{
        isHover = true;
        timer = setInterval(() => {
            if(!isHover){
                clearInterval(timer);
            }
            console.log("começou");
            let leftval = parseInt(nav.style.left, 10);
            !leftval ? nav.style.left = "10px": nav.style.left = (leftval + 5) + "px";
        },16);
    }

    nav.onmouseout = (e) =>{
        isHover = false;
    }

    //button.addEventListener("click", () =>{
    //    console.log("cliquei no botão 2.");
    //});

    //setInterval(() => {
    //    nav.style.transform += "rotate(10deg)"
    //},100)

    console.log(nav);

    let movePlayer = 50;

    window.addEventListener('keydown', (e) =>{
        let leftpos = parseInt(window.getComputedStyle(nav).getPropertyValue("left"))
        let toppos = parseInt(window.getComputedStyle(nav).getPropertyValue("top"))
        switch(e.key){
            case 'a':
                nav.style.left = leftpos - movePlayer + 'px';
                break;
            case 'd':
                nav.style.left =leftpos + movePlayer + 'px';
                break;
            case 'w':
                nav.style.top = toppos - movePlayer + 'px';
                break;
            case 's':
                nav.style.top =toppos + movePlayer + 'px';
                break;
                }
    });
});


