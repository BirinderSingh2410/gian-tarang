import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 w-[95%] justify-items-center">
      <div className="space-y-2">
        <Skeleton className="h-20 w-100" />
      </div>
      <Skeleton className="min-h-96 w-100 rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-20 w-100" />
      </div>
      <div className="flex flex-row justify-between w-[100%]">
        <div className="w-[48%] space-y-2">
          <Skeleton className="h-8 w-100" />
          <Skeleton className="h-8 w-100" />
          <Skeleton className="h-8 w-100" />
          <Skeleton className="h-8 w-100" />
        </div>
        <div className="w-[48%] space-y-2">
          <Skeleton className="h-8 w-100" />
          <Skeleton className="h-8 w-100" />
          <Skeleton className="h-8 w-100" />
          <Skeleton className="h-8 w-100" />
        </div>
      </div>
    </div>
  );
}
