"use client";

import { useSearchParams } from "next/navigation";

export default function Photo() {
  const params = useSearchParams();
  const url = params.get("url");
  const title = params.get("title");

  return (
    <>
      <section className="p-6 text-center">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>

        {url && (
          <figure className="max-w-md mx-auto">
            <img src={url} className="w-full h-[250px] object-cover" alt="" />
          </figure>
        )}
      </section>
    </>
  );
}
