import React from 'react'

export default function PopupLayout({children}) {
    return (
        <div className="popup">
            <div className="popup__card">
                {children}
            </div>
        </div>
    )
}
