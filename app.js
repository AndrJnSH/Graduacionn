const select = document.getElementById("mesa");
const resultado = document.getElementById("resultado");
const numeroMesa = document.getElementById("numeroMesa");
const zona = document.getElementById("zona");
const ubicacion = document.getElementById("ubicacion");
const listaFamilias = document.getElementById("listaFamilias");
const contenedorMesas = document.getElementById("mesas");
const buscar = document.getElementById("buscar");
const coincidencias = document.getElementById("coincidencias");

contenedorMesas.style.gridTemplateColumns = `repeat(${COLUMNAS}, 1fr)`;

const filas = Math.ceil(mesas.length / COLUMNAS);
const nombresFila = filas >= 3
  ? ["Cerca de la salida del templo", "Zona central", "Zona del fondo"]
  : ["Cerca de la salida del templo", "Zona del fondo"];

// Deriva zona y ubicación a partir de la posición de la mesa en el plano
function posicion(numero) {
  const idx = numero - 1;
  const fila = Math.floor(idx / COLUMNAS);
  const col = idx % COLUMNAS;
  const lados = COLUMNAS === 4
    ? ["lado izquierdo", "centro-izquierda", "centro-derecha", "lado derecho"]
    : Array.from({ length: COLUMNAS }, (_, i) => `columna ${i + 1}`);
  const nombreZona = nombresFila[Math.min(Math.floor(fila * nombresFila.length / filas), nombresFila.length - 1)];
  return { zona: nombreZona, ubicacion: `${nombreZona}, fila ${fila + 1} de ${filas}, ${lados[col]}` };
}

// Llenar el select y dibujar el plano
mesas.forEach(m => {
  const op = document.createElement("option");
  op.value = m.numero;
  op.textContent = "Mesa " + m.numero;
  select.appendChild(op);

  const el = document.createElement("div");
  el.className = "mesa";
  el.dataset.mesa = m.numero;
  el.textContent = m.numero;
  el.addEventListener("click", () => {
    select.value = m.numero;
    mostrar(m);
    resultado.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
  contenedorMesas.appendChild(el);
});

function mostrar(m) {
  const p = posicion(m.numero);
  numeroMesa.textContent = m.numero;
  zona.textContent = p.zona;
  ubicacion.textContent = "📍 " + p.ubicacion;

  listaFamilias.innerHTML = "";
  m.familias.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    listaFamilias.appendChild(li);
  });

  resultado.classList.remove("oculto");
  document.querySelectorAll(".mesa").forEach(e =>
    e.classList.toggle("activa", Number(e.dataset.mesa) === m.numero)
  );
}

select.addEventListener("change", () => {
  const m = mesas.find(x => x.numero === Number(select.value));
  if (!m) {
    resultado.classList.add("oculto");
    document.querySelectorAll(".mesa").forEach(e => e.classList.remove("activa"));
    return;
  }
  mostrar(m);
});

// Buscador por nombre (ignora acentos y mayúsculas)
const normalizar = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

buscar.addEventListener("input", () => {
  const q = normalizar(buscar.value.trim());
  coincidencias.innerHTML = "";
  if (q.length < 2) return;

  const hallados = [];
  mesas.forEach(m => m.familias.forEach(f => {
    if (normalizar(f).includes(q)) hallados.push({ nombre: f, mesa: m });
  }));

  if (!hallados.length) {
    const li = document.createElement("li");
    li.className = "vacio";
    li.textContent = "Sin resultados";
    coincidencias.appendChild(li);
    return;
  }

  hallados.slice(0, 12).forEach(h => {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.type = "button";
    b.innerHTML = `<span></span><strong>Mesa ${h.mesa.numero}</strong>`;
    b.firstChild.textContent = h.nombre;
    b.addEventListener("click", () => {
      select.value = h.mesa.numero;
      mostrar(h.mesa);
      resultado.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    li.appendChild(b);
    coincidencias.appendChild(li);
  });
});
