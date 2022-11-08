addEventListener("DOMContentLoaded", (e) => {

    let span = document.querySelector('#pago')
    let calculo = document.querySelector('#hors__Trabajo')
    let close = document.querySelector('#close')
    let ventana = document.querySelector('dialog')
    let cont = 0

    calculo.addEventListener('submit', (e) => {
        e.preventDefault();
        let data__Input = Object.fromEntries(new FormData(e.target))
        let valor__Hora = 5208.33
        let my__Hors = data__Input.hora
        my__Hors *= valor__Hora
        x = Math.round(my__Hors)
        span.innerHTML = my__Hors

        ventana.showModal();
        if(cont < 50) {
            let my__Tabla = document.querySelector('tbody');
            my__Tabla.insertAdjacentHTML('beforeend',`
            <tr>
                <td>${data__Input.nom}</td>
                <td>${data__Input.hora}</td>
                <td>${x}</td>
            </tr>
            `)
            cont++;
        }
    })
    close.addEventListener("click", (e)=>{
        ventana.close();
    })

})