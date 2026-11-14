# Corrección v9: recursos integrados para GitHub Pages

El usuario informó que en su publicación no aparecían los logotipos ni se escuchaba el cohete. No se proporcionó la URL del repositorio o de Pages; no se ha atribuido una causa definitiva ni modificado el repositorio.

## Solución

- `index.html` contiene los dos PNG originales como data URI, sin modificar los bytes de las imágenes.
- Los cuatro WAV originales se incluyen como base64 dentro de un bloque JSON del HTML. Se convierten directamente a ArrayBuffer y se decodifican con Web Audio, sin fetch ni solicitudes a rutas de assets.
- CSS, configuración y JavaScript también están integrados. Subir únicamente el nuevo index.html basta para ejecutar la página completa.
- AudioContext se reanuda dentro de la pulsación; se inicia un buffer silencioso de un fotograma para mejorar la inicialización en Safari. Se conserva la secuencia 3–2–1, efecto de despegue, encendido y propulsión, así como el control de silencio.
- Se conservan todos los archivos separados en el paquete. Se actualizó README con instrucciones específicas para sustituir index.html en GitHub.
- No se cambió la fecha confirmada, los nombres, la ilustración, el contenido lateral ni el diseño responsivo.

## Pruebas específicas

- Chrome por HTTP: apertura de la página autocontenida en una ruta independiente.
- Ambos logotipos con naturalWidth > 0; ambos src comienzan por data:image.
- Cero scripts externos y cero hojas de estilo externas en el DOM.
- Inspección estática: ninguna llamada fetch ni referencias externas para logos, sonidos o código.
- Los PNG integrados y los cuatro WAV decodificados desde base64 coinciden byte por byte con los archivos del paquete.
- Los cuatro WAV tienen cabeceras válidas y muestras de audio.
- Pulsación real del botón: cuenta regresiva visible, botón deshabilitado durante la secuencia y restaurado al terminar.
- La secuencia finalizó sin advertencia de audio no disponible, lo que comprueba que el contexto se activó y los cuatro WAV se decodificaron en Chrome.
- node --check: app.js y los dos scripts ejecutables integrados, correctos.
- Sin errores observados atribuibles a la página; el entorno registró errores de una extensión de Chrome ajena al proyecto.
- Comprobación de integridad del ZIP: correcta.

No se realizó escucha humana en altavoces, prueba en un iPhone/Android físico ni verificación de la URL real de GitHub Pages. La corrección elimina dependencias de recursos ausentes; no permite anular el modo silencio, volumen multimedia o restricciones del sistema operativo.

Las pruebas de tamaños documentadas en PRUEBAS.md corresponden a v8. Esta corrección conserva su CSS; no se volvió a ejecutar toda la matriz responsiva.
