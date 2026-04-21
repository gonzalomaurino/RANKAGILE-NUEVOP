import rawHtml from '../../raw/section-6.html?raw';

export default function TestimonialsSection() {
  return (
    <div
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: rawHtml }}
    />
  );
}
