import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WorkOrderPage(){
    return (<div className="flex">
        
        <Button asChild>
        <Link href="/workorders/create" className="bg-green-300 py-2 px-4 border rounded m-4">Create Work Order</Link>
        </Button>
        </div>)
}