"use client";
import CountUp from 'react-countup'

interface StatItemProps {
  number: number;
  stats: string;
}

export function StatItem({ number, stats }: StatItemProps) {
  return (
    <div className="w-max text-center flex flex-col items-center justify-center px-6 mt-4">
      <span className="font-semibold text-lg">
        +<CountUp end={number} duration={4.5} />
      </span>
      <h1 className="font-normal light text-lg text-slate-600">{stats}</h1>
    </div>
  );
}
