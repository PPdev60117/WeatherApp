'use client'
import { useRouter } from "next/navigation"

export default function error() {
    const router = useRouter()
  return (
    <>
        <div className="h-1/2 flex flex-col">
            <div className="m-auto flex flex-col">
            <h1 className="mx-auto text-3xl font-extrabold ">Error !</h1>
            <p className="mx-auto">please <span className="cursor-pointer underline underline-offset-2 hover:text-indigo-800 " onClick={()=>{router.refresh()}}>Click</span> for try agian</p>
            </div>
        </div>
    </>
  )
}
