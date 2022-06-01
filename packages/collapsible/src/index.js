import React, { createContext, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button, ButtonMainIcon, ButtonMain } from '@oneloop/button'
import { Box } from '@oneloop/box'

const CollapsibleContext = createContext()

export const Collapsible = ({ children, isOpen = false, ...props }) => {
  const value = React.useMemo(() => ({ isOpen }), [isOpen])

  return (
    <CollapsibleContext.Provider value={value}>
      <Box {...props}>{children}</Box>
    </CollapsibleContext.Provider>
  )
}

const useCollapsibleContext = () => {
  const context = useContext(CollapsibleContext)
  if (!context) {
    throw new Error(
      'Collapsible compound components cannot be rendered outside the Collapsible component'
    )
  }
  return context
}

const CollapsibleButton = ({ children, isMainButton = false, isSmallButtonIcon = false, isActive = false, icon, text, isExpanded = false, badgeValue, badgeVariant, ...props }) => {
  if (isMainButton) {
    return (
      <ButtonMain
        {...props}
        icon={icon}
        text={text}
        isCollapsible
        isExpanded={isExpanded}
        isActive={isActive}
        badgeValue={badgeValue}
        badgeVariant={badgeVariant}
        sx={{
          width: '100%',
          '+ .content': {
            overflow: 'hidden',
          },
        }}
      />
    )
  } else if (isSmallButtonIcon) {
    return (
      <ButtonMainIcon
        {...props}
        variant="mainButtonCollapsible"
        icon={icon}
        text={text}
        isCollapsible
        isExpanded={isExpanded}
        isActive={isActive}
        badgeValue={badgeValue}
        badgeVariant={badgeVariant}
        sx={{
          '+ .content': {
            overflow: 'hidden',
          },
        }}
      />
    )
  } else {
    return (
      <Button
        {...props}
        sx={{
          width: '100%',
          border: 'none',
          borderRadius: '0',
          padding: '10px 0',
          textAlign: 'left',
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          '+ .content': {
            overflow: 'hidden',
          },
        }}
      >
        {children}
      </Button>
    )
  }
}

const CollapsibleBody = ({ children }) => {
  const { isOpen } = useCollapsibleContext()

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          className="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { height: 'auto' },
            collapsed: { height: 0 },
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

Collapsible.Button = CollapsibleButton
Collapsible.Body = CollapsibleBody
