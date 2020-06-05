// Dados da entidade

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {

            /* Criando uma for para percorrer todos os 27 estados*/
            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option>Selecione a Cidade</option>";
    citySelect.disabled = true;

    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
            citySelect.disabled = false;
        })
}


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


// Itens de coleta
// Pegar todos os li's
// Todos os items-grid li vão para itemsToCollect
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    // Evento que ele vai ficar ouvindo, click
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

// Let é variável, pode mudar de valor depois
let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    // Adcionar ou remover uma classe com js
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    // Verificar se existem itens selecionados, se sim, pegá-los
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId // Isso será true ou false
        return itemFound
    })

    //Se ja estiver selecionado,
    if (alreadySelected >= 0) {
        // tirar da seleção,
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId // false
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else {
        //E se não estiver, adcionar a seleção
        selectedItems.push(itemId)
    }
    
    //Atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems

}