export default function FieldTransaction({
  label,
  matchId,
  error,
  children,
}: {
  label?: string;
  matchId?: string;
  error?: string;
  children: React.ReactNode;
}) {  
  return (
    <>
        <div className="w-11/12 mx-auto">
            <div
            className={`rounded-3xl p-2
                bg-white/5 backdrop-blur-[2px]
                border border-white/5
                shadow-[0_15px_50px_rgba(0,0,0,0.25)]
                relative overflow-hidden backdrop-saturate-150 `}
            >
                <div className={`absolute inset-0 rounded-3xl pointer-events-none
                                ${ error ? 'bg-linear-60 from-65% to-rose-500/65' : 'bg-linear-to-b from-white/20 via-white/10 to-transparent' }`} />
                <div className="absolute inset-0 rounded-3xl pointer-events-none
                                shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.1)]" />

                <div className={`relative z-10 text-right`}>
                    {children}
                    <label htmlFor={matchId} className="font-[Vazir] absolute text-sm text-neutral-700 duration-300 transform -translate-x-2 scale-75 top-2 right-1 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/5 rtl:peer-focus:left-auto">{label}</label>
                </div>
            </div>
                {error && <p className="text-[10px] font-[Vazir] text-rose-500 mt-1">{error}</p>}
        </div>
    </>
  );
}
