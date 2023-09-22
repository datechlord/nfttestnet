import { MediaRenderer, Web3Button, useActiveClaimCondition, useAddress, useContract, useContractMetadata } from "@thirdweb-dev/react";
import { ERC20_CONTRACT_ADDRESS } from "../const/addresses";
import styles from "../styles/Home.module.css";

export default function ERC20() {
    const address = useAddress();

    const {
        contract: ERC20Contract
    } = useContract(ERC20_CONTRACT_ADDRESS, "token");

    const {
        data: ERC20ContractMetadata,
        isLoading: ERC20ContractMetadataIsLoading
    } = useContractMetadata(ERC20Contract);


    return (
        <div className={styles.container}>
            <div className={styles.heroContainer}>
                <div>
                <h1>ERC20 Claim</h1>
                <p>Claim your an ERC1155 token. Claimable with the ERC20 token earned from staking your ERC20.</p>
                </div>
                <div className={styles.heroImageContainer}>
                {!ERC20ContractMetadataIsLoading ? (
                    <div className={styles.heroImage}>
                    <MediaRenderer
                        src={ERC20ContractMetadata?.image}
                        height="80%"
                        width="80%"
                    />
                    <p>{ERC20ContractMetadata?.name}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
                </div>
            </div>
        </div>
    );
};