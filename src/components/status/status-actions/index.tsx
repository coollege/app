import { SelectedPick } from "@xata.io/client";

import { StatusRecord } from "@/lib/xata/codegen";
import { QuoteAction } from "./quote";
import { ReplyAction } from "./reply";
import { LikeAction } from "./like";

import { getStatusStats } from "@/queries/get-status-stats";

const StatusActions = async ({
  status,
}: {
  status: SelectedPick<StatusRecord, ["*", "author_profile.*"]>;
}) => {
  const statusStats = await getStatusStats(status.id);
  return (
    <div className="flex gap-4">
      <QuoteAction status={status} />
      <ReplyAction status={status} />
      <LikeAction
        status_id={status.id}
        like_count={statusStats.like_count}
        is_liked={statusStats.is_liked}
      />
    </div>
  );
};

export { StatusActions };
