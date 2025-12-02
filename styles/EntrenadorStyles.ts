import { StyleSheet, Dimensions, Platform } from "react-native";
import { AppTheme } from "./theme";

const { width, height } = Dimensions.get("window");

// 🔹 Base de referencia
const BASE_WIDTH = 360;
const BASE_HEIGHT = 640;
const rawScale = Math.min(width / BASE_WIDTH, height / BASE_HEIGHT);

// 🔹 Límites de escala
const MIN_SCALE = 0.75;
const MAX_SCALE = 1.2;

// 🔹 Detectar tablet (similar a ArbitroStyles)
const isTablet = width >= 700 || height >= 1000;

// 🔹 Escala base con ajuste para tablet
let scale = Math.min(Math.max(rawScale, MIN_SCALE), MAX_SCALE);
scale = isTablet ? scale * 1.15 : scale; // 👉 en tablets todo se ve 15% más grande

// 🔹 Factores de pantalla
const isLargeScreen = width > 600; // lo dejamos por si lo usas en otros cálculos

// 🔹 Tamaños principales (con máximos y ajuste)
const campoSize = Math.min(width * 0.82, height * 0.45, 420) * scale;
const posicionSize = campoSize * 0.26 * scale;
// Tamaño del logo dentro del control (calculado a partir de campoSize)
const headerLogoWidth = Math.min(campoSize * 0.9, 320);
const headerLogoHeight = Math.min(headerLogoWidth * 0.28, 80);

export const EntrenadorStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppTheme.background,
    alignItems: "center",
    marginTop:10
  },

  headerLogo: {
    width: campoSize * 0.6,
    height: 60 * scale,
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 8 * scale,
  },
  headerLogoControl: {
    position: "absolute",
    left: (campoSize - headerLogoWidth) / 2,
    top: "80%",
    width: headerLogoWidth,
    height: headerLogoHeight,
    resizeMode: "contain",
    opacity: 0.09,
    zIndex: 0,
    transform: [{ translateY: -headerLogoHeight / 2 }],
  },

  campo: {
  width: campoSize,
  aspectRatio: 1,
  backgroundColor: AppTheme.fieldBackground,
  borderRadius: 16 * scale,
  borderWidth: 1.5 * scale,
  borderColor: AppTheme.fieldBorder,
  justifyContent: "space-between",
  padding: 6 * scale,
  marginVertical: 8 * scale,
},

fila: {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},

