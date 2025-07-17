export function ConfigPanel() {
  return (
    <aside className="hidden xl:flex xl:flex-col xl:w-80 border-l border-border p-4">
      <h2 className="text-lg font-semibold text-foreground mb-4">Configuration</h2>
      <div className="flex-1 overflow-y-auto">
        {/* Configuration options will go here */}
        <p className="text-sm text-muted-foreground">Options will be available soon.</p>
      </div>
    </aside>
  );
}