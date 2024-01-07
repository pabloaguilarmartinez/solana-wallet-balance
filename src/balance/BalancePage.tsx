import {Balance} from "./Balance.tsx";
import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";

export const BalancePage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Connect your Solana Wallet</h2>
      <p className="mt-2 text-lg text-gray-600">
        Click the button below to connect your Solana Wallet and view your SOL balance on devnet.
      </p>
      <div className="mt-8">
        <WalletMultiButton/>
      </div>
      <Balance/>
    </main>
  );
};