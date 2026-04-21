import rawHtml from '../../raw/section-1.html?raw';

export default function ServicesGridSection() {
  return (
    <div
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: rawHtml }}
    />
  );
}
