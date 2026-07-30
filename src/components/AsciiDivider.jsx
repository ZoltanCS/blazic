export default function AsciiDivider({ className = '' }) {
  return (
    <div className={`text-concrete font-mono text-[0.55rem] tracking-widest opacity-30 select-none overflow-hidden ${className}`}>
      {'/////'.repeat(40)}
    </div>
  )
}
