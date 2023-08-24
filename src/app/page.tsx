import { TemperatureConverter } from '@/temperature-converter/TemperatureConverter';

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      {/* <Counter /> */}
      <TemperatureConverter />
    </main>
  );
}
