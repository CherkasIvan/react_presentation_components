import {ExternalLink, InternalLink} from 'components/NavigationLink/NavigationLinkStyles'

function NavigationLink({
                          children,
                          externalLink = false,
                          openInNewTab = false,
                          onClick,
                          href,
                        }) {
  return externalLink ? (
      <ExternalLink
        // eslint-disable-next-line
        href={href || 'javascript:void(0)'}
        onCLick={onClick}
        role='link'
        target={openInNewTab ? '_blank' : '_self'}>
        {children}
      </ExternalLink>
    ) :
    (
      <InternalLink
        exact
        onClick={onClick}
        role='link'
        target={openInNewTab ? '_blank' : '_self'}
        to={href}
      >
        {children}
      </InternalLink>
    )
}

export default NavigationLink