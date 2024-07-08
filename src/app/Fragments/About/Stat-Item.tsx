// import CountUp from 'react-countup'

interface StatItemProps {
  number: number | string;
  stats: string;
}

export function StatItem({ number, stats }: StatItemProps) {
  return (
    <div className="w-max text-center flex flex-col items-center justify-center px-6 mt-4">
      <span className="font-semibold text-lg">
        {/* <CountUp end={`+${number as number}`} duration={4.5} /> */}
        +{number}
      </span>
      <h1 className="font-semibold text-lg">{stats}</h1>
    </div>
  );
}
