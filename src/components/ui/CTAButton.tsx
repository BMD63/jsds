import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
}

export default function CTAButton({ href, children, className = '' }: CTAButtonProps) {
  return (
    <Link href={href} className={`tocalc ${className}`}>
      {children}
    </Link>
  )
}