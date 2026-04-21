import rawHtml from '../../raw/section-2.html?raw';

export default function ClientsSection() {
  return (
    <div
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: rawHtml }}
    />
  );
}
