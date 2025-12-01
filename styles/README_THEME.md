# 🎨 Guía de Personalización de Colores

## 📋 Resumen

Esta aplicación está diseñada para ser fácilmente adaptable a diferentes comunidades autónomas o federaciones. Todos los colores están centralizados en un único archivo: **`styles/theme.ts`**

## 🚀 Cómo Cambiar los Colores para una Nueva Comunidad

### Paso 1: Editar el archivo `styles/theme.ts`

Abre el archivo `styles/theme.ts` y modifica únicamente estas propiedades:

```typescript
export const AppTheme = {
  // 🎯 COLORES PRINCIPALES
  primary: "#590660",        // ← Cambiar este por el color principal de tu comunidad
  primaryDark: "#3d0442",    // ← Un tono más oscuro del color principal
  primaryLight: "#7a0887",   // ← Un tono más claro del color principal
  
  // 🎯 COLORES SECUNDARIOS
  secondary: "#d9121a",      // ← Cambiar por el color secundario
  secondaryLight: "#ff4148", // ← Un tono más claro del secundario
  
  accent: "#fbdc09",         // ← Cambiar por el color de acento
  accentDark: "#e5c708",     // ← Un tono más oscuro del acento
  
  // ... resto de colores (generalmente no necesitan cambios)
};
```

### Paso 2: Ajustar colores derivados (opcional)

Si cambias los colores principales, es recomendable ajustar también:

```typescript
overlayDark: "rgba(89, 6, 96, 0.65)",  // ← Usa los valores RGB de tu 'primary'
actionCardBg: "#2d0f33",                // ← Un tono oscuro basado en 'primary'
```

**Cómo convertir HEX a RGBA:**
- `#590660` → RGB(89, 6, 96)
- Luego usa: `rgba(89, 6, 96, 0.65)` para el overlay

### Paso 3: Probar los cambios

1. Guarda el archivo `theme.ts`
2. Reinicia la aplicación
3. Verifica que todos los colores se vean bien en:
   - Pantalla principal (Home)
   - Modo Entrenador
   - Modo Árbitro
   - Vista de Medio Campo
   - Códigos QR

## 🎨 Ejemplo: Comunidad de Madrid

```typescript
export const AppTheme = {
  primary: "#d32f2f",        // Rojo
  primaryDark: "#9a0007",    // Rojo oscuro
  primaryLight: "#ff6659",   // Rojo claro
  
  secondary: "#1976d2",      // Azul
  secondaryLight: "#63a4ff", // Azul claro
  
  accent: "#ffc107",         // Amarillo/Dorado
  accentDark: "#c79100",     // Amarillo oscuro
  
  overlayDark: "rgba(211, 47, 47, 0.65)",  // Rojo con transparencia
  actionCardBg: "#5c0606",                  // Rojo muy oscuro
  // ... resto igual
};
```

## 🎨 Ejemplo: Comunidad Valenciana

```typescript
export const AppTheme = {
  primary: "#1e88e5",        // Azul
  primaryDark: "#005cb2",    // Azul oscuro
  primaryLight: "#6ab7ff",   // Azul claro
  
  secondary: "#f57c00",      // Naranja
  secondaryLight: "#ffad42", // Naranja claro
  
  accent: "#fdd835",         // Amarillo
  accentDark: "#c6a700",     // Amarillo oscuro
  
  overlayDark: "rgba(30, 136, 229, 0.65)",  // Azul con transparencia
  actionCardBg: "#0d2342",                   // Azul muy oscuro
  // ... resto igual
};
```

## 📱 Estructura de Colores Actual (COTABAL)

### Paleta Principal
- **Primary (Morado):** `#590660` - Usado en botones principales, bordes de campo, overlay
- **Secondary (Rojo):** `#d9121a` - Usado en botones de acción, navegación
- **Accent (Amarillo):** `#fbdc09` - Usado en selectores de equipo, códigos, acentos

### Dónde se Usa Cada Color

| Color | Uso Principal |
|-------|--------------|
| `primary` | Botones principales, bordes de cancha, overlay de fondo |
| `secondary` | Botones de navegación (Home, Modo), botones QR |
| `accent` | Selectores de equipo, códigos de equipo, etiquetas |
| `buttonInfo` | Botones de sets, botones de información (azul) |
| `buttonDanger` | Botón de reset/borrar (rojo) |
| `fieldBackground` | Fondo de la cancha (beige claro) |
| `fieldBorder` | Bordes y líneas de la cancha |
| `fieldLine` | Líneas de división de la cancha |

## ⚠️ Colores que NO Debes Cambiar

Estos colores son estándar y funcionan bien con cualquier paleta:

```typescript
background: "#f9fafb",     // Fondo general claro
surface: "#ffffff",        // Superficie de tarjetas
textPrimary: "#0f172a",    // Texto principal
textSecondary: "#374151",  // Texto secundario
border: "#e5e7eb",         // Bordes sutiles
divider: "#d1d5db",        // Divisores
success: "#10b981",        // Verde para éxito
warning: "#f59e0b",        // Amarillo/naranja para advertencias
error: "#ef4444",          // Rojo para errores
info: "#3b82f6",           // Azul para información
```

## 🔧 Mantenimiento

Si en el futuro necesitas agregar nuevos componentes o estilos:

1. **SIEMPRE** usa colores de `AppTheme` importando:
   ```typescript
   import { AppTheme } from "./theme";
   ```

2. **NUNCA** uses colores hardcodeados como `"#590660"` directamente en los estilos

3. Si necesitas un nuevo color, agrégalo al `theme.ts` primero

## 📞 Soporte

Si necesitas ayuda con la personalización de colores o tienes dudas sobre qué valor usar, consulta este documento o revisa el archivo `styles/theme.ts` que contiene comentarios detallados.

---

**Versión actual:** COTABAL LINE UP v1.0  
**Última actualización:** Diciembre 2025
