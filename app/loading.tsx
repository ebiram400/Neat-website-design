import LoadingAnimation from "@/app/components/Loaders/LoadingAnimation";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <LoadingAnimation />
    </div>
  );
}
