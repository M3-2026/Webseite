type Props = {
  className?: string
}

export function BrandMark({ className }: Props) {
  return (
    <span className={className ? `brand-mark ${className}` : 'brand-mark'}>
      <span className="brand-mark-m">M</span>
      <sup className="brand-mark-sup">3</sup>
    </span>
  )
}
