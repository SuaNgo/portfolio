import {
  About,
  Description,
  Footer,
  Header,
  Landing,
  Navbar,
  Project,
} from "@/components";

export default function Home() {
  return (
    <main className="bg-hero-pattern bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Landing />
      <About />
      <Description />
      <Navbar />
      <Project />
      <Footer />
    </main>
  );
}
