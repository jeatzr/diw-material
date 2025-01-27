# Resoluciones de Vídeo y Formatos para la Web: Guía Completa

Esta guía cubre las resoluciones de vídeo más utilizadas, relaciones de aspecto y los formatos más comunes para la web. Entender estos conceptos es esencial para optimizar vídeos para diferentes plataformas y dispositivos.

---

## **1. ¿Qué es la Resolución de Vídeo?**

La resolución de vídeo indica el número de píxeles en cada cuadro de un vídeo. Por ejemplo, una resolución de **1920x1080** significa:

- **1920 píxeles de ancho.**
- **1080 píxeles de alto.**

La calidad del vídeo mejora con una resolución más alta, pero también aumenta el peso del archivo.

---

## **2. Resoluciones Comunes**

| **Nombre**          | **Resolución** | **Píxeles Totales** | **Relación de Aspecto** | **Uso Común**                        |
| ------------------- | -------------- | ------------------- | ----------------------- | ------------------------------------ |
| **480p (SD)**       | 854x480        | 409,920             | 16:9                    | Televisión estándar, vídeos móviles. |
| **720p (HD)**       | 1280x720       | 921,600             | 16:9                    | YouTube, transmisión básica.         |
| **1080p (Full HD)** | 1920x1080      | 2,073,600           | 16:9                    | YouTube, Blu-ray, videojuegos.       |
| **1440p (2K)**      | 2560x1440      | 3,686,400           | 16:9                    | Monitores de alta gama, gaming.      |
| **4K (UHD)**        | 3840x2160      | 8,294,400           | 16:9                    | Televisores UHD, contenido premium.  |
| **8K (UHD)**        | 7680x4320      | 33,177,600          | 16:9                    | Producciones cinematográficas, lujo. |

---

## **3. Relación de Aspecto**

La relación de aspecto es la proporción entre el ancho y el alto del vídeo. Es fundamental para garantizar que los vídeos se vean correctamente en diferentes dispositivos.

### **Relaciones de Aspecto Comunes**

| **Relación de Aspecto** | **Descripción**               | **Ejemplo de Uso**             |
| ----------------------- | ----------------------------- | ------------------------------ |
| **4:3**                 | Formato tradicional cuadrado. | Televisión antigua.            |
| **16:9**                | Formato panorámico estándar.  | TV moderna, YouTube.           |
| **21:9**                | Formato ultra-panorámico.     | Películas, monitores gaming.   |
| **1:1**                 | Formato cuadrado.             | Instagram, redes sociales.     |
| **9:16**                | Vertical, ideal para móviles. | Historias de Instagram/TikTok. |

---

## **4. Formatos de Vídeo Comunes para la Web**

### **1. MP4 (H.264)**

- **Descripción**: Es el formato más ampliamente soportado en navegadores y dispositivos.
- **Ventajas**:
  - Excelente relación calidad-tamaño.
  - Compatible con casi todas las plataformas.
- **Desventajas**:
  - No es tan eficiente como formatos más nuevos (WebM, AV1).
- **Uso Común**:
  - YouTube, streaming de baja latencia, plataformas educativas.

### **2. WebM (VP8/VP9)**

- **Descripción**: Formato moderno y eficiente desarrollado por Google.
- **Ventajas**:
  - Archivos más ligeros que MP4.
  - Soporte para transparencia.
- **Desventajas**:
  - No compatible con todos los navegadores (especialmente en dispositivos Apple).
- **Uso Común**:
  - Navegadores modernos (Chrome, Firefox, Edge), vídeos interactivos.

### **3. AV1**

- **Descripción**: Formato emergente con la mejor eficiencia de compresión.
- **Ventajas**:
  - Archivos significativamente más pequeños sin perder calidad.
  - Ideal para streaming adaptativo y resolución 4K+.
- **Desventajas**:
  - Codificación más lenta y soporte limitado (navegadores más antiguos no lo admiten).
- **Uso Común**:
  - YouTube, Netflix, transmisiones de alta gama.

### **4. Ogg/Theora**

- **Descripción**: Un formato abierto de vídeo menos utilizado hoy en día.
- **Ventajas**:
  - Libre de patentes.
- **Desventajas**:
  - Baja eficiencia en comparación con MP4 y WebM.
- **Uso Común**:
  - Proyectos de código abierto, aplicaciones educativas.

### **5. MOV**

- **Descripción**: Formato desarrollado por Apple, muy utilizado en macOS y iOS.
- **Ventajas**:
  - Alta calidad.
