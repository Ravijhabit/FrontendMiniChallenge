let store={};
let right=document.querySelector('.right');
async function Fetching(){
    try{
        await fetch('./data.json')
            .then(response => response.json())
            .then(data=>data.map((val)=>{
                const el=document.createElement('section');
                el.classList.add('report');
                el.setAttribute('id',val.category.toLowerCase());
                const bind=document.createElement('section');
                bind.classList.add('bind');
                const img=document.createElement('img');
                img.src=val.icon;
                const p=document.createElement('p');
                p.innerText=val.category;
                bind.append(img);
                bind.append(p);
                el.append(bind);
                const score=document.createElement('p');
                score.innerText=val.score+'/100';
                el.append(score);
                right.append(el);
            }))
            .then( () =>{
                const btn=document.createElement('button');
                btn.setAttribute('id','btn');
                btn.innerText='Continue';
                right.append(btn);
            })
    }
    catch(e){
        console.log(e);
    }
}
Fetching();
