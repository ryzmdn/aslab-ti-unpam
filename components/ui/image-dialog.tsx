"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface ImageDialogProps {
  src: string;
  alt?: string;
  thumbnailClassName?: string;
}

export function ImageDialog({
  src,
  alt = "Preview Image",
  thumbnailClassName,
}: ImageDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => setOpen(true)}
        className={cn("relative aspect-video size-full overflow-hidden p-0! rounded-lg", thumbnailClassName)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-static-950/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative size-full flex items-center justify-center p-6"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                size="icon-lg"
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 z-50 rounded-full"
              >
                <X />
              </Button>

              <div className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-xl lg:max-w-4xl">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
