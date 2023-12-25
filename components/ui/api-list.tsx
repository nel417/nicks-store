"use client";

import { useOrigin } from "@/hooks/user-origin";
import { useParams } from "next/navigation";
import ApiAlert from "./api-alert";

type Props = {
  entityName: string;
  entityIdName: string;
};

const ApiList = (props: Props) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;
  return (
    <>
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${props.entityName}`}
      />

      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${props.entityName}/{${props.entityIdName}}`}
      />

      <ApiAlert
        title="POST"
        variant="admin"
        description={`${baseUrl}/${props.entityName}`}
      />

      <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${props.entityIdName}`}
      />

      <ApiAlert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${props.entityIdName}`}
      />
    </>
  );
};

export default ApiList;