- **Desventajas**:
  - Archivos grandes y soporte limitado fuera del ecosistema Apple.
- **Uso Común**:
  - Edición de vídeo, archivos fuente en producciones.

### **6. MKV**

- **Descripción**: Contenedor de vídeo flexible que admite múltiples pistas de audio y subtítulos.
- **Ventajas**:
  - Altamente personalizable.
- **Desventajas**:
  - Soporte limitado en navegadores web.
- **Uso Común**:
  - Archivos de alta calidad, Blu-ray rip.

---

## **5. Consejos para Seleccionar un Formato**

1. **Usa MP4 (H.264) como estándar**:

   - Es el formato más universal y ampliamente soportado.

2. **Opta por WebM o AV1 para vídeos modernos**:

   - Si tu público usa navegadores modernos, estos formatos reducirán el tamaño de los archivos.

3. **Proporciona varios formatos si es necesario**:

   - Usa `<source>` en el elemento `<video>` para ofrecer compatibilidad.
   - Ejemplo:
     ```html
     <video controls>
       <source src="video.webm" type="video/webm" />
       <source src="video.mp4" type="video/mp4" />
       Your browser does not support the video tag.
     </video>
     ```

4. **Adapta los vídeos al uso**:
   - **Corto plazo:** MP4 es confiable.
   - **Mediano/Largo plazo:** AV1 es una excelente opción para el futuro.

---

## **6. Relación entre Resolución y Formatos**

| **Resolución**      | **Formatos Recomendados** | **Casos de Uso**                     |
| ------------------- | ------------------------- | ------------------------------------ |
| **480p (SD)**       | MP4, WebM                 | Conexiones lentas, móviles antiguos. |
| **720p (HD)**       | MP4, WebM                 | Streaming básico, redes sociales.    |
| **1080p (Full HD)** | MP4, WebM, AV1            | YouTube, transmisiones de calidad.   |
| **4K (UHD)**        | MP4, WebM, AV1            | Televisores UHD, gaming, streaming.  |
| **8K (UHD)**        | AV1                       | Producciones cinematográficas.       |

---

# Guía: Vídeos Adaptativos en la Web

En esta guía aprenderás a insertar vídeos en una página web que se adapten a diferentes resoluciones y formatos, usando tanto HTML5 nativo como herramientas avanzadas como **FFmpeg**, **HLS**, y librerías como **Video.js** o **Plyr**.

---

## **Insertar vídeos adaptativos con HTML5**

El elemento `<video>` permite definir múltiples versiones de un vídeo a través de etiquetas `<source>`. Esto permite:

1. Adaptar la calidad del vídeo al tamaño del navegador.
2. Servir formatos compatibles con distintos navegadores.

### **Ejemplo básico**

```html
<video controls>
  <source src="video-720p.mp4" type="video/mp4" media="(max-width: 720px)" />
  <source src="video-1080p.mp4" type="video/mp4" media="(min-width: 721px)" />
  Your browser does not support the video tag.
</video>
```

#### **Cómo funciona:**

1. El navegador selecciona el `<source>` que mejor se ajuste a las condiciones del `media` y `type`.
2. Si no se encuentra un `<source>` compatible, muestra el mensaje de respaldo definido.

---

## **Adaptar vídeos a diferentes resoluciones y formatos**

### **Ejemplo avanzado: Resoluciones + Formatos**

```html
<video controls>
  <!-- Formato WebM para resoluciones menores -->
  <source src="video-480p.webm" type="video/webm" media="(max-width: 480px)" />
  <source src="video-720p.webm" type="video/webm" media="(max-width: 720px)" />

  <!-- Formato MP4 para resoluciones mayores -->
  <source src="video-1080p.mp4" type="video/mp4" media="(min-width: 721px)" />
  <source src="video-4k.mp4" type="video/mp4" media="(min-width: 1441px)" />

  Your browser does not support the video tag.
</video>
```

#### **Ventajas:**

- Los navegadores más modernos priorizarán **WebM** (menor peso y mayor calidad).
- Si no soportan **WebM**, seleccionarán el formato **MP4**.

---

## **Optimización de vídeos con FFmpeg**

**FFmpeg** es una herramienta de línea de comandos que permite convertir, redimensionar y comprimir vídeos de manera eficiente.

### **Generar vídeos en diferentes resoluciones**

Usa los siguientes comandos para crear versiones optimizadas de un vídeo en distintas resoluciones:

