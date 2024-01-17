import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function about() {
  return (
    <>
      <Header />
      <section>
        <h2 className="flex align-middle justify-center text-white font-extrabold">
          About Page
        </h2>
        <div className="buttons">
          <button className="bg-blue-500 text-white font-extrabold">
            Learn
          </button>
          <Button />
        </div>
      </section>
      <Footer />
    </>
  );
}
