import { CounterService } from "./CounterService";
import { QuoteService } from "./QuoteService";

const ServiceStore = {
  counterService: new CounterService(0),
  quoteService: new QuoteService(0, true),
};

export { ServiceStore };
