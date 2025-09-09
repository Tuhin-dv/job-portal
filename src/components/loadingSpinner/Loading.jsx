export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <div className="flex space-x-1">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-6  bg-blue-600 animate-pulse rounded-sm"
            style={{
              animationDelay: `${i * 0.15}s`,
              animationDuration: "1.2s",
            }}
          ></div>
        ))}
      </div>
      <p className="text-gray-600 text-sm font-medium">Processing Jobs...</p>
    </div>
  )
}