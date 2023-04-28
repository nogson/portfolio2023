import React, {FC} from 'react'
import HeaderTemplate from '@/components/HeaderTemplate/HeaderTemplete'

const Layout: FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <div>
            <HeaderTemplate/>
            {children}
        </div>
    )
}

export default Layout
