const servicios = [
    {
        id: 1,
        titulo: "Mecánica general",
        descripcion: "Revisión completa de motor, frenos y suspensión con diagnóstico incluido.",
        precio: 3500
    },
    {
        id: 2,
        titulo: "Diagnóstico computarizado",
        descripcion: "Escaneo electrónico de todas las unidades de control del vehículo.",
        precio: 1800
    },
    {
        id: 3,
        titulo: "Cambio de aceite y filtros",
        descripcion: "Aceite sintético premium + filtro de aceite y aire incluidos.",
        precio: 2200
    },
    {
        id: 4,
        titulo: "Detailing y limpieza premium",
        descripcion: "Lavado, encerado y limpieza profunda de interior y tapizados.",
        precio: 2900
    }
];

function renderServicios() {
    const contenedor = document.getElementById("contenedor-tarjetas");
    if (!contenedor) return;

    contenedor.innerHTML = servicios
        .map((servicio) => {
            return `
                <div class="col-md-3 col-sm-6 mb-4">
                    <div class="card tarjeta-servicio p-3 text-center">
                        <div class="numero-servicio mx-auto">${servicio.id}</div>
                        <div class="card-body">
                            <h5 class="card-title">${servicio.titulo}</h5>
                            <p class="card-text">${servicio.descripcion}</p>
                            <p class="precio-servicio">USD ${servicio.precio.toLocaleString("es-UY")}</p>
                        </div>
                    </div>
                </div>
            `;
        })
        .join("");
}

const catalogo = [
    { id: 1, titulo: "Toyota Corolla 2024", descripcion: "Sedán 0km, caja automática, full equipo.", precio: 24500, categoria: "0km", imagen: `${RUTA_BASE}dist/assets/imagenes/toyotacorolla.png` },
    { id: 2, titulo: "Volkswagen T-Cross 2024", descripcion: "SUV 0km, techo panorámico, Apple CarPlay.", precio: 27900, categoria: "0km", imagen: `${RUTA_BASE}dist/assets/imagenes/suvpepino.png` },
    { id: 3, titulo: "Chevrolet Onix 2024", descripcion: "Hatchback 0km, motor turbo 1.0, muy económico.", precio: 19800, categoria: "0km", imagen: `${RUTA_BASE}dist/assets/imagenes/ONIX.png` },
    { id: 4, titulo: "Fiat Cronos 2024", descripcion: "Sedán 0km, gran baúl, ideal para familia.", precio: 20500, categoria: "0km", imagen: `${RUTA_BASE}dist/assets/imagenes/fiatcronos.png` },
    { id: 5, titulo: "Peugeot 208 2024", descripcion: "Hatchback 0km, diseño deportivo, bajo consumo.", precio: 21300, categoria: "0km", imagen: `${RUTA_BASE}dist/assets/imagenes/peugeot208.png` },

    { id: 6, titulo: "Volkswagen Golf 2023", descripcion: "Único dueño, 15.000 km, service oficial al día.", precio: 21900, categoria: "usado", imagen: `${RUTA_BASE}dist/assets/imagenes/golf2023.png` },
    { id: 7, titulo: "Ford Ranger 2022", descripcion: "4x4 diésel, lista para el trabajo o la aventura.", precio: 32000, categoria: "usado", imagen: `${RUTA_BASE}dist/assets/imagenes/fordranger.png` },
    { id: 8, titulo: "Honda Civic 2021", descripcion: "Excelente estado, 40.000 km, service oficial.", precio: 23400, categoria: "usado", imagen: `${RUTA_BASE}dist/assets/imagenes/hondacivic.png` },
    { id: 9, titulo: "Nissan Kicks 2022", descripcion: "SUV usada, cámara de retroceso, poco uso.", precio: 24800, categoria: "usado", imagen: `${RUTA_BASE}dist/assets/imagenes/nissankicks.png` },
    { id: 10, titulo: "Renault Sandero 2020", descripcion: "Ideal primer auto, bajo kilometraje, financiación disponible.", precio: 14200, categoria: "usado", imagen: `${RUTA_BASE}dist/assets/imagenes/RenaultSandero2020.png` },

    { id: 11, titulo: "Kit de pastillas de freno", descripcion: "Juego completo delantero, compatible multimarca.", precio: 85, categoria: "repuestos", imagen: `${RUTA_BASE}dist/assets/imagenes/PastillasDeFreno.png` },
    { id: 12, titulo: "Batería 12V 60Ah", descripcion: "Batería libre de mantenimiento, garantía 12 meses.", precio: 140, categoria: "repuestos", imagen: `${RUTA_BASE}dist/assets/imagenes/Bateria12v.png` },
    { id: 13, titulo: "Juego de amortiguadores", descripcion: "Par delantero a gas, mejora estabilidad y confort.", precio: 210, categoria: "repuestos", imagen: `${RUTA_BASE}dist/assets/imagenes/Amortiguadores.png` },
    { id: 14, titulo: "Filtro de aire deportivo", descripcion: "Mayor flujo de aire, lavable y reutilizable.", precio: 45, categoria: "repuestos", imagen: `${RUTA_BASE}dist/assets/imagenes/FiltroDeAire.png` },
    { id: 15, titulo: "Cubre volante deportivo", descripcion: "Cuero sintético antideslizante, varios colores.", precio: 25, categoria: "repuestos", imagen: `${RUTA_BASE}dist/assets/imagenes/Cubrevolante.png` }
];

const NOMBRES_CATEGORIA = {
    "0km": "Autos 0KM",
    "usado": "Autos Usados",
    "repuestos": "Repuestos y Accesorios"
};

function tarjetaProductoHTML(producto) {
    return `
        <div class="col-md-4 col-sm-6 mb-4">
            <div class="card tarjeta-producto shadow-sm">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
                <div class="card-body">
                    <span class="badge badge-categoria mb-2">${NOMBRES_CATEGORIA[producto.categoria]}</span>
                    <h5 class="card-title">${producto.titulo}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="precio-auto">USD ${producto.precio.toLocaleString("es-UY")}</p>
                </div>
            </div>
        </div>
    `;
}

function renderCatalogoPreview() {
    const contenedor = document.getElementById("contenedor-catalogo-preview");
    if (!contenedor) return;

    contenedor.innerHTML = catalogo
        .slice(0, 3)
        .map(tarjetaProductoHTML)
        .join("");
}

function renderCatalogoCompleto() {
    const contenedor = document.getElementById("contenedor-catalogo-completo");
    if (!contenedor) return;

    const categorias = ["0km", "usado", "repuestos"];

    contenedor.innerHTML = categorias
        .map((cat) => {
            const productosDeCategoria = catalogo.filter((p) => p.categoria === cat);
            const tarjetas = productosDeCategoria.map(tarjetaProductoHTML).join("");

            return `
                <div class="mb-5">
                    <h3 class="titulo-categoria mb-4">${NOMBRES_CATEGORIA[cat]}</h3>
                    <div class="row">
                        ${tarjetas}
                    </div>
                </div>
            `;
        })
        .join("");
}

document.addEventListener("DOMContentLoaded", () => {
    renderServicios();
    renderCatalogoPreview();
    renderCatalogoCompleto();
});     