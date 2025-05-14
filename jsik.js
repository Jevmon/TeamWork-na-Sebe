var dzialanie = ''
var tekscik = document.getElementById('text')

document.querySelectorAll('.btn').forEach(btn=> {
    btn.addEventListener('click', ()=>{
        const value = btn.dataset.value
        if (value == "="){
            wynik(dzialanie)
        }
    })
})

function wynik(dzialanie){
    document.getElementById('text').innerHTML = eval(dzialanie)
}