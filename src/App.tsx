import {Wallet} from "./walletadapter/Wallet.tsx";
import {BalancePage} from "./balance/BalancePage.tsx";

function App() {
  return (
    <Wallet>
      <BalancePage />
    </Wallet>
  );
}

export default App;
