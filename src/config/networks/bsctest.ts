import EtherLogo from 'src/config/assets/token_eth.svg'
import { EnvironmentSettings, ETHEREUM_NETWORK, NetworkConfig } from 'src/config/networks/network.d'

const baseConfig: EnvironmentSettings = {
  txServiceUrl: 'https://localhost:3000/api/v1',
  safeAppsUrl: 'https://safe-apps.dev.gnosisdev.com',
  gasPriceOracle: {
    url: 'https://ethgasstation.info/json/ethgasAPI.json',
    gasParameter: 'average',
  },
  rpcServiceUrl: 'https://localhost:8545/',
  networkExplorerName: 'Binance (BNB) Blockchain Explorer',
  networkExplorerUrl: 'https://testnet.bscscan.com',
  networkExplorerApiUrl: 'https://api.bscscan.com/api',
}

const bsctest: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
    },
    staging: {
      ...baseConfig,
      safeAppsUrl: 'https://safe-apps.staging.gnosisdev.com',
    },
    production: {
      ...baseConfig,
      txServiceUrl: 'https://localhost:8000/api/v1',
      safeAppsUrl: 'https://apps.gnosis-safe.io',
    },
  },
  network: {
    id: ETHEREUM_NETWORK.BSCTEST,
    backgroundColor: '#E8673C',
    textColor: '#ffffff',
    label: 'BSC Testnet',
    isTestNet: true,
    nativeCoin: {
      address: '0x000',
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
      logoUri: EtherLogo, // TODO
    },
  },
}

export default bsctest
