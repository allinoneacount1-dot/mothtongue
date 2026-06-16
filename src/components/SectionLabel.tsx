interface Props {
  label: string;
  className?: string;
}

export function SectionLabel({ label, className = '' }: Props) {
  return (
    <p className={`font-[family-name:var(--font-mono)] text-[10px] tracking-[0.25em] text-bone/30 uppercase ${className}`}>
      {label}
    </p>
  );
}
