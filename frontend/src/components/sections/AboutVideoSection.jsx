export default function AboutVideoSection() {
  return (
    <section className="qs-video" aria-label="Video de presentación">
      <iframe
        src="https://www.youtube.com/embed/x0ct7avdZwM"
        title="Video de Presentación RankAgile"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </section>
  );
}
