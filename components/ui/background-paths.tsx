"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M${-200 + i * 5 * position} ${-250 + i * 4}C${
            -150 + i * 5 * position
        } ${-100 + i * 5} ${100 + i * 6 * position} ${0 + i * 4} ${
            350 + i * 5 * position
        } ${100 + i * 3}C${550 + i * 5 * position} ${180 + i * 3} ${
            700 + i * 5 * position
        } ${200 + i * 4} ${800 + i * 5 * position} ${220 + i * 3}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-slate-300 dark:text-blue-200"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    return (
        <div className="absolute inset-0">
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
        </div>
    );
}
