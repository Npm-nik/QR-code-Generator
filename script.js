const URL = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

// const input = document.querySelector('input');
// const btn = document.querySelector('button');
// const img = document.querySelector('img');
// const code = document.querySelector('#code')

// const genCode = () => {
  
//     if(input.value.length > 0){
//         img.src = URL + input.value;
//     }
//     else{
//         input.classList.add('error');
//         setTimeout(()=>{
//             input.classList.remove('error');
//         },1100)
//     }
  
// }

// btn.addEventListener('click' , () => {
// genCode();
// })

const input = document.querySelector("input");
const btn = document.querySelector("button");
const code = document.querySelector("#code");
const img = document.querySelector("img");

const genCode = () => {
    if(input.value.length > 0){
        img.src = URL + input.value;
    }
    else{
        input.classList.add('error')
        setTimeout(()=>{
            input.classList.remove('error')
        },1100)
    }
}

btn.addEventListener('click', () => {
    genCode();
})
