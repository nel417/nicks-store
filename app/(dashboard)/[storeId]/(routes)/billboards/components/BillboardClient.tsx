"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

interface Props {}

export const BillboardClient = (props: Props) => {
const router = useRouter()
const params = useParams()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="billboards(0)" description="manage billboards here" />
        <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
          <Plus className=" h-4 w-4" />
        </Button>
      </div>
      <hr />
    </>
  );
};
