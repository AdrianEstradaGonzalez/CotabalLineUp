import { View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, Provider as PaperProvider, Card } from "react-native-paper";
import EntrenadorView from "./pages/EntrenadorView";
import QRView from "./pages/QRView";
import ArbitroPager from "./pages/ArbitroPager";
import { AppStyles } from "./styles/AppStyles";

type RootStackParamList = {
  Home: undefined;
  Entrenador: undefined;
  Arbitro: undefined;
  QRView: { data: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={require("./assets/fondo.jpeg")}
      style={AppStyles.background}
    >
      {/* sponsor moved below the main container (see below) */}
      
      <View style={AppStyles.overlay}>
        {/* Logo principal encima del contenedor */}
        <Image
          source={require("./assets/LogoBalear.jpg")}
          style={AppStyles.logoHeader}
          resizeMode="contain"
        />
        
        <Card style={AppStyles.card} mode="elevated">
          <Image
            source={require("./assets/LOGO_BALEAR2.png")}
            style={AppStyles.cardCornerRight}
            resizeMode="contain"
          />
          <Card.Content style={AppStyles.cardContent}>
    <Image
      source={require("./assets/258.png")}
      style={AppStyles.logo}
      resizeMode="contain"
    />
    <Text variant="headlineLarge" style={AppStyles.title}>
      COTABAL LINE UP
    </Text>

    {/* Botones con estilo tipo "liga" (sin icono ni subtítulo) - estilizados desde AppStyles */}
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => navigation.navigate("Entrenador")}
      style={AppStyles.actionCard}
    >
      <View style={AppStyles.actionLeftBar} />
      <View style={AppStyles.actionBorder} pointerEvents="none" />
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={AppStyles.actionText}>Entrenador</Text>
      </View>
      <Text style={AppStyles.actionArrow}>›</Text>
    </TouchableOpacity>

    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => navigation.navigate("Arbitro")}
      style={AppStyles.actionCard}
    >
      <View style={AppStyles.actionLeftBar} />
      <View style={AppStyles.actionBorder} pointerEvents="none" />
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={AppStyles.actionText}>Árbitro</Text>
      </View>
      <Text style={AppStyles.actionArrow}>›</Text>
    </TouchableOpacity>
          </Card.Content>
        </Card>

        {/* Sponsor logo below the main container */}
        <View style={AppStyles.sponsorBelow}>
          <Image
            source={require("./assets/LogoPatrocinio.jpg")}
            style={AppStyles.sponsorLogo}
            resizeMode="contain"
          />
        </View>

        {/* 🔹 Marca de CopyRight */}
        <Text style={AppStyles.copyright}>
          © Copyright 2025 - Adrián Estrada González
        </Text>
      </View>
    </ImageBackground>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Entrenador"
            component={EntrenadorView}
            options={{ title: "Modo Entrenador" }}
          />
          <Stack.Screen
            name="Arbitro"
            component={ArbitroPager}
            options={{ title: "Modo Arbitro" }}
          />
          <Stack.Screen
            name="QRView"
            component={QRView}
            options={{ title: "Código QR" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}