import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-navy-950 to-navy-900">
      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Have a Hardware Project in Mind?
          </h2>
          <p className="mt-6 text-lg text-navy-400">
            Tell us what you&apos;re building. We&apos;ll help you determine the
            engineering path forward.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/place-order" size="lg">
              Place Order
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Talk to an Engineer
            </Button>
          </div>
          <p className="mt-6 text-sm text-navy-500">
            We&apos;ll respond within 1 business day.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
