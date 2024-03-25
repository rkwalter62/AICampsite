import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

interface CustomLinkProps {
  href: string
  target?: string
  className?: string
  legacyBehavior?: boolean
  onClick?: () => void
}

const CustomLink: FC<PropsWithChildren<CustomLinkProps>> = ({
  href,
  children,
  className = '',
  target = '_self',
  onClick = () => { }
}) => {
  const isInternal = !String(href).includes('http')

  return isInternal ? (
    <Link className={className} to={href} onClick={onClick} >
      {children}
    </Link>
  ) : (<a className={className} href={href} target={target} rel={target === '_blank' ? 'noreferrer noopener' : ''}>{children}</a >)
}

export default CustomLink
