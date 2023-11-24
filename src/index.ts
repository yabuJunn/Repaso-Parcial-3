import { observadorCambiosTiempoReal, subirRecordatorio, traerRecordatorios } from "./firestore/firestore"
import "./components/tarjetaRecordatorio/tarjetaRecordatorio"
import { addObserver, state } from "./store"

console.log("Funciona Typescipt")

class AppContainer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    async connectedCallback() {
        observadorCambiosTiempoReal()
        this.render()
    }

    async render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ""
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/index.css")
            this.shadowRoot?.appendChild(link)

            const mainContainer = this.ownerDocument.createElement("section")
            mainContainer.setAttribute("id", "mainContainer")
            this.shadowRoot.appendChild(mainContainer)

            const formulario = this.ownerDocument.createElement("div")
            mainContainer.appendChild(formulario)

            const titleInput = this.ownerDocument.createElement("input")
            titleInput.placeholder = "Titulo de Recordatorio"
            formulario.appendChild(titleInput)

            const descriptionInput = this.ownerDocument.createElement("input")
            descriptionInput.placeholder = "Descripcion de Recordatorio"
            formulario.appendChild(descriptionInput)

            const uploadButton = this.ownerDocument.createElement("button")
            uploadButton.innerText = "Subir Recordatorio"
            formulario.appendChild(uploadButton)

            const contenedorTarjetas = this.ownerDocument.createElement("div")
            mainContainer.appendChild(contenedorTarjetas)

            state.recordatorios.forEach((recordatorio) => {
                const tarjetaPrueba = this.ownerDocument.createElement("tarjeta-recordatorio")
                tarjetaPrueba.setAttribute("title", `${recordatorio.title}`)
                tarjetaPrueba.setAttribute("description", `${recordatorio.description}`)
                contenedorTarjetas.appendChild(tarjetaPrueba)
            })

            uploadButton.addEventListener("click", () => {
                subirRecordatorio(titleInput.value, descriptionInput.value)
            })
        }

    }
}

customElements.define("app-container", AppContainer)