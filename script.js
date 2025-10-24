const portfolio = document.querySelector("#pipis");
async function datos(raw) {
    try {
        let consulta = await fetch(raw);
        let trabajos = await consulta.json();
        let trabajos = resultado.data;
        console.log(trabajos);

        trabajos.forEach((trabajo) => {
            portfolio.innerHTML += `
        <div class="col">
          <div class="card shadow-sm">
            <img src="${trabajo.imagen}" class="card-img-top" alt="${trabajo.titulo}" />
            <div class="card-body">
              <p class="card-text">${trabajo.titulo}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">${trabajo.categoria}</button>
                </div>
                <small class="text-body-secondary">Reciente</small>
              </div>
            </div>
          </div>
        </div>
      `;
        });
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}
datos("https://api.myjson.online/v1/records/85186615-bc56-4626-a877-6427dac8cc12");