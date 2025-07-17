export function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 border-r border-border p-4">
      <h2 className="text-lg font-semibold text-foreground mb-4">History</h2>
      <div className="flex-1 overflow-y-auto">
        {/* Prompt history items will go here */}
        <p className="text-sm text-muted-foreground">No history yet.</p>
      </div>
    </aside>
  );
}