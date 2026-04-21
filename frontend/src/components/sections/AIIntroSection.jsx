import rawHtml from '../../raw/section-4.html?raw';

export default function AIIntroSection() {
  return (
    <div
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: rawHtml }}
    />
  );
}
