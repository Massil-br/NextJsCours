export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-600 dark:border-zinc-700 dark:border-t-zinc-400"></div>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">Chargement...</p>
      </div>
    </div>
  );
}

