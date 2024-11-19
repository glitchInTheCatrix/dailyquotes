"use client"
import {Card ,CardHeader ,CardDescription} from "@/components/ui/card";
import useSWR from "swr";
import {fetcher} from "@/lib/utils"
export default function Home() {
  const {data, error, isLoading}=useSWR('https://zenquotes.io/api/quotes',fetcher);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      
      <Card >
        <CardHeader>
          Quote Of The Day

          <CardDescription>
          {error && !isLoading && <div>failed to load</div>}

           {isLoading && <div>loading...</div>}
           {data && !isLoading && <div>{data}</div>}
          </CardDescription>
        </CardHeader>
      </Card>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
