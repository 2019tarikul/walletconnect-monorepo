/* global describe it beforeEach */

import { expect } from 'chai'

import WalletConnect from '../src'

describe('// ------------------ walletconnect ------------------ //', () => {
  let config = {
    bridgeUrl: 'https://bridge.walletconnect.org',
    dappName: 'ExampleDapp'
  }

  let webConnector = null

  let session = null

  beforeEach(async() => {
    webConnector = new WalletConnect(config)
    session = await webConnector.createSession()
  })

  it('createSession success', () => {
    expect(session).to.be.ok
  })
})
