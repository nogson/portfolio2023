import React, {FC} from 'react'
import HeaderTemplate from '@/components/HeaderTemplate/HeaderTemplete'
import styles from '@/styles/Layout.module.scss'

const Layout: FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <div>
            <HeaderTemplate/>
            <div className={`mt-8 ml-auto mr-auto ${styles.content}`}>
                {children}
            </div>
        </div>
    )
}

export default Layout
