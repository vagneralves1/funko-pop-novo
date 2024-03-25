var menu_icon = document.getElementById('menu_celular')
var clicou = 0

function clicou_menu(){
    if (clicou == 0){
        menu_celular.style.display = 'block'
        clicou = 1
    }else if (clicou == 1){
        menu_celular.style.display = 'none'
        clicou = 0
    }
}