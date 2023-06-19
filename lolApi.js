//let numeros = ["1","2","3"];
//
//function teste(){
//    let container = document.getElementById("caixa")
//    numeros.map((i)=>{
//        let x = document.createElement("div")
//        x.setAttribute("class","img")
//        x.innerHTML = i
//        container.appendChild(x)
//    })
//}


const urlChampData="https://ddragon.leagueoflegends.com/cdn/13.12.1/data/pt_BR/champion/"
const urlChampSkin="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"
const champTitle = document.querySelector("#champName")
const caixaImg=document.querySelector("#caixa")
const caixaImg2=document.querySelector("#caixa2")
const caixaImg3=document.querySelector("#caixa3")
const caixaImg4=document.querySelector("#caixa4")
const divArticles=document.querySelector("articles")
const historia=document.querySelector("#historia")
const searchButton=document.querySelector("#searchId")
function pesquisar(){
    searchButton.addEventListener("keydown",function(event){
        if(event.key == "Enter"){
            preencherDados()
        }
    })
}
pesquisar()
function valorSearch(){
    const val = document.querySelector("#searchId")
    return val.value
}
async function dices(){
    let valor = valorSearch()
    let dice = await fetch(urlChampData+valor+".json")
    const dadoJs = await dice.json()

    return dadoJs
}
async function preencherDados(){
    let valor = valorSearch()    
    const dadoJson = await dices()

    preencherSkins();
    preencherNome();
    historia.innerText = dadoJson.data[valor].lore;

}

async function preencherNome(){
let valor = valorSearch();
let dados = await dices();
let name = await dados.data[valor].name
let title = await dados.data[valor].title

champTitle.innerHTML=`${name}, ${title}`
}
async function preencherSkins(){
    clearData();
    
    let x = await dices()
    let valor = valorSearch()    
    let skinsX = x.data[valor].skins
    for(let i = 0; i <6; i++) {
        let link = document.createElement("a")
        let img = document.createElement("img")
        let num = skinsX[i].num
        img.setAttribute("src",`${urlChampSkin}${valor}_${num}.jpg`)
        img.setAttribute("class","img")
        link.setAttribute("href",`${urlChampSkin}${valor}_${num}.jpg`)
        link.setAttribute("target","_blank")
        link.append(img)
        caixaImg.appendChild(link)
    };
    for(let i = 6; i <12; i++) {
        let link = document.createElement("a")
        let img = document.createElement("img")
        let num = skinsX[i].num
        img.setAttribute("src",`${urlChampSkin}${valor}_${num}.jpg`)
        img.setAttribute("class","img")
        link.setAttribute("href",`${urlChampSkin}${valor}_${num}.jpg`)
        link.setAttribute("target","_blank")
        link.append(img)
        caixaImg2.appendChild(link)
    };
    for(let i = 12; i <18; i++) {
        let link = document.createElement("a")
        let img = document.createElement("img")
        let num = skinsX[i].num
        img.setAttribute("src",`${urlChampSkin}${valor}_${num}.jpg`)
        img.setAttribute("class","img")
        link.setAttribute("href",`${urlChampSkin}${valor}_${num}.jpg`)
        link.setAttribute("target","_blank")
        link.append(img)
        caixaImg3.appendChild(link)
    };
    for(let i = 18; i <skinsX.length; i++) {
        let link = document.createElement("a")
        let img = document.createElement("img")
        let num = skinsX[i].num
        img.setAttribute("src",`${urlChampSkin}${valor}_${num}.jpg`)
        img.setAttribute("class","img")
        link.setAttribute("href",`${urlChampSkin}${valor}_${num}.jpg`)
        link.setAttribute("target","_blank")
        link.append(img)
        caixaImg4.appendChild(link)
    };
    
}

function clearData(){
    historia.innerHTML= ""
    champTitle.innerHTML = ""
    caixaImg.innerHTML = ""
    caixaImg2.innerHTML = ""
    caixaImg3.innerHTML = ""
    caixaImg4.innerHTML = ""
}

function janelaInfo(){
    document.querySelector("#info").style.filter="opacity(1)";
    document.querySelector("#divInfo").style.backdropFilter = "blur(5px)"

setTimeout(()=>{
    document.querySelector("#divInfo").style.backdropFilter = "blur(0px)"
    document.getElementById("info").style.filter = "opacity(0)"
},4000)

}

