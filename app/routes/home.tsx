import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <h1 className="text-5xl font-bold tracking-tight w-fit mx-auto mt-8
    bg-gradient-to-r from-rose-500 to-sky-500 via-purple-500 bg-clip-text text-transparent">
    Welcome to React Router V7!
  </h1>;
}
