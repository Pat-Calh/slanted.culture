export default function Contact() {
  return (
    <section className="py-12 max-w-xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8 uppercase">Contact</h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfxGGQFb91KgK1LvV_dy5Qy74ncxLqwcm6sg3esISkiTXmydw/viewform?embedded=true"
        width="100%"
        height="700"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Contact Form"
        style={{ background: "white", borderRadius: "8px", border: "1px solid #ccc" }}
      >
        Loading…
      </iframe>
    </section>
  );
}
