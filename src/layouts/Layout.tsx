import  {FC, ReactNode} from 'react'
import Header from '@/components/Header/Header'
import styles from '@/styles/Layout.module.scss'

type Props = {
    children?: ReactNode;
}

const Layout: FC<Props> = ({children}) => {
    return (
        <div>
            <Header/>
            <div className={`mt-8 ml-auto mr-auto ${styles.content}`}>
                {children}
            </div>
        </div>
    )
}

export default Layout
