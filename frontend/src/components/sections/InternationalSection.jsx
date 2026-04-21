import rawHtml from '../../raw/section-3.html?raw';

export default function InternationalSection() {
  return (
    <div
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: rawHtml }}
    />
  );
}
