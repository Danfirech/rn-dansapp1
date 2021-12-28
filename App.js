import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function App() {
  const randomQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5372F0",
      }}
    >
      <StatusBar barstyle="light-content" />
      <View
        style={{
          width: "90%",
          backgroundColor: "#fff",
          borderRadius: 20,
          padding: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 26,
            fontWeight: "600",
            color: "#333",
            marginBottom: 20,
          }}
        >
          Quote of the day
        </Text>
        <FontAwesome5
          name="quote-left"
          style={{ fontsize: 20, marginBottom: -12 }}
          color="#000"
        />
        <Text
          style={{
            color: "#000",
            fontSize: 16,
            lineHeight: 26,
            letterSpaceing: 1.1,
            fontWeight: "400",
            textAlign: "center",
            paddingHorizontal: 30,
          }}
        >
          The Quote of the day is as follows: It is what it is until it is not.
        </Text>
        <FontAwesome5
          name="quote-right"
          style={{ fontsize: 20, textAlign: "right", marginTop: -20 }}
          color="#000"
        />
        <Text
          style={{
            textAlign: "right",
            fontWeight: "300",
            fontStyle: "italic",
            fontSize: 16,
            color: "#000",
            marginVertical: 15,
          }}
        >
          -- Author Name
        </Text>
        <TouchableOpacity
          onPress={randomQuote}
          style={{
            backgroundColor: "#5372f0",
            padding: 20,
            borderRadius: 30,
            marginVerticle: 20,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, textAlign: "center" }}>
            New Quote
          </Text>

          {/* 3 BUTTONS*/}

          {/* Speak back button */}
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity
            onPress={() => {
              Rand;
            }}
            style={{
              borderWidth: 2,
              borderColor: "#5372F0",
              borderRadius: 50,
              padding: 15,
              marginTop: 15,
            }}
          >
            {/* Copy button */}

            <FontAwesome name="volume-up" size={22} color="#5372F0" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderWidth: 2,
              borderColor: "#5372F0",
              borderRadius: 50,
              padding: 15,
              marginTop: 15,
            }}
          >
            <FontAwesome5 name="copy" size={22} color="#5372F0" />
          </TouchableOpacity>

          {/* Twitter button */}

          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderWidth: 2,
              borderColor: "#5372F0",
              borderRadius: 50,
              padding: 15,
              marginTop: 15,
            }}
          >
            <FontAwesome name="twitter" size={22} color="#5372F0" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