posicion: {
  flex: 1,                         // 🔹 que se reparta dentro de la fila
  aspectRatio: 1,                  // 🔹 siempre cuadrada
  marginHorizontal: 3 * scale,     // 🔹 espacio entre cajas
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 1.5 * scale,
  borderColor: AppTheme.fieldBorder,
  borderRadius: 12 * scale,
  backgroundColor: AppTheme.surface,
  shadowColor: AppTheme.shadow,
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.05,
  shadowRadius: 2,
  elevation: 1,
},

  lineaSeparadora: {
    height: 1.5 * scale,
    backgroundColor: AppTheme.fieldLine,
    width: "85%",
    alignSelf: "center",
    marginVertical: 2 * scale,
  },

    input: {
    width: "75%",
    height: "55%",
    borderWidth: 1 * scale,
    borderColor: AppTheme.divider,
    borderRadius: 8 * scale,
    textAlign: "center",
    fontSize: Math.min(posicionSize * 0.22, 18) * (isLargeScreen ? 1.2 : 1), // 📱 +20% en tablets
    fontWeight: "bold", // 🔹 negrita para los números
    padding: 0,
    color: AppTheme.textPrimary,
    backgroundColor: AppTheme.background,
    marginBottom: 2 * scale,
  },
  label: {
    fontSize: Math.min(posicionSize * 0.18, 14),
    fontWeight: "600",
    marginBottom: 3 * scale,
    color: AppTheme.textSecondary,
  },

  botonesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 6 * scale,
  },

  botonFlotante: {
    backgroundColor: AppTheme.primaryLight,
    width: campoSize * 0.16,
    height: campoSize * 0.16,
    borderRadius: campoSize * 0.08,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: AppTheme.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },

  botonCentral: {
    backgroundColor: AppTheme.buttonDanger,
  },
  barraControl: {
    width: campoSize,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: AppTheme.surface,
    borderRadius: 12 * scale,
    borderWidth: 1.5 * scale,
    borderColor: AppTheme.primary,
    padding: 20 * scale,
    marginBottom: 8 * scale,
    shadowColor: AppTheme.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    position: "relative",
    overflow: "hidden",
  },

  controlItem: {
    flex: 1,
    alignItems: "center",
    minWidth: width * 0.2 * scale,
    zIndex: 1,
  },

  controlLabel: {
    fontSize: Math.min(width * 0.038, 14),
    fontWeight: "500",
    color: AppTheme.textSecondary,
    marginBottom: 2 * scale,
    textAlign: "center",
  },

  codigoEquipo: {
    height: Math.min(height * 0.055, 50) * scale,
    borderRadius: 8 * scale,
    borderWidth: 1.2 * scale,
    borderColor: AppTheme.accent,
    backgroundColor: AppTheme.accent,
    textAlign: "center",
    fontSize: Math.min(width * 0.055, 20),
    fontWeight: "bold",
    color: AppTheme.textPrimary,
    paddingVertical: Platform.OS === "ios" ? 0 : 2 * scale,
    minWidth: width * 0.14 * scale,
  },

  equipoSelector: {
    height: Math.min(height * 0.055, 50) * scale,
    borderRadius: 8 * scale,
    borderWidth: 1.2 * scale,
    borderColor: AppTheme.accent,
    backgroundColor: AppTheme.accent,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.012 * scale,
    minWidth: width * 0.14 * scale,
  },

  equipoText: {
    fontWeight: "bold",
    fontSize: Math.min(width * 0.045, 18),
    color: AppTheme.textPrimary,
    textAlign: "center",
  },

  filaSets: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: campoSize,
    height: Math.min(height * 0.055, 50) * scale,
    backgroundColor: AppTheme.surface,
    borderRadius: 10 * scale,
    shadowColor: AppTheme.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    paddingHorizontal: 5 * scale,
    marginBottom: 8 * scale,
  },

  setButton: {
    width: Math.min(height * 0.045, 40) * scale,
    height: Math.min(height * 0.045, 40) * scale,
    borderRadius: 8 * scale,
    backgroundColor: AppTheme.primaryLight,
    justifyContent: "center",
    alignItems: "center",
  },

  setDisplay: {
    flex: 1,
    height: "85%",
    marginHorizontal: 4 * scale,
    borderRadius: 8 * scale,
    backgroundColor: AppTheme.primaryLight,
    justifyContent: "center",
    alignItems: "center",
  },

  setText: {
    color: AppTheme.textOnPrimary,
    fontWeight: "600",
    fontSize: Math.min(width * 0.042, 16),
    textAlign: "center",
  },

  homeButton: {
    position: "absolute",
    left: width * 0.1 * scale,
    top: height * 0.015 * scale,
    zIndex: 20,
    padding: campoSize * 0.018,
    backgroundColor: AppTheme.buttonSecondary,
    borderRadius: campoSize * 0.06,
    shadowColor: AppTheme.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },

  modoButton: {
    position: "absolute",
    top: height * 0.015 * scale,
    right: width * 0.1 * scale,
    zIndex: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: AppTheme.buttonSecondary,
    paddingHorizontal: width * 0.025 * scale,
    paddingVertical: height * 0.008 * scale,
    borderRadius: 10 * scale,
    shadowColor: AppTheme.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },

  modoText: {
    color: AppTheme.textOnPrimary,
    fontWeight: "600",
    fontSize: Math.min(width * 0.042, 14),
  },

  filaUnica: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  qrButton: {
    width: campoSize,
    backgroundColor: AppTheme.primary,
    paddingVertical: 10 * scale,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12 * scale,
    marginTop: 10 * scale,
    shadowColor: AppTheme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },

  qrButtonText: {
    color: AppTheme.textOnPrimary,
    fontSize: Math.min(width * 0.05, 18),
    fontWeight: "600",
    textAlign: "center",
  },
});
