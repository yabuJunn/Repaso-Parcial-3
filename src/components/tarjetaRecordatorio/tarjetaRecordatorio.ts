const enum tarjetaRecordatorioProperties {
    "title" = "title",
    "description" = "description"
}

export class tarjetaRecordatorio extends HTMLElement {
    properties: Record<tarjetaRecordatorioProperties, string> = {
        title: "",
        description: ""
    }

    static get observedAttributes() {
        const properties: Record<tarjetaRecordatorioProperties, null> = {
            title: null,
            description: null
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: tarjetaRecordatorioProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case tarjetaRecordatorioProperties.description:
                this.properties.description = newValue
                break;
            case tarjetaRecordatorioProperties.title:
                this.properties.title = newValue
                break;
            default:
                break;
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/components/tarjetaRecordatorio/tarjetaRecordatorio.css")
            this.shadowRoot?.appendChild(link)

            const contenedorTarjeta = this.ownerDocument.createElement("div")
            contenedorTarjeta.classList.add("contenedorTarjeta")
            this.shadowRoot.appendChild(contenedorTarjeta)

            const title = this.ownerDocument.createElement("h1")
            title.innerText = this.properties.title
            contenedorTarjeta.appendChild(title)

            const deescription = this.ownerDocument.createElement("h1")
            deescription.innerText = this.properties.description
            contenedorTarjeta.appendChild(deescription)
        }

    }
}

customElements.define("tarjeta-recordatorio", tarjetaRecordatorio)