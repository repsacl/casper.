import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function ProjectModal({ project, onClose }) {
    const {
        number,
        title,
        titleLink,
        description,
        linkHref,
        linkLabel,
        githubHref,
        image,
        imageAlt,
        images = [],
    } = project;

    // Hovedbildet først, deretter eventuelle ekstra bilder
    const gallery = [{ src: image, alt: imageAlt }, ...images];
    const [activeIndex, setActiveIndex] = useState(0);
    const active = gallery[activeIndex];

    // Lukk med Escape + lås scrolling på siden bak modalen
    useEffect(() => {
        const onKeyDown = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKeyDown);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [onClose]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            {/* Bakgrunn — klikk for å lukke */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={title}
                className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-5 text-black shadow-2xl sm:p-8 dark:bg-neutral-900 dark:text-white"
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                }}
                exit={{
                    opacity: 0,
                    y: 16,
                    scale: 0.98,
                    transition: { duration: 0.2 },
                }}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Lukk"
                    className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <path d="M3 3l10 10M13 3L3 13" />
                    </svg>
                </button>

                {/* Bilde / galleri */}
                <motion.div
                    layoutId={`project-image-${number ?? title}`}
                    className="overflow-hidden rounded-xl"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.img
                            key={active.src}
                            src={active.src}
                            alt={active.alt}
                            className="h-56 w-full object-cover ring-1 ring-black/10 sm:h-80 dark:ring-white/10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        />
                    </AnimatePresence>
                </motion.div>

                {gallery.length > 1 && (
                    <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                        {gallery.map((img, i) => (
                            <button
                                key={img.src}
                                type="button"
                                onClick={() => setActiveIndex(i)}
                                aria-label={`Vis bilde ${i + 1} av ${gallery.length}`}
                                aria-current={i === activeIndex}
                                className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg ring-2 transition focus:outline-none focus-visible:ring-blue-500 ${i === activeIndex
                                        ? "ring-blue-500"
                                        : "opacity-60 ring-transparent hover:opacity-100"
                                    }`}
                            >
                                <img
                                    src={img.src}
                                    alt=""
                                    className="h-full w-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                )}

                {/* Tekst */}
                <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.15, duration: 0.35 },
                    }}
                >
                    {number && (
                        <span className="mb-1 block text-sm text-gray-400 dark:text-gray-500">
                            {number}
                        </span>
                    )}

                    <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                        {title}
                        {titleLink && (
                            <>
                                {" "}
                                <a
                                    href={titleLink.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-light text-blue-500 hover:underline"
                                >
                                    {titleLink.label}
                                </a>
                            </>
                        )}
                    </h2>

                    <p className="text-base font-medium leading-relaxed sm:text-lg">
                        {description}
                    </p>

                    {(githubHref || linkHref) && (
                        <div className="mt-6 flex flex-wrap gap-3">
                            {githubHref && (
                                <a
                                    href={githubHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-80 dark:bg-white dark:text-black"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                                    </svg>
                                    Se på GitHub
                                </a>
                            )}
                            {linkHref && (
                                <a
                                    href={linkHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center rounded-full px-4 py-2 text-sm font-light text-blue-500 ring-1 ring-blue-500/40 transition hover:bg-blue-500/10"
                                >
                                    {linkLabel}
                                </a>
                            )}
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default ProjectModal;