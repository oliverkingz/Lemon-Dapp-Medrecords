"use client"

import { useRkAccountModal } from "@/lib/rainbowkit"
import { useAccount, useReadContract } from "wagmi"
import { parseAbi } from "viem"
import Get_input from "./form/Get_Input"
import Index from "./principal/Index"
import Send from "./input/input"
import Navigation from "./Navigation"
import Pull_blockchain from "./form/Pull_blockchain"

const ADDRESS = "0x9bd5ffc78ac793f243777f00a1f3990562269fc0"

const ABI = parseAbi([
  "function saludame() public view returns (string)",
])


export default function Home() {
  const result = useReadContract(
    {
      address: ADDRESS,
      functionName: "saludame",
      abi: ABI
    }
  )

  // console.debug({result})
  
  const { openAccountModal } = useRkAccountModal()
  const account = useAccount()

  // console.log(account)
  return (

    <>

      {/* {{<Index />} */}
      {<Navigation/>}
      {/* {<Send />} */}
      {/* {<ConnectButton />} */}



      {<Get_input />}
      {<Pull_blockchain />}

    </>


  )
}
