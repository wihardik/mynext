export const metadata = { title: 'Pricing - Daytona' }
export default function Pricing(){
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-2xl font-bold">Pricing</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Hobby</h3>
          <p className="mt-2 text-sm">Free tier for testing.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Pro</h3>
          <p className="mt-2 text-sm">For teams and projects.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Enterprise</h3>
          <p className="mt-2 text-sm">Custom solutions.</p>
        </div>
      </div>
    </div>
  )
}
