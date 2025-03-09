import { Provider } from "react-redux";
import Index from "./Layouts/Index";
import { store } from "./store/store";




function App() {
  return (
    <Provider store={store}>
     <Index />
    </Provider>
      
    
  );
}

export default App;
