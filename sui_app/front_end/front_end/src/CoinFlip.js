import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
import { TransactionBlock } from '@mysten/sui.js/transactions';

const keypair = new Ed25519Keypair();

const client = new SuiClient({
	url: getFullnodeUrl('devnet'),
});

const packageObjectId = '0x954ba6f1db355bd992dff2f9fbdf5c57eda5b0ae2e0d04ecf67109f1a7bac1e4';

const tx = new TransactionBlock();

function Flip_Coin() {

	const flipCoin = async () => {
		tx.moveCall({
			target: `${packageObjectId}::CoinFlip::flip_coin`,
			arguments: [tx.pure.string('0xf180e37778406e19cbda3e33fded0f8154e9ce3feed9023530ee98ccdcbfd83f')],
		});
		const result = await client.signAndExecuteTransactionBlock({
			signer: keypair,
			transactionBlock: tx,
		});
		console.log({ result });
	}

	return (
		<div>
		  <button onClick={flipCoin}>Flip Coin</button>
		  <p>Test P</p>
		</div>
	  );
	
}


export default Flip_Coin;