// apps/portfolio/page.tsx
import { Button } from "@peach-garden/ui";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold text-indigo-600 mb-6">Welcome to my Web Garden!</h1>
        <p className="text-xl text-slate-700 mb-8">
          I'm a full-stack developer creating playful, creative, and useful web applications
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">View Projects</Button>
          <Button size="lg" variant="outline">Read Blog</Button>
        </div>
      </div>
    </div>
  )
}