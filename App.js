import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { ServiceStore } from "./services/ServiceStore";
import { useRefresh } from "./hooks/useRefresh";
import Quote from "./components/Quote";

export default function App() {
  console.log(ServiceStore.quoteService.quotes);
  ServiceStore.counterService.onUpdate = useRefresh();
  ServiceStore.quoteService.onUpdate = useRefresh();
  function incrementCountHandler() {
    // console.log("incrementCountHandler");
    ServiceStore.counterService.increment();
  }

  function decrementCountHandler() {
    // console.log("decrementCountHandler");
    ServiceStore.counterService.decrement();
  }

  function testHandler() {
    // ServiceStore.quoteService.removeQuote(
    //   ServiceStore.quoteService.quotes[0].id,
    // );
    ServiceStore.quoteService.updateQuote(
      ServiceStore.quoteService.quotes[0].id,
      "Huule Huule ...",
      "Sevo",
    );
    console.log("-----------------------------------------");
    console.log(ServiceStore.quoteService.quotes);
  }

  function prevQuoteHandler() {
    console.log("prevQuoteHandler");
    ServiceStore.quoteService.prevQuote();
  }

  function nextQuoteHandler() {
    console.log("nextQuoteHandler");
    ServiceStore.quoteService.nextQuote();
  }

  function clearQuotesHandler() {
    ServiceStore.quoteService.clearQuotes();
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="-" onPress={incrementCountHandler} />
      <Text>{ServiceStore.counterService.count}</Text>
      <Button title="+" onPress={decrementCountHandler} />
      <Text>---</Text>
      <Button title="Test" onPress={testHandler} />
      <Text>--------------------------------------------</Text>
      <Button title="Preview Quote" onPress={prevQuoteHandler} />
      <Quote quote={ServiceStore.quoteService.getCurrentQuote()} />
      <Button title="Next Quote" onPress={nextQuoteHandler} />

      <Text>---</Text>
      <Button title="Clear quotes" onPress={clearQuotesHandler} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
