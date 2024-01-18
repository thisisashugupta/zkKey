"use client"

import React, { useState } from 'react';
import { parseEther } from 'viem';
import { useAccount } from "wagmi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Register = () => {
  const [email, setEmail] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const { address, isConnecting, isDisconnected } = useAccount();
  if (isDisconnected) return <div>Disconnected</div>;
  // return <div>Connected Wallet: {address}</div>;

  const handleRegister = async () => {

    // Save user Address To Database
    console.log(email, walletAddress);
    
    try {
        // TODO: await supabase.
        // TODO: proceed to /permit route
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <p>Register your wallet address</p>
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="Wallet Address" value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)} />
      <Button onClick={handleRegister}>Register</Button>
    </div>
  );
};

export default Register;
