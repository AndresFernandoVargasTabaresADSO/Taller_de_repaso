addEventListener("DOMContentLoaded", (e) => {

    let form = document.querySelector('#myForm');
    let respuesta =document.querySelector(".rta");
    let ventana =document.querySelector('dialog');
    let close = document.querySelector('#button')

    let acum=0


    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let data_Input = Object.fromEntries(new FormData(e.target));
        
        let name = String(data_Input.nombre)
        let v1= Number(data_Input.ve1)
        let v2= Number(data_Input.ve2)
        let v3= Number(data_Input.ve3)
        let sueld= Number(data_Input.sueldo)

        let comision = (v1+v2+v3)*0.10
        let suma = (comision+sueld)


        ventana.showModal();
        let tabla = document.querySelector("tbody");
        tabla.insertAdjacentHTML("beforeend",`
            <tr>
                <td>${name}</td>
                <td>${sueld}</td>
                <td>${comision}</td>
                <td>${suma}</td>
            </tr>`);
    })

    close.addEventListener("click", (e) =>  {
        ventana.close();
    })
})