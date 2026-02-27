'use client'

import useMoney from '@/app/hooks/useMoney';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

type props = {
  onSelectDelete: (transactionId:number)=>void ;
  onSelectEdit: (transactionId:number)=>void ;
  id:number;
  description:string;
  amount:string;
  date:string;
};

export default function ExpensesCard({onSelectDelete, onSelectEdit ,id ,description ,amount ,date }:props) {
  const x = useMotionValue(0);

  const leftOpacity = useTransform(x, [-150, -50], [1, 0]);
  const rightOpacity = useTransform(x, [50, 150], [0, 1]);

  const toMouny = useMoney();

  return (
    <div className="relative w-full h-16 overflow-hidden rounded-2xl">
      <motion.div
        style={{ opacity: leftOpacity }}
        className="absolute inset-0 bg-blue-500 flex items-center justify-start pr-4 text-white font-semibold"
      >
        ویرایش
      </motion.div>

      <motion.div
        style={{ opacity: rightOpacity }}
        className="absolute inset-0 bg-red-500 flex items-center justify-end pl-4 text-white font-semibold"
      >
        حذف
      </motion.div>

      {/* FOREGROUND CARD */}
      <motion.div
        drag="x"
        style={{ x }}
        dragConstraints={{ left: -160, right: 160 }}
        dragElastic={0.2}
        onDragEnd={(_,info) => {
          if(info.offset.x < -120) onSelectEdit(id);
          if(info.offset.x > 120) onSelectDelete(id);
          animate(x, 0, { type: 'spring' });
        }}
        className="relative z-10 h-full flex items-center justify-between gap-3 rounded-2xl border border-neutral-200/70 bg-linear-to-b from-white via-neutral-100 to-neutral-200 p-4 shadow-[0_12px_28px_-20px_rgba(0,0,0,0.45)] cursor-grab active:cursor-grabbing"
      >
        <div className="text-sm font-extrabold text-neutral-900">{description}</div>
        <div className="text-xs font-bold text-neutral-800">{toMouny(amount)}</div>
        <div className="text-xs font-bold text-neutral-800">{date}</div>

      </motion.div>
    </div>
  )
}
