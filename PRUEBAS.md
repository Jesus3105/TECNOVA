# Pruebas y resultados

Realizadas el 14 de noviembre de 2026. Las pruebas de navegador utilizaron Chrome remoto con el proyecto servido por HTTP. Los anchos alternativos se probaron dentro de iframes con sus propios viewports CSS; no equivalen a hardware ni a emulación completa de sistemas operativos móviles.

| Prueba | Resultado y alcance |
| --- | --- |
| Apertura en navegador | Correcta: se renderizó la landing completa. |
| Logotipos | Ambos cargados, con naturalWidth mayor que cero; visibles en capturas. Se verificó igualdad byte por byte con los originales correspondientes. |
| Cohete | SVG visible con astronauta, aletas y llama; contenido lateral conservado. |
| Fecha | Confirmada por el usuario: 02/12/2026 07:00 UTC−7. Conversión exacta a 14:00 UTC comprobada con JavaScript. |
| Contador en navegador | Días, horas, minutos y segundos visibles; se observaron cambios entre lecturas sucesivas. |
| Cálculo del contador | Prueba aislada con reloj simulado: 1 día, 1 hora, 1 minuto, 1 segundo; avance de un segundo; fecha vencida a cero; fecha inválida a guiones. Todas correctas. |
| Botón | Se pulsó en Chrome: apareció la cuenta, se deshabilitó durante la secuencia y volvió a habilitarse al terminar. Se repitió después de los cambios finales. |
| Animaciones | Se observó la superposición animada de cuenta regresiva y el estado final restaurado. La trayectoria y duración del vuelo se comprobaron en CSS y en el ciclo de clases; no se registró vídeo ni se midieron FPS. |
| Carga y decodificación de audio | El navegador terminó la secuencia con estado de audio disponible; no apareció la advertencia de audio no disponible. Esto verifica inicialización, reanudación y decodificación de los cuatro WAV. |
| Orden de audio | Prueba aislada con Web Audio simulado: countdown ×3, liftoff, ignition, propulsion; resultado correcto y botón restaurado. |
| Integridad de sonidos | Cuatro WAV PCM válidos: 0.18 s, 0.65 s, 0.70 s y 3.35 s. |
| Silenciar/activar | Se pulsó el control en Chrome: estado visual y aria-pressed cambiaron correctamente en ambos sentidos. |
| Viewports 320, 390, 768, 1024 y 1920 px | Inspección visual y medición del DOM: scrollWidth igual al ancho de cada viewport; ambos logos cargados y controles dentro del ancho. |
| Consola | No se observaron errores atribuibles al código de la página. Hubo mensajes de una extensión del navegador («Error sending browser metadata to extension»), externos al proyecto. |
| JavaScript | node --check para app.js y config.js: correcto. |
| Rutas y enlaces | Todas las referencias src/href locales y las anclas de index.html apuntan a archivos o destinos existentes. Los sonidos referenciados están incluidos. |
| Dependencias | Página sin CDN, npm, APIs ni rutas absolutas de archivos locales. |
| GitHub Pages | Estructura estática, rutas relativas, .nojekyll y workflow preparados. No se ejecutó una publicación real. |

## Verificaciones que no se realizaron

- No hubo escucha humana del sonido en altavoces o auriculares; no se certifican volumen percibido ni calidad acústica en un dispositivo físico.
- No se dispuso de iPhone, Android, iPad, Safari o Firefox físicos. Los viewports de Chrome comprueban distribución, no compatibilidad completa con sus motores ni restricciones específicas de audio.
- No se forzó en navegador la preferencia de movimiento reducido ni la interrupción por ocultar la pestaña; esos caminos se revisaron en código.
- No se ejecutó un validador externo W3C ni una auditoría automática de accesibilidad o rendimiento.
- No se verificaron todos los husos horarios mediante cambios del sistema; se comprobó el instante UTC explícito y el cálculo absoluto independiente de la zona del equipo.
- No se recibió una imagen independiente de la rúbrica. La revisión de cumplimiento se basó en el texto de la solicitud y los dos manuales incluidos.

## Revisión al publicar

Abre la URL de GitHub Pages en tu iPhone y en Android, pulsa INICIAR DESPEGUE, escucha los tres bips y los efectos posteriores, comprueba el control de sonido y repite la secuencia. El sistema puede silenciar o bloquear audio por sus propios ajustes. El proyecto no solicita reproducción automática al entrar.
