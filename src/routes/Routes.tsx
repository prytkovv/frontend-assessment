import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Spinner } from '@components/switcher/spinner/Spinner'

const Routes: React.FC = () => {
  const [loader, setLoader] = useState(false)

  return loader ? (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner />
    </div>
  ) : (
    <Switch />
  )
}

export default Routes
