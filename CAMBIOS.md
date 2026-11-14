# Revisión y cambios

## Análisis previo, antes de modificar

Se extrajo el original en una carpeta independiente y se leyeron íntegramente sus tres archivos:

| Archivo original | Tamaño | Hallazgo |
| --- | ---: | --- |
| README.txt | 577 bytes | Describe versión 7, contenido lateral y apertura directa. |
| index.html | 402463 bytes | Contiene toda la estructura, CSS, JavaScript, un logo base64 y dos SVG en línea. |
| assets/tecnova-logo.png | 283110 bytes | PNG RGBA de 465 × 536, idéntico al logo embebido en HTML. |

El proyecto no incluía fuentes locales, archivos de sonido, configuraciones ni otros recursos multimedia. Referenciaba Google Fonts para Manrope y Orbitron. Se revisaron su navegación por anclas, todas las reglas CSS y sus consultas de medios, temporizadores, la cuenta 3–2–1, movimiento reducido, bloqueo del botón y restauración tras el lanzamiento. El texto lateral original era «Equipo de lanzamiento / TEC NOVA» y se conservó.

Se inventariaron ambos ZIP de identidad: cuatro archivos Rocket Tec y seis TECNOVA. Se revisaron formatos y dimensiones de cada recurso y los dos manuales de identidad. Se seleccionó el horizontal oficial Rocket Tec (2172 × 724, RGBA) y se mantuvo el logo propio existente. Los gafetes y las variantes no requeridas no son dependencias de la página y no se añadieron al paquete de ejecución.

No se adjuntó una imagen independiente con la rúbrica en esta solicitud; se aplicaron los requisitos escritos por el usuario. Los manuales sí estaban dentro de los ZIP.

## Correcciones y mejoras

- Identificación del equipo 5, grupo 101, con los seis nombres suministrados en esta solicitud.
- Incorporación del PNG oficial Rocket Tec Sinaloa 2026 sin modificar sus bytes.
- Conservación del logo propio, del cohete con astronauta, su proporción, el cohete ambiental, el fondo espacial y todo el texto lateral original.
- Interfaz adaptada a la paleta oficial Rocket Tec. El dorado existente se conserva dentro de la identidad TECNOVA y la ilustración original.
- Tipografías locales según el manual oficial y alternativas seguras sin descarga externa.
- HTML, CSS y JavaScript separados. Eliminación de la copia base64 del logo, de dependencias externas de fuentes y de declaraciones CSS sobrescritas para selectores idénticos. Se mantienen consultas responsivas necesarias.
- Cabecera con ambos logos, fondo blanco y margen de protección para el oficial, imágenes con object-fit y dimensiones proporcionales.
- Identificación en dos columnas sin alterar la estructura lateral del escritorio; apilado en móviles.
- Contador de cuatro campos, con actualización real cada segundo, fecha explícita UTC−7, formatos de Sinaloa y cierre sin valores negativos. Se corrige el comportamiento de elementos hidden frente a display:grid.
- Fecha del original confirmada expresamente por el usuario antes de adoptarla.
- Cuatro WAV incluidos y carga local. Web Audio se crea y reanuda dentro del gesto del usuario. Se programa el bip por cada número, un efecto especial de despegue, encendido y propulsión durante el vuelo.
- Control de sonido, bloqueo de doble lanzamiento, parada de fuentes de audio y recuperación al finalizar o interrumpir.
- Se añade vibración visual de la llama durante el vuelo, manteniendo la trayectoria original y el soporte de movimiento reducido.
- Textos alternativos, foco visible, estados accesibles y objetivos táctiles de al menos 44 px en los controles principales.
- README, resultados de pruebas, .nojekyll y flujo de GitHub Pages.

## Integridad

El archivo original no se sobrescribió ni se volvió a comprimir. SHA-256 del original:

`c1102cef7711ef780a798eca03606ddee04be143e6a075934b7b35917d87874d`
