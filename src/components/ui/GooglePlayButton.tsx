interface GooglePlayButtonProps {
  variant?: 'default' | 'primary' | 'outline' | 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showIcon?: boolean
  text?: string
  fullWidth?: boolean
  style?: React.CSSProperties
  disabled?: boolean
}

export default function GooglePlayButton({
  variant = 'default',
  size = 'md',
  className = '',
  showIcon = true,
  text = 'Get on Google Play',
  fullWidth = false,
  style,
  disabled = false
}: GooglePlayButtonProps) {
  
  const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.vicsothemes.hebrewforbeginners'
  
  // Размеры
  const sizeClasses = {
    sm: 'py-2 px-3',
    md: 'py-3 px-4', 
    lg: 'py-3 px-4'
  }
  
  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 28
  }
  
  const textSizes = {
    sm: 'small',
    md: '',
    lg: 'fs-5'
  }
  
  // Варианты стилей
  const variantClasses = {
    default: 'btn-primary',
    primary: 'btn-primary', 
    outline: 'btn-outline-primary',
    dark: 'btn-dark',
    light: 'btn-light'
  }
  
  return (
    <a
      href={disabled ? undefined : GOOGLE_PLAY_URL}
      target={disabled ? undefined : "_blank"}
      rel={disabled ? undefined : "noopener noreferrer"}
      className={`
        btn ${variantClasses[variant]} 
        fw-semibold rounded-3 
        d-flex align-items-center justify-content-center gap-2 
        ${disabled ? '' : 'hover-scale'} text-decoration-none
        ${sizeClasses[size]}
        ${textSizes[size]}
        ${fullWidth ? 'w-100' : ''}
        ${disabled ? 'disabled' : ''}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      style={style}
      onClick={disabled ? (e) => e.preventDefault() : undefined}
    >
      {showIcon && (
        <svg 
          width={iconSizes[size]} 
          height={iconSizes[size]} 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
        </svg>
      )}
      <span>{text}</span>
    </a>
  )
}

// Специальный компонент для стилизации как официальная кнопка Google Play
export function GooglePlayBadge({ 
  size = 'md',
  className = ''
}: {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  
  const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.vicsothemes.hebrewforbeginners'
  
  const sizeStyles = {
    sm: { height: '40px', fontSize: '0.7rem' },
    md: { height: '48px', fontSize: '0.8rem' },
    lg: { height: '56px', fontSize: '0.9rem' }
  }
  
  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 28
  }
  
  return (
    <a
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        btn btn-dark fw-semibold rounded-3 
        d-flex align-items-center gap-3 
        hover-scale text-decoration-none
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      style={sizeStyles[size]}
    >
      <svg 
        width={iconSizes[size]} 
        height={iconSizes[size]} 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
      </svg>
      <div className="text-start">
        <div style={{ fontSize: sizeStyles[size].fontSize, lineHeight: '1', opacity: '0.8' }}>
          GET IT ON
        </div>
        <div className="fw-bold" style={{ lineHeight: '1' }}>
          Google Play
        </div>
      </div>
    </a>
  )
}