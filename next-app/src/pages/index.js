import styles from "../styles/Home.module.css";
export default function Home() {
  const callAPI = async () => {
    try {
      console.log(
        "Requesting API over: 'https://backendtest.famousgadget.pt/'"
      );

      const res = await fetch(`https://backendtest.famousgadget.pt/`);
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
