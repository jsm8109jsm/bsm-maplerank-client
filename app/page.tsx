"use client";

import useRank from "@/apis/useRank";

export default function Home() {
  const { ranking } = useRank("LEVEL");
  console.log(ranking);
  return <div></div>;
}
