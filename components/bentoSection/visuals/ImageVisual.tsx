"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { bentoVisual } from "@/lib/animations";

export function ImageVisual({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      variants={bentoVisual}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Image
        alt={alt}
        loading="lazy"
        width="1340"
        height="200"
        decoding="async"
        src={src}
        data-nimg="1"
        className="w-full h-full object-cover object-center"
        style={{ color: "transparent" }}
        role="img"
        aria-label={alt}
      />
    </motion.div>
  );
}
