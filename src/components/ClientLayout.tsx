"use client";

import { CursorFollower } from "./CursorFollower";
import { SmoothScroll } from "./SmoothScroll";

export function ClientLayout() {
  return (
    <>
      <CursorFollower />
      <SmoothScroll />
    </>
  );
}
