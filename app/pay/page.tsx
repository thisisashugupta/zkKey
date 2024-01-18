"use client"

import React, { useState, useEffect } from 'react';
import { parseEther } from 'viem';
import { useAccount } from 'wagmi'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import Approve from './approve';

const Pay = () => {

  const { address } = useAccount();
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [sum, setSum] = useState();
  const [deadline, setDeadline] = useState('');
  const [v, setV] = useState('');
  const [r, setR] = useState('');
  const [s, setS] = useState('');

  return (
    <div>
      <p>Pay</p>
      <Input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <Input placeholder="Destination Wallet Address" value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)} />
      {/* <Approve props={ sum, amount, deadline, v, r, s } /> */}
    </div>
  );
};

export default Pay;
