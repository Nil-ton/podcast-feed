import { QueryClientProvider } from 'react-query';
import RoutesComponent from './Routes';
import { queryClient } from './service/queryClient';
import { GlobalStyle } from './style/GlobalStyle';

export const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RoutesComponent />
        <GlobalStyle/>
      </QueryClientProvider>
    </>
  );
};