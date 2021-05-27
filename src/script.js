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
                title : 'Title', 
                desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, unde.',
                link : "#"
            },
            {
                title : 'Title', 
                desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, unde.',
                link : "src/routes/r2.html"
            },
            {
                title : 'Title',
                desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, unde.',
                link : "#"
            },
            /*{
                title : 'Title', 
                desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, unde.',
                link : "#"
            },*/
        ],
        secondCards:[
            {
                title : 'Title', 
                desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, unde.',
                link : "#"
            },
            {
                title : 'Title', 
                desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, unde.',
                link : "#"
            },
            {
                title : 'Title',
                desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, unde.',
                link : "#"
            },
            /*{
                title : 'Title', 
                desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, unde.',
                link : "#"
            },*/
        ],
        exp: [
            {title: 'Title #1', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nisi.'},
            {title: 'Title #2', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nisi.'},
            {title: 'Title #3', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nisi.'},
            {title: 'Title #4', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nisi.'},
            /*{title: 'Title #5', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nisi.'},
            {title: 'Title #6', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nisi.'},*/
        ]
    }
});

document.body.addEventListener("click", function(e) {

    //e.preventDefault();
    var eventName = String((e.target).className);

    if( eventName == 'note-link' || eventName == 'aux') {
        e.preventDefault();
        //console.log('good');
    }
    else{
        console.log(eventName);
    }

});

document.body.addEventListener("keydown", function(e) {

    var eventName = String((e.target).className);
    console.log(eventName);
});
