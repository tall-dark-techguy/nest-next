"use client";

import { Suspense } from "react";
import Photo from "../components/photo";

export default function PhotoDetails() {
  return (
    <Suspense>
      <Photo />
    </Suspense>
  );
}
