import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { Button } from "@/components/ui/button";

function Approve({ sum, amount, deadline, v, r, s }) {
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    abi: "wagmigotchiABI",
    functionName: 'registerAndApprove',
    args: [sum, amount, deadline, v, r, s]
    // registerAndApprove(uint32 sum, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s)
  })

  return (
    <div>
      <Button onClick={() => write()}>registerAndApprove</Button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  )
}

export default Approve;