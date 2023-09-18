import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

const state = true;

export default function Home() {
  return (
    <div className="">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
