import WalletComponent from "@/components/Wallet";
import './nfts.scss'

export default function Page({ }) {

    return (
        <main className="main">
            <div className="wrapper content">
                <h1 className="title">NFT Viewer</h1>
                <WalletComponent />
            </div>
        </main>
    );
}