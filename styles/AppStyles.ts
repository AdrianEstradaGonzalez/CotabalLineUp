import { StyleSheet, Dimensions, Platform } from "react-native";
import { AppTheme } from "./theme";

const { width, height } = Dimensions.get("window");
const scaleHeight = height / 800;
const sponsorLogoHeight = 56 * scaleHeight;
const sponsorBarHeight = sponsorLogoHeight + 12 * scaleHeight; // paddingVertical * 2 (6*2)

export const AppStyles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20 * scaleHeight,
    paddingBottom: 20 * scaleHeight,
    minHeight: height, 
  },

  card: {
    width: width * 0.9,
    maxHeight: height * 0.85,
    borderRadius: 28,
    paddingVertical: 20 * scaleHeight,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    opacity: 0.95,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 10,
  },

  logoHeader: {
    alignSelf: "center",
    width: Math.min(280, width * 0.85),
    height: 150 * scaleHeight,
    resizeMode: "contain",
    marginBottom: 16 * scaleHeight,
  },
  sponsorLogo: {
    alignSelf: "center",
    width: Math.min(280, width * 0.85),
    height: sponsorLogoHeight,
    marginTop: 0,
    marginBottom: 0,
    opacity: 0.95,
  },

  sponsorBar: {
    position: "absolute",
    top: 6 * scaleHeight,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 30,
    height: sponsorBarHeight,
    paddingVertical: 6 * scaleHeight,
    backgroundColor: "transparent",
  },

  sponsorBelow: {
    width: Math.min(280, width * 0.85),
    alignSelf: "center",
    marginTop: 12 * scaleHeight,
    marginBottom: 8 * scaleHeight,
    alignItems: "center",
  },

  headerZone: {
    width: "100%",
    flex: 0.35,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  cardZone: {
    width: "100%",
    flex: 0.65,
    justifyContent: "center",
    alignItems: "center",
  },

  cardCornerLeft: {
    position: "absolute",
    top: 12 * scaleHeight,
    left: 10,
    width: 72,
    height: sponsorLogoHeight,
    resizeMode: "contain",
    zIndex: 40,
  },

  cardCornerRight: {
    position: "absolute",
    width: 72,
    height: sponsorLogoHeight,
    resizeMode: "contain",
    zIndex: 40,
  },

  logo: {
    width: width * 0.25,
    height: width * 0.25,
    resizeMode: "contain",
    marginBottom: 12,
  },

  title: {
    fontFamily: Platform.select({
      ios: "Avenir-Heavy",
      android: "sans-serif-condensed",
    }),
    fontWeight: "700",
    fontSize: 28,
    textAlign: "center",
    marginBottom: 16,
    color: AppTheme.textPrimary,
    letterSpacing: 0.8,
    lineHeight: 32,
  },

  button: {
    borderRadius: 16,
    backgroundColor: AppTheme.buttonPrimary,
    marginVertical: 6,
    minWidth: "100%",
    paddingVertical: 12,

    shadowColor: AppTheme.buttonPrimary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },

  buttonContent: {
    paddingVertical: 12,
  },

  buttonLabel: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },

  copyright: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    fontSize: 11,
    color: AppTheme.textOnPrimary,
    opacity: 0.85,
    letterSpacing: 0.5,
  },

  /* New reusable styles for Home action buttons */
  cardContent: {
    // keep a single source of truth: the Card defines the inner padding
    alignItems: "center",
    width: "100%",
  },

  actionCard: {
    backgroundColor: AppTheme.actionCardBg,
    borderRadius: 16,
    overflow: "hidden",
    marginVertical: 8,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 6,
  },

  actionLeftBar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 6,
    backgroundColor: AppTheme.actionCardLeftBar,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },

  actionBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: AppTheme.actionCardBorderSubtle,
  },

  actionText: {
    color: AppTheme.actionCardText,
    fontWeight: "800",
    fontSize: 18,
    
  },

  actionArrow: {
    color: AppTheme.actionCardArrow,
    fontSize: 26,
    fontWeight: "600",
  },
});