1. **480p (640px de ancho):**

```bash
ffmpeg -i input.mp4 -vf scale=640:-1 -c:v libx264 -crf 23 -preset fast output-480p.mp4
```

2. **720p (1280px de ancho):**

```bash
ffmpeg -i input.mp4 -vf scale=1280:-1 -c:v libx264 -crf 23 -preset fast output-720p.mp4
```

3. **1080p (1920px de ancho):**

```bash
ffmpeg -i input.mp4 -vf scale=1920:-1 -c:v libx264 -crf 23 -preset fast output-1080p.mp4
```

4. **4K (3840px de ancho):**

```bash
ffmpeg -i input.mp4 -vf scale=3840:-1 -c:v libx264 -crf 23 -preset fast output-4k.mp4
```

### **Convertir a formatos modernos como WebM**

Para convertir un vídeo a **WebM**:

```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 2M -c:a libopus output-1080p.webm
```

---

## **Streaming Adaptativo: HLS (HTTP Live Streaming)**

El **HLS** es un protocolo de transmisión adaptativa que divide un vídeo en pequeños fragmentos y sirve la calidad más adecuada según el ancho de banda del usuario.

### **Generar vídeos para HLS con FFmpeg**

1. Crea diferentes resoluciones de un vídeo:

```bash
ffmpeg -i input.mp4 -vf scale=640:-1 -c:v libx264 -crf 23 -preset fast -hls_segment_filename "480p_%03d.ts" -hls_time 10 -hls_playlist_type vod 480p.m3u8
ffmpeg -i input.mp4 -vf scale=1280:-1 -c:v libx264 -crf 23 -preset fast -hls_segment_filename "720p_%03d.ts" -hls_time 10 -hls_playlist_type vod 720p.m3u8
```

2. Genera un archivo de manifiesto `master.m3u8` que combine las calidades:

```bash
echo "#EXTM3U
#EXT-X-STREAM-INF:BANDWIDTH=800000,RESOLUTION=640x360
480p.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=1400000,RESOLUTION=1280x720
720p.m3u8" > master.m3u8
```

3. Implementa el streaming en tu página:

```html
<video controls>
  <source src="master.m3u8" type="application/vnd.apple.mpegurl" />
  Your browser does not support HLS streaming.
</video>
```

---

## **Usar Librerías para Reproducción de Vídeos**

### **1. Video.js**

Una librería ligera para reproducir vídeos con soporte para múltiples resoluciones y formatos.

#### **Ejemplo con Video.js**

```html
<link href="https://vjs.zencdn.net/8.0.4/video-js.css" rel="stylesheet" />
<script src="https://vjs.zencdn.net/8.0.4/video.min.js"></script>

<video
  id="my-video"
  class="video-js"
  controls
  preload="auto"
  width="640"
  height="360"
>
  <source src="video-480p.mp4" type="video/mp4" label="480p" />
  <source src="video-720p.mp4" type="video/mp4" label="720p" />
  <source src="video-1080p.mp4" type="video/mp4" label="1080p" />
</video>

<script>
  const player = videojs("my-video");
</script>
```

---

### **2. Plyr**

**Plyr** es una librería moderna que soporta vídeos HTML5, YouTube y Vimeo, con un diseño elegante.

#### **Ejemplo con Plyr**

```html
<link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
<script src="https://cdn.plyr.io/3.7.8/plyr.js"></script>

<video id="player" controls>
  <source src="video-480p.mp4" type="video/mp4" label="480p" />
  <source src="video-720p.mp4" type="video/mp4" label="720p" />
  <source src="video-1080p.mp4" type="video/mp4" label="1080p" />
</video>

<script>
  const player = new Plyr("#player");
</script>
```

---

## **Conclusión**

- **Resoluciones:** Elige la resolución según el dispositivo y el público objetivo.
- **Relación de aspecto:** Mantén un estándar como 16:9, pero adapta para casos específicos (9:16 para móviles).
- **Formatos:** MP4 es el estándar más universal, pero considera WebM o AV1 para proyectos modernos.

- Utiliza `<video>` con múltiples `<source>` para adaptarte a diferentes resoluciones y formatos.
- Usa **FFmpeg** para generar versiones optimizadas de tus vídeos.
- Si necesitas streaming adaptativo, considera **HLS** o **DASH**.
- Apóyate en librerías como **Video.js** o **Plyr** para enriquecer la experiencia del usuario.
