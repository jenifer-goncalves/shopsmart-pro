
const input1 = document.getElementById('valor01');
const input2 = document.getElementById('valor02');

const resultado = document.getElementById('resultado');


function calcularTotal(){
    const v1 = parseFloat(input1.value);
    const v2 = parseFloat(input2.value);

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = `Os campos não foram preenchidos corretamente. Digite um número.`
    
    
    } else{
        resultado.style.display = 'flex';
        resultado.innerHTML = 
        `          
    <ul>
        <h2>O Total a pagar é R$<span>${v1 * v2}</span>
            <li>O preço do item desejado é R$<span> ${v1} </span> </li>
            <li>A quantidade de itens é: <span>${v2}</span> </li>       
    </ul>
        `;
    
        
    }

}

function desconto(){
    const v1 = parseFloat(input1.value);
    const v2 = parseFloat(input2.value);
    const desconto = (v1*v2)/100;

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = `Os campos não foram preenchidos corretamente. Digite um número.`
    
    } else{
        resultado.style.display = 'flex';
        resultado.innerHTML = 
        `          
    <ul>
        <h2>O Total descontado a pagar é R$<span>${v1 - desconto}</span>
            <li>O preço do item desejado é R$<span> ${v1} </span> </li>
            <li>O desconto aplicado é de: <span>${v2}</span>% </li>       
    </ul>
        `;
    
        
    }

}

function juros() {
    const v1 = parseFloat(input1.value);
    const v2 = parseFloat(input2.value);
    const acrescimo = (v1*v2)/100;

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = `Os campos não foram preenchidos corretamente. Digite um número.`
    
    
    } else{
        resultado.style.display = 'flex';
        resultado.innerHTML = 
        `          
    <ul>
        <h2>O Total com Juros é R$<span>${acrescimo + v1}</span>
            <li>O preço do item desejado é R$<span> ${v1} </span> </li>
            <li>Os juros são de <span>${v2}</span>% </li>       
    </ul>
        `;
    
        
    }

}

function comissao(){
    const v1 = parseFloat(input1.value);
    const v2 = parseFloat(input2.value);
    const taxa = v1*(v2/100);

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = `Os campos não foram preenchidos corretamente. Digite um número.`
    
    
    } else{
        resultado.style.display = 'flex';
        resultado.innerHTML = 
        `          
    <ul>
        <h2>Sua Comissão é R$<span>${taxa}</span>
            <li>O preço do item vendido é R$ <span> ${v1} </span> </li>
            <li>A taxa aplicada é: <span>${v2}</span>% </li>       
    </ul>
        `;
    
        
    }

}

function lucro(){
    const v1 = parseFloat(input1.value);
    const v2 = parseFloat(input2.value);
    const lucro = v1 - v2;

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = `Os campos não foram preenchidos corretamente. Digite um número.`
    
    
    } else{
        resultado.style.display = 'flex';
        resultado.innerHTML = 
        `          
    <ul>
        <h2>O Lucro Total é R$<span>${lucro}</span>
            <li>O preço de venda é R$<span> ${v1} </span> </li>
            <li>O custo foi de R$<span>${v2}</span> </li>       
    </ul>
        `;
    
        
    }

}

function limpar(){
    resultado.style.display = 'none';
    input1.value = '';
    input2.value = '';
    input1.focus();

}