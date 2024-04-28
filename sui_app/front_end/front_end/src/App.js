import logo from './logo.svg';
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import './App.css';
import Flip_Coin from './CoinFlip';

// create a client connected to devnet
const client = new SuiClient({ url: getFullnodeUrl('devnet') });// create a client connected to devnet

// get coins owned by an address
await client.getCoins({
	owner: '0xcc2bd176a478baea9a0de7a24cd927661cc6e860d5bacecb9a138ef20dbab231',
});

function App() {
  return (
    <div className="App">
      <h1>Test2</h1>
      <Flip_Coin/>
    </div>
  );
}

export default App;