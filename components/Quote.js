import { View, Text, StyleSheet } from "react-native";

export default function Quote({ quote }) {
  return (
    <View>
      <Text style={styles.text}>{quote.text}</Text>
      <Text style={styles.author}>&mdash; {quote.author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  author: {
    fontStyle: "italic",
  },
});
