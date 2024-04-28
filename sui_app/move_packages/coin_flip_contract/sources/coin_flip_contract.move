module coin_flip_contract::CoinFlip {

    use sui::event;

    public struct FlipEvent has copy, drop, store {
        outcome: bool,
        player: address,
    }

    public struct Coin has key, store {
        id: UID,
        owner: address,
        value: bool,
    }

    // Entry function to flip a coin
    public fun flip_coin(ctx: &mut TxContext, owner: address) {
        // Generate a random outcome for the coin flip
        let outcome = true; // true for heads, false for tails

        // Create a new Coin object
        let new_coin = Coin {
            id: object::new(ctx),
            owner,
            value: outcome,
        };

         event::emit(FlipEvent {
            outcome,
            player: owner,
        });

        // Transfer the new coin to the owner
        transfer::transfer(new_coin, owner);
    }
}
