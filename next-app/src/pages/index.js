import styles from '../styles/Home.module.css';
export default function Home() {
    const callAPI = async () => {
        try {
            console.log("Requesting API over: 'https://nextj-loadb-3dm493kpmfuj-1da968a529193f97.elb.eu-west-1.amazonaws.com/'")
            const res = await fetch(`https://nextj-loadb-3dm493kpmfuj-1da968a529193f97.elb.eu-west-1.amazonaws.com/`);
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <button onClick={callAPI}>Make API call</button>
            </main>
        </div>
    );
}