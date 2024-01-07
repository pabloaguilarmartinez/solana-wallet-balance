import {useConnection, useWallet} from "@solana/wallet-adapter-react";
import {useEffect, useState} from "react";
import {LAMPORTS_PER_SOL} from "@solana/web3.js";

export const Balance = () => {
  const [balance, setBalance] = useState<number>(0);
  const {connection} = useConnection();
  const {publicKey} = useWallet();

  useEffect(() => {
    if (!connection || !publicKey) return;
    connection.getBalance(publicKey).then(setBalance);
  }, [connection, publicKey]);

  return (
    <div className="mt-8">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div className="flex flex-col items-center space-y-1.5 p-4">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">Your SOL Balance</h3>
          <span>◎{balance / LAMPORTS_PER_SOL}</span>
        </div>
      </div>
    </div>
  );
};