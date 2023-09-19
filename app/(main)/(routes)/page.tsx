import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";

const state = true;

export default function Home() {
  return (
    <div className="">
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}
