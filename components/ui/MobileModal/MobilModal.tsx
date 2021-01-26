import Close from '@components/icons/Close'
import React from 'react'
import { Button } from '../Button'

type Props = {
  children: React.ReactNode
  onClick: () => void
}

const MobileModal = ({ children, onClick }: Props) => {
  return (
    <div className="fixed z-50 bottom-0 left-0 right-0 top-0 bg-black bg-opacity-30">
      <div className="fixed bottom-0 left-0 right-0 px-6 pt-8 pb-2 bg-white flex flex-col max-h-4/5">
        <div className="overflow-y-scroll py-10">{children}</div>
        <Button
          onClick={onClick}
          ariaLabel="Close modal"
          style={{ width: '100%', borderRadius: '0' }}
          className="flex justify-center py-8 border-t border-opacity-0"
        >
          <Close />
        </Button>
      </div>
    </div>
  )
}

export default MobileModal