"use client";

import { useEffect, useState } from "react";
import { BASE_URL } from "@/constants";
import Link from "next/link";

export default function Home() {
  const [photos, setPhotos] = useState<Array<{ url: string; title: string }>>();

  useEffect(() => {
    async function fetchPhotos() {
      const response = await fetch(BASE_URL + "/api/photos");
      const { data } = await response.json();
      setPhotos(data?.photos);
    }
    fetchPhotos();
  }, []);

  return (
    <>
      <section className="text-center p-6">
        <h1 className="text-4xl font-extrabold text-neutral-900 mb-4">
          Hello Nest-Next
        </h1>

        <p className="text-neutral-700 max-w-2xl mx-auto mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti
          minima rerum officia tenetur ipsam libero, labore blanditiis delectus
          esse eos eius repellendus adipisci quas asperiores nostrum soluta
          repellat? Amet?
        </p>

        <figure className="max-w-2xl mx-auto mb-8">
          <img
            src="/images/pexel.jpg"
            alt="Pexel"
            className="w-full rounded-xl"
          />
        </figure>

        <article className="mb-8">
          <h4 className="text-3xl font-bold">Featured works</h4>
        </article>

        <figure className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {photos?.map((photo) => (
            <Link
              href={`/photo?title=${photo?.title}&url=${photo?.url}`}
              key={photo?.url}
            >
              <img
                src={photo?.url}
                alt=""
                className="w-full h-[250px] object-cover rounded-lg mb-2"
              />

              <p>{photo?.title}</p>
            </Link>
          ))}
        </figure>
      </section>
    </>
  );
}
