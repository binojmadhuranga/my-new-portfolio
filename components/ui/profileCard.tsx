"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
	HiOutlineBookOpen,
	HiOutlineMail,
	HiOutlineLocationMarker,
	HiOutlineX,
} from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

type ProfileCardProps = {
	isOpen: boolean;
	onClose: () => void;
};

const socialLinks = [
	{
		name: "GitHub",
		href: "https://github.com/binojmadhuranga",
		icon: FaGithub,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/binoj-madhuranga/",
		icon: FaLinkedinIn,
	},
	{
		name: "Twitter",
		href: "https://x.com/labugamage",
		icon: FaXTwitter,
	},
	{
		name: "Medium",
		href: "https://medium.com/@binojmadhuranga",
		icon: HiOutlineBookOpen,
	},
];

export default function ProfileCard({ isOpen, onClose }: ProfileCardProps) {
	return (
		<AnimatePresence>
			{isOpen ? (
				<motion.div
					initial={{ opacity: 0, y: -18, scale: 0.96 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					exit={{ opacity: 0, y: -12, scale: 0.97 }}
					transition={{ duration: 0.22, ease: "easeOut" }}
					className="absolute right-0 top-[calc(100%+1rem)] z-[80] w-[22rem] overflow-hidden rounded-[2rem] border border-white/15 bg-zinc-950 shadow-[0_24px_60px_rgba(2,6,23,0.65)]"
				>
					<div className="relative h-20 bg-[linear-gradient(120deg,#0f172a,#1e293b,#0f172a)]">
						<button
							type="button"
							onClick={onClose}
							aria-label="Close profile card"
							className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
						>
							<HiOutlineX className="h-5 w-5" />
						</button>
					</div>

					<div className="relative px-6 pb-5 pt-0">
						<div className="-mt-10 flex items-end justify-between gap-4">
							<div className="relative h-20 w-20 overflow-hidden rounded-full border-[3px] border-zinc-800 bg-zinc-900 shadow-[0_10px_25px_rgba(2,6,23,0.4)]">
								<Image
									src="/profile.png"
									alt="Binoj Madhuranga"
									fill
									sizes="80px"
									className="object-cover"
								/>
							</div>
							<span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-300">
								<span className="h-2 w-2 rounded-full bg-emerald-500" />
								Available
							</span>
						</div>

						<div className="mt-5 space-y-4 text-zinc-100">
							<div>
								<h3 className="text-[1.75rem] font-bold tracking-tight">Binoj Madhuranga</h3>
								<p className="mt-1 text-base text-zinc-400">
									Software Engineer building web, mobile, AI, and IoT products.
								</p>
							</div>

							<div className="space-y-3 text-[0.95rem] text-zinc-300">
								<div className="flex items-center gap-3">
									<HiOutlineLocationMarker className="h-5 w-5 text-zinc-500" />
									<span>Sri Lanka</span>
								</div>
								<a
									href="mailto:binojmadhuranga2002.04.04@gmail.com"
									className="flex items-center gap-3 transition-colors hover:text-zinc-100"
								>
									<HiOutlineMail className="h-5 w-5 text-zinc-500" />
									<span className="truncate">binojmadhuranga2002.04.04@gmail.com</span>
								</a>
							</div>

							<div className="flex items-center gap-3">
								{socialLinks.map((link) => {
									const Icon = link.icon;

									return (
										<a
											key={link.name}
											href={link.href}
											target="_blank"
											rel="noreferrer"
											aria-label={link.name}
											className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 text-zinc-300 transition-all hover:-translate-y-0.5 hover:bg-sky-400 hover:text-zinc-950"
										>
											<Icon className="h-5 w-5" />
										</a>
									);
								})}
							</div>

							<a
								href="#contact"
								onClick={onClose}
								className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3.5 text-sm font-semibold text-zinc-950 transition-transform hover:-translate-y-0.5"
							>
								<FiArrowUpRight className="h-4 w-4" />
								Get In Touch
							</a>
						</div>
					</div>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
}
