var ul = document.getElementById('list')
var li;
var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

var removeAllButton = document.getElementById('removeall')
removeAllButton.addEventListener('click', removeAll)

function addItem(){
    var input = document.querySelector('#input')
    var item = input.value
    var textnode = document.createTextNode(item)
    
    if(item === ''){
        return false
    }else{
        // create li
        li = document.createElement('li')
        // create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')
        // create labe
        var label = document.createElement('label')

        // add these elements on web page
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])
        console.log(ul.childNodes[0])
        
        setTimeout(() => {
            li.className = 'visual'
        }, 2)
    }
}

function removeItem(){
    li = ul.children
    console.log(li)
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
    }
}

function removeAll(){
    li = ul.children
    while(li){
        index = 0
        ul.removeChild(li[index])
        index++
    }
}