import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ProfileRecord } from "@/lib/xata/codegen";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const ProfileHoverCard = ({
  profile,
  children,
  className,
}: {
  profile: ProfileRecord;
  children: React.ReactNode;
  className?: string | null;
}) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <Link href={`/u/${profile.handle}`} className={cn(className)}>
        {children}
      </Link>
    </HoverCardTrigger>
    <HoverCardContent className="w-64">
      <Link href={`/u/${profile.handle}`}>
        <Avatar className="h-16 w-16">
          <AvatarImage src={profile.profile_picture || ""} />
          <AvatarFallback className="font-bold">
            {profile.name
              ? profile.name.split(" ")[0][0]
              : profile.handle
              ? profile.handle[0]
              : "*"}
          </AvatarFallback>
        </Avatar>
      </Link>
      <Link href={`/u/${profile.handle}`}>
        <p className="text-md font-bold hover:underline">{profile.name}</p>
      </Link>

      <Link href={`/u/${profile.handle}`}>
        <p className="text-md -mt-1 mb-1 text-muted-foreground">
          @{profile.handle}
        </p>
      </Link>
      <p className="text-md mt-2">{profile.bio}</p>
    </HoverCardContent>
  </HoverCard>
);

export { ProfileHoverCard };
