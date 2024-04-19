const containerEi = document.querySelector(".container");
const careers=["Aravind Sasidharan","webdeveloper","Forex trader","Bike Entusiast"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText(){
    characterIndex++;
    containerEi.innerHTML=
    `<h1>
      Iam ${careers[careerIndex].slice(0,1) === "A"? "" :"an"} ${careers[careerIndex].slice(0,characterIndex)};
    </h1>`;
    
    if(characterIndex === careers
        [careerIndex].length){
        careerIndex++
        characterIndex = 0
        }

       if(careerIndex === careers.length) {
        careerIndex = 0;
       }
    setTimeout(updateText, 50);
                                // setTimeout(()=>{   inganeyum ezutham.
                               //     updateText();
                             // },400);
    }


