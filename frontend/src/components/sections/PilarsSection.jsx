import rawHtml from '../../raw/section-5.html?raw';

export default function PilarsSection() {
  return (
    <div
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: rawHtml }}
    />
  );
}
