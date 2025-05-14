var dzialanie = ''
var tekscik = document.getElementById('text')

document.querySelectorAll('.btn').forEach(btn=> {
    btn.addEventListener('click', ()=>{
        const value = btn.value
        if (value == "="){
            wynik(dzialanie)
        } else {
            dzialanie += value
            tekscik.innerHTML = dzialanie
        }
    })
})

function wynik(dzialanie){
    if(dzialanie == ''){
        return
    }
    tekscik.innerHTML = eval(dzialanie)
}

document.getElementById('reset').addEventListener('click', () => {
    dzialanie = ''
    tekscik.innerHTML = ''
})