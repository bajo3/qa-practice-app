# Casos de Prueba - QA Practice App

---

## TC01 - Registro exitoso
**Precondiciones:** La aplicación está abierta en `index.html`.  
**Prioridad:** Alta  
**Pasos:**  
1. Ir a la sección **Registro**.  
2. Ingresar un email válido (ej: `usuario@test.com`).  
3. Ingresar una contraseña (ej: `12345`).  
4. Hacer clic en **Registrar**.  
**Resultado esperado:** Aparece el mensaje **"Registro exitoso."** en verde.  

---

## TC02 - Registro con campos vacíos
**Precondiciones:** App abierta en `index.html`.  
**Prioridad:** Alta  
**Pasos:**  
1. Ir a la sección **Registro**.  
2. Dejar email y contraseña vacíos.  
3. Hacer clic en **Registrar**.  
**Resultado esperado:** Aparece el mensaje **"Completa todos los campos."**.  

---

## TC03 - Registro con email inválido
**Precondiciones:** App abierta en `index.html`.  
**Prioridad:** Media  
**Pasos:**  
1. Ir a la sección **Registro**.  
2. Ingresar un email sin arroba (ej: `usuario.test.com`).  
3. Ingresar una contraseña válida.  
4. Hacer clic en **Registrar**.  
**Resultado esperado:** El sistema debería **rechazar el email inválido** y mostrar un mensaje de error (Actualmente no lo hace → *Bug esperado*).  

---

## TC04 - Login exitoso
**Precondiciones:** Usuario registrado previamente en la app.  
**Prioridad:** Alta  
**Pasos:**  
1. Ir a la sección **Login**.  
2. Ingresar email y contraseña correctos.  
3. Hacer clic en **Iniciar Sesión**.  
**Resultado esperado:** Redirige al **Dashboard**.  

---

## TC05 - Login fallido (credenciales incorrectas)
**Precondiciones:** App abierta en `index.html`.  
**Prioridad:** Alta  
**Pasos:**  
1. Ir a la sección **Login**.  
2. Ingresar email incorrecto o contraseña incorrecta.  
3. Hacer clic en **Iniciar Sesión**.  
**Resultado esperado:** Aparece el mensaje **"Credenciales incorrectas."**.  

---

## TC06 - Agregar producto a la lista
**Precondiciones:** Usuario logueado y en `dashboard.html`.  
**Prioridad:** Alta  
**Pasos:**  
1. Escribir el nombre de un producto en el campo de texto.  
2. Hacer clic en **Agregar**.  
**Resultado esperado:** El producto aparece en la tabla de la lista.  

---

## TC07 - Cerrar sesión
**Precondiciones:** Usuario logueado y en `dashboard.html`.  
**Prioridad:** Alta  
**Pasos:**  
1. Hacer clic en el botón **Cerrar sesión**.  
**Resultado esperado:** Redirige a `index.html` y borra la sesión almacenada en localStorage.  




















