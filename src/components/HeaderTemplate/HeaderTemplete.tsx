import React from 'react'
import Link from "next/link";

const HeaderTemplate = () => {
    return (
        <>
            <div className="flex align-middle">
                <h1 className="font-bold">
                    <Link href={"/"}>Satofaction</Link>
                </h1>
                <div>
                    <ul className="flex items-center justify-between bg-amber-300">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/"}>Home</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HeaderTemplate