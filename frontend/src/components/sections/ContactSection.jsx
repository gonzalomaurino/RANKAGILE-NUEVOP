import rawHtml from '../../raw/section-8.html?raw';

export default function ContactSection() {
  return (
    <div
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: rawHtml }}
    />
  );
}
