"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { BillboardColumn, columns } from "./Columns";
import { DataTable } from "@/components/ui/data-table";

interface BillboardClientProps {
  data: BillboardColumn[]
}

export const BillboardClient: React.FC<BillboardClientProps> = ({data}) => {
const router = useRouter()
const params = useParams()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`billboards (${data.length})`} description="manage billboards here" />
        <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
          <Plus className=" h-4 w-4" />
        </Button>
      </div>
      <hr />
      <DataTable columns={columns} data={data}/>
    </>
  );
};
