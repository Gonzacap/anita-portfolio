Vue.component('project-card',{
    props: ['title', 'desc', 'link'],
    /*html*/
    template: `
        <div class="card m-1" style="width: 18rem;">
            <!--<img src="..." class="card-img-top" alt="...">
            <i :class="ico"></i>-->
            <div class="card-body">
              <h5 class="card-title">{{title}}</h5>
              <p class="card-text">{{desc}}</p>
              <a :href="link" class="btn btn-primary" target="_blank">Go somewhere</a>
            </div>
        </div>
    `,
});

Vue.component('exp-note',{
    props: ['title', 'desc'],
    /*html*/
    template: `
        <li>
            <a href="" class="note-link">
                <h2 class="aux">{{title}}</h2>
                <p class="aux">{{desc}}</p>
            </a>
        </li>
    `,
});

const app = new Vue({
    el: '#app',
    data:{
        firstCards:[
            {
                title : 'asd', 
                //ico : "fab fa-java fa-8x",
                desc : '"Yo habito, tu habitas, el/ella ocupa: la visibilización de la situación del acceso a la tierra y la vivienda en América Latina" en el Boletín N°11 GJI-IRI p. 65',
                link : "src/routes/r1.html"
            },
            {
                title : 'Nota en UCActualidad N°166 - p. 23', 
                //ico : "fab fa-java fa-8x",
                desc : "asd",
                link : "src/routes/r2.html"
            },
            {
                title : 'Nota a ALAS EJ - FIQ UNL', 
                //ico : "fab fa-java fa-8x",
                desc : "asd",
                link : "http://www.fiq.unl.edu.ar/noticia/47608/alas_una_empresa_junior_que_ayuda_a_incorporar_herramientas_de_ingenier%C3%ADa_a_pymes.html"
            },
            {
                title : '"Populismo à la carte" en Revista Civitas VOL VIII', 
                //ico : "fab fa-java fa-8x",
                desc : "asd",
                link : "src/routes/r3.html"
            },
            {
                title : 'Presentación en las V Jornadas de Estrategia y Seguridad Internacional', 
                //ico : "fab fa-java fa-8x",
                desc : "asd",
                link : "https://drive.google.com/file/d/1DGI-uCM3YZwKGoavQdxQYZEpvnxgNQsh/view"
            },
            {
                title : '', 
                //ico : "fab fa-java fa-8x",
                desc : "ad",
                link : "#"
            },
        ],
        secondCards:[
            {
                title : '', 
                //ico : "fab fa-java fa-8x",
                desc : "ad",
                link : "#"
            },
            {
                title : '', 
                //ico : "fab fa-java fa-8x",
                desc : "ad",
                link : "#"
            },
            {
                title : '', 
                //ico : "fab fa-java fa-8x",
                desc : "ad",
                link : "#"
            },
            /*{
                title : '', 
                //ico : "fab fa-java fa-8x",
                desc : "ad",
                link : "#"
            },*/
        ],
        exp: [
            {title: 'Title #1', desc: 'Text Content #1'},
            {title: 'Title #2', desc: 'Text Content #2'},
            {title: 'Title #3', desc: 'Text Content #3'},
            {title: 'Title #4', desc: 'Text Content #4'},
            /*{title: 'Title #5', desc: 'Text Content #5'},
            {title: 'Title #6', desc: 'Text Content #6'},*/
        ]
    }
});

document.body.addEventListener("click", function(e) {

    //e.preventDefault();
    var eventName = String((e.target).className);

    if( eventName == 'note-link' || eventName == 'aux') {
        e.preventDefault();
        //console.log('good');
    }/*
    else{
        console.log(eventName);
    }*/

});