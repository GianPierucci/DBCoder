const formCargaAutos = document.querySelector("#formCargaAutos")

if( formCargaAutos instanceof HTMLFormElement ){
    formCargaAutos.addEventListener("submit", event => {
        event.preventDefault()
        const formData = new FormData(formCargaAutos)
        const data = {}
        formData.forEach((value, key) => (data[key] = value))
        fetch("/api/autos", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
    })
}