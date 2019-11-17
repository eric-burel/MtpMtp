import React from 'react'
import { Components, replaceComponent } from 'meteor/vulcan:core'

const Layout = ({ children }) => (
    <div>
        <nav><Components.AccountsLoginForm /></nav>
        <div style={{
            padding: '64px'
        }}>
            {children}
        </div>

    </div>
)

replaceComponent('Layout', Layout)
