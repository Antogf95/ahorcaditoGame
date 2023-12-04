document.addEventListener("DOMContentLoaded", function () {
    const palabraP = document.getElementById("colocar-palabra");
    const btnPalabraSecreta = document.getElementById("enviar-palabra");
    const btnProbar = document.getElementById("probar-letra");
    const btnOcultar = document.getElementById("ocultar");
    const inputpalabraSecreta = document.getElementById("palabra-secreta");
    const inputProbar = document.getElementById("letra")
    let palabraOculta = false;

    btnPalabraSecreta.addEventListener("click", () => {
        const palabraSecreta = inputpalabraSecreta.value
        convertirEnGuiones(palabraSecreta);

        // inputpalabraSecreta.value = "*".repeat(palabraSecreta.length)


    })

    btnOcultar.addEventListener("click", () => {
        if (palabraOculta) {
            inputpalabraSecreta.type = "text";
            btnOcultar.textContent = "Ocultar"
        }
        else {
            inputpalabraSecreta.type = "password";
            btnOcultar.textContent = "Mostrar"
        }

        palabraOculta = !palabraOculta;

    })

    btnProbar.addEventListener("click", () => {
        const probarLetra = inputProbar.value.toLowerCase();
        const palabraSecreta = inputpalabraSecreta.value.toLowerCase();
        const palabraGuiones = palabraP.textContent.replace(/\s/g, '').split(""); // Eliminar espacios y dividir en caracteres

        let aciertos = false;

        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === probarLetra) {
                palabraGuiones[i] = probarLetra;
                aciertos = true;
            }
        }

        palabraP.textContent = palabraGuiones.join(" ");
        inputProbar.value = "";

    })


    function convertirEnGuiones(palabraSecreta) {
        const guiones = "_  ".repeat(palabraSecreta.length);

        palabraP.textContent = guiones
    }





});








