const formMensajes = document.querySelector("#formMensajes")

if( formMensajes instanceof HTMLFormElement ){
    formMensajes.addEventListener("submit", event => {
        event.preventDefault()
        const formData = new FormData(formMensajes)
        const data = {}
        formData.forEach((value, key) => (data[key] = value))
        fetch("/api/mensajes", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
    })
}