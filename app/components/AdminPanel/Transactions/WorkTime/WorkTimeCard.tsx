'use client';

import useMoney from '@/app/hooks/useMoney';
import useTime from '@/app/hooks/useTime';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

type props = {
  onSelectDelete: (transactionId:number)=>void ;
  onSelectEdit: (transactionId:number)=>void ;
  id:number;
  name:string;
  working:string;
  salary:string;
};

export default function WorkTimeCard({onSelectDelete, onSelectEdit ,id ,name ,working ,salary }:props) {
  const x = useMotionValue(0);

  const leftOpacity = useTransform(x, [-150, -50], [1, 0]);
  const rightOpacity = useTransform(x, [50, 150], [0, 1]);

  const usetime = useTime();
  const usemoney = useMoney();


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
        <div className="text-sm font-extrabold text-neutral-900">{name}</div>
        <div className="text-xs font-bold text-neutral-800">{usetime(working)}</div>
        <div className="text-xs font-bold text-neutral-800">{usemoney(salary)}</div>

      </motion.div>
    </div>
  )
}
