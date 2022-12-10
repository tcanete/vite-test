import { QueryClient, QueryClientProvider } from "react-query";

import Home from "./pages/Home/Home";

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>{import.meta.env.VITE_APP_TITLE}</h1>
        <h1>Vite + React</h1>
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App;
