import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <h2 className="flex align-middle justify-center text-white font-extrabold">
          Hello World
        </h2>
        <div className="buttons">
          <Button />
          <button className="bg-green-500 text-white font-extrabold">
            Learn
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
