# TECNOVA v9 · Corrección para GitHub Pages

## Qué subir

Extrae este ZIP. Sube **el contenido de esta carpeta** al repositorio, con `index.html` en la raíz seleccionada en GitHub Pages. No subas el ZIP sin extraer.

**Esta versión funciona subiendo solamente `index.html`.** Incluye dentro del HTML los dos logotipos originales, los cuatro sonidos WAV, el CSS, la fecha y todo el JavaScript. No solicita imágenes, sonidos, fuentes ni scripts externos. Se puede abrir directamente en el navegador sin servidor.

Los archivos `styles.css`, `config.js`, `app.js` y `assets/` se conservan como fuentes y recursos de trabajo. El archivo publicado es autocontenido; cambiar los archivos separados no modifica automáticamente el HTML integrado.

## Publicar

1. Reemplaza el `index.html` anterior por el de este ZIP en la raíz de tu repositorio.
2. Confirma el cambio con un commit y espera a que termine el despliegue de Pages.
3. Si ya usabas publicación desde una rama, conserva **Settings → Pages → Deploy from a branch → main → /(root)**.
4. Si prefieres el workflow incluido, sube también `.github/workflows/pages.yml` y elige **Settings → Pages → GitHub Actions**.
5. Abre tu URL de GitHub Pages y recarga. Si ves la versión antigua, cierra la pestaña y vuelve a abrirla.

No se ha modificado tu repositorio directamente ni se ha probado su URL: no la proporcionaste.

## Sonido

Pulsa **INICIAR DESPEGUE** con «Sonido activado». Los tres números, ¡DESPEGUE!, encendido y propulsión usan los WAV integrados. El audio se habilita en el gesto de pulsación para cumplir las restricciones del navegador; no se reproduce al abrir la página. La secuencia termina y permite repetir.

En iPhone revisa el volumen multimedia y el modo silencio si no se escucha. La integración elimina fallos por archivos ausentes; no puede anular el silencio o las restricciones del dispositivo.

## Datos y diseño conservados

TECNOVA · Equipo 5 · Grupo 101. Jesús Villalba, Ximena Jiménez, Natalia Vega, Alan de Ávila, Ronaldo García y Jesús García. Lanzamiento confirmado: 2 de diciembre de 2026, 07:00 Sinaloa (UTC−7).

Se conservan los logotipos sin modificar sus bytes, el cohete original, el contenido lateral, el contador y la distribución responsiva. Los manuales recomiendan Bahnschrift para títulos y Arial para texto; se usan alternativas locales cuando Bahnschrift no está instalada.

La documentación de v8 queda en `CAMBIOS.md` y `PRUEBAS.md`. La verificación específica de esta corrección está en `CORRECCION-v9.md`.
