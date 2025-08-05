let usuarios = [];
let productos = [];

function registrar() {
    const email = document.getElementById("regEmail").value;
    const pass = document.getElementById("regPass").value;
    const msg = document.getElementById("msgRegistro");

    if (!email || !pass) {
        msg.textContent = "Completa todos los campos.";
        return;
    }
    if (usuarios.find(u => u.email === email)) {
        msg.textContent = "El email ya está registrado.";
        return;
    }
    usuarios.push({ email, pass });
    msg.style.color = "green";
    msg.textContent = "Registro exitoso.";
}

function login() {
    const email = document.getElementById("logEmail").value;
    const pass = document.getElementById("logPass").value;
    const msg = document.getElementById("msgLogin");

    const user = usuarios.find(u => u.email === email && u.pass === pass);
    if (user) {
        localStorage.setItem("usuario", email);
        window.location.href = "dashboard.html";
    } else {
        msg.textContent = "Credenciales incorrectas.";
    }
}

function logout() {
    localStorage.removeItem("usuario");
    window.location.href = "index.html";
}

function agregarProducto() {
    const prod = document.getElementById("producto").value;
    if (prod) {
        productos.push(prod);
        mostrarProductos();
        document.getElementById("producto").value = "";
    }
}

function mostrarProductos() {
    const tabla = document.getElementById("tablaProductos");
    tabla.innerHTML = "";
    productos.forEach(p => {
        const fila = document.createElement("tr");
        const celda = document.createElement("td");
        celda.textContent = p;
        fila.appendChild(celda);
        tabla.appendChild(fila);
    });
}

window.onload = function () {
    if (window.location.pathname.includes("dashboard.html")) {
        if (!localStorage.getItem("usuario")) {
            alert("Inicia sesión primero");
            window.location.href = "index.html";
        }
    }
};
