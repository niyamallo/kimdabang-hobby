import { cn } from "@/lib/utils";

// Loading animation (Shimmer effect)
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

// Skeleton component
export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

// ItemCardSkeleton component
export function ItemCardSkeleton() {
  return (
    <li className="w-[100%] border-slate-950 flex flex-col justify-start">
      {/* Image Skeleton */}
      <div
        className={`${shimmer} relative w-full overflow-hidden aspect-square bg-gray-200`}
      >
        <Skeleton className="absolute inset-0" />
      </div>

      {/* Category and Icons Skeleton */}
      <div className="flex justify-between pt-1">
        <Skeleton className="h-4 w-24 bg-gray-300" />
        <div className="flex gap-1">
          <Skeleton className="h-6 w-6 rounded-md bg-gray-300" />
          <Skeleton className="h-6 w-6 rounded-md bg-gray-300" />
        </div>
      </div>

      {/* Product Name Skeleton */}
      <Skeleton className="h-5 w-40 bg-gray-300 mt-2" />

      {/* Price Skeleton */}
      <Skeleton className="h-5 w-20 bg-gray-300 mt-1" />
    </li>
  );
}
// Skeleton.tsx (스켈레톤 컴포넌트)
export default function MainSkeleton() {
  return (
    <div className="animate-pulse flex flex-col space-y-2 mb-2">
      {/* 이미지 부분 스켈레톤 */}
      <div className="bg-gray-300 h-40 w-full rounded-lg" />
      {/* 텍스트 부분 스켈레톤 */}
      <div className="space-y-2">
        <div className="bg-gray-300 h-4 w-3/4 rounded" />
        <div className="bg-gray-300 h-4 w-1/2 rounded" />
      </div>
    </div>
  );
}
