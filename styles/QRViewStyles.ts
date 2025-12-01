// QRViewStyles.ts
import { StyleSheet, Dimensions } from "react-native";
import { AppTheme } from "./theme";

const { width, height } = Dimensions.get("window");

export const QRViewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppTheme.surface,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.05,
  },
  title: {
    fontSize: Math.min(width * 0.06, 24),
    fontWeight: "bold",
    marginBottom: height * 0.03,
    textAlign: "center",
  },
  subtitle: {
    fontSize: Math.min(width * 0.045, 16),
    color: AppTheme.textSecondary,
    marginTop: height * 0.03,
    textAlign: "center",
  },
  volverButton: {
  position: "absolute",
  bottom: height * 0.03,   // margen inferior adaptativo
  left: width * 0.05,      // margen lateral adaptativo
  right: width * 0.05,
  backgroundColor: AppTheme.buttonPrimary,
  paddingVertical: height * 0.05,  // más alto que antes
  paddingHorizontal: width * 0.05,  // un poco más ancho
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 16,       // un poco más redondeado
  flexDirection: "row",
  shadowColor: AppTheme.shadow,
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.15,
  shadowRadius: 2,
  elevation: 3,
},

volverButtonText: {
  color: AppTheme.textOnPrimary,
  fontWeight: "bold",
  fontSize: Math.min(width * 0.055, 22), // más grande
},
});