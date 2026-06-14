import { motion } from 'motion/react'

const orbs = [
    { color: '#7C3AED', size: 600, top: '-100px', left: '-100px', animate: { x: [0, 60, 0], y: [0, 40, 0] }, duration: 12 },
    { color: '#EC4899', size: 500, top: '30%', right: '-150px', animate: { x: [0, -50, 0], y: [0, 60, 0] }, duration: 15 },
    { color: '#22D3EE', size: 400, bottom: '-100px', left: '30%', animate: { x: [0, 40, 0], y: [0, -50, 0] }, duration: 10 },
    { color: '#A855F7', size: 260, top: '10%', right: '20%', animate: { x: [0, -30, 0], y: [0, 30, 0] }, duration: 18 },
]

export default function AuroraBg() {
    return (
        <>
            {/* Aurora orbs layer */}
            <div className="absolute inset-0 -z-10 overflow-hidden bg-[#0A0718]">
                {orbs.map((orb, i) => (
                    <motion.div
                        key={i}
                        animate={orb.animate}
                        transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute rounded-full blur-[50px] opacity-30 will-change-transform"
                        style={{
                            position: 'absolute',
                            width: orb.size,
                            height: orb.size,
                            borderRadius: '50%',
                            background: orb.color,
                            filter: 'blur(80px)',
                            opacity: 0.35,
                            top: orb.top,
                            left: orb.left,
                            right: orb.right,
                            bottom: orb.bottom,
                        }}
                    />
                ))}
            </div>

        </>
    )
}