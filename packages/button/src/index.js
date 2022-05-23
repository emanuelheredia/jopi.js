import React, { useState } from 'react'
import { Box } from '@oneloop/box'
import '@oneloop/fonts'

export const Button = (props) => (
  <Box sx={{ position: 'relative' }}>
    <Box
      as="button"
      tx="buttons"
      variant="primary"
      {...props}
      __css={{
        appearance: 'none',
        display: 'flex',
        lineHeight: 'inherit',
        fontFamily: 'Nunito Sans',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        px: 26,
        py: 13,
        color: 'white',
        bg: 'primary',
        border: 0,
        borderRadius: 'button',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '48px',
        whiteSpace: 'nowrap',
      }}
    />
  </Box>
)

export const ButtonIcon = ({ icon, isRounded, heightIcon, variant, ...props }) => {
  let px = 0
  let py = 0
  let paddingTopIcon = 0
  if (variant === 'collapseButtonOpen' || variant === 'collapseButtonClosed') {
    px = '8px'
    py = '4px'
    paddingTopIcon = '14px'
  }
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        as="button"
        tx="buttons"
        variant={variant}
        {...props}
        __css={{
          appearance: 'none',
          display: 'flex',
          lineHeight: 'inherit',
          fontFamily: 'Nunito Sans',
          fontWeight: 'bold',
          fontSize: '24px',
          textAlign: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          outline: 'none',
          px: px !== 0 ? px : '14px',
          py: py !== 0 ? py : '5px',
          color: 'white',
          bg: 'primary',
          border: 0,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 12,
          width: '48px',
          height: '48px',
          whiteSpace: 'nowrap',
        }}
      >
        <span className={icon} style={{ height: heightIcon || '24px', paddingTop: paddingTopIcon }}></span>
      </Box>
    </Box>
  )
}

export const ButtonRound = ({ text, icon, fontSizeIcon, heightIcon, ...props }) => (
  <Box sx={{ position: 'relative' }}>
    <Box
      as="button"
      tx="buttons"
      variant="primary"
      {...props}
      __css={{
        appearance: 'none',
        display: 'flex',
        lineHeight: 'inherit',
        fontFamily: 'Nunito Sans',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        px: 26,
        py: 13,
        color: 'white',
        bg: 'primary',
        border: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        height: '48px',
        gap: '6px',
        whiteSpace: 'nowrap',
      }}
    >
      <span className={icon} style={{ height: heightIcon || '20px', fontSize: fontSizeIcon || '20px' }}></span>
      <span> {text}</span>
    </Box>
  </Box>
)

export const ButtonMain = ({ text, icon, isCollapsible, ...props }) => {
  const [hover, setHover] = useState()
  const [active, setActive] = useState()

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        as="button"
        tx="buttons"
        variant="mainButton"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onClick={() => setActive(true)}
        onBlur={() => setActive(false)}
        {...props}
        __css={{
          appearance: 'none',
          display: 'flex',
          lineHeight: '19px',
          fontFamily: 'Nunito Sans',
          fontWeight: 'normal',
          fontSize: 14,
          textAlign: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          outline: 'none',
          px: 11,
          py: 14,
          color: 'white',
          bg: 'primary',
          border: 0,
          borderRadius: '8px',
          flexDirection: 'row',
          alignItems: 'center',
          height: '38px',
          gap: '6px',
          whiteSpace: 'nowrap',
        }}
      >
        <span className={icon} style={{ color: active || hover ? '#DF1E02' : '#707E86', fontSize: '22px', paddingTop: '4px' }}/>
        <span> {text} </span>
        { isCollapsible && <span className="icon-dropdown" style={{ color: '#A6B2BA', fontSize: '18px' }}/>}
      </Box>
    </Box>
  )
}
