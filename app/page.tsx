import { Counter } from "@/components/counter";
import { Greet } from "@/components/greet";

export default function Home() {
  return (
    <div className="bg-blue-300 border border-blue-300">
      <h1>Hello home Page</h1>
      <Greet />
      <Counter />
    </div>
  )
}
