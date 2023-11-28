


let btn = document.getElementById('btn');
let text = document.getElementById('text');
let wrapper = document.getElementById('wrapper');
let btn2 = document.getElementById('btn2');

text.style.display = 'none';

btn.onclick = () => {
    if (text.style.display == 'none') {
        text.style.display = 'block';
    } else{
        text.style.display = 'none';
    }
}

btn2.onclick = () =>{

    wrapper.style.left = Math.round(Math.random() * (70 - 20) + 20)+'%';
    wrapper.style.top = Math.round(Math.random() * (80 - 20) + 20)+'%';

}
