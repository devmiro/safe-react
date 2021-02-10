import BNBLogo from 'src/config/assets/token_bnb.svg'
import { EnvironmentSettings, ETHEREUM_NETWORK, NetworkConfig } from 'src/config/networks/network.d'

const baseConfig: EnvironmentSettings = {
  txServiceUrl: 'https://smart-binance.portonvictor.org:444/api/v1',
  safeAppsUrl: 'https://safe-apps.dev.gnosisdev.com',
  gasPriceOracle: {
    url: 'https://ethgasstation.info/json/ethgasAPI.json', // FIXME
    gasParameter: 'average',
  },
  rpcServiceUrl: 'https://bsc-dataseed.binance.org/',
  networkExplorerName: 'BscScan',
  networkExplorerUrl: 'https://bscscan.com',
  networkExplorerApiUrl: 'https://api.bscscan.com/api',
}

const bsc: NetworkConfig = {
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
      safeAppsUrl: 'https://apps.gnosis-safe.io',
    },
  },
  network: {
    id: ETHEREUM_NETWORK.BSC,
    backgroundColor: '#E8E7E6',
    textColor: '#001428',
    label: 'BSC',
    isTestNet: false,
    nativeCoin: {
      address: '0x000',
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
      logoUri: BNBLogo, // FIXME
    },
  },
}

export default bsc
