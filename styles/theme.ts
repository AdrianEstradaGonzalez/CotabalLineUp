/**
 * 🎨 THEME CONFIGURATION
 * =====================
 * Archivo centralizado de colores para facilitar el cambio de paleta.
 * Para crear una nueva app con diferentes colores, simplemente modifica este archivo.
 */

export const AppTheme = {
  // 🎯 COLORES PRINCIPALES
  primary: "#590660",        // Morado principal de COTABAL
  primaryDark: "#3d0442",    // Morado más oscuro para sombras/hover
  primaryLight: "#7a0887",   // Morado más claro para variaciones
  
  // 🎯 COLORES SECUNDARIOS
  secondary: "#d9121a",      // Rojo de COTABAL
  secondaryLight: "#ff4148", // Rojo más claro
  
  accent: "#fbdc09",         // Amarillo de COTABAL
  accentDark: "#e5c708",     // Amarillo más oscuro
  
  // 🎯 COLORES DE FONDO Y SUPERFICIE
  background: "#f9fafb",     // Fondo general claro
  surface: "#ffffff",        // Superficie de tarjetas
  surfaceDark: "#1d1329",    // Superficie oscura (basada en primary)
  
  // 🎯 COLORES DE TEXTO
  textPrimary: "#0f172a",    // Texto principal
  textSecondary: "#374151",  // Texto secundario
  textLight: "#6b7280",      // Texto claro
  textOnPrimary: "#ffffff",  // Texto sobre color primary
  
  // 🎯 COLORES DE BORDE Y DIVISORES
  border: "#e5e7eb",         // Bordes sutiles
  borderAccent: "#590660",   // Bordes con acento (primary)
  divider: "#d1d5db",        // Divisores
  
  // 🎯 COLORES DEL CAMPO/CANCHA
  fieldBackground: "#fff7ed", // Fondo de cancha
  fieldBorder: "#590660",     // Borde de cancha (primary)
  fieldLine: "#590660",       // Líneas de campo (primary)
  
  // 🎯 OVERLAYS Y SOMBRAS
  overlayDark: "rgba(89, 6, 96, 0.65)",  // Overlay oscuro con tinte primary
  overlayLight: "rgba(89, 6, 96, 0.1)",  // Overlay claro
  shadow: "#000000",
  
  // 🎯 ESTADOS
  success: "#10b981",        // Verde para éxito
  warning: "#f59e0b",        // Amarillo/naranja para advertencias
  error: "#ef4444",          // Rojo para errores
  info: "#3b82f6",           // Azul para información
  
  // 🎯 COLORES SEMÁNTICOS (Botones específicos)
  buttonPrimary: "#590660",
  buttonSecondary: "#d9121a",
  buttonAccent: "#fbdc09",
  buttonInfo: "#3b82f6",
  buttonDanger: "#ef4444",
  
  // 🎯 COLORES DE TARJETAS DE ACCIÓN
  actionCardBg: "#2d0f33",          // Fondo oscuro basado en primary
  actionCardBorder: "#590660",      // Borde con primary
  actionCardBorderSubtle: "rgba(89, 6, 96, 0.2)", // Borde sutil
  actionCardText: "#ffffff",
  actionCardArrow: "#fbdc09",       // Flecha con accent
  actionCardLeftBar: "#d9121a",     // Barra izquierda con secondary
};

/**
 * 📝 INSTRUCCIONES PARA CAMBIAR DE COMUNIDAD:
 * 
 * 1. Modifica los colores primary, secondary y accent según la nueva comunidad
 * 2. Ajusta los colores derivados (primaryDark, primaryLight, etc.) si es necesario
 * 3. Actualiza overlayDark para que use el nuevo color primary
 * 4. Verifica que actionCardBg, fieldBorder y borderAccent usen los colores correctos
 * 5. Los demás colores (success, error, etc.) pueden mantenerse
 * 
 * Ejemplo para otra comunidad:
 * primary: "#1e40af"      // Azul
 * secondary: "#059669"    // Verde
 * accent: "#f59e0b"       // Naranja
 */

export default AppTheme;
