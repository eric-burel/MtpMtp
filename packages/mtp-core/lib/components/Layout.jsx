import React from 'react'
import { replaceComponent } from 'meteor/vulcan:core'

const Layout = ({ children }) => (
    <div style={{
        padding: '64px'
    }}>
        {children}
    </div>
)

replaceComponent('Layout', Layout)
