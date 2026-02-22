'use client';

import Timer from '@/Components/Timer/Timer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-50">
      <Timer />
      <Link href="/main">메인</Link>
    </div>
  );
}
