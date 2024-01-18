"use client"

import { useAccount } from "wagmi"
import { ConnectKitButton } from "connectkit"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function App() {
  return (
    <>
      <ConnectKitButton />
      <MyComponent />
      <Home />
    </>
  )};

export function Home() {

  const [userAddress, setUserAddress] = useState<string>();
  const [destinationAddress, setDestinationAddress] = useState<string>();
  const [amount, setAmount] = useState<number | null>();
  const [email, setEmail] = useState<string>();

  const handleClick = () => {
    console.log(email, userAddress, destinationAddress, amount);
  }

  return (
    <main>
      <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <Input type="text" placeholder="User Address" onChange={(e) => setUserAddress(e.target.value)} />
      <Input type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
      <Input type="text" placeholder="Destination Address" onChange={(e) => setDestinationAddress(e.target.value)} />
      <Button onClick={handleClick}>Proceed</Button>
    </main>
  )
}

{/* Make sure that this component is wrapped with ConnectKitProvider */}
const MyComponent = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  if (isConnecting) return <div>Connecting...</div>;
  if (isDisconnected) return <div>Disconnected</div>;
  return <div>Connected Wallet: {address}</div>;
};