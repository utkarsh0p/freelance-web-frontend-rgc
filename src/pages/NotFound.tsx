import Button from "@/components/Button";
import SplitHeading from "@/components/SplitHeading";
import PageMeta from "@/components/PageMeta";

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page not found | RAI Group of Companies" />
      <section className="mx-auto flex max-w-[1200px] flex-col items-center px-5 py-32 text-center md:px-8">
        <p className="font-display text-[100px] font-extrabold leading-none text-peach">
          404
        </p>
        <SplitHeading
          as="h1"
          mode="load"
          className="mt-4 font-display text-4xl font-bold tracking-tight"
        >
          This page went missing.
        </SplitHeading>
        <p className="mt-4 max-w-md text-[16px] text-ink-soft">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Button variant="dark" to="/" className="mt-9">
          Back to home
        </Button>
      </section>
    </>
  );
}
