"use client";

import { FRAME_CONFIG } from "./content";

function getFramePath(index: number): string {
  const padded = String(index + 1).padStart(
    FRAME_CONFIG.paddingDigits,
    "0"
  );
  return `${FRAME_CONFIG.basePath}${padded}${FRAME_CONFIG.extension}`;
}

function loadSingleFrame(index: number): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () =>
      reject(new Error(`Failed to load frame ${index}`));
    img.src = getFramePath(index);
  });
}

export async function preloadFrames(
  onProgress?: (loaded: number, total: number) => void
): Promise<HTMLImageElement[]> {
  const { totalFrames, batchSize } = FRAME_CONFIG;
  const frames: HTMLImageElement[] = new Array(totalFrames);

  for (let i = 0; i < totalFrames; i += batchSize) {
    const batchEnd = Math.min(i + batchSize, totalFrames);
    const batch: Promise<HTMLImageElement>[] = [];

    for (let j = i; j < batchEnd; j++) {
      batch.push(
        loadSingleFrame(j).then((img) => {
          frames[j] = img;
          return img;
        })
      );
    }

    await Promise.all(batch);
    onProgress?.(batchEnd, totalFrames);
  }

  return frames;
}